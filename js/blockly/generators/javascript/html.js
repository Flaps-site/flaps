'use strict';

Blockly.HTML['html_text'] = function(block) {
    const text = block.getFieldValue('TEXT'),
        code = text;
    return code;
}

Blockly.HTML['html_p'] = function(block) {
    const text = Blockly.HTML.statementToCode(block, 'HTML'),
        attr = Blockly.HTML.statementToCode(block, 'ATTR'),
        code = '<p' + attr + '>' + text + '</p>';
    return code;
}

Blockly.HTML['html_attr'] = function(block) {
    const name = block.getFieldValue('NAME'),
        value = block.getFieldValue('VALUE');

    if (name.trim() === '') {
        return '';
    }

    if (value.trim() === '') {
        return ' ' + name;
    }

    const code = ' ' + name + '="' + value.replace(/"/g, '') + '"';

    return code;
}

Blockly.HTML['html_img'] = function(block) {
    const attr = Blockly.HTML.statementToCode(block, 'ATTR'),
        code = '<img' + attr + '>';
    return code;
}

Blockly.HTML['html_video'] = function(block) {
    const text = Blockly.HTML.statementToCode(block, 'HTML'),
        attr = Blockly.HTML.statementToCode(block, 'ATTR'),
        code = '<video' + attr + '>' + text + '</video>';
    return code;
}

Blockly.HTML['html_source'] = function(block) {
    const attr = Blockly.HTML.statementToCode(block, 'ATTR'),
        code = '<source' + attr + '>';
    return code;
}

// generate h1 - h6
for (let i = 1; i <= 6; i++) {
    Blockly.HTML['html_h' + i] = function(block) {
        const text = Blockly.HTML.statementToCode(block, 'HTML'),
            attr = Blockly.HTML.statementToCode(block, 'ATTR'),
            code = '<h' + i + attr + '>' + text + '</h' + i + '>';

        return code;
    }
}
