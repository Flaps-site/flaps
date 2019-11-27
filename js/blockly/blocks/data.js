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

Blockly.Blocks['data_isnan'] = {
    init: function() {
        this.appendValueInput("VALUE")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("是否为 NaN");
        this.setInputsInline(true);
        this.setOutput(true, 'Boolean');
        this.setColour(40);
        this.setTooltip('判断数据是否是 NaN（Not a Number）');
        this.setHelpUrl('https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN');
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

Blockly.Blocks['data_date_get_now_time_number'] = {
    init: function() {
        this.appendDummyInput()
            .appendField('获取当前时间戳数字');
        this.setColour(80);
        this.setOutput(true, 'Number');
        this.setTooltip('获取从1970年到现在为止的时间戳数字。');
        this.setHelpUrl('https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date');
    }
}

Blockly.Blocks['data_date_get_time'] = {
    init: function() {
        this.appendValueInput("NUM")
            .setCheck('Number')
            .appendField('使用');
        this.appendDummyInput()
            .appendField('获取')
            .appendField(new Blockly.FieldDropdown([
                ["年", "getFullYear()"],
                ["月", "getMonth() + 1"],
                ["日", "getDate()"],
                ["时", "getHours()"],
                ["分", "getMinutes()"],
                ["秒", "getSeconds() + 1"],
                ["毫秒", "getMilliseconds() + 1"],
                ["星期", "getDay()"]
            ]), "TYPE");
        this.appendDummyInput()
            .appendField('信息');
        this.setInputsInline(true);
        this.setColour(80);
        this.setOutput(true, 'Number');
        this.setTooltip('使用时间戳数字获取一些时间信息（返回数字）。');
        this.setHelpUrl('https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date');
    }
}
