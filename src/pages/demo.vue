<template>
<div>
    <Button icon="setting" >按钮</Button>
    <Button icon="loading" icon-position="right" >按钮</Button>
    <Icon name="back" style="color: red;"></Icon>
    <Input v-model="val" /> <span>{{val}}</span>
    <Input :disabled="true" />

    <Tabs>
        <TabPane label="首页">
            <div>首页</div>
        </TabPane>
        <TabPane label="详情">
            <div>详情</div>
        </TabPane>
        <TabPane label="个人中心">
            <div>个人中心</div>
        </TabPane>
    </Tabs>

    <Poptip title="标题" content="内容!!!!!!!!!">
        <Button>show poptip</Button>
    </Poptip>
    <Poptip title="标题" content="内容!!!!!!!!!" position="top-start">
        <Button>show poptip</Button>
    </Poptip>
    <Poptip content="内容!!!!!!!!!" position="top">
        <Button>show poptip</Button>
    </Poptip>
    <Poptip content="内容!!!!!!!!!" position="bottom" trigger="hover">
        <Button>show poptip</Button>
        <template slot="title">
            <h1>标题123</h1>
        </template>
    </Poptip>
    <Tooltip content="Tooltip123123213213">
        <Button>show tooltip</Button>
        <template slot="title">
            <h1>标题123</h1>
        </template>
    </Tooltip>
    <br/>
    <ButtonGroup style="margin-top: 5px;">
        <Button icon="setting" >按钮</Button>
        <Button icon="setting" >按钮</Button>
        <Button icon="loading" icon-position="right" >按钮</Button>
    </ButtonGroup>

    <Select @on-select="handleSelect" placeholder="please select">
        <Option value="1">哈哈哈</Option>
        <Option value="2">呵呵呵</Option>
        <Option value="3">嘿嘿嘿</Option>
    </Select>

    <Cascader :data="data" placeholder="please select"></Cascader>
</div>
</template>

<script>
import Button from '../components/button';
import Icon from '../components/icon';
import Input from '../components/input';
import Tabs from '../components/tabs';
import Poptip from '../components/poptip';
import Tooltip from '../components/tooltip';
import Select from '../components/select';
import Cascader from '../components/Cascader';

const TabPane = Tabs.TabPane;
const ButtonGroup = Button.ButtonGroup;
const Option = Select.Option;

export default {
    name: 'Demo',
    components: {
        Button: Button,
        Icon: Icon,
        Input: Input,
        Tabs: Tabs,
        TabPane: TabPane,
        Poptip: Poptip,
        Tooltip: Tooltip,
        ButtonGroup: ButtonGroup,
        Select: Select,
        Option: Option,
        Cascader
    },
    data() {
        return {
            val: '',
            data: [
                {
                    value: 'beijing',
                    label: '北京',
                    children: [
                        {
                            value: 'gugong',
                            label: '故宫'
                        },
                        {
                            value: 'tiantan',
                            label: '天坛'
                        },
                        {
                            value: 'wangfujing',
                            label: '王府井'
                        }
                    ]
                },
                {
                    value: 'jiangsu',
                    label: '江苏',
                    children: [
                        {
                            value: 'nanjing',
                            label: '南京',
                            children: [
                                {
                                    value: 'fuzimiao',
                                    label: '夫子庙'
                                }
                            ]
                        },
                        {
                            value: 'suzhou',
                            label: '苏州',
                            children: [
                                {
                                    value: 'zhuozhengyuan',
                                    label: '拙政园'
                                },
                                {
                                    value: 'shizilin',
                                    label: '狮子林'
                                }
                            ]
                        }
                    ]
                }
            ]
        };
    },
    methods: {
        handleSelect(option) {
            console.log(option);
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
