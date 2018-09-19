<template>
    <div class="vju-tabs">
        <div class="vju-tabs-nav">
            <div class="vju-tabs-nav-wrap" ref="nav">
                <div class="vju-tabs-nav-bar" :style="barStyle"></div>
                <div :class="['vju-tabs-tab', {'vju-tabs-tab-active': activeIndex === index}]"
                    v-for="(list, index) in navList"
                    :key="index"
                    @click="handleChange(index)"
                >
                    <span>{{list.label}}</span>
                </div>
            </div>
        </div>
        <div class="vju-tabs-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Tabs',
    props: {},
    data() {
        return {
            navList: [],
            activeIndex: 0,
            barWidth: 0,
            barOffset: 0
        };
    },
    computed: {
        barStyle() {
            return {
                width: this.barWidth + 'px',
                left: this.barOffset + 'px'
            };
        }
    },
    methods: {
        getTabs() {
            return this.$children.filter(item => item.$options.name === 'TabPane');
        },
        updateNav() {
            this.navList = [];

            this.getTabs().forEach(pane => {
                this.navList.push({ label: pane.label });
            });

            this.updateStatus();
            this.updateBar();
        },
        updateStatus() {
            this.getTabs().forEach((pane, index) => (pane.show = index === this.activeIndex));
        },
        updateBar() {
            this.$nextTick(() => {
                let prevTabs = this.$refs.nav.querySelectorAll(`.vju-tabs-tab`);
                let activeTab = prevTabs[this.activeIndex];
                let left = 0;

                this.barWidth = activeTab ? activeTab.offsetWidth : 0;

                for (let i = 0; i < this.activeIndex; i++) {
                    let tab = prevTabs[i];

                    left += tab.offsetWidth + 16;
                }

                this.barOffset = left;
            });
        },
        handleChange(index) {
            this.activeIndex = index;
        }
    },
    watch: {
        activeIndex() {
            this.updateStatus();
            this.updateBar();
        }
    },
    mounted() {
        // this.updateBar();
    }
};
</script>

<style lang="scss">
@import '../var';

.vju-tabs {
    color: $color;
}

.vju-tabs-nav {
    font-size: $font-size;
    border-bottom: 1px solid $border-color;
    margin-bottom: 10px;
}

.vju-tabs-nav-wrap {
    position: relative;
    display: flex;
    margin-bottom: -1px;
}

.vju-tabs-nav-bar {
    position: absolute;
    bottom: 0;
    height: 2px;
    background-color: $blue;
}

.vju-tabs-tab {
    padding: 8px 16px;
    margin-right: 16px;
    cursor: pointer;

    &.vju-tabs-tab-active {
        color: $blue;
    }

    &:last-child {
        margin-right: 0;
    }
}
</style>
