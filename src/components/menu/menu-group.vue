<template>
    <li class="vju-munu-group">
        <div class="vju-menu-group-title">{{title}}</div>
        <ul>
            <slot></slot>
        </ul>
    </li>
</template>

<script>
export default {
    name: 'MenuGroup',
    props: {
        title: String
    }
};
</script>

<style lang="scss">
@import '../var';

.vju-menu-group-title {
    height: 48px;
    line-height: 48px;
    font-size: 14px;
    padding-left: 28px;
    color: #999;
}
</style>
