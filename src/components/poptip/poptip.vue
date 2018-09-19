<template>
    <div class="vju-poptip" @click="handleClick">
        <div class="vju-poptip-rel">
            <slot></slot>
        </div>
        <div class="vju-poptip-popper" :style="poperStyle" :x-position="position">
            <div class="vju-poptip-arrow"></div>
            <div class="vju-poptip-wrap">
                <div class="vju-poptip-title" v-if="title">{{title}}</div>
                <div class="vju-poptip-content" v-if="content">{{content}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Poptip',
    props: {
        title: String,
        content: String,
        position: {
            default: 'bottom-start',
            type: String,
            validator(val) {
                return [
                    // 'top',
                    'top-start',
                    'top-end',
                    // 'bottom',
                    'bottom-start',
                    'bottom-end'
                ].includes(val);
            }
        }
    },
    data() {
        return {
            visible: false
        };
    },
    computed: {
        poperStyle() {
            return {
                visibility: this.visible ? 'visible' : 'hidden'
            };
        }
    },
    methods: {
        handleClick() {
            this.visible = !this.visible;
        }
    }
};
</script>

<style lang="scss">
@import '../var';

.vju-poptip {
    position: relative;
    display: inline-block;
}

.vju-poptip-rel {
    display: inline-block;
}

.vju-poptip-popper {
    position: absolute;
    padding: 10px 0;
    min-width: 150px;
    z-index: 1000;

    &[x-position^='bottom'] {
        .vju-poptip-arrow {
            top: 3px;
            border-top-width: 0;
            border-bottom-color: rgba(217, 217, 217, 0.5);

            &::after {
                top: 1px;
                margin-left: -7px;
                border-top-width: 0;
                border-bottom-color: #fff;
            }
        }
    }

    &[x-position='bottom-start'] {
        .vju-poptip-arrow {
            left: 16px;
        }
    }

    &[x-position='bottom-end'] {
        right: 0;

        .vju-poptip-arrow {
            right: 16px;
        }
    }

    &[x-position^='top'] {
        top: 0;
        transform: translate(0, -100%);

        .vju-poptip-arrow {
            bottom: 3px;
            border-bottom-width: 0;
            border-top-color: rgba(217, 217, 217, 0.5);

            &::after {
                bottom: 1px;
                margin-left: -7px;
                border-bottom-width: 0;
                border-top-color: #fff;
            }
        }
    }

    &[x-position='top-start'] {
        .vju-poptip-arrow {
            left: 16px;
        }
    }

    &[x-position='top-end'] {
        right: 0;

        .vju-poptip-arrow {
            right: 16px;
        }
    }
}

.vju-poptip-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border: 7px solid transparent;

    &:after {
        content: '';
        display: block;
        width: 0;
        height: 0;
        position: absolute;
        border: 7px solid transparent;
    }
}

.vju-poptip-wrap {
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    white-space: nowrap;
}

.vju-poptip-title {
    position: relative;
    padding: 8px 16px;
    font-size: 14px;
    line-height: 1.5;

    &:after {
        content: '';
        display: block;
        height: 1px;
        position: absolute;
        left: 8px;
        right: 8px;
        bottom: 0;
        background-color: #e8eaec;
    }
}

.vju-poptip-content {
    padding: 8px 16px;
}
</style>
