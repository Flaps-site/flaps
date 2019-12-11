'use strict';

Blockly.Blocks['html_paragraph_text'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAn0lEQVQI1z3OMa5BURSF4f/cQhAKjUQhuQmFNwGJEUi0RKN5rU7FHKhpjEH3TEMtkdBSCY1EIv8r7nFX9e29V7EBAOvu7RPjwmWGH/VuF8CyN9/OAdvqIXYLvtRaNjx9mMTDyo+NjAN1HNcl9ZQ5oQMM3dgDUqDo1l8DzvwmtZN7mnD+PkmLa+4mhrxVA9fRowBWmVBhFy5gYEjKMfz9AylsaRRgGzvZAAAAAElFTkSuQmCC", 12, 12, {
                alt: "*",
                flipRtl: "FALSE"
            }))
            .appendField(new Blockly.FieldTextInput(""), "TEXT")
            .appendField(new Blockly.FieldImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAqUlEQVQI1z3KvUpCcRiA8ef9E4JNHhI0aFEacm1o0BsI0Slx8wa8gLauoDnoBhq7DcfWhggONDmJJgqCPA7neJ7p934EOOKOnM8Q7PDElo/4x4lFb2DmuUjcUzS3URnGib9qaPNbuXvBO3sGPHJDRG6fGVdMSeWDP2q99FQdFrz26Gu5Tq7dFMzUvbXy8KXeAj57cOklgA+u1B5AoslLtGIHQMaCVnwDnADZIFIrXsoXrgAAAABJRU5ErkJggg==", 12, 12, {
                alt: "*",
                flipRtl: "FALSE"
            }));
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip('文本');
    }
}

generateNormalBlock({
    type: 'paragraph',
    name: 'p',
    displayName: '段落',
    color: 230
})

Blockly.Blocks['html_paragraph_br'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("换行");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip('换行标记');
        this.setHelpUrl('https://www.runoob.com/tags/tag-br.html');
    }
}

Blockly.Blocks['html_attr_stat'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("属性集")
        this.appendStatementInput("ATTR")
            .setCheck(null)
            .appendField("属性");
        this.setOutput(true, 'Attribute');
        this.setColour(40);
        this.setTooltip('将单个或多个属性包裹起来');
    }
}

Blockly.Blocks['html_attr'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("属性名称")
            .appendField(new Blockly.FieldTextInput(""), "NAME")
            .appendField("值")
            .appendField(new Blockly.FieldTextInput(""), "VALUE");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(40);
        this.setTooltip('给元素添加一个属性（属性值不能包括双引号）。');
    }
}

const globalTags = [{
        name: 'head',
        displayName: '页面头部'
    },
    {
        name: 'body',
        displayName: '页面内容'
    },
    {
        name: 'title',
        displayName: '页面标题'
    },
    {
        name: 'script',
        displayName: '外部脚本'
    }
]

for (let i = 0; i < globalTags.length; i++) {
    generateNormalBlock(Object.assign({
        type: 'global',
        color: 140
    }, globalTags[i]))
}

Blockly.Blocks['html_global_document'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("HTML 文档")
        this.appendStatementInput("HTML")
            .setCheck(null)
            .appendField("内部");
        this.setColour(140);
        this.setTooltip('HTML 文档');
        this.setHelpUrl('https://www.runoob.com/tags/tag-html.html');
    }
}

Blockly.Blocks['html_global_meta'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("页面属性")
        this.appendValueInput("ATTR")
            .setCheck("Attribute")
            .appendField("属性");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(140);
        this.setTooltip('Meta 标记');
        this.setHelpUrl('https://www.runoob.com/tags/tag-meta.html');
    }
}

Blockly.Blocks['html_global_link'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("外部样式")
        this.appendValueInput("ATTR")
            .setCheck("Attribute")
            .appendField("属性");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(140);
        this.setTooltip('外部样式文件标记');
        this.setHelpUrl('https://www.runoob.com/tags/tag-link.html');
    }
}

Blockly.Blocks['html_global_run_html'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("HTML 代码")
            .appendField(new Blockly.FieldMultilineInput(""), "HTML");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(140);
        this.setTooltip('直接输入 HTML 代码。');
    }
}

Blockly.Blocks['html_a_easy'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("超链接")
            .appendField("链接地址")
            .appendField(new Blockly.FieldTextInput(""), "ATTR")
        this.appendStatementInput("HTML")
            .setCheck(null)
            .appendField("内部");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(80);
        this.setTooltip('链接标记');
        this.setHelpUrl('https://www.runoob.com/tags/tag-a.html');
    }
}

Blockly.Blocks['html_a'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("超链接")
        this.appendValueInput("ATTR")
            .setCheck("Attribute")
            .appendField("属性");
        this.appendStatementInput("HTML")
            .setCheck(null)
            .appendField("内部");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(80);
        this.setTooltip('链接标记');
        this.setHelpUrl('https://www.runoob.com/tags/tag-a.html');
    }
}

Blockly.Blocks['html_img_easy'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("图片")
            .appendField("资源地址")
            .appendField(new Blockly.FieldTextInput(""), "SRC")
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(80);
        this.setTooltip('图片标记');
        this.setHelpUrl('https://www.runoob.com/tags/tag-img.html');
    }
}

