<template>
    <transition name="drop">
        <div class="vju-notice">
            <div class="vju-notice-content">
                {{this.content}}
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'Notice',
    props: {
        name: {
            type: String,
            required: true
        },
        content: {
            type: String,
            default: ''
        },
        duration: {
            type: Number,
            default: 3
        },
        onClose: {
            type: Function,
            default: function() {}
        }
    },
    data() {
        return {};
    },
    methods: {
        clearCloseTimer() {
            if (this.closeTimer) {
                clearTimeout(this.closeTimer);
                this.closeTimer = null;
            }
        },
        close() {
            this.clearCloseTimer();
            this.onClose();
            this.$parent.close(this.name);
        }
    },
    mounted() {
        if (this.duration > 0) {
            this.closeTimer = setTimeout(() => {
                this.close();
            }, this.duration * 1000);
        }
    }
};
</script>

<style lang="scss">
@import '../../var';

.vju-notice {
    padding: 8px;
    text-align: center;
    transition: all 0.3s ease-in-out;
}

.vju-notice-content {
    display: inline-block;
    pointer-events: all;
    padding: 8px 16px;
    border-radius: $border-radius;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
    background: #fff;
    position: relative;
}
</style>
