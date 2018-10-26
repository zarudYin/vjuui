import Notification from '../base/notification';

let instance = null;
let noop = function() {};

let getInstance = function() {
    if (!instance) {
        instance = Notification.newInstance();
    }

    return instance;
};

let notice = function(content = '', duration = 3, onClose = noop) {
    let ins = getInstance();

    ins.notice({
        content,
        duration,
        onClose
    });
};

export default {
    info(options) {
        this.message(options);
    },
    message(options) {
        if (typeof options === 'string') {
            options = {
                content: options
            };
        }

        notice(options.content, options.duration, options.onClose);
    }
};
