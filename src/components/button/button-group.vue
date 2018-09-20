<template>
    <div class="vju-btn-group">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'ButtonGroup',
    mounted() {
        debugger;

        var a = this;
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../var';

.vju-btn-group {
    display: inline-flex;
    font-size: 0;

    .vju-btn {
        border-radius: 0;
        border-right-width: 0;

        &:first-child {
            border-top-left-radius: $border-radius;
            border-bottom-left-radius: $border-radius;
        }

        &:last-child {
            border-top-right-radius: $border-radius;
            border-bottom-right-radius: $border-radius;
            border-right-width: 1px;
        }
    }
}
</style>
