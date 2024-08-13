/**
 * Class representing a image cell (.grid__cell-item).
 */
export class Cell {
    // DOM elements
    DOM = {
        // Main element (.grid__cell-img)
        el: null
    };

    /**
     * Constructor.
     * @param {Element} DOM_el - the .grid__cell-item element.
     */
    constructor(DOM_el) {
        this.DOM.el = DOM_el;
    }
}
