<template>
    <ul class="vju-munu" :style="styles">
        <slot></slot>
    </ul>
</template>

<script>
import Icon from '../icon';

export default {
    name: 'Menu',
    components: {
        Icon
    },
    props: {
        activeName: String | Number,
        openNames: {
            type: Array,
            default() {
                return [];
            }
        },
        width: {
            type: String,
            default: '240px'
        },
        accordion: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {};
    },
    computed: {
        styles() {
            return { width: this.width };
        }
    },
    methods: {},
    mounted() {},
    watch: {}
};
</script>

<style lang="scss">
@import '../var';

.vju-munu {
    position: relative;
    display: block;
    margin: 0;
    padding: 0;
    outline: 0;
    list-style: none;
    color: $color;
    font-size: 14px;
    z-index: 900;

    ul {
        margin: 0;
        padding: 0;
        outline: 0;
        list-style: none;
    }
}
</style>
