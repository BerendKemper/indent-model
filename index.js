"use strict";
const preSpaces = {};
class IndentModel {
	#tabSize = 4;
	#smallestSpace = 2;
	/**
	 * Configure your desired indentation model and put spaces with fixed tabsizes in between strings
	 * @param {Object} options
	 * @param {Number} options.tabSize
	 * @param {Number} options.smallestSpace
	 **/
	constructor({ tabSize, smallestSpace } = {}) {
		if (typeof tabSize !== "number")
			throw new Error("tabSize must be a number.");
		if (typeof smallestSpace !== "number")
			throw new Error("smallestSpace must be a number.");
		if (smallestSpace > tabSize)
			throw new Error("smallestSpace cannot be bigger than tabSize.");
		if (smallestSpace < 1)
			throw new Error("smallestSpace must be bigger than 0.");
		const tooMuchSpace = smallestSpace + tabSize;
		let preSpace = "";
		for (let i = 1; i < smallestSpace; i++)
			preSpace += " ";
		for (let i = smallestSpace; i < tooMuchSpace; i++) {
			preSpace += " ";
			preSpaces[i] = preSpace;
		}
		this.#tabSize = tabSize;
		this.#smallestSpace = smallestSpace;
	};
	/**
	 * Turn the data input into a tabified string.
	 * @param  {...any} data 
	 * @returns 
	 */
	tabify(...data) {
		const lastData = data.length - 1;
		const tabSize = this.#tabSize;
		const smallestSpace = this.#smallestSpace;
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
	};
	get tabSize() {
		return this.#tabSize;
	};
	get smallestSpace() {
		return this.#smallestSpace;
	};
};
module.exports = IndentModel;