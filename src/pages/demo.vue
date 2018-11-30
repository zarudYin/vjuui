<template>
<div>
    <!-- <Button icon="setting" >按钮</Button>
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
        <Button icon="setting" @click="showMsg">message</Button>
        <Button icon="setting" @click="showModal">modal</Button>
        <Button icon="loading" icon-position="right" @click="showLoadingBar">loading bar</Button>
        <Button icon="loading" icon-position="right" @click="finishLoadingBar">finish bar</Button>
        <Button icon="loading" icon-position="right" @click="destroyLoadingBar">destroy bar</Button>
        <Button icon="loading" icon-position="right" @click="errorLoadingBar">error bar</Button>
    </ButtonGroup> -->

    <!-- <Select v-model="selectValue" placeholder="please select">
        <Option value="1">哈哈哈</Option>
        <Option value="2">呵呵呵</Option>
        <Option value="3">嘿嘿嘿</Option>
    </Select>
    <div>当前选中：{{selectValue}}</div>

    <Cascader :data="data" placeholder="please select"></Cascader>

    <Modal v-model="modalVisible" title="这是标题!" @on-ok="handleOk" draggable>
        哈哈哈哈哈哈哈
    </Modal> -->

    <!-- <Menu>
        <MenuGroup title="设置">
            <MenuItem>
                <Icon name="setting"/>设置
            </MenuItem>
        </MenuGroup>
        <Submenu>
            <template slot="title">
                <Icon name="setting"/>Navigation One
            </template>
            <MenuGroup title="Item 1">
                <MenuItem name="1-1">Option 1</MenuItem>
                <MenuItem name="1-2">Option 2</MenuItem>
            </MenuGroup>
        </Submenu>
    </Menu> -->

    <!-- <Page :total="300" @on-change="handlePageChange"/>

    <Button icon="setting" @click="handleShowS">showSOrP</Button> -->
    <Select :value="selectValue" @on-select="handleSelect" placeholder="please select" :filter="true">
            <Option value="1">哈哈哈</Option>
            <Option value="2">呵呵呵</Option>
            <Option value="3">嘿嘿嘿</Option>
            <Option value="4">嚯嚯嚯</Option>
        </Select>
    <!-- <keep-alive>
        <Select :value="selectValue" v-if="isShowS" @on-select="handleSelect" placeholder="please select" :filter="true">
            <Option value="1">哈哈哈</Option>
            <Option value="2">呵呵呵</Option>
            <Option value="3">嘿嘿嘿</Option>
        </Select>

        <Page v-else :total="300" @on-change="handlePageChange"/>
    </keep-alive> -->

    <!-- <Swiper>
        <SwiperItem>
            <div style="height: 200px;">哈哈哈哈</div>
        </SwiperItem>
        <SwiperItem>
            <div style="height: 200px;">呵呵呵呵</div>
        </SwiperItem>
        <SwiperItem>
            <div style="height: 200px;">嘿嘿嘿嘿</div>
        </SwiperItem>
    </Swiper>

    <Checkbox label="哈哈哈" v-model="checkedValue"></Checkbox><span>value: {{checkedValue}}</span>

    <CheckboxGroup v-model="checkedGroup" @on-change="handleCheckboxGroupChange">
        <span><Button></Button><Button><Checkbox label="哈哈哈"></Checkbox></Button></span>
        <Button><Checkbox label="呵呵呵"></Checkbox></Button>
        <Checkbox label="嘿嘿嘿"></Checkbox>
    </CheckboxGroup>
    <span>{{checkedGroup}}</span>

    <Radio label="哈哈哈"></Radio>

    <RadioGroup v-model="radioValue">
        <Radio label="哈哈哈"></Radio>
        <Radio label="呵呵呵"></Radio>
        <Radio label="嘿嘿嘿"></Radio>
    </RadioGroup>
    <span>{{radioValue}}</span>

    <i-switch>
        <template slot="open">
            <span>开</span>
        </template>
        <template slot="close">
            <span>关</span>
        </template>
    </i-switch> -->

    <AutoComplete v-model="autoValue" :data="autoData" @on-search="handleSearch" placeholder="please select"></AutoComplete>
    <div>{{autoValue}}</div>
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
import Message from '../components/message';
import Modal from '../components/modal';
import Menu from '../components/menu';
import Page from '../components/page';
import LoadingBar from '../components/loading-bar';
import Swiper from '../components/swiper';
import Checkbox from '../components/checkbox';
import Radio from '../components/radio';
import Switch from '../components/switch';
import AutoComplete from '../components/auto-complete';

const TabPane = Tabs.TabPane;
const ButtonGroup = Button.ButtonGroup;
const Option = Select.Option;

const MenuGroup = Menu.MenuGroup;
const MenuItem = Menu.MenuItem;
const Submenu = Menu.Submenu;

const SwiperItem = Swiper.SwiperItem;
const CheckboxGroup = Checkbox.CheckboxGroup;
const RadioGroup = Radio.RadioGroup;

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
        Cascader,
        Modal,
        Menu,
        MenuGroup,
        MenuItem,
        Submenu,
        Page,
        Swiper,
        SwiperItem,
        Checkbox,
        CheckboxGroup,
        Radio,
        RadioGroup,
        iSwitch: Switch,
        AutoComplete
    },
    data() {
        return {
            val: '',
            modalVisible: false,
            isShowS: true,
            selectValue: '2',
            checkedValue: false,
            radioValue: '',
            checkedGroup: ['哈哈哈'],
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
            ],
            autoData: [],
            autoValue: ''
        };
    },
    methods: {
        handleSelect(option) {
            // console.log(option);
            this.selectValue = option.value;
        },
        showMsg() {
            Message.info('哈哈哈哈');
        },
        showModal() {
            this.modalVisible = true;
        },
        handleOk() {
            console.log('ok');
        },
        handlePageChange(pageIndex, pageSize) {
            console.log(pageIndex, pageSize);
        },
        showLoadingBar() {
            LoadingBar.start();
        },
        finishLoadingBar() {
            LoadingBar.finish();
        },
        destroyLoadingBar() {
            LoadingBar.destroy();
        },
        errorLoadingBar() {
            LoadingBar.error();
        },
        handleShowS() {
            this.isShowS = !this.isShowS;
        },
        handleCheckboxGroupChange(value) {
            console.log(value);
        },
        handleSearch(val) {
            this.autoData = val.includes('@') ? [val] : ['@qq.com', '@163.com'].map(t => val + t);
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
