<template>
    <span>
        <ul class="vju-caspanel-menu">
            <li class="vju-caspanel-menu-item" v-for="item in data" :key="getKey()" @click.stop="handleItemClcik(item)">
                {{item.label}}
                <Icon name="more" v-if="item.children && item.children.length" />
            </li>
        </ul><Caspanel v-if="subData && subData.length" :data="subData"></Caspanel>
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
        disabled: Boolean
        // trigger: String,
    },
    data() {
        return {
            selected: [],
            subData: []
        };
    },
    computed: {
        showArrow() {
            return this.data.children && this.data.children.length;
        }
    },
    watch: {
        data() {
            this.subData = [];
        }
    },
    methods: {
        getKey() {
            return key++;
        },
        handleItemClcik(item) {
            if (item.children && item.children.length) {
                this.subData = item.children;
            }
        }
    },
    mounted() {}
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
