<template>
    <div class="vju-slider" ref="slider">
        <input type="hidden" />
        <div class="vju-slider-inner" :style="innerStyle"></div>
        <div class="vju-slider-bar-wrap" :style="barStyle">
            <Tooltip :content="currentValue" ref="tooltip">
                <div class="vju-slider-bar" @mousedown="handleMousedown"></div>
            </Tooltip>
        </div>
    </div>
</template>

<script>
import Tooltip from '../tooltip';
import { getStyle } from '../../utils/dom.js';

export default {
    name: 'Slider',
    components: {
        Tooltip
    },
    model: {
        prop: 'value',
        event: 'change'
    },
    props: {
        value: Number,
        min: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            default: 100
        },
        step: {
            type: Number,
            default: 1
        }
    },
    data: function() {
        return {
            currentValue: this.value
        };
    },
    computed: {
        rangeValue() {
            return this.max - this.min;
        },
        innerStyle() {
            return {
                width: ((this.currentValue - this.min) / this.rangeValue) * 100 + '%'
            };
        },
        barStyle() {
            return {
                left: ((this.currentValue - this.min) / this.rangeValue) * 100 + '%'
            };
        },
        sliderWidth() {
            return parseInt(getStyle(this.$refs.slider, 'width'));
        }
    },
    methods: {
        handleDecimal(value) {
            // 处理小数不精确的问题
            let step = this.step.toString();

            if (!step.includes('.')) {
                return value - (value % this.step);
            }

            let decimal = step.split('.')[1];
            let quot = Math.pow(10, decimal.length);

            return (value * quot - ((value * quot) % (this.step * quot))) / quot;
        },
        handleMousedown(event) {
            this.mousePosX = event.clientX;
            this.tmpCurrentValue = this.currentValue; // 缓存当前进度

            window.addEventListener('mousemove', this.handleMousemove);
            window.addEventListener('mouseup', this.handleMouseup);
        },
        handleMousemove(event) {
            let displacement = ((event.clientX - this.mousePosX) / this.sliderWidth) * this.rangeValue; // 位移量
            let newValue = this.tmpCurrentValue + displacement;

            if (newValue < this.min) newValue = this.min;
            if (newValue > this.max) newValue = this.max;

            this.currentValue = this.handleDecimal(newValue);
            this.$refs.tooltip.show();
        },
        handleMouseup() {
            this.$refs.tooltip.hide();
            this.$emit('change', this.currentValue);
            this.$emit('on-change', this.currentValue);

            window.removeEventListener('mousemove', this.handleMousemove);
            window.removeEventListener('mouseup', this.handleMouseup);
        }
    },
    watch: {
        value(val) {
            this.currentValue = val;
        }
    }
};
</script>

<style lang="scss">
@import '../var';

.vju-slider {
    width: 100%;
    height: 4px;
    margin: 16px 0;
    background-color: $grey;
    border-radius: $border-radius;
    vertical-align: middle;
    position: relative;
    cursor: pointer;
}

.vju-slider-inner {
    height: 4px;
    background: #57a3f3;
    border-radius: $border-radius;
    position: absolute;
}

.vju-slider-bar-wrap {
    position: absolute;
}

.vju-slider-bar {
    position: absolute;
    top: -4px;
    margin-left: -6px;
    width: 12px;
    height: 12px;
    border: 2px solid $blue;
    border-radius: 50%;
    background-color: #fff;
    transition: all 0.2s linear;
    outline: 0;

    &:hover {
        transform: scale(1.5);
        cursor: grab;
    }
}
</style>