Blockly.Blocks['html_img'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("图片")
        this.appendValueInput("ATTR")
            .setCheck("Attribute")
            .appendField("属性");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(80);
        this.setTooltip('图片标记');
        this.setHelpUrl('https://www.runoob.com/tags/tag-img.html');
    }
}

Blockly.Blocks['html_audio'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("音频")
        this.appendValueInput("ATTR")
            .setCheck("Attribute")
            .appendField("属性");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(80);
        this.setTooltip('音频标记');
        this.setHelpUrl('https://www.runoob.com/tags/tag-audio.html');
    }
}

Blockly.Blocks['html_video'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("视频")
        this.appendValueInput("ATTR")
            .setCheck("Attribute")
            .appendField("属性");
        this.appendStatementInput("HTML")
            .setCheck(null)
            .appendField("内部");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(80);
        this.setTooltip('视频标记');
        this.setHelpUrl('https://www.runoob.com/tags/tag-video.html');
    }
}

Blockly.Blocks['html_source'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("视频资源")
        this.appendValueInput("ATTR")
            .setCheck("Attribute")
            .appendField("属性");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(80);
        this.setTooltip('视频资源标记');
        this.setHelpUrl('https://www.runoob.com/tags/tag-video.html');
    }
}

Blockly.Blocks['html_style'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("样式")
        this.appendValueInput("ATTR")
            .setCheck("Attribute")
            .appendField("属性");
        this.appendStatementInput("STYLE")
            .setCheck(null)
            .appendField("内部");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(340);
        this.setTooltip('样式标记');
        this.setHelpUrl('https://www.runoob.com/tags/tag-style.html');
    }
}

Blockly.Blocks['html_style_sel'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("选择器")
            .appendField(new Blockly.FieldDropdown([
                ["id", "#"],
                ["class", "."],
                ["元素", ""]
            ]), "SEL")
            .appendField("为")
            .appendField(new Blockly.FieldTextInput(""), "NAME")
        this.appendStatementInput("STYLE")
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(340);
        this.setTooltip('给样式元素添加一个选择器。');
    }
}

Blockly.Blocks['html_style_item'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("样式名称")
            .appendField(new Blockly.FieldTextInput(""), "NAME")
            .appendField("值")
            .appendField(new Blockly.FieldTextInput(""), "VALUE");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(340);
        this.setTooltip('给选择器添加一个样式。');
    }
}

Blockly.Blocks['html_style_color'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("设置")
            .appendField(new Blockly.FieldDropdown([
                ["段落", "p"],
                ["标题1", "h1"],
                ["标题2", "h2"]
            ]), "SEL")
            .appendField("的颜色为")
            .appendField(new Blockly.FieldTextInput(""), "VALUE");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(340);
        this.setTooltip('设置段落的颜色。');
    }
}

Blockly.Blocks['html_style_text_align'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("设置")
            .appendField(new Blockly.FieldDropdown([
                ["超链接", "a"],
                ["段落", "p"],
                ["标题1", "h1"],
                ["标题2", "h2"]
            ]), "SEL")
            .appendField("的文本位置为")
            .appendField(new Blockly.FieldDropdown([
                ["左", "left"],
                ["中", "center"],
                ["右", "right"]
            ]), "VALUE")
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(340);
        this.setTooltip('设置段落的颜色。');
    }
}

Blockly.Blocks['html_data_ol'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("有序列表")
        this.appendValueInput("ATTR")
            .setCheck("Attribute")
            .appendField("属性");
        this.appendStatementInput("HTML")
            .setCheck(null)
            .appendField("内部");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(300);
        this.setTooltip('有序列表标记');
        this.setHelpUrl('https://www.runoob.com/tags/tag-ol.html');
    }
}

Blockly.Blocks['html_data_ul'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("无序列表")
        this.appendValueInput("ATTR")
            .setCheck("Attribute")
            .appendField("属性");
        this.appendStatementInput("HTML")
            .setCheck(null)
            .appendField("内部");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(300);
        this.setTooltip('无序列表标记');
        this.setHelpUrl('https://www.runoob.com/tags/tag-ul.html');
    }
}

Blockly.Blocks['html_data_list_item'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("列表单元")
        this.appendValueInput("ATTR")
            .setCheck("Attribute")
            .appendField("属性");
        this.appendStatementInput("HTML")
            .setCheck(null)
            .appendField("内部");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(300);
        this.setTooltip('列表标记');
        this.setHelpUrl('https://www.runoob.com/tags/tag-li.html');
    }
}

Blockly.Blocks['html_data_table'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("表格")
        this.appendValueInput("ATTR")
            .setCheck("Attribute")
            .appendField("属性");
        this.appendStatementInput("HTML")
            .setCheck(null)
            .appendField("内部");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(300);
        this.setTooltip('表格标记');
        this.setHelpUrl('https://www.runoob.com/tags/tag-table.html');
    }
}

