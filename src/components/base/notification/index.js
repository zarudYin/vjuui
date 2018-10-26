import Vue from 'vue';
import Notification from './notification.vue';

Notification.newInstance = function() {
    const Instance = new Vue({
        render(h) {
            return h(Notification, {});
        }
    });

    const component = Instance.$mount();
    document.body.appendChild(component.$el);
    const notification = Instance.$children[0];

    return {
        component: notification,
        notice(props) {
            notification.add(props);
        },
        remove(name) {
            notification.close(name);
        },
        destroy(element) {
            notification.closeAll();
            setTimeout(function() {
                document.body.removeChild(document.getElementsByClassName(element)[0]);
            }, 500);
        }
    };
};

export default Notification;
