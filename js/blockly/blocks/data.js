'use strict';

Blockly.Blocks['data_to_number'] = {
    init: function() {
        this.appendValueInput("VALUE")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("转换为数字");
        this.setInputsInline(true);
        this.setOutput(true, 'Number');
        this.setColour(40);
        this.setTooltip('将数据转换为数字类型。');
        this.setHelpUrl('https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number');
    }
}

Blockly.Blocks['data_to_boolean'] = {
    init: function() {
        this.appendValueInput("VALUE")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("转换为布尔");
        this.setInputsInline(true);
        this.setOutput(true, 'Boolean');
        this.setColour(40);
        this.setTooltip('将数据转换为布尔类型（真、假）。');
        this.setHelpUrl('https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean');
    }
}

Blockly.Blocks['data_typeof'] = {
    init: function() {
        this.appendValueInput("VALUE")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("获取数据的类型");
        this.setInputsInline(true);
        this.setOutput(true, 'String');
        this.setColour(40);
        this.setTooltip('获取数据的类型。');
        this.setHelpUrl('https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof');
    }
}

Blockly.Blocks['data_object_generator'] = {
    init: function() {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("生成空对象");
        this.setOutput(true, 'Object');
        this.setColour(40);
        this.setTooltip('生成数据对象。');
        this.setHelpUrl('https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object');
    }
}

Blockly.Blocks['data_object_add_member'] = {
    init: function() {
        this.appendValueInput("NAME")
            .setCheck('String')
            .appendField("将成员名称");
        this.appendValueInput("VALUE")
            .setCheck(null)
            .appendField("值为");
        this.appendValueInput("OBJ")
            .setCheck('Object')
            .appendField("添加到对象");
        this.setInputsInline(true);
        this.setColour(40);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('将数据添加对象中。');
        this.setHelpUrl('https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object');
    }
}

Blockly.Blocks['data_object_get_member'] = {
    init: function() {
        this.appendValueInput("NAME")
            .setCheck('String')
            .appendField("获取成员名称");
        this.appendValueInput("OBJ")
            .setCheck('Object')
            .appendField("在对象");
        this.appendDummyInput()
            .appendField('中的值');
        this.setInputsInline(true);
        this.setColour(40);
        this.setOutput(true, null);
        this.setTooltip('获取对象中的数据。');
        this.setHelpUrl('https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object');
    }
}

Blockly.Blocks['data_object_get_all_member'] = {
    init: function() {
        this.appendValueInput("OBJ")
            .setCheck('Object')
            .appendField("获取对象");
        this.appendDummyInput()
            .appendField('中所有的成员名称');
        this.setInputsInline(true);
        this.setColour(40);
        this.setOutput(true, 'Array');
        this.setTooltip('获取对象中所有的成员名称（返回一个列表）。');
        this.setHelpUrl('https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object');
    }
}
