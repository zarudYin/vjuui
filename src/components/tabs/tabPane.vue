<template>
    <div class="vju-tabs-tabpane" v-show="show">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'TabPane',
    props: {
        label: String
    },
    data() {
        return {
            show: false
        };
    },
    methods: {
        updateNav() {
            this.$parent.updateNav();
        }
    },
    mounted() {
        this.updateNav();
    }
};
</script>

<style lang="scss">
@import '../var';

.vju-tabs-tabpane {
}
</style>
