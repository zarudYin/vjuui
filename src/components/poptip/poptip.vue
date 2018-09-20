<template>
    <div class="vju-poptip"
        @click="handleClick"
        @mouseenter="handleMouseenter"
        @mouseleave="handleMouseleave"
        v-clickoutside="handleClickOutside">
        <div class="vju-poptip-rel">
            <slot></slot>
        </div>
        <transition name="fade">
            <div class="vju-poptip-popper" v-show="visible" :x-position="position">
                <div class="vju-poptip-arrow"></div>
                <div class="vju-poptip-wrap">
                    <div class="vju-poptip-title" v-if="showTitle"><slot name="title">{{ title }}</slot></div>
                    <div class="vju-poptip-content" v-if="showContent"><slot name="content">{{ content }}</slot></div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import clickoutside from '../../directives/clickOutside.js';

export default {
    name: 'Poptip',
    directives: {
        clickoutside
    },
    props: {
        title: String,
        content: String,
        trigger: {
            default: 'click',
            type: String,
            validator(val) {
                return ['click', 'hover'].includes(val);
            }
        },
        position: {
            default: 'bottom-start',
            type: String,
            validator(val) {
                return ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end'].includes(val);
            }
        }
    },
    data() {
        return {
            visible: false
        };
    },
    computed: {
        showTitle() {
            return this.title || this.$slots.title;
        },
        showContent() {
            return this.content || this.$slots.content;
        }
    },
    methods: {
        handleClick() {
            if (this.trigger === 'click') {
                this.visible = !this.visible;
            }
        },
        handleMouseenter() {
            if (this.trigger === 'hover') {
                this.visible = true;
            }
        },
        handleMouseleave() {
            if (this.trigger === 'hover') {
                this.visible = false;
            }
        },
        handleClickOutside() {
            this.visible = false;
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
    min-width: 150px;
    z-index: 1000;

    &[x-position^='bottom'] {
        padding: 10px 0 7px;

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

    &[x-position^='top'] {
        padding: 7px 0 10px;
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

    &[x-position='bottom'] {
        left: 50%;
        transform: translate(-50%, 0);

        .vju-poptip-arrow {
            left: 50%;
            margin-left: -3.5px;
        }
    }

    &[x-position='top'] {
        left: 50%;
        transform: translate(-50%, -100%);

        .vju-poptip-arrow {
            left: 50%;
            margin-left: -3.5px;
        }
    }

    &[x-position='bottom-start'],
    &[x-position='top-start'] {
        .vju-poptip-arrow {
            left: 16px;
        }
    }

    &[x-position='bottom-end'],
    &[x-position='top-end'] {
        right: 0;

        .vju-poptip-arrow {
            right: 16px;
        }
    }

    &[x-position^='left'] {
        padding: 0 10px 0 7px;
        left: 0;
        transform: translate(-100%, 0);

        .vju-poptip-arrow {
            right: 3px;
            border-right-width: 0;
            border-left-color: rgba(217, 217, 217, 0.5);

            &::after {
                right: 1px;
                margin-top: -7px;
                border-right-width: 0;
                border-left-color: #fff;
            }
        }
    }

    &[x-position^='right'] {
        padding: 0 7px 0 10px;
        right: 0;
        transform: translate(100%, 0);

        .vju-poptip-arrow {
            left: 3px;
            border-left-width: 0;
            border-right-color: rgba(217, 217, 217, 0.5);

            &::after {
                left: 1px;
                margin-top: -7px;
                border-left-width: 0;
                border-right-color: #fff;
            }
        }
    }

    &[x-position='left'] {
        top: 50%;
        transform: translate(-100%, -50%);

        .vju-poptip-arrow {
            top: 50%;
            margin-top: -7px;
        }
    }

    &[x-position='right'] {
        top: 50%;
        transform: translate(100%, -50%);

        .vju-poptip-arrow {
            top: 50%;
            margin-top: -7px;
        }
    }

    &[x-position='left-start'],
    &[x-position='right-start'] {
        top: 0;

        .vju-poptip-arrow {
            top: 8px;
        }
    }

    &[x-position='left-end'],
    &[x-position='right-end'] {
        bottom: 0;

        .vju-poptip-arrow {
            bottom: 8px;
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
