function browserLanguageCheck() {
    const modal = new Vue({
        el: '#browser-language-change-modal',
        data: {
            isShow: false
        },
        methods: {
            changeLang() {
                window.location.href = 'http://en.flaps.site';
            }
        }
    })

    let lang = navigator.language || navigator.userLanguage;
    lang = lang.substr(0, 2);

    if (lang !== 'zh') {
        modal.isShow = true;
    }
}

function codeToText(code) {
    code = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/\n/g, '<br>');
    return code;
}


function isPC() {
    const userAgentInfo = navigator.userAgent,
        Agents = ["Android", "iPhone",
            "SymbianOS", "Windows Phone",
            "iPad", "iPod"
        ];

    let flag = true;
    for (let v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }

    return flag;
}
