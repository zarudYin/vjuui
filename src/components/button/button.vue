<template>
    <button :class="['vju-btn', `vju-btn-${iconPosition}`]" @click="handleClick">
        <div class="vju-btn-content">
            <slot></slot>
        </div>
        <Icon v-if="icon && !loading" :name="icon"></Icon>
        <Icon v-if="icon && loading" :name="loading"></Icon>
    </button>
</template>

<script>
import Icon from '../icon';

export default {
    name: 'Button',
    components: {
        Icon: Icon
    },
    props: {
        icon: {},
        iconPosition: {
            default: 'left',
            type: String,
            validator(val) {
                return val === 'left' || val === 'right';
            }
        },
        loading: {
            default: false,
            type: Boolean
        }
    },
    methods: {
        handleClick(event) {
            this.$emit('click', event);
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../var';

@keyframes spin {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

.vju-btn {
    font-size: $font-size;
    height: $button-height;
    padding: 0 1em;
    border-radius: $border-radius;
    border: 1px solid $border-color;
    background: $button-bg;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: $color;
    cursor: pointer;
    outline: none;
    &:hover {
        border-color: $border-color-hover;
    }
    &:active {
        background-color: $button-active-bg;
    }

    .vju-btn-content {
        line-height: 1;
    }

    &.vju-btn-left {
        .vju-btn-content {
            order: 2;
        }

        .vju-icon {
            order: 1;
            margin-right: 2px;
        }
    }

    &.vju-btn-right {
        .vju-btn-content {
            order: 1;
        }

        .vju-icon {
            order: 2;
            margin-left: 2px;
        }
    }

    .vju-icon-loading {
        animation: spin 2s infinite linear;
    }
}
</style>
