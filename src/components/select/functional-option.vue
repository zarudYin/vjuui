<script>
export default {
    name: 'FunctionalOption',
    props: {
        slotOptions: Array,
        slotUpdateHook: {
            type: Function,
            default: () => {}
        }
    },
    functional: true,
    render(h, { props, parent }) {
        if (props.slotOptions !== parent.$slots.default) props.slotUpdateHook();

        return props.slotOptions;
    }
};
</script>
