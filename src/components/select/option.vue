<template>
    <li :class="classes" @click="handleClick">
        <slot></slot>
    </li>
</template>

<script>
export default {
    name: 'Option',
    props: {
        value: [String, Number]
    },
    computed: {
        classes() {
            return {
                'vju-select-item': true,
                'vju-select-item-active': this.value === this.$parent.selectedValue
            };
        }
    },
    methods: {
        handleClick() {
            this.$parent.handleSelect({
                value: this.value,
                label: this.$el.textContent
            });
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../var';

.vju-select-item {
    margin: 0;
    padding: 10px 16px;
    color: $color;
    font-size: 12px;
    white-space: nowrap;
    list-style: none;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover {
        background-color: $button-active-bg;
    }

    &.vju-select-item-active {
        background-color: $button-active-bg;
        color: $blue;
    }
}
</style>
