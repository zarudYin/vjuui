<template>
    <Poptip trigger="hover" :content="content" :position="position" ref="poptip">
        <slot></slot>
        <template v-if="$slots.content" slot="content">
            <slot name="content"></slot>
        </template>
    </Poptip>
</template>

<script>
import Poptip from '../poptip';

export default {
    name: 'Tooltip',
    components: {
        Poptip
    },
    props: {
        content: String | Number,
        position: {
            default: 'top',
            type: String,
            validator(val) {
                return ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end'].includes(val);
            }
        }
    },
    data() {
        return {};
    },
    methods: {
        show() {
            this.$refs.poptip.visible = true;
        },
        hide() {
            this.$refs.poptip.visible = false;
        }
    }
};
</script>

<style lang="scss">
</style>
