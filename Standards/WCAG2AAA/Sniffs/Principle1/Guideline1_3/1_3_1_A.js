/**
 * +--------------------------------------------------------------------+
 * | This HTML_CodeSniffer file is Copyright (c)                        |
 * | Squiz Pty Ltd (ABN 77 084 670 600)                                 |
 * +--------------------------------------------------------------------+
 * | IMPORTANT: Your use of this Software is subject to the terms of    |
 * | the Licence provided in the file licence.txt. If you cannot find   |
 * | this file please contact Squiz (www.squiz.com.au) so we may        |
 * | provide you a copy.                                                |
 * +--------------------------------------------------------------------+
 *
 */

HTMLCS.addSniff('WCAG2AAA', 'Principle1.Guideline1_3.1_3_1_A', {
    _labelNames: null,

    register: function()
    {
        return [
            '_top'
        ];

    },

    /**
     * Process the registered element.
     *
     * @param {DOMNode} element The element registered.
     * @param {DOMNode} top     The top element of the tested code.
     */
    process: function(element, top)
    {
        var sniff = HTMLCS.getSniff('WCAG2AAA', 'Principle1.Guideline1_3.1_3_1');

        if (element === top) {
            sniff.testHeadingOrder(top, HTMLCS.WARNING);
        }

    }
});
