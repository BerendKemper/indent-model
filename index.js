"use strict";
// Object.assign getter:
// cons: very slow initialize time
// pros: fastest property access time, readable only
// For logging strings dozen times a second prioritizes property access time
const preSpaces = {};
/**Configure your desired indentation model and put spaces with fixed tabsizes in between strings
 * @param {Object} options
 * @param {Number} options.tabSize
 * @param {Number} options.smallestSpace*/
function IndentModel({ tabSize = 4, smallestSpace = 2 } = {}) {
	if (this instanceof IndentModel === false)
		throw TypeError(`Class constructors cannot be invoked without 'new'`);
	if (smallestSpace > tabSize)
		throw new Error("smallestSpace cannot be bigger than tabSize");
	if (smallestSpace < 1)
		throw new Error("smallestSpace must be bigger than 0");
	const tooMuchSpace = smallestSpace + tabSize;
	let preSpace = "";
	for (let i = 1; i < smallestSpace; i++)
		preSpace += " ";
	for (let i = smallestSpace; i < tooMuchSpace; i++) {
		preSpace += " ";
		preSpaces[i] = preSpace;
	}
	Object.assign(this, {
		get tabSize() {
			return tabSize;
		},
		get smallestSpace() {
			return smallestSpace;
		}
	});
};
IndentModel.prototype = {
	tabify(...data) {
		const lastData = data.length - 1;
		const tabSize = this.tabSize;
		const smallestSpace = this.smallestSpace;
		let tabified = "";
		for (let i = 0; i < lastData; i++) {
			const dataStr = String(data[i]);
			tabified += dataStr;
			const strLen = dataStr.length;
			let spacesUntilNextTab = tabSize - strLen % tabSize;
			if (spacesUntilNextTab < smallestSpace)
				spacesUntilNextTab += tabSize;
			tabified += preSpaces[spacesUntilNextTab];
		}
		tabified += data[lastData];
		return tabified;
	}
};
module.exports = IndentModel;