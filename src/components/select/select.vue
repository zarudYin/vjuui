<template>
    <div :class="['vju-select', {'vju-select-visible': visible}]" v-clickoutside="handleClickOutside">
        <div class="vju-select-value" @click="handleClick">
            <input class="vju-select-input" ref="filterInput" :readonly="!filter" :placeholder="placeholder" v-model="selectedLabel" @input="handleInput" />
            <Icon name="moreunfold"></Icon>
        </div>
        <transition name="drop">
            <div class="vju-select-drop" v-show="visible">
                <ul>
                    <FunctionalOption v-if="!isSelectOptionsEmpty" :slot-options="selectOptions" :slot-update-hook="updateSlotOptions"></FunctionalOption>
                    <li class="vju-select-empty" v-if="isSelectOptionsEmpty">无匹配数据</li>
                </ul>
            </div>
        </transition>
    </div>
</template>

<script>
import Icon from '../icon';
import FunctionalOption from './functional-option';
import clickoutside from '../../directives/clickOutside.js';

export default {
    name: 'Select',
    components: { Icon, FunctionalOption },
    directives: { clickoutside },
    model: {
        prop: 'value',
        event: 'change'
    },
    props: {
        value: [String, Number],
        placeholder: String,
        filter: {
            type: Boolean | Function,
            default: false
        },
        autoComplete: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            selectedValue: this.value,
            selectedLabel: '',
            visible: false,
            slotOptions: this.$slots.default
        };
    },
    computed: {
        isSelectOptionsEmpty() {
            return !(this.selectOptions && this.selectOptions.length);
        },
        selectOptions() {
            let selectOptions = [];

            if (this.autoComplete) {
                return this.slotOptions;
            }

            this.slotOptions.forEach(option => {
                let cOptions = option.componentOptions;

                if (!cOptions) return;

                let optionPassesFilter = this.filter ? this.validateOption(cOptions) : option;

                if (!optionPassesFilter) return;

                selectOptions.push(option);
            });

            return selectOptions;
        }
    },
    methods: {
        handleClick() {
            this.visible = !this.visible;
        },
        handleSelect(option, isEmit = true) {
            let { value, label } = option;

            this.visible = false;
            this.selectedValue = value;
            this.tmpSelectedLabel = this.selectedLabel = label;

            if (isEmit) {
                this.$emit('on-select', option);
                this.$emit('change', value);
            }
        },
        handleClickOutside() {
            if (!this.visible) return;

            this.visible = false;
            if (this.filter) {
                this.selectedLabel = this.tmpSelectedLabel;
            }
            this.$nextTick(() => this.$refs.filterInput.focus());
        },
        validateOption({ children = [], elm }) {
            let textContent =
                (elm && elm.textContent) ||
                children.reduce((str, child) => {
                    return str + (child.elm ? child.elm.textContent : child.text);
                }, '');

            return textContent.includes(this.selectedLabel);
        },
        handleInput(event) {
            this.$emit('on-input', event);

            if (!this.visible) {
                this.visible = true;
            }
        },
        setSelectedLabel() {
            this.$children.filter(t => t.$options.name === 'Option').forEach(t => {
                if (t.value === this.selectedValue) {
                    this.tmpSelectedLabel = this.selectedLabel = t.$el.textContent;
                }
            });
        },
        updateSlotOptions() {
            this.slotOptions = this.$slots.default;
        }
    },
    mounted() {
        this.setSelectedLabel();
    },
    updated() {
        this.slotOptions = this.$slots.default;
    },
    watch: {
        value(val) {
            if (val !== this.selectedValue) {
                this.selectedValue = val;
                this.setSelectedLabel();
            }
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../var';

.vju-select {
    display: inline-block;
    position: relative;
    width: 200px;
}

.vju-select-visible {
    .vju-icon-moreunfold {
        transform: rotate(180deg);
    }
}

.vju-select-input {
    outline: 0;
    width: 100%;
    height: $input-height;
    padding: 0 24px 0 8px;
    line-height: $input-line-height;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    cursor: pointer;
    font-size: 12px;

    &:hover,
    &:focus {
        border-color: $border-color-hover;
    }

    + .vju-icon-moreunfold {
        position: absolute;
        top: 50%;
        right: 8px;
        margin-top: -8px;
        line-height: 1;
        transition: all $animationTime ease-in-out;
    }
}

.vju-select-drop {
    position: absolute;
    width: 100%;
    max-height: 200px;
    overflow: auto;
    margin: 5px 0;
    padding: 5px 0;
    background-color: #fff;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
    z-index: 900;

    > ul {
        min-width: 100%;
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .vju-select-empty {
        text-align: center;
        color: #c5c8ce;
        font-size: 12px;
        list-style: none;
    }
}
</style>
