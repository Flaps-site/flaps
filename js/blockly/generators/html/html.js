'use strict';

Blockly.HTML['html_paragraph_text'] = function(block) {
    const text = block.getFieldValue('TEXT'),
        code = text;
    return code;
}

generateNormalBlockParser({
    type: 'paragraph',
    name: 'p'
})

Blockly.HTML['html_paragraph_br'] = function(block) {
    return '<br>';
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

const globalTagParsers = ['head', 'body', 'title', 'script'];
for (let i = 0; i < globalTagParsers.length; i++) {
    generateNormalBlockParser({
        type: 'global',
        name: globalTagParsers[i]
    })
}

Blockly.HTML['html_global_document'] = function(block) {
    const text = Blockly.HTML.statementToCode(block, 'HTML'),
        code = '<html>' + text + '</html>';
    return code;
}

Blockly.HTML['html_global_meta'] = function(block) {
    const attr = Blockly.HTML.valueToCode(block, 'ATTR', Blockly.HTML.ORDER_ATOMIC),
        code = '<meta' + attr + '>';
    return code;
}

Blockly.HTML['html_global_link'] = function(block) {
    const attr = Blockly.HTML.valueToCode(block, 'ATTR', Blockly.HTML.ORDER_ATOMIC),
        code = '<link' + attr + '>';
    return code;
}

Blockly.HTML['html_global_run_html'] = function(block) {
    const html = block.getFieldValue('HTML'),
        code = html;
    return code;
}

Blockly.HTML['html_a_easy'] = function(block) {
    const text = Blockly.HTML.statementToCode(block, 'HTML'),
        attr = block.getFieldValue('ATTR'),
        code = '<a href="' + attr.replace(/"/g, '') + '">' + text + '</a>';
    return code;
}

Blockly.HTML['html_a'] = function(block) {
    const text = Blockly.HTML.statementToCode(block, 'HTML'),
        attr = Blockly.HTML.valueToCode(block, 'ATTR', Blockly.HTML.ORDER_ATOMIC),
        code = '<a' + attr + '>' + text + '</a>';
    return code;
}

Blockly.HTML['html_img_easy'] = function(block) {
    const attr = block.getFieldValue('SRC'),
        code = '<img src="' + attr.replace(/"/g, '') + '">';
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
        sel = block.getFieldValue('SEL');

    if (name.trim() === '') {
        return '';
    }

    const code = sel + name + ' {' + style + '}';
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

Blockly.HTML['html_style_color'] = function(block) {
    const sel = block.getFieldValue('SEL'),
        value = block.getFieldValue('VALUE');

    if (value.trim() === '') {
        return '';
    }

    const code = sel + ' { color: ' + value + '}';

    return code;
}

Blockly.HTML['html_style_text_align'] = function(block) {
    const sel = block.getFieldValue('SEL'),
        value = block.getFieldValue('VALUE');

    const code = sel + ' { text-align: ' + value + '}';

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

Blockly.HTML['html_form'] = function(block) {
    const text = Blockly.HTML.statementToCode(block, 'HTML'),
        attr = Blockly.HTML.valueToCode(block, 'ATTR', Blockly.HTML.ORDER_ATOMIC),
        code = '<form' + attr + '>' + text + '</form>';
    return code;
}

Blockly.HTML['html_form_input'] = function(block) {
    const attr = Blockly.HTML.valueToCode(block, 'ATTR', Blockly.HTML.ORDER_ATOMIC),
        code = '<input' + attr + '>';
    return code;
}

Blockly.HTML['html_form_select'] = function(block) {
    const text = Blockly.HTML.statementToCode(block, 'HTML'),
        attr = Blockly.HTML.valueToCode(block, 'ATTR', Blockly.HTML.ORDER_ATOMIC),
        code = '<select' + attr + '>' + text + '</select>';
    return code;
}

Blockly.HTML['html_form_option'] = function(block) {
    const text = Blockly.HTML.statementToCode(block, 'HTML'),
        attr = Blockly.HTML.valueToCode(block, 'ATTR', Blockly.HTML.ORDER_ATOMIC),
        code = '<option' + attr + '>' + text + '</option>';
    return code;
}

Blockly.HTML['html_form_text_area'] = function(block) {
    const text = Blockly.HTML.statementToCode(block, 'HTML'),
        attr = Blockly.HTML.valueToCode(block, 'ATTR', Blockly.HTML.ORDER_ATOMIC),
        code = '<textarea' + attr + '>' + text + '</textarea>';
    return code;
}

// generate h1 - h6
for (let i = 1; i <= 6; i++) {
    generateNormalBlockParser({
        type: 'heading',
        name: 'h' + i
    })
}

function generateNormalBlockParser(cfg) {
    Blockly.HTML['html_' + cfg.type + '_' + cfg.name] = function(block) {
        const text = Blockly.HTML.statementToCode(block, 'HTML'),
            attr = Blockly.HTML.valueToCode(block, 'ATTR', Blockly.HTML.ORDER_ATOMIC),
            code = '<' + cfg.name + attr + '>' + text + '</' + cfg.name + '>';

        return code;
    }
}
