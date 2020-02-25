class TextDrawer {
    constructor(container) {
        this.container = container || document.getElementById('slide-show');
    }
    draw(type, text, time, appendCode,callBack) {
        let el = document.createElement('div');
        if ((type || '') == '') {
            el.innerText = text;
        } else if (type == 'typing') {
            let i = 0;
            let time = setInterval(function () {
                if (i < text.length) {
                    el.append(text.charAt(i++));
                } else {
                    if (appendCode) {
                        let subEl = document.createElement('span');
                        subEl.innerHTML = appendCode;
                        el.appendChild(subEl)
                    }
                    clearInterval(time);
                }
            }, 100);
        } else if (row.type == 'opacity') {
            el.innerText = text;
            el.classList.add('opacity');
            setTimeout(() => { el.style.opacity = '1'; }, 1500);
        }

        this.container.appendChild(el);
        setTimeout(() => { this.container.removeChild(el);callBack.call() }, time);
    }
    clear() {
        this.container.innerHTML = '';
    }
};