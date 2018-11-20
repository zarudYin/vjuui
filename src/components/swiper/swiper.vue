<template>
    <div class="vju-swiper">
        <button class="vju-swiper-indicator vju-swiper-indicator-left" @click="handlePrev">
            <Icon name="back"></Icon>
        </button>
        <div class="viu-swiper-wrap">
            <div class="viu-swiper-list" :style="wrapStyle">
                <slot></slot>
            </div>
        </div>
        <button class="vju-swiper-indicator vju-swiper-indicator-right" @click="handleNext">
            <Icon name="more"></Icon>
        </button>
        <div class="vju-swiper-dot">
            <div :class="['vju-swiper-dot-item', {'active': item - 1 === offset}]" v-for="item in itemLength" :key="item" @click="handleChange(item - 1)">
                <div class="vju-swiper-dot-inner"></div>
            </div>
        </div>
    </div>
</template>

<script>
import Icon from '../icon';
import { getStyle } from '../../utils/dom.js';

export default {
    name: 'Swiper',
    components: { Icon },
    model: {
        prop: 'value',
        event: 'change'
    },
    props: {
        value: {
            type: Number,
            default: 0
        },
        height: {
            type: [String, Number],
            default: 'auto',
            validator(value) {
                return value === 'auto' || Object.prototype.toString.call(value) === '[object Number]';
            }
        },
        autoplay: {
            type: Boolean,
            default: true
        },
        autoplaySpeed: {
            type: Number,
            default: 2000
        }
    },
    data() {
        return {
            offset: this.value,
            wrapWidth: 0,
            itemWidth: 0,
            itemLength: 0
        };
    },
    computed: {
        wrapStyle() {
            return {
                width: this.wrapWidth + 'px',
                transform: `translateX(-${this.itemWidth * this.offset}px)`
            };
        }
    },
    methods: {
        handleNext() {
            let offset = this.offset + 1;

            if (offset === this.itemLength) {
                offset = 0;
            }

            this.offset = offset;
        },
        handlePrev() {
            let offset = this.offset - 1;

            if (offset < 0) {
                offset = this.itemLength - 1;
            }

            this.offset = offset;
        },
        handleChange(offset) {
            this.offset = offset;
        }
    },
    watch: {},
    mounted() {
        let width = getStyle(this.$el, 'width');
        let swiperItem = this.$children.filter(child => child.$options.name === 'SwiperItem');

        swiperItem.forEach(child => {
            child.width = parseInt(width);
            child.height = this.height;
        });

        this.itemWidth = parseInt(width);
        this.itemLength = swiperItem.length;
        this.wrapWidth = this.itemWidth * this.itemLength;

        if (this.autoplay) {
            this.timer = setInterval(() => {
                this.handleNext();
            }, this.autoplaySpeed);
        }
    },
    destroyed() {
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../var';

.vju-swiper {
    position: relative;

    &:hover {
        .vju-swiper-indicator {
            display: block;
        }
    }
}

.viu-swiper-wrap {
    overflow: hidden;
}

.viu-swiper-list {
    overflow: hidden;
    transition: transform 500ms ease 0s;
}

.vju-swiper-indicator {
    display: none;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(31, 45, 61, 0.11);
    border: 0;
    outline: 0;
    transition: 0.2s;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    text-align: center;
    cursor: pointer;
    z-index: 2;

    &:hover {
        background-color: rgba(31, 45, 61, 0.5);
    }

    .vju-icon {
        color: #fff;
    }
}

.vju-swiper-indicator-left {
    left: 16px;
}

.vju-swiper-indicator-right {
    right: 16px;
}

.vju-swiper-dot {
    position: absolute;
    bottom: 16px;
    width: 100%;
    z-index: 3;
    height: 17px;
    text-align: center;
}

.vju-swiper-dot-item {
    position: relative;
    display: inline-block;
    vertical-align: top;
    text-align: center;
    margin: 0 2px;
    padding: 7px 0;
    height: 100%;
    cursor: pointer;

    &.active {
        .vju-swiper-dot-inner {
            width: 24px;
            opacity: 1;
        }
    }
}

.vju-swiper-dot-inner {
    width: 16px;
    height: 100%;
    background-color: #8391a5;
    transition: all 0.5s;
    opacity: 0.3;
    border-radius: 1px;
}
</style>
