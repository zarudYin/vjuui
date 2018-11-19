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

function clearTimer() {
    if (timer) {
        clearTimeout(timer);
        timer = null;
    }
}

export default {
    start() {
        let percent = 0;

        if (timer) return;

        update({ percent, visible: true, status: 'normal' });

        timer = setInterval(() => {
            percent += Math.floor(Math.random() * 3 + 5);
            if (percent > 95) {
                clearTimer();
                return;
            }
            update({ percent, visible: true, status: 'normal' });
        }, 200);
    },
    error() {
        clearTimer();
        update({ percent: 100, visible: true, status: 'error' });
        hide();
    },
    finish() {
        clearTimer();
        update({ percent: 100, visible: true, status: 'normal' });
        hide();
    },
    destroy() {
        clearTimer();
        if (Instance) {
            Instance.destroy();
            Instance = null;
        }
    }
};
