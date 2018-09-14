<template>
    <input
        class="vju-input"
        :value="currentValue"
        @input="handleInput"
        @change="handleChange"
    />
</template>

<script>
export default {
    name: 'Toast',
    props: {

    },
    data() {
        return {};
    },
    methods: {}
};
</script>

<style lang="scss">
@import '../var';

.vju-toast {
}
</style>
