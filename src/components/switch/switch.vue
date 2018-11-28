<template>
    <span :class="classes" @click="handleClick">
        <span class="vju-switch-inner">
            <slot v-if="$slots.open && this.currentValue" name="open"></slot>
            <slot v-if="$slots.close && !this.currentValue" name="close"></slot>
        </span>
        <span class="vju-switch-bar"></span>
    </span>
</template>

<script>
export default {
    name: 'iSwitch',
    model: {
        prop: 'value',
        event: 'change'
    },
    props: {
        value: {
            type: Boolean,
            default: false
        }
    },
    data: function() {
        return {
            currentValue: this.value
        };
    },
    computed: {
        classes() {
            return ['vju-switch', { 'vju-switch-active': this.currentValue }];
        }
    },
    methods: {
        handleClick() {
            this.currentValue = !this.currentValue;

            this.$emit('change', this.currentValue);
            this.$emit('on-change', this.currentValue);
        }
    },
    watch: {
        value(val) {
            this.currentValue = val;
        }
    }
};
</script>

<style lang="scss">
@import '../var';

.vju-switch {
    position: relative;
    display: inline-block;
    width: 44px;
    height: 22px;
    border: 1px solid $border-color;
    background-color: $border-color;
    border-radius: 22px;
    cursor: pointer;
    vertical-align: middle;

    &.vju-switch-active {
        border: 1px solid $blue;
        background-color: $blue;

        .vju-switch-bar {
            left: 23px;
        }

        .vju-switch-inner {
            left: 7px;
        }
    }
}

.vju-switch-inner {
    position: absolute;
    color: #fff;
    font-size: 12px;
    left: 23px;
    top: 5px;
}

.vju-switch-bar {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 18px;
    height: 18px;
    border-radius: 18px;
    background-color: #fff;
    transition: all 0.2s ease-in-out;
}
</style>
