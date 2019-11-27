'use strict';

Blockly.JavaScript['data_to_number'] = function(block) {
    const text = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC),
        code = 'Number(' + text + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript['data_to_boolean'] = function(block) {
    const text = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC),
        code = 'Boolean(' + text + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript['data_typeof'] = function(block) {
    const text = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);

    if (text.length === 0) {
        return ['', Blockly.JavaScript.ORDER_ATOMIC]
    }

    const code = '(function(){ if(!Array.isArray(' + text + ')) { return typeof ' + text + ' } else { return "list" }})()';

    return [code, Blockly.JavaScript.ORDER_TYPEOF];
}

Blockly.JavaScript['data_isnan'] = function(block) {
    const text = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);

    if (text.length === 0) {
        return ['', Blockly.JavaScript.ORDER_ATOMIC]
    }

    const code = 'Number.isNaN(' + text + ')';

    return [code, Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript['data_object_generator'] = function(block) {
    const code = '{}';
    return [code, Blockly.JavaScript.ORDER_NEW];
}

Blockly.JavaScript['data_object_add_member'] = function(block) {
    const obj = Blockly.JavaScript.valueToCode(block, 'OBJ', Blockly.JavaScript.ORDER_ATOMIC),
        name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC),
        value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);

    if (obj.length === 0 || name.length === 0 || value.length === 0) {
        return '';
    }

    const code = '(' + obj + ')[' + name + '] = ' + value + ';';
    return code;
}

Blockly.JavaScript['data_object_get_member'] = function(block) {
    const obj = Blockly.JavaScript.valueToCode(block, 'OBJ', Blockly.JavaScript.ORDER_ATOMIC),
        name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);

    if (obj.length === 0 || name.length === 0) {
        return '';
    }

    const code = '(' + obj + ')[' + name + ']';
    return [code, Blockly.JavaScript.ORDER_MEMBER];
}

Blockly.JavaScript['data_object_get_all_member'] = function(block) {
    const obj = Blockly.JavaScript.valueToCode(block, 'OBJ', Blockly.JavaScript.ORDER_ATOMIC);

    if (obj.length === 0) {
        return '';
    }

    const code = 'Object.keys(' + obj + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript['data_date_get_now_time_number'] = function(block) {
    const code = '(new Date().getTime())';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript['data_date_get_time'] = function(block) {
    const dateNum = Blockly.JavaScript.valueToCode(block, 'NUM', Blockly.JavaScript.ORDER_ATOMIC),
        type = block.getFieldValue('TYPE');

    const code = '(new Date(' + dateNum + ').' + type + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
}
