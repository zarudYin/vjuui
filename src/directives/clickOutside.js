export default {
    bind(el, binding) {
        let handler = function(e) {
            if (el.contains(e.target)) {
                return false;
            }

            if (binding.expression) {
                binding.value(e);
            }
        };

        el.__clickOutsideHandler__ = handler;
        document.addEventListener('click', handler);
    },
    inserted() {},
    update() {},
    componentUpdated() {},
    unbind(el) {
        document.removeEventListener('click', el.__clickOutsideHandler__);
    }
};
