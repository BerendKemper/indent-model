"use strict";
class IndentModel {
    #maxSpace = "";
    #tabSize;
    #minDistance;
    /**Configure your desired indentation model and put spaces with fixed tabsizes in between strings
     * ```javascript
const tabs6 = new IndentModel({ tabSize: 6, minDistance: 4 });
const tabs30 = new IndentModel({ tabSize: 30, minDistance: 0 });
console.log(tabs30.tabify(tabs6.tabify(...itemsToLog), "some stuff that is logged"), "test");
"2020-08-06T00:00:00.000+0200        GET         /v1/path/to/endpoint          some stuff that is logged test
//----,-----,-----,-----,-----,-----,-----,-----,-----------------------------,
     * ```
     * @param {{tabSize:number minDistance:number}} options*/
    constructor(options) {
        this.#tabSize = options.tabSize ?? 4;
        this.#minDistance = options.minDistance ?? 2;
        if (Number.isInteger(this.#tabSize) === false) throw new Error("tabSize must be an integer");
        else if (Number.isInteger(this.#minDistance) === false) throw new Error("minDistance must be an integer");
        else if (this.#minDistance > this.#tabSize) throw new Error("minDistance cannot be bigger than tabSize");
        else if (this.#minDistance < 0) throw new Error("minDistance must be bigger than 0");
        this.#maxSpace = new Array(this.#minDistance + this.#tabSize - 1).join(" ");
    }
    /**Turn the data input into a tabified string.
     * @param  {...} data*/
    tabify(...data) {
        const maxSpace = this.#maxSpace;
        const lastIx = data.length - 1;
        const tabSize = this.#tabSize;
        const minDistance = this.#minDistance;
        let tabified = "";
        for (let i = 0; i < lastIx; i++) {
            let distance = tabSize - (data[i].length % tabSize);
            tabified += data[i] + maxSpace.slice(0, distance + (distance < minDistance && tabSize));
        }
        return tabified += data[lastIx];
    }
    get tabSize() {
        return this.#tabSize;
    }
    get minDistance() {
        return this.#minDistance;
    }
}
module.exports = IndentModel;