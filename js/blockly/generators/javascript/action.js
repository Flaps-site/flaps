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

Blockly.JavaScript['action_getStyle'] = function(block) {
    const elName = Blockly.JavaScript.valueToCode(block, 'EL_NAME', Blockly.JavaScript.ORDER_ATOMIC),
        name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC),
        sel = block.getFieldValue('SEL');

    if (elName === '' || name === '') {
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

    const code = 'document.querySelector("' + selSign + '" + ' + elName + ').style[' + name + ']';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript['action_getAttr'] = function(block) {
    const elName = Blockly.JavaScript.valueToCode(block, 'EL_NAME', Blockly.JavaScript.ORDER_ATOMIC),
        name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC),
        sel = block.getFieldValue('SEL');

    if (elName === '' || name === '') {
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

    const code = 'document.querySelector("' + selSign + '" + ' + elName + ').getAttribute(' + name + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript['action_getInner'] = function(block) {
    const elName = Blockly.JavaScript.valueToCode(block, 'EL_NAME', Blockly.JavaScript.ORDER_ATOMIC),
        sel = block.getFieldValue('SEL'),
        inner = block.getFieldValue('INNER');

    if (elName === '') {
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

    let innerAttr;
    switch (inner) {
        case 'html':
            innerAttr = 'innerHTML';
            break;
        case 'text':
            innerAttr = 'innerText';
            break;
        case 'value':
            innerAttr = inner;
            break;
    }

    const code = 'document.querySelector("' + selSign + '" + ' + elName + ').' + innerAttr;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript['action_setStyle'] = function(block) {
    const elName = Blockly.JavaScript.valueToCode(block, 'EL_NAME', Blockly.JavaScript.ORDER_ATOMIC),
        name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC),
        value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC),
        sel = block.getFieldValue('SEL');

    if (elName === '' || name === '' || value === '') {
        return '';
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

    const code = 'document.querySelector("' + selSign + '" + ' + elName + ').style[' + name + '] = ' + value + ';';
    return code;
}

Blockly.JavaScript['action_setAttr'] = function(block) {
    const elName = Blockly.JavaScript.valueToCode(block, 'EL_NAME', Blockly.JavaScript.ORDER_ATOMIC),
        name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC),
        value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC),
        sel = block.getFieldValue('SEL');

    if (elName === '' || name === '' || value === '') {
        return '';
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

    const code = 'document.querySelector("' + selSign + '" + ' + elName + ').setAttribute(' + name + ', ' + value + ');';
    return code;
}

Blockly.JavaScript['action_setInner'] = function(block) {
    const elName = Blockly.JavaScript.valueToCode(block, 'EL_NAME', Blockly.JavaScript.ORDER_ATOMIC),
        value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC),
        sel = block.getFieldValue('SEL'),
        inner = block.getFieldValue('INNER');

    if (elName === '' || value === '') {
        return '';
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

    let innerAttr;
    switch (inner) {
        case 'html':
            innerAttr = 'innerHTML';
            break;
        case 'text':
            innerAttr = 'innerText';
            break;
        case 'value':
            innerAttr = inner;
            break;
    }

    const code = 'document.querySelector("' + selSign + '" + ' + elName + ').' + innerAttr + ' = ' + value + ';';
    return code;
}
