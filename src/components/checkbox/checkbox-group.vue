<template>
    <span class="vju-checkbox-group">
        <slot></slot>
    </span>
</template>

<script>
import { findComponentsDownward } from '../../utils/dom.js';

export default {
    name: 'CheckboxGroup',
    props: {
        value: {
            type: Array,
            default: function() {
                return [];
            }
        }
    },
    data: function() {
        return {
            currentValue: this.value
        };
    },
    methods: {
        change(isChecked, label) {
            if (isChecked) {
                this.currentValue.push(label);
            } else {
                this.currentValue = this.currentValue.filter(t => t !== label);
            }

            this.$emit('input', this.currentValue);
            this.$emit('on-change', this.currentValue);
        },
        updateChild() {
            let children = findComponentsDownward(this, 'Checkbox');

            children.forEach((child, index) => {
                child.isGroup = true;
                child.isChecked = this.currentValue.includes(child.label);
            });
        }
    },
    watch: {
        value(val) {
            this.currentValue = val;

            this.updateChild();
        }
    },
    mounted() {
        this.updateChild();
    }
};
</script>

<style lang="scss">
@import '../var';

.vju-checkbox-group {
}
</style>
