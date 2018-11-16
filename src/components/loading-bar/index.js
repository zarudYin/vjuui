import loadingBar from './loading-bar';

let Instance = null;
let timer = null;

function getInstance() {
    if (!Instance) {
        Instance = loadingBar.newInstance();
    }

    return Instance;
}

function update(props) {
    getInstance().update(props);
}

function hide() {
    setTimeout(() => {
        getInstance().update({
            visible: false
        });
    }, 800);
}

export default {
    start() {
        let percent = 0;

        if (timer) return;

        update({
            percent,
            visible: true
        });

        timer = setInterval(() => {
            percent += Math.floor(Math.random() * 3 + 5);
            if (percent > 95) {
                clearTimer();
            }
            update({
                percent,
                visible: true
            });
        }, 200);
    },
    finish() {
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }

        update({ percent: 100 });
        hide();
    }
};
