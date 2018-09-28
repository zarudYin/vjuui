<template>
    <div :class="['vju-cascader', {'vju-cascader-visible': visible}]" v-clickoutside="handleClickOutside">
        <div class="vju-cascader-value" @click="handleClick">
            <input class="vju-cascader-input" readonly :placeholder="placeholder" v-model="selectedLabel" />
            <Icon name="moreunfold"></Icon>
        </div>
        <transition name="drop">
            <div class="vju-cascader-drop" v-show="visible">
                <ul>
                    <slot></slot>
                </ul>
            </div>
        </transition>
    </div>
</template>

<script>
import Icon from '../icon';
import clickoutside from '../../directives/clickOutside.js';

export default {
    name: 'Cascader',
    components: { Icon },
    directives: { clickoutside },
    props: {
        value: [String, Number],
        label: [String, Number],
        placeholder: String,
        data: Array
    },
    data() {
        return {
            selectedValue: this.value,
            selectedLabel: this.label,
            visible: false
        };
    },
    methods: {
        handleClick() {
            this.visible = !this.visible;
        },
        handleSelect(option, isEmit = true) {
            let { value, label } = option;

            this.selectedValue = value;
            this.selectedLabel = label;
            this.visible = false;

            isEmit && this.$emit('on-select', option);
        },
        handleClickOutside() {
            this.visible = false;
        }
    },
    mounted() {

    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../var';

.vju-cascader {
    display: inline-block;
    position: relative;
    width: 200px;
}

.vju-cascader-visible {
    .vju-icon-moreunfold {
        transform: rotate(180deg);
    }
}

.vju-cascader-input {
    outline: 0;
    width: 100%;
    height: $input-height;
    padding: 0 24px 0 8px;
    line-height: $input-line-height;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    cursor: pointer;

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

.vju-cascader-drop {
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
}
</style>
