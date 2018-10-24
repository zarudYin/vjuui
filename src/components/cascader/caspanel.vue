<template>
    <span>
        <ul class="vju-caspanel-menu">
            <li :class="['vju-caspanel-menu-item', {'vju-caspanel-menu-item-active': currentValue && currentValue === item.value }]"
                v-for="item in data"
                :key="item.value"
                @click.stop="handleItemClcik(item)">
                    {{item.label}}
                    <Icon name="more" v-if="item.children && item.children.length" />
            </li>
        </ul><Caspanel v-if="subData && subData.length" :data="subData" :value="subValue"></Caspanel>
    </span>
</template>

<script>
import Icon from '../icon';

let key = 0;

export default {
    name: 'Caspanel',
    components: { Icon },
    props: {
        data: {
            type: Array,
            default() {
                return [];
            }
        },
        value: {
            type: Array,
            default() {
                return [];
            }
        },
        disabled: Boolean
    },
    data() {
        return {
            selectedItem: undefined,
            subData: [],
            currentValue: this.value[0]
        };
    },
    computed: {
        subValue() {
            return this.value.slice(1);
        }
    },
    methods: {
        getKey() {
            return key++;
        },
        handleItemClcik(item) {
            let last = true;

            if (item.children && item.children.length) {
                this.subData = item.children;
                last = false;
            }

            this.selectedItem = item;
            this.currentValue = item.value;
            this.emitUpdate([item], last);
        },
        emitUpdate(selected, isLast) {
            this.$parent.updateSelected(selected, isLast);
        },
        updateSelected(selected, isLast) {
            this.$parent.updateSelected([this.selectedItem].concat(selected), isLast);
        }
    },
    watch: {
        data() {
            this.subData = [];
        },
        value() {
            this.currentValue = this.value[0];

            if (this.currentValue) {
                this.subData = this.data.filter(item => item.value === this.currentValue)[0].children;
            } else {
                this.subData = []
            }
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../var';

.vju-caspanel-menu {
    display: inline-block;
    min-width: 100px;
    height: 180px;
    margin: 0;
    padding: 5px 0;
    vertical-align: top;
    list-style: none;
    border-right: 1px solid $border-color;
    overflow: auto;

    &:last-child {
        border-right: 0;
    }

    .vju-caspanel-menu-item {
        position: relative;
        margin: 0;
        line-height: normal;
        padding: 7px 24px 7px 16px;
        clear: both;
        color: $color;
        font-size: 12px;
        white-space: nowrap;
        list-style: none;
        cursor: pointer;
        transition: background-color 0.2s ease-in-out;

        &:hover {
            background-color: $button-active-bg;
        }

        .vju-icon-more {
            position: absolute;
            right: 15px;
            top: 50%;
            margin-top: -6px;
            font-size: 12px;
        }

        &.vju-caspanel-menu-item-active {
            color: $blue;
            background-color: $button-active-bg;

            .vju-icon-more {
                color: $blue;
            }
        }
    }
}
</style>
