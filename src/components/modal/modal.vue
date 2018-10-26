<template>
    <div class="vju-modal">
        <transition name="fade">
            <div class="vju-modal-mask" v-show="visible" @click="handleMask"></div>
        </transition>
        <transition name="scale">
            <div class="vju-modal-body" v-show="visible" @click="handleBody">
                <div class="vju-modal-wrap">
                    <div class="vju-modal-header" v-if="showTitle">
                        <slot name="header">
                            {{title}}
                        </slot>
                        <Icon name="close" v-if="closable" @click="handleCancel" />
                    </div>
                    <div class="vju-modal-content">
                        <slot></slot>
                    </div>
                    <div class="vju-modal-footer">
                        <slot name="footer">
                            <Button @click="handleCancel">取消</Button>
                            <Button @click="handleOk">确定</Button>
                        </slot>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import Button from '../button';
import Icon from '../icon';

export default {
    name: 'Modal',
    components: {
        Button,
        Icon
    },
    props: {
        value: {
            type: Boolean,
            default: false
        },
        closable: {
            type: Boolean,
            default: true
        },
        maskClosable: {
            type: Boolean,
            default: true
        },
        title: String
    },
    data() {
        return {
            visible: this.value
        };
    },
    computed: {
        showTitle() {
            return this.title || this.$slots.header;
        }
    },
    methods: {
        close() {
            this.visible = false;
            this.$emit('input', false);
        },
        handleMask() {
            if (this.maskClosable) {
                this.close();
            }
        },
        handleBody(event) {
            if (event.target.classList.contains('vju-modal-body')) {
                this.handleMask();
            }
        },
        handleOk() {
            this.close();
            this.$emit('on-ok');
        },
        handleCancel() {
            this.close();
            this.$emit('on-cancel');
        }
    },
    mounted() {
        document.body.appendChild(this.$el);
    },
    watch: {
        value(val) {
            this.visible = val;
        }
    }
};
</script>

<style lang="scss">
@import '../var';

.vju-modal-mask {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background-color: rgba(55, 55, 55, 0.6);
}

.vju-modal-body {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    text-align: center;

    &:before {
        content: '';
        display: inline-block;
        height: 100%;
        vertical-align: middle;
        width: 0;
    }
}

.vju-modal-wrap {
    display: inline-block;
    vertical-align: middle;
    text-align: left;
    min-width: 300px;
    background-color: #fff;
    border-radius: $border-radius;
}

.vju-modal-header {
    position: relative;
    padding: 14px 30px 14px 16px;
    border-bottom: 1px solid $border-color-light;

    .vju-icon-close {
        font-size: 20px;
        position: absolute;
        right: 10px;
        top: 13px;
        cursor: pointer;

        &:hover {
            color: #000;
        }
    }
}

.vju-modal-content {
    padding: 18px 16px;
}

.vju-modal-footer {
    padding: 14px 16px;
    text-align: right;
    border-top: 1px solid $border-color-light;
}
</style>
