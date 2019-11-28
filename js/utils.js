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
