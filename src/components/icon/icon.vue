<template>
    <i :class="['vju-icon', `vju-icon-${name}`]"></i>
</template>

<script>
// import '../../assets/iconfont/iconfont.js';

export default {
    name: 'Icon',
    props: {
        name: {
            required: true,
            type: String
        }
    }
};
</script>

<style lang="scss">
@import '../../assets/iconfont/iconfont.css';
@import '../var';

.vju-icon {
    width: 1em;
    height: 1em;
    color: $color;
}
</style>
