<template>
    <label :class="['vju-checkbox', {'vju-checkbox-active': isChecked}]">
        <span class="vju-checkbox-body"></span>
        <input class="vju-checkbox-input" type="checkbox" v-model="isChecked" @change="handleChange"/>
        <slot><span class="vju-checkbox-label">{{label}}</span></slot>
    </label>
</template>

<script>
import { findComponentUpward } from '../../utils/dom.js';

export default {
    name: 'Checkbox',
    props: {
        value: {
            type: Boolean,
            default: false
        },
        label: String,
        disabled: Boolean
    },
    data: function() {
        return {
            isChecked: this.value
        };
    },
    methods: {
        handleChange(e) {
            this.$emit('input', this.isChecked);

            if (this.isGroup) {
                this.parent.change(this.isChecked, this.label);
            } else {
                this.$emit('on-change', this.isChecked);
            }
        }
    },
    watch: {
        value(val) {
            this.isChecked = val;
        }
    },
    mounted() {
        this.parent = findComponentUpward(this, 'CheckboxGroup');
    }
};
</script>

<style lang="scss">
@import '../var';

.vju-checkbox {
    position: relative;
    display: inline-block;
    margin-right: 8px;
    font-size: 12px;
    cursor: pointer;
}

.vju-checkbox-active {
    .vju-checkbox-body {
        border: 1px solid $blue;
        background-color: $blue;

        &::after {
            transform: rotate(45deg) scale(1);
        }
    }
}

.vju-checkbox-body {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    white-space: nowrap;
    cursor: pointer;
    line-height: 1;
    width: 14px;
    height: 14px;
    border: 1px solid $border-color;
    border-radius: 2px;
    transition: all 0.2s ease-in-out;

    &::after {
        content: ' ';
        display: table;
        width: 2px;
        height: 6px;
        transform: rotate(45deg) scale(0);
        position: relative;
        left: 4px;
        top: 1px;
        border: 2px solid #fff;
        border-left: 0;
        border-top: 0;
        transition: all 0.2s ease-in-out;
    }
}

.vju-checkbox-input {
    position: absolute;
    cursor: pointer;
    width: 14px;
    height: 14px;
    border-radius: 2px;
    opacity: 0;
    margin: 0;
    left: 0;
    z-index: 9;
}

.vju-checkbox-label {
    line-height: 1;
    vertical-align: middle;
}
</style>
