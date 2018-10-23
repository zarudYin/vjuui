<template>
    <div :class="['vju-cascader', {'vju-cascader-visible': visible}]" v-clickoutside="handleClickOutside">
        <div class="vju-cascader-value" @click="handleClick">
            <input class="vju-cascader-input" readonly :placeholder="placeholder" v-model="selectedLabel" />
            <Icon name="moreunfold"></Icon>
        </div>
        <transition name="drop">
            <div class="vju-cascader-drop" v-show="visible">
                <div>
                    <Caspanel :data="data"></Caspanel>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import Icon from '../icon';
import Caspanel from './caspanel';
import clickoutside from '../../directives/clickOutside.js';

export default {
    name: 'Cascader',
    components: { Icon, Caspanel },
    directives: { clickoutside },
    props: {
        data: {
            type: Array,
            default() {
                return [];
            }
        },
        placeholder: String,
    },
    data() {
        return {
            visible: false
        };
    },
    methods: {
        handleClick() {
            this.visible = !this.visible;
        },
        handleClickOutside() {
            this.visible = false;
        }
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
    width: auto;
    max-height: 200px;
    overflow: auto;
    margin: 5px 0;
    padding: 5px 0;
    background-color: #fff;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
    z-index: 900;
    white-space: nowrap;
}
</style>
