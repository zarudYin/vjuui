<template>
    <li class="vju-menu-item">
        <slot></slot>
    </li>
</template>

<script>
export default {
    name: 'MenuItem',
    props: {
        title: String
    }
};
</script>

<style lang="scss">
@import '../var';

.vju-menu-item {
    padding: 14px 24px;
    position: relative;
    cursor: pointer;
    z-index: 1;
    transition: all 0.2s ease-in-out;

    > i {
        margin-right: 6px;
    }
}
</style>
