import Vue from 'vue';
import LoadingBar from './loading-bar.vue';

LoadingBar.newInstance = function(properties = {}) {
    const Instance = new Vue({
        render(h) {
            return h(LoadingBar, {
                props: properties
            });
        }
    });

    const component = Instance.$mount();
    document.body.appendChild(component.$el);
    const loadingBar = Instance.$children[0];

    return {
        component: loadingBar,
        update(props) {
            let { percent, visible } = props;

            if (percent !== undefined) {
                loadingBar.percent = percent;
            }
            if (visible !== undefined) {
                loadingBar.visible = visible;
            }
        },
        destroy(element) {
            document.body.removeChild(document.getElementsByClassName(element)[0]);
        }
    };
};

export default LoadingBar;
