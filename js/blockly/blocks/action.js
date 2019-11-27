'use strict';

Blockly.Blocks['action_alert'] = {
    init: function() {
        this.appendValueInput('VALUE')
            .setCheck(null)
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField('弹出提示');
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(180);
        this.setTooltip('在页面中弹出一个提示框。');
        this.setHelpUrl('https://developer.mozilla.org/zh-CN/docs/Web/API/Window/alert');
    }
}

Blockly.Blocks['action_prompt'] = {
    init: function() {
        this.appendValueInput('VALUE')
            .setCheck(null)
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField('弹出输入');
        this.setInputsInline(true);
        this.setOutput(true, 'String');
        this.setColour(180);
        this.setTooltip('在页面中弹出一个输入框。');
        this.setHelpUrl('https://developer.mozilla.org/zh-CN/docs/Web/API/Window/prompt');
    }
}

Blockly.Blocks['action_confirm'] = {
    init: function() {
        this.appendValueInput('VALUE')
            .setCheck(null)
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField('弹出确认');
        this.setInputsInline(true);
        this.setOutput(true, 'Boolean');
        this.setColour(180);
        this.setTooltip('在页面中弹出一个确认框。');
        this.setHelpUrl('https://developer.mozilla.org/zh-CN/docs/Web/API/Window/confirm');
    }
}

Blockly.Blocks['action_getStyle'] = {
    init: function() {
        this.appendValueInput('EL_NAME')
            .setCheck('String')
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField('获取')
            .appendField(new Blockly.FieldDropdown([
                ["id", "id"],
                ["class", "class"],
                ["元素", "el"]
            ]), "SEL")
            .appendField('为');
        this.appendValueInput('NAME')
            .setCheck('String')
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField('元素的样式');
        this.setOutput(true, "String");
        this.setInputsInline(true);
        this.setColour(180);
        this.setTooltip('获取页面元素样式。');
        this.setHelpUrl('https://developer.mozilla.org/zh-CN/docs/Web/API/Document/querySelector');
    }
}

Blockly.Blocks['action_getAttr'] = {
    init: function() {
        this.appendValueInput('EL_NAME')
            .setCheck('String')
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField('获取')
            .appendField(new Blockly.FieldDropdown([
                ["id", "id"],
                ["class", "class"],
                ["元素", "el"]
            ]), "SEL")
            .appendField('为');
        this.appendValueInput('NAME')
            .setCheck('String')
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField('元素的属性');
        this.setOutput(true, "String");
        this.setInputsInline(true);
        this.setColour(180);
        this.setTooltip('获取页面元素属性。');
        this.setHelpUrl('https://developer.mozilla.org/zh-CN/docs/Web/API/Document/querySelector');
    }
}

Blockly.Blocks['action_getInner'] = {
    init: function() {
        this.appendValueInput('EL_NAME')
            .setCheck('String')
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField('获取')
            .appendField(new Blockly.FieldDropdown([
                ["id", "id"],
                ["class", "class"],
                ["元素", "el"]
            ]), "SEL")
            .appendField('为');
        this.appendDummyInput()
            .appendField('元素的')
            .appendField(new Blockly.FieldDropdown([
                ["html", "html"],
                ["text", "text"],
                ["value", "value"]
            ]), "INNER");
        this.setOutput(true, "String");
        this.setInputsInline(true);
        this.setColour(180);
        this.setTooltip('获取页面元素属性。');
        this.setHelpUrl('https://developer.mozilla.org/zh-CN/docs/Web/API/Document/querySelector');
    }
}

Blockly.Blocks['action_setStyle'] = {
    init: function() {
        this.appendValueInput('EL_NAME')
            .setCheck('String')
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField('将')
            .appendField(new Blockly.FieldDropdown([
                ["id", "id"],
                ["class", "class"],
                ["元素", "el"]
            ]), "SEL")
            .appendField('为');
        this.appendValueInput('NAME')
            .setCheck('String')
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField('元素的');
        this.appendValueInput('VALUE')
            .setCheck('String')
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField('样式设置为');
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(180);
        this.setTooltip('设置页面元素样式。');
        this.setHelpUrl('https://developer.mozilla.org/zh-CN/docs/Web/API/Document/querySelector');
    }
}

Blockly.Blocks['action_setAttr'] = {
    init: function() {
        this.appendValueInput('EL_NAME')
            .setCheck('String')
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField('将')
            .appendField(new Blockly.FieldDropdown([
                ["id", "id"],
                ["class", "class"],
                ["元素", "el"]
            ]), "SEL")
            .appendField('为');
        this.appendValueInput('NAME')
            .setCheck('String')
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField('元素的');
        this.appendValueInput('VALUE')
            .setCheck('String')
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField('属性设置为');
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(180);
        this.setTooltip('设置页面元素属性。');
        this.setHelpUrl('https://developer.mozilla.org/zh-CN/docs/Web/API/Document/querySelector');
    }
}

Blockly.Blocks['action_setInner'] = {
    init: function() {
        this.appendValueInput('EL_NAME')
            .setCheck('String')
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField('将')
            .appendField(new Blockly.FieldDropdown([
                ["id", "id"],
                ["class", "class"],
                ["元素", "el"]
            ]), "SEL")
            .appendField('为');
        this.appendValueInput('VALUE')
            .setCheck('String')
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField('元素的')
            .appendField(new Blockly.FieldDropdown([
                ["html", "html"],
                ["text", "text"],
                ["value", "value"]
            ]), "INNER")
            .appendField('设置为');
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(180);
        this.setTooltip('设置页面元素内部。');
        this.setHelpUrl('https://developer.mozilla.org/zh-CN/docs/Web/API/Document/querySelector');
    }
}
