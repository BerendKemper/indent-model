"use strict";
const preSpaces = {};
class IndentModel {
    #tabSize;
    #smallestSpace;
    /**Configure your desired indentation model and put spaces with fixed tabsizes in between strings
     * @param {{tabSize:number smallestSpace:number}} options*/
    constructor(options) {
        this.#tabSize = options.tabSize ?? 4;
        this.#smallestSpace = options.smallestSpace ?? 2;
        if (Number.isInteger(this.#tabSize) === false) throw new Error("tabSize must be an integer");
        if (Number.isInteger(this.#smallestSpace) === false) throw new Error("smallestSpace must be an integer");
        if (this.#smallestSpace > this.#tabSize) throw new Error("smallestSpace cannot be bigger than tabSize");
        if (this.#smallestSpace < 1) throw new Error("smallestSpace must be bigger than 0");
        const tooMuchSpace = this.#smallestSpace + this.#tabSize;
        let preSpace = "";
        for (let i = 1; i < this.#smallestSpace; i++) preSpace += " ";
        for (let i = this.#smallestSpace; i < tooMuchSpace; i++) preSpaces[i] = preSpace += " ";
    };
    /**Turn the data input into a tabified string.
     * @param  {...} data*/
    tabify(...data) {
        const lastData = data.length - 1;
        const tabSize = this.#tabSize;
        const smallestSpace = this.#smallestSpace;
        let tabified = "";
        for (let i = 0; i < lastData; i++) {
            tabified += data[i];
            const strLen = data[i].length;
            let spacesUntilNextTab = tabSize - strLen % tabSize;
            if (spacesUntilNextTab < smallestSpace) spacesUntilNextTab += tabSize;
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