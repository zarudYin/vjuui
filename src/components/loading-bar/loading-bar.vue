<template>
    <transition name="fade">
        <div class="vju-loading-bar" v-show="visible">
            <div :class="innerClass" :style="innerStyle"></div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'LoadingBar',
    props: {},
    data() {
        return {
            percent: 0,
            visible: false,
            status: 'normal'
        };
    },
    computed: {
        innerStyle() {
            return {
                width: this.percent + '%'
            };
        },
        innerClass() {
            return [
                'vju-loading-bar-inner',
                {
                    'vju-loading-bar-inner-normal': this.status === 'normal',
                    'vju-loading-bar-inner-error': this.status === 'error'
                }
            ];
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
}

.vju-loading-bar-inner-normal {
    background-color: $blue;
}

.vju-loading-bar-inner-error {
    background-color: $red;
}
</style>
