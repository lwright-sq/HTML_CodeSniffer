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

window.HTMLCS.includedSniffs['WCAG2AAA.Principle2.Guideline2_4.2_4_7'] = {
    /**
     * Determines the elements to register for processing.
     *
     * Each element of the returned array can either be an element name, or "_top"
     * which is the top element of the tested code.
     *
     * @returns {Array} The list of elements.
     */
    register: function()
    {
        return ['_top'];

    },

    /**
     * Process the registered element.
     *
     * @param {DOMNode} element The element registered.
     * @param {DOMNode} top     The top element of the tested code.
     */
    process: function(element, top)
    {
        // Fire this notice if there appears to be an input field or link on the page
        // (which will be just about anything). Links are important because they can
        // still be tabbed to.
        var inputField = top.querySelector('input, textarea, button, select, a');

        if (inputField !== null) {
            HTMLCS.addMessage(HTMLCS.NOTICE, top, 'Check that there is at least one mode of operation where the keyboard focus indicator can be visually located on user interface controls.', 'G149,G165,G195,C15,SCR31');
        }

    }
};
