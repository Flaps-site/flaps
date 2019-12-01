/**
 * javascript blocks
 */

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

Blockly.Blocks['action_get_el'] = {
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
            .appendField('的元素');
        this.setOutput(true, "Object");
        this.setInputsInline(true);
        this.setColour(180);
        this.setTooltip('获取页面元素（返回一个对象）。');
        this.setHelpUrl('https://developer.mozilla.org/zh-CN/docs/Web/API/Document/querySelector');
    }
}

Blockly.Blocks['action_get_all_el'] = {
    init: function() {
        this.appendValueInput('EL_NAME')
            .setCheck('String')
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField('获取全部')
            .appendField(new Blockly.FieldDropdown([
                ["id", "id"],
                ["class", "class"],
                ["元素", "el"]
            ]), "SEL")
            .appendField('为');
        this.appendDummyInput()
            .appendField('的元素');
        this.setOutput(true, "Array");
        this.setInputsInline(true);
        this.setColour(180);
        this.setTooltip('获取页面元素（返回一个元素列表）。');
        this.setHelpUrl('https://developer.mozilla.org/zh-CN/docs/Web/API/Document/querySelectorAll');
    }
}

Blockly.Blocks['action_get_attr'] = {
    init: function() {
        this.appendValueInput('EL')
            .setCheck('Object')
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField('获取');
        this.appendValueInput('ATTR')
            .setCheck('String')
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField('元素的');
        this.appendDummyInput()
            .appendField('属性');
        this.setOutput(true, "String");
        this.setInputsInline(true);
        this.setColour(180);
        this.setTooltip('获取页面元素的指定属性。');
        this.setHelpUrl('https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getAttribute');
    }
}

Blockly.Blocks['action_set_attr'] = {
    init: function() {
        this.appendValueInput('EL')
            .setCheck('Object')
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField('设置');
        this.appendValueInput('ATTR')
            .setCheck('String')
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField('元素的');
        this.appendValueInput('VALUE')
            .setCheck('String')
            .appendField('属性为');
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(180);
        this.setTooltip('设置页面元素的指定属性。');
        this.setHelpUrl('https://developer.mozilla.org/zh-CN/docs/Web/API/Element/setAttribute');
    }
}

Blockly.Blocks['action_get_style'] = {
    init: function() {
        this.appendValueInput('EL')
            .setCheck('Object')
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField('获取');
        this.appendValueInput('STYLE')
            .setCheck('String')
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField('元素的');
        this.appendDummyInput()
            .appendField('样式');
        this.setOutput(true, "String");
        this.setInputsInline(true);
        this.setColour(180);
        this.setTooltip('获取页面元素的指定样式。');
        this.setHelpUrl('https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/style');
    }
}

Blockly.Blocks['action_set_style'] = {
    init: function() {
        this.appendValueInput('EL')
            .setCheck('Object')
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField('设置');
        this.appendValueInput('STYLE')
            .setCheck('String')
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField('元素的');
        this.appendValueInput('VALUE')
            .setCheck('String')
            .appendField('样式为');
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(180);
        this.setTooltip('设置页面元素的指定样式。');
        this.setHelpUrl('https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/style');
    }
}

Blockly.Blocks['action_get_inner'] = {
    init: function() {
        this.appendValueInput('EL')
            .setCheck('Object')
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField('获取');
        this.appendDummyInput()
            .appendField('元素的')
            .appendField(new Blockly.FieldDropdown([
                ["HTML", "innerHTML"],
                ["文本", "innerText"],
                ["值", "value"]
            ]), "TYPE");
        this.setOutput(true, "String");
        this.setInputsInline(true);
        this.setColour(180);
        this.setTooltip('获取页面元素的内部。');
        this.setHelpUrl('https://developer.mozilla.org/zh-CN/docs/Web/API/Element/innerHTML');
    }
}

Blockly.Blocks['action_set_inner'] = {
    init: function() {
        this.appendValueInput('EL')
            .setCheck('Object')
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField('设置');
        this.appendDummyInput()
            .appendField('元素的')
            .appendField(new Blockly.FieldDropdown([
                ["HTML", "innerHTML"],
                ["文本", "innerText"],
                ["值", "value"]
            ]), "TYPE");
        this.appendValueInput('VALUE')
            .setCheck('String')
            .appendField('为');
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(180);
        this.setTooltip('设置页面元素的内部。');
        this.setHelpUrl('https://developer.mozilla.org/zh-CN/docs/Web/API/Element/innerHTML');
    }
}

Blockly.Blocks['action_set_event'] = {
    init: function() {
        this.appendValueInput('EL')
            .setCheck('Object')
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField('设置');
        this.appendDummyInput()
            .appendField('元素的')
            .appendField(new Blockly.FieldDropdown([
                ["鼠标点击", "onclick"],
                ["鼠标双击", "ondblclick"],
                ["获得焦点", "onfocus"],
                ["失去焦点", "onblur"],
                ["键盘按下", "onkeydown"],
                ["键盘点击", "onkeypress"],
                ["键盘松开", "onkeyup"],
                ["加载完成", "onload"],
                ["鼠标按下", "onmousedown"],
                ["鼠标移动", "onmousemove"],
                ["鼠标移出", "onmouseout"],
                ["鼠标移入", "onmouseover"],
                ["尺寸改变", "onresize"],
                ["文本选定", "onselect"],
                ["提交", "onsubmit"]
            ]), "TYPE");
        this.appendStatementInput("FN")
            .setCheck(null)
            .appendField('事件为');
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(180);
        this.setTooltip('设置元素的事件。');
        this.setHelpUrl('https://www.w3school.com.cn/jsref/jsref_events.asp');
    }
}

Blockly.Blocks['action_trigger_event'] = {
    init: function() {
        this.appendValueInput('EL')
            .setCheck('Object')
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField('触发');
        this.appendDummyInput()
            .appendField('元素的')
            .appendField(new Blockly.FieldDropdown([
                ["鼠标点击", "click"],
                ["获得焦点", "focus"],
                ["失去焦点", "blur"]
            ]), "TYPE");
        this.appendDummyInput()
            .appendField('事件');
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(180);
        this.setTooltip('触发元素的事件。');
        this.setHelpUrl('https://www.w3school.com.cn/jsref/jsref_events.asp');
    }
}

Blockly.Blocks['action_run_js_code'] = {
    init: function() {
        this.appendDummyInput()
            .appendField('执行 JS 代码')
            .appendField(new Blockly.FieldMultilineInput(), 'CODE')
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(180);
        this.setTooltip('直接执行 JavaScript 代码。');
    }
}
