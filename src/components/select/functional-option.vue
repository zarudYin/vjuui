<script>
export default {
    name: 'FunctionalOption',
    props: {
        slotOptions: Array
    },
    functional: true,
    render(h, { props, parent }) {
        return props.slotOptions;
    }
};
</script>