Blockly.Blocks['html_data_table_title'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("表格标题")
        this.appendValueInput("ATTR")
            .setCheck("Attribute")
            .appendField("属性");
        this.appendStatementInput("HTML")
            .setCheck(null)
            .appendField("内部");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(300);
        this.setTooltip('表格标题标记');
        this.setHelpUrl('https://www.runoob.com/tags/tag-caption.html');
    }
}

Blockly.Blocks['html_data_table_thead'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("表格头")
        this.appendValueInput("ATTR")
            .setCheck("Attribute")
            .appendField("属性");
        this.appendStatementInput("HTML")
            .setCheck(null)
            .appendField("内部");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(300);
        this.setTooltip('表格头标记');
        this.setHelpUrl('https://www.runoob.com/tags/tag-thead.html');
    }
}

Blockly.Blocks['html_data_table_tbody'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("表格体")
        this.appendValueInput("ATTR")
            .setCheck("Attribute")
            .appendField("属性");
        this.appendStatementInput("HTML")
            .setCheck(null)
            .appendField("内部");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(300);
        this.setTooltip('表格体标记');
        this.setHelpUrl('https://www.runoob.com/tags/tag-tbody.html');
    }
}

Blockly.Blocks['html_data_table_th'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("表头格")
        this.appendValueInput("ATTR")
            .setCheck("Attribute")
            .appendField("属性");
        this.appendStatementInput("HTML")
            .setCheck(null)
            .appendField("内部");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(300);
        this.setTooltip('表头格标记');
        this.setHelpUrl('https://www.runoob.com/tags/tag-th.html');
    }
}

Blockly.Blocks['html_data_table_tr'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("表体行")
        this.appendValueInput("ATTR")
            .setCheck("Attribute")
            .appendField("属性");
        this.appendStatementInput("HTML")
            .setCheck(null)
            .appendField("内部");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(300);
        this.setTooltip('表体行标记');
        this.setHelpUrl('https://www.runoob.com/tags/tag-tr.html');
    }
}

Blockly.Blocks['html_data_table_td'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("表体格")
        this.appendValueInput("ATTR")
            .setCheck("Attribute")
            .appendField("属性");
        this.appendStatementInput("HTML")
            .setCheck(null)
            .appendField("内部");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(300);
        this.setTooltip('表体行标记');
        this.setHelpUrl('https://www.runoob.com/tags/tag-td.html');
    }
}

Blockly.Blocks['html_form'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("表单")
        this.appendValueInput("ATTR")
            .setCheck("Attribute")
            .appendField("属性");
        this.appendStatementInput("HTML")
            .setCheck(null)
            .appendField("内部");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(270);
        this.setTooltip('表单标记');
        this.setHelpUrl('https://www.runoob.com/tags/tag-form.html');
    }
}

Blockly.Blocks['html_form_input'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("输入")
        this.appendValueInput("ATTR")
            .setCheck("Attribute")
            .appendField("属性");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(270);
        this.setTooltip('表单输入标记');
        this.setHelpUrl('https://www.runoob.com/tags/tag-input.html');
    }
}

Blockly.Blocks['html_form_select'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("选择")
        this.appendValueInput("ATTR")
            .setCheck("Attribute")
            .appendField("属性");
        this.appendStatementInput("HTML")
            .setCheck(null)
            .appendField("内部");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(270);
        this.setTooltip('选择标记');
        this.setHelpUrl('https://www.runoob.com/tags/tag-select.html');
    }
}

Blockly.Blocks['html_form_option'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("选择选项")
        this.appendValueInput("ATTR")
            .setCheck("Attribute")
            .appendField("属性");
        this.appendStatementInput("HTML")
            .setCheck(null)
            .appendField("内部");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(270);
        this.setTooltip('选择选项标记');
        this.setHelpUrl('https://www.runoob.com/tags/tag-option.html');
    }
}

Blockly.Blocks['html_form_text_area'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("输入区域")
        this.appendValueInput("ATTR")
            .setCheck("Attribute")
            .appendField("属性");
        this.appendStatementInput("HTML")
            .setCheck(null)
            .appendField("内部");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(270);
        this.setTooltip('输入区域标记');
        this.setHelpUrl('https://www.runoob.com/tags/tag-textarea.html');
    }
}

// generate h1 - h6
for (let i = 1; i <= 6; i++) {
    generateNormalBlock({
        type: 'heading',
        name: 'h' + i,
        displayName: '标题' + i,
        color: 180,
        help: 'https://www.runoob.com/tags/tag-hn.html'
    })
}

function generateNormalBlock(cfg) {
    Blockly.Blocks['html_' + cfg.type + '_' + cfg.name] = {
        init: function() {
            this.appendDummyInput()
                .appendField(cfg.displayName)
            this.appendValueInput("ATTR")
                .setCheck("Attribute")
                .appendField("属性");
            this.appendStatementInput("HTML")
                .setCheck(null)
                .appendField("内部");
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(cfg.color);
            this.setTooltip(cfg.displayName + '标记');
            if (!cfg.help) {
                cfg.help = 'https://www.runoob.com/tags/tag-' + cfg.name + '.html'
            }
            this.setHelpUrl(cfg.help);
        }
    }
}
