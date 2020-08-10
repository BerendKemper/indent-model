"use strict";
const preSpaces = { 1: " ", 2: "  ", 3: "   ", 4: "    ", 5: "     ", 6: "      ", 7: "       ", 8: "        " };
module.exports = class IndentModel {
    constructor(options = { spaces: 4, spaced: 2 }) {
        this.spaces = options.spaces;
        this.spaced = options.spaced;
    }
    tabify(...data) {
        const spaces = this.spaces;
        const spaced = this.spaced;
        let endString = "";
        const lenData = data.length;
        for (let i = 0; i < lenData; i++) {
            const string = String(data[i]);
            endString += string;
            if (i < lenData - 1) {
                const strLen = string.length;
                const spaceBe4Next = spaces - strLen % spaces;
                const spacesToNext = spaceBe4Next < spaced ? spaces + spaceBe4Next : spaceBe4Next;
                let numSpaces = 0;
                let tries = 10;
                while (numSpaces !== spacesToNext) {
                    const addSpaces = spacesToNext > 8 ? 8 : spacesToNext;
                    endString += preSpaces[addSpaces];
                    numSpaces += addSpaces;
                    console.log(string, spacesToNext, endString);
                    if (--tries === 0) break;
                }
            }
        }
        return endString;
    }
};
