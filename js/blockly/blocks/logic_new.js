'use strict';

Blockly.Blocks['logic_interval'] = {
    init: function() {
        this.appendValueInput("NAME")
            .setCheck("String")
            .appendField("设置定时器名称");
        this.appendValueInput("TIME")
            .setCheck("Number")
            .appendField("的间隔（毫秒）为");
        this.appendStatementInput("STAT")
            .setCheck(null)
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(210);
        this.setTooltip('设置一个定时器。');
        this.setHelpUrl('https://developer.mozilla.org/zh-CN/docs/Web/API/Window/setInterval');
    }
}

Blockly.Blocks['logic_interval_clear'] = {
    init: function() {
        this.appendValueInput('NAME')
            .setCheck('String')
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField('清除定时器');
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(210);
        this.setTooltip('清除一个定时器。');
        this.setHelpUrl('https://developer.mozilla.org/zh-CN/docs/Web/API/window/clearInterval');
    }
}

Blockly.Blocks['logic_timeout'] = {
    init: function() {
        this.appendValueInput("NAME")
            .setCheck("String")
            .appendField("设置单次定时器名称");
        this.appendValueInput("TIME")
            .setCheck("Number")
            .appendField("间隔（毫秒）为");
        this.appendStatementInput("STAT")
            .setCheck(null)
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(210);
        this.setTooltip('设置一个单次定时器。');
        this.setHelpUrl('https://developer.mozilla.org/zh-CN/docs/Web/API/Window/setTimeout');
    }
}

Blockly.Blocks['logic_timeout_clear'] = {
    init: function() {
        this.appendValueInput('NAME')
            .setCheck('String')
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField('清除单次定时器');
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(210);
        this.setTooltip('清除一个单次定时器。');
        this.setHelpUrl('https://developer.mozilla.org/zh-CN/docs/Web/API/window/clearTimeout');
    }
}
