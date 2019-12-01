/**
 * javascript blocks
 */

'use strict';

Blockly.JavaScript['action_alert'] = function(block) {
    // alert()
    const text = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC),
        code = 'alert(' + text + ');';
    return code;
}

Blockly.JavaScript['action_prompt'] = function(block) {
    // prompt()
    const text = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC),
        code = 'prompt(' + text + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript['action_confirm'] = function(block) {
    // prompt()
    const text = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC),
        code = 'confirm(' + text + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript['action_get_el'] = function(block) {
    const elName = Blockly.JavaScript.valueToCode(block, 'EL_NAME', Blockly.JavaScript.ORDER_ATOMIC),
        sel = block.getFieldValue('SEL');

    if (elName.trim() === '') {
        return ['', Blockly.JavaScript.ORDER_ATOMIC];
    }

    let selSign;
    switch (sel) {
        case 'id':
            selSign = '#';
            break;
        case 'class':
            selSign = '.';
            break;
        case 'el':
            selSign = '';
            break;
    }

    const code = 'document.querySelector("' + selSign + '" + ' + elName + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript['action_get_all_el'] = function(block) {
    const elName = Blockly.JavaScript.valueToCode(block, 'EL_NAME', Blockly.JavaScript.ORDER_ATOMIC),
        sel = block.getFieldValue('SEL');

    if (elName.trim() === '') {
        return ['', Blockly.JavaScript.ORDER_ATOMIC];
    }

    let selSign;
    switch (sel) {
        case 'id':
            selSign = '#';
            break;
        case 'class':
            selSign = '.';
            break;
        case 'el':
            selSign = '';
            break;
    }

    const code = '(function(){ var el = document.querySelectorAll("' + selSign + '" + ' + elName + '); var arr = []; for(var i = 0; i < el.length; i++) { arr.push(el[i]) }; return arr;})()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript['action_get_attr'] = function(block) {
    const el = Blockly.JavaScript.valueToCode(block, 'EL', Blockly.JavaScript.ORDER_ATOMIC),
        attr = Blockly.JavaScript.valueToCode(block, 'ATTR', Blockly.JavaScript.ORDER_ATOMIC);

    if (el.trim() === '' || attr.trim() === '') {
        return ['', Blockly.JavaScript.ORDER_ATOMIC];
    }

    const code = el + '.getAttribute(' + attr + ')';
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
}

Blockly.JavaScript['action_set_attr'] = function(block) {
    const el = Blockly.JavaScript.valueToCode(block, 'EL', Blockly.JavaScript.ORDER_ATOMIC),
        attr = Blockly.JavaScript.valueToCode(block, 'ATTR', Blockly.JavaScript.ORDER_ATOMIC),
        value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);

    if (el.trim() === '' || attr.trim() === '' || value.trim() === '') {
        return '';
    }

    const code = el + '.setAttribute(' + attr + ', ' + value + ');';
    return code;
}

Blockly.JavaScript['action_get_style'] = function(block) {
    const el = Blockly.JavaScript.valueToCode(block, 'EL', Blockly.JavaScript.ORDER_ATOMIC),
        style = Blockly.JavaScript.valueToCode(block, 'STYLE', Blockly.JavaScript.ORDER_ATOMIC);

    if (el.trim() === '' || style.trim() === '') {
        return ['', Blockly.JavaScript.ORDER_ATOMIC];
    }

    const code = el + '.style[' + style + ']';
    return [code, Blockly.JavaScript.ORDER_MEMBER];
}

Blockly.JavaScript['action_set_style'] = function(block) {
    const el = Blockly.JavaScript.valueToCode(block, 'EL', Blockly.JavaScript.ORDER_ATOMIC),
        style = Blockly.JavaScript.valueToCode(block, 'STYLE', Blockly.JavaScript.ORDER_ATOMIC),
        value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);

    if (el.trim() === '' || style.trim() === '' || value.trim() === '') {
        return '';
    }

    const code = el + '.style[' + style + '] = ' + value + ';';
    return code;
}

Blockly.JavaScript['action_get_inner'] = function(block) {
    const el = Blockly.JavaScript.valueToCode(block, 'EL', Blockly.JavaScript.ORDER_ATOMIC),
        type = block.getFieldValue('TYPE');

    if (el.trim() === '') {
        return ['', Blockly.JavaScript.ORDER_ATOMIC];
    }

    const code = el + '.' + type;
    return [code, Blockly.JavaScript.ORDER_MEMBER];
}

Blockly.JavaScript['action_set_inner'] = function(block) {
    const el = Blockly.JavaScript.valueToCode(block, 'EL', Blockly.JavaScript.ORDER_ATOMIC),
        type = block.getFieldValue('TYPE'),
        value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);

    if (el.trim() === '' || value.trim() === '') {
        return '';
    }

    const code = el + '.' + type + '=' + value + ';';
    return code;
}

Blockly.JavaScript['action_set_event'] = function(block) {
    const el = Blockly.JavaScript.valueToCode(block, 'EL', Blockly.JavaScript.ORDER_ATOMIC),
        type = block.getFieldValue('TYPE'),
        fn = Blockly.JavaScript.statementToCode(block, 'FN');

    if (el.trim() === '' || fn.trim() === '') {
        return '';
    }

    const code = el + '.' + type + '=function(){' + fn + '};';
    return code;
}

Blockly.JavaScript['action_trigger_event'] = function(block) {
    const el = Blockly.JavaScript.valueToCode(block, 'EL', Blockly.JavaScript.ORDER_ATOMIC),
        type = block.getFieldValue('TYPE');

    if (el.trim() === '') {
        return '';
    }

    const code = el + '.' + type + '();';
    return code;
}

Blockly.JavaScript['action_run_js_code'] = function(block) {
    const code = block.getFieldValue('CODE');
    return code;
}
