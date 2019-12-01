'use strict';

Blockly.HTML['html_text'] = function(block) {
    const text = block.getFieldValue('TEXT'),
        code = text;
    return code;
}

Blockly.HTML['html_p'] = function(block) {
    const text = Blockly.HTML.statementToCode(block, 'HTML'),
        attr = Blockly.HTML.valueToCode(block, 'ATTR', Blockly.HTML.ORDER_ATOMIC),
        code = '<p' + attr + '>' + text + '</p>';
    return code;
}

Blockly.HTML['html_attr_stat'] = function(block) {
    const attr = Blockly.HTML.statementToCode(block, 'ATTR');
    return [attr, Blockly.HTML.ORDER_ATOMIC];
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

Blockly.HTML['html_document'] = function(block) {
    const text = Blockly.HTML.statementToCode(block, 'HTML'),
        code = '<html>' + text + '</html>';
    return code;
}

Blockly.HTML['html_head'] = function(block) {
    const text = Blockly.HTML.statementToCode(block, 'HTML'),
        attr = Blockly.HTML.valueToCode(block, 'ATTR', Blockly.HTML.ORDER_ATOMIC),
        code = '<head' + attr + '>' + text + '</head>';
    return code;
}

Blockly.HTML['html_body'] = function(block) {
    const text = Blockly.HTML.statementToCode(block, 'HTML'),
        attr = Blockly.HTML.valueToCode(block, 'ATTR', Blockly.HTML.ORDER_ATOMIC),
        code = '<body' + attr + '>' + text + '</body>';
    return code;
}

Blockly.HTML['html_title'] = function(block) {
    const text = Blockly.HTML.statementToCode(block, 'HTML'),
        attr = Blockly.HTML.valueToCode(block, 'ATTR', Blockly.HTML.ORDER_ATOMIC),
        code = '<title' + attr + '>' + text + '</title>';
    return code;
}

Blockly.HTML['html_meta'] = function(block) {
    const attr = Blockly.HTML.valueToCode(block, 'ATTR', Blockly.HTML.ORDER_ATOMIC),
        code = '<meta' + attr + '>';
    return code;
}

Blockly.HTML['html_link'] = function(block) {
    const attr = Blockly.HTML.valueToCode(block, 'ATTR', Blockly.HTML.ORDER_ATOMIC),
        code = '<link' + attr + '>';
    return code;
}

Blockly.HTML['html_script'] = function(block) {
    const text = Blockly.HTML.statementToCode(block, 'HTML'),
        attr = Blockly.HTML.valueToCode(block, 'ATTR', Blockly.HTML.ORDER_ATOMIC),
        code = '<script' + attr + '>' + text + '</script>';
    return code;
}

Blockly.HTML['html_img'] = function(block) {
    const attr = Blockly.HTML.valueToCode(block, 'ATTR', Blockly.HTML.ORDER_ATOMIC),
        code = '<img' + attr + '>';
    return code;
}

Blockly.HTML['html_audio'] = function(block) {
    const attr = Blockly.HTML.valueToCode(block, 'ATTR', Blockly.HTML.ORDER_ATOMIC),
        code = '<audio' + attr + '></audio>';
    return code;
}

Blockly.HTML['html_video'] = function(block) {
    const text = Blockly.HTML.statementToCode(block, 'HTML'),
        attr = Blockly.HTML.valueToCode(block, 'ATTR', Blockly.HTML.ORDER_ATOMIC),
        code = '<video' + attr + '>' + text + '</video>';
    return code;
}

Blockly.HTML['html_source'] = function(block) {
    const attr = Blockly.HTML.valueToCode(block, 'ATTR', Blockly.HTML.ORDER_ATOMIC),
        code = '<source' + attr + '>';
    return code;
}

Blockly.HTML['html_style'] = function(block) {
    const style = Blockly.HTML.statementToCode(block, 'STYLE'),
        attr = Blockly.HTML.valueToCode(block, 'ATTR', Blockly.HTML.ORDER_ATOMIC),
        code = '<style' + attr + '>' + style + '</style>';
    return code;
}

Blockly.HTML['html_style_sel'] = function(block) {
    const style = Blockly.HTML.statementToCode(block, 'STYLE'),
        name = block.getFieldValue('NAME'),
        sel = block.getFieldValue('SEL'),
        code = sel + name + ' {' + style + '}';
    return code;
}

Blockly.HTML['html_data_ol'] = function(block) {
    const text = Blockly.HTML.statementToCode(block, 'HTML'),
        attr = Blockly.HTML.valueToCode(block, 'ATTR', Blockly.HTML.ORDER_ATOMIC),
        code = '<ol' + attr + '>' + text + '</ol>';
    return code;
}

Blockly.HTML['html_data_ul'] = function(block) {
    const text = Blockly.HTML.statementToCode(block, 'HTML'),
        attr = Blockly.HTML.valueToCode(block, 'ATTR', Blockly.HTML.ORDER_ATOMIC),
        code = '<ul' + attr + '>' + text + '</ul>';
    return code;
}

Blockly.HTML['html_data_list_item'] = function(block) {
    const text = Blockly.HTML.statementToCode(block, 'HTML'),
        attr = Blockly.HTML.valueToCode(block, 'ATTR', Blockly.HTML.ORDER_ATOMIC),
        code = '<li' + attr + '>' + text + '</li>';
    return code;
}

Blockly.HTML['html_style_item'] = function(block) {
    const name = block.getFieldValue('NAME'),
        value = block.getFieldValue('VALUE');

    if (name.trim() === '') {
        return '';
    }

    if (value.trim() === '') {
        return ' ' + name;
    }

    const code = name + ': ' + value + ';';

    return code;
}

Blockly.HTML['html_data_table'] = function(block) {
    const text = Blockly.HTML.statementToCode(block, 'HTML'),
        attr = Blockly.HTML.valueToCode(block, 'ATTR', Blockly.HTML.ORDER_ATOMIC),
        code = '<table' + attr + '>' + text + '</table>';
    return code;
}

Blockly.HTML['html_data_table_title'] = function(block) {
    const text = Blockly.HTML.statementToCode(block, 'HTML'),
        attr = Blockly.HTML.valueToCode(block, 'ATTR', Blockly.HTML.ORDER_ATOMIC),
        code = '<caption' + attr + '>' + text + '</caption>';
    return code;
}

Blockly.HTML['html_data_table_thead'] = function(block) {
    const text = Blockly.HTML.statementToCode(block, 'HTML'),
        attr = Blockly.HTML.valueToCode(block, 'ATTR', Blockly.HTML.ORDER_ATOMIC),
        code = '<thead' + attr + '>' + text + '</thead>';
    return code;
}

Blockly.HTML['html_data_table_tbody'] = function(block) {
    const text = Blockly.HTML.statementToCode(block, 'HTML'),
        attr = Blockly.HTML.valueToCode(block, 'ATTR', Blockly.HTML.ORDER_ATOMIC),
        code = '<tbody' + attr + '>' + text + '</tbody>';
    return code;
}

Blockly.HTML['html_data_table_th'] = function(block) {
    const text = Blockly.HTML.statementToCode(block, 'HTML'),
        attr = Blockly.HTML.valueToCode(block, 'ATTR', Blockly.HTML.ORDER_ATOMIC),
        code = '<th' + attr + '>' + text + '</th>';
    return code;
}

Blockly.HTML['html_data_table_tr'] = function(block) {
    const text = Blockly.HTML.statementToCode(block, 'HTML'),
        attr = Blockly.HTML.valueToCode(block, 'ATTR', Blockly.HTML.ORDER_ATOMIC),
        code = '<tr' + attr + '>' + text + '</tr>';
    return code;
}

Blockly.HTML['html_data_table_td'] = function(block) {
    const text = Blockly.HTML.statementToCode(block, 'HTML'),
        attr = Blockly.HTML.valueToCode(block, 'ATTR', Blockly.HTML.ORDER_ATOMIC),
        code = '<td' + attr + '>' + text + '</td>';
    return code;
}

// generate h1 - h6
for (let i = 1; i <= 6; i++) {
    Blockly.HTML['html_h' + i] = function(block) {
        const text = Blockly.HTML.statementToCode(block, 'HTML'),
            attr = Blockly.HTML.valueToCode(block, 'ATTR', Blockly.HTML.ORDER_ATOMIC),
            code = '<h' + i + attr + '>' + text + '</h' + i + '>';

        return code;
    }
}
