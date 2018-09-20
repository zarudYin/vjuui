<template>
    <Poptip trigger="hover" :content="content" :position="position">
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
        content: String,
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
    }
};
</script>

<style lang="scss">
</style>
