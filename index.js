"use strict";
const preSpaces = { 1: " ", 2: "  ", 3: "   ", 4: "    ", 5: "     ", 6: "      ", 7: "       ", 8: "        " };
module.exports = class IndentModel {
    constructor(options = { spaces: 4, spaced: 2 }) {
        this.spaces = options.spaces;
        this.spaced = options.spaced;
    }
    tabify(...data) {
        let lenData = data.length;
        let callback = typeof data[lenData - 1] === "function" ? data.pop(lenData--) : tabified => tabified;
        const spaces = this.spaces;
        const spaced = this.spaced;
        let tabified = "";
        for (let i = 0; i < lenData; i++) {
            const string = String(data[i]);
            tabified += string;
            if (i < lenData - 1) {
                const strLen = string.length;
                const spaceBe4Next = spaces - strLen % spaces;
                let spacesToNext = spaceBe4Next < spaced ? spaces + spaceBe4Next : spaceBe4Next;
                let numSpaces = 0;
                while (spacesToNext !== 0) {
                    const addSpaces = spacesToNext > 8 ? 8 : spacesToNext;
                    spacesToNext -= addSpaces;
                    tabified += preSpaces[addSpaces];
                    numSpaces += addSpaces;
                }
            }
        }
        return callback(tabified);
    }
};