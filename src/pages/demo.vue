<template>
<div>
    <Button icon="setting" >按钮</Button>
    <Button icon="loading" icon-position="right" >按钮</Button>
    <Icon name="back" style="color: red;"></Icon>
    <Input v-model="val" /> <span>{{val}}</span>
    <Input :disabled="true" />
</div>
</template>

<script>
import Button from '../components/button';
import Icon from '../components/icon';
import Input from '../components/input';

export default {
    name: 'Demo',
    components: {
        Button: Button,
        Icon: Icon,
        Input: Input
    },
    data() {
        return {
            val: ''
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
