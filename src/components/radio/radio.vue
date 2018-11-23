<template>
    <label :class="['vju-radio', {'vju-radio-active': isChecked}]">
        <span class="vju-radio-body"></span>
        <input class="vju-radio-input" type="radio" :name="groupName" :checked="isChecked" @change="handleChange"/>
        <slot><span class="vju-radio-label">{{label}}</span></slot>
    </label>
</template>

<script>
import { findComponentUpward } from '../../utils/dom.js';

export default {
    name: 'Radio',
    props: {
        value: {
            type: Boolean,
            default: false
        },
        label: String,
        name: String,
        disabled: Boolean
    },
    data: function() {
        return {
            isChecked: this.value,
            groupName: this.name
        };
    },
    methods: {
        handleChange(e) {
            let isChecked = e.target.checked;

            this.isChecked = isChecked;
            this.$emit('input', isChecked);

            if (this.isGroup) {
                this.parent.change(this.label);
            } else {
                this.$emit('on-change', isChecked);
            }
        }
    },
    watch: {
        value(val) {
            this.isChecked = val;
        }
    },
    mounted() {
        this.parent = findComponentUpward(this, 'RadioGroup');
        if (this.parent) {
            this.groupName = this.parent.name;
        }
    }
};
</script>

<style lang="scss">
@import '../var';

.vju-radio {
    position: relative;
    display: inline-block;
    margin-right: 8px;
    font-size: 12px;
    cursor: pointer;
}

.vju-radio-active {
    .vju-radio-body {
        border: 1px solid $blue;

        &::after {
            transform: scale(1);
            opacity: 1;
        }
    }
}

.vju-radio-body {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    white-space: nowrap;
    cursor: pointer;
    line-height: 1;
    width: 14px;
    height: 14px;
    border: 1px solid $border-color;
    border-radius: 7px;
    transition: all 0.2s ease-in-out;

    &::after {
        content: ' ';
        display: table;
        width: 8px;
        height: 8px;
        border-radius: 4px;
        position: relative;
        left: 2px;
        top: 2px;
        background-color: $blue;
        transition: all 0.2s ease-in-out;
        transform: scale(0);
        opacity: 0;
    }
}

.vju-radio-input {
    position: absolute;
    cursor: pointer;
    width: 14px;
    height: 14px;
    border-radius: 7px;
    opacity: 0;
    margin: 0;
    left: 0;
    z-index: 9;
}

.vju-radio-label {
    line-height: 1;
    vertical-align: middle;
}
</style>
