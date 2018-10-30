<template>
    <li class="vju-submenu">
        <div class="vju-submenu-title">
            <slot name="title"></slot>
            <Icon name="moreunfold"></Icon>
        </div>
        <ul class="vju-menu">
            <slot></slot>
        </ul>
    </li>
</template>

<script>
import Icon from '../icon';

export default {
    name: 'Submenu',
    components: {
        Icon
    },
    props: {
        title: String
    }
};
</script>

<style lang="scss">
@import '../var';

.vju-submenu-title {
    padding: 14px 24px;
    position: relative;
    cursor: pointer;
    z-index: 1;
    transition: all 0.2s ease-in-out;
}
</style>
