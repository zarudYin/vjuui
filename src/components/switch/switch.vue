<template>
    <div></div>
</template>

<script>
export default {
    name: 'iSwitch',
    props: {
        value: {
            type: Boolean,
            default: false
        }
    },
    data: function() {
        return {
            currentValue: this.value
        };
    },
    methods: {},
    watch: {},
    mounted() {}
};
</script>

<style lang="scss">
@import '../var';

.vju-switch {
}
</style>
