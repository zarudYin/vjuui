<template>
    <transition name="fade">
        <div class="vju-loading-bar" v-show="visible">
            <div class="vju-loading-bar-inner" :style="innerStyle"></div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'LoadingBar',
    props: {
        percent: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            visible: false
        };
    },
    computed: {
        innerStyle() {
            return {
                width: this.percent + '%'
            };
        }
    },
    methods: {}
};
</script>

<style lang="scss">
@import '../var';

.vju-loading-bar {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2000;
    height: 2px;
}

.vju-loading-bar-inner {
    height: 100%;
    transition: width 0.2s linear;
    background-color: #2d8cf0;
}
</style>
