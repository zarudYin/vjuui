<template>
    <span class="vju-radio-group">
        <slot></slot>
    </span>
</template>

<script>
import { findComponentsDownward } from '../../utils/dom.js';

let seed = 0;
const now = Date.now();
const getUuid = () => `vjuRadioGroup_${now}_${seed++}`;

export default {
    name: 'RadioGroup',
    props: {
        value: {
            type: String | Number
        }
    },
    data: function() {
        return {
            currentValue: this.value,
            name: getUuid()
        };
    },
    methods: {
        change(label) {
            this.currentValue = label;
            this.updateChild();
            this.$emit('input', this.currentValue);
            this.$emit('on-change', this.currentValue);
        },
        updateChild() {
            let children = findComponentsDownward(this, 'Radio');

            children.forEach((child, index) => {
                child.isGroup = true;
                child.isChecked = this.currentValue === child.label;
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

.vju-radio-group {
}
</style>
