<template>
    <div class="vju-swiper-item" :style="itemStyle">
        <slot></slot>
    </div>
</template>

<script>
import Icon from '../icon';

export default {
    name: 'SwiperItem',
    components: { Icon },
    props: {},
    data() {
        return {
            width: 0,
            height: 'auto'
        };
    },
    methods: {},
    computed: {
        itemStyle() {
            return {
                width: this.width + 'px',
                height: typeof this.height === 'number' ? this.height + 'px' : this.height
            };
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../var';

.vju-swiper-item {
    float: left;
}
</style>
