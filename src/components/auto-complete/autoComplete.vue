<template>
    <Select :value="currentValue" @on-select="handleChange" @on-input="handleInput" :filter="true" :placeholder="placeholder" :auto-complete="true">
        <Option v-for="item in data" :value="item" :key="item">{{item}}</Option>
    </Select>
</template>

<script>
import Select from '../select';
const Option = Select.Option;

export default {
    name: 'AutoComplete',
    components: {
        Select,
        Option
    },
    model: {
        prop: 'value',
        event: 'change'
    },
    props: {
        value: Number | String,
        placeholder: String,
        data: {
            type: Array,
            default: () => []
        },
        filterMethod: Function
    },
    data: function() {
        return {
            currentValue: this.value
        };
    },
    computed: {
        optionData() {
            if (this.filterMethod) {
                return this.data.filter(t => this.filterMethod(this.currentValue, t));
            }

            return this.data;
        }
    },
    methods: {
        handleInput(e) {
            let val = e.target.value;

            this.currentValue = val;

            this.$emit('on-search', val);
        },
        handleChange({ value }) {
            this.currentValue = value;

            this.$emit('change', value);
            this.$emit('on-select', value);
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

.vju-auto-complete {
}
</style>
