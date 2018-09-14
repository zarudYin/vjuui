<template>
    <input
        class="vju-input"
        :value="currentValue"
        @input="handleInput"
        @change="handleChange"
    />
</template>

<script>
export default {
    name: 'Input',
    props: {
        value: {
            default: '',
            type: [String, Number]
        }
    },
    data() {
        return {
            currentValue: this.value
        };
    },
    methods: {
        handleInput(e) {
            let value = event.target.value;

            this.$emit('input', value);
            this.setCurrentValue(value);
            this.$emit('on-change', event);
        },
        handleChange(e) {
            this.$emit('on-input-change', event);
        },
        setCurrentValue(value) {
            this.currentValue = value;
        }
    },
    watch: {
        value(value) {
            this.setCurrentValue(value);
        }
    }
};
</script>

<style lang="scss">
@import '../var';

.vju-input {
    height: $input-height;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    padding: 0 8px;

    &:hover {
        border-color: $border-color-hover;
    }
    &:focus {
        box-shadow: 0 0 3px $box-shadow-color;
        outline: none;
    }
    &[disabled],
    &[readonly] {
        border-color: #bbb;
        color: #bbb;
        cursor: not-allowed;
    }
}
</style>
