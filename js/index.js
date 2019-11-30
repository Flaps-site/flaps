(function(window, document) {

    browserLanguageCheck();

    console.info('Flaps ©Bill Dong 2019-present.');

    let nowWorkspace = 'html';

    const blocklyArea = document.getElementById('blockly-area');

    const htmlBlocklyDiv = document.getElementById('blockly-html-div'),
        htmlWorkspace = Blockly.inject(htmlBlocklyDiv, {
            toolbox: document.getElementById('html-toolbox'),
            sounds: false,
            trashcan: false
        })


    const jsBlocklyDiv = document.getElementById('blockly-js-div'),
        jsWorkspace = Blockly.inject(jsBlocklyDiv, {
            toolbox: document.getElementById('js-toolbox'),
            sounds: false,
            trashcan: false
        })

    const onresize = function(e) {
        var element = blocklyArea;
        var x = 0;
        var y = 0;
        do {
            x += element.offsetLeft;
            y += element.offsetTop;
            element = element.offsetParent;
        } while (element);

        htmlBlocklyDiv.style.left = x + 'px';
        htmlBlocklyDiv.style.top = y + 'px';
        htmlBlocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
        htmlBlocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
        Blockly.svgResize(htmlWorkspace);

        jsBlocklyDiv.style.left = x + 'px';
        jsBlocklyDiv.style.top = y + 'px';
        jsBlocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
        jsBlocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
        Blockly.svgResize(jsWorkspace);
    }

    window.addEventListener('resize', onresize, false);
    onresize();
    Blockly.svgResize(htmlWorkspace);

    window.onbeforeunload = function(event) {
        return '你确定要关闭窗口吗？系统将不会保存你的工作！';
    }

    window.liveAreaVue = new Vue({
        el: '#live-area',
        data: {
            styles: {
                display: 'none'
            },
            liveHTML: ''
        }
    })

    new Vue({
        el: '#tools-area',
        data: {
            clearModal: false
        },
        methods: {
            importBlockXMLFile(file) {
                var reader = new FileReader();
                reader.onload = function() {
                    if (reader.result) {
                        const xml = Blockly.Xml.textToDom(reader.result);
                        if (nowWorkspace === 'js') {
                            Blockly.Xml.domToWorkspace(xml, jsWorkspace);
                        } else if (nowWorkspace === 'html') {
                            Blockly.Xml.domToWorkspace(xml, htmlWorkspace);
                        }
                    }
                }
                reader.readAsText(file);
            },
            exportBlockXMLFile() {
                let xml;

                if (nowWorkspace === 'js') {
                    xml = Blockly.Xml.workspaceToDom(jsWorkspace);
                } else if (nowWorkspace === 'html') {
                    xml = Blockly.Xml.workspaceToDom(htmlWorkspace);
                }

                const xml_text = Blockly.Xml.domToText(xml),
                    blob = new Blob([xml_text], {
                        type: "text/plain;charset=utf-8"
                    });

                saveAs(blob, nowWorkspace + '_export.flaps');
            },
            clearWorkspace() {
                this.clearModal = true;
            },
            clearModalOk() {
                try {
                    if (nowWorkspace === 'js') {
                        Blockly.Xml.clearWorkspaceAndLoadFromXml('', jsWorkspace);
                    } else if (nowWorkspace === 'html') {
                        Blockly.Xml.clearWorkspaceAndLoadFromXml('', htmlWorkspace);
                    }
                } catch (e) {}
            }
        }
    })

    new Vue({
        el: '#header-right-btnGroup',
        methods: {
            generateCode() {
                let code;

                if (nowWorkspace === 'js') {
                    code = Blockly.JavaScript.workspaceToCode(jsWorkspace);
                } else if (nowWorkspace === 'html') {
                    code = Blockly.HTML.workspaceToCode(htmlWorkspace);
                }

                if (code.trim() === '') {
                    this.$Modal.warning({
                        title: '生成代码失败',
                        content: '生成代码失败，请书写一些代码。如果已经存在代码，请检查对应代码的参数是否填写完整。'
                    });
                    return;
                }

                this.$Modal.success({
                    title: '成功生成 ' + nowWorkspace + ' 代码',
                    content: codeToText(code),
                    scrollable: true
                });
            },
            downloadGenerateCode() {
                let code;

                if (nowWorkspace === 'js') {
                    code = Blockly.JavaScript.workspaceToCode(jsWorkspace);
                } else if (nowWorkspace === 'html') {
                    code = Blockly.HTML.workspaceToCode(htmlWorkspace);
                }

                const blob = new Blob([code], {
                    type: "text/plain;charset=utf-8"
                });

                saveAs(blob, 'flaps_' + nowWorkspace + '_code.' + nowWorkspace);
            },
            generateAndRunCode() {
                const jsCode = Blockly.JavaScript.workspaceToCode(jsWorkspace),
                    htmlCode = Blockly.HTML.workspaceToCode(htmlWorkspace);

                if (jsCode.trim() === '' && htmlCode.trim() === '') {
                    this.$Modal.warning({
                        title: '生成代码失败',
                        content: '生成代码失败，请书写一些代码。如果已经存在代码，请检查对应代码的参数是否填写完整。'
                    });
                    return;
                }

                try {
                    liveAreaVue.liveHTML = htmlCode + '<script>' + jsCode + '</script>';
                } catch (e) {
                    this.$Modal.error({
                        title: '代码运行失败',
                        content: '生成代码失败，报错：' + e
                    });
                }
            },
            toggleLiveBoard() {
                if (liveAreaVue.styles.display === 'none') {
                    document.querySelector('#blockly-area').style.width = 'calc(100% - 150px - 350px)';
                    onresize();
                    liveAreaVue.styles.display = 'block';
                    return;
                }
                document.querySelector('#blockly-area').style.width = 'calc(100% - 150px)';
                onresize();
                liveAreaVue.styles.display = 'none';
            },
            toggleWorkspace() {
                if (nowWorkspace === 'html') {
                    document.querySelector("#blockly-html-div").style.display = 'none';
                    document.querySelector("#blockly-js-div").style.display = 'block';
                    document.querySelector("#html-toolbox").style.display = 'none';
                    document.querySelector("#js-toolbox").style.display = 'block';
                    Blockly.svgResize(jsWorkspace);
                    nowWorkspace = 'js';
                    return;
                }

                document.querySelector("#blockly-html-div").style.display = 'block';
                document.querySelector("#blockly-js-div").style.display = 'none';
                document.querySelector("#html-toolbox").style.display = 'block';
                document.querySelector("#js-toolbox").style.display = 'none';
                Blockly.svgResize(htmlWorkspace);
                nowWorkspace = 'html';
            }
        }
    })

})(window, document);
