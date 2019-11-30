'use strict';

Blockly.Blocks['html_text'] = {
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

Blockly.Blocks['html_p'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("段落")
        this.appendStatementInput("ATTR")
            .setCheck(null)
            .appendField("属性");
        this.appendStatementInput("HTML")
            .setCheck(null)
            .appendField("内部");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip('段落标记');
        this.setHelpUrl('https://www.runoob.com/tags/tag-p.html');
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

Blockly.Blocks['html_img'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("图片")
        this.appendStatementInput("ATTR")
            .setCheck(null)
            .appendField("属性");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(80);
        this.setTooltip('图片标记');
        this.setHelpUrl('https://www.runoob.com/tags/tag-img.html');
    }
}

Blockly.Blocks['html_video'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("视频")
        this.appendStatementInput("ATTR")
            .setCheck(null)
            .appendField("属性");
        this.appendStatementInput("HTML")
            .setCheck(null)
            .appendField("内部");
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
        this.appendStatementInput("ATTR")
            .setCheck(null)
            .appendField("属性");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(80);
        this.setTooltip('视频资源标记');
        this.setHelpUrl('https://www.runoob.com/tags/tag-video.html');
    }
}

// generate h1 - h6
for (let i = 1; i <= 6; i++) {
    Blockly.Blocks['html_h' + i] = {
        init: function() {
            this.appendDummyInput()
                .appendField("标题" + i)
            this.appendStatementInput("ATTR")
                .setCheck(null)
                .appendField("属性");
            this.appendStatementInput("HTML")
                .setCheck(null)
                .appendField("内部");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(180);
            this.setTooltip('标题' + i);
            this.setHelpUrl('https://www.runoob.com/tags/tag-hn.html');
        }
    }
}
