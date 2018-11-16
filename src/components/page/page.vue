<template>
    <div class="vju-page">
        <span class="vju-page-item vju-page-item-prev" @click="handlePrevPage()"><Icon name="back" /></span>
        <span class="vju-page-item" v-if="currentPage !== 1"  @click="handlePageChange(1)">1</span>
        <span class="vju-page-item" v-if="currentPage - 3 > 1" @click="handleFastPrevPage()"><Icon name="more-left" /></span>
        <span class="vju-page-item" v-if="currentPage - 2 > 1" @click="handlePageChange(currentPage - 2)">{{currentPage - 2}}</span>
        <span class="vju-page-item" v-if="currentPage - 1 > 1" @click="handlePageChange(currentPage - 1)">{{currentPage - 1}}</span>
        <span class="vju-page-item vju-page-item-active" @click="handlePageChange(currentPage)">{{currentPage}}</span>
        <span class="vju-page-item" v-if="currentPage + 1 < maxPage" @click="handlePageChange(currentPage + 1)">{{currentPage + 1}}</span>
        <span class="vju-page-item" v-if="currentPage + 2 < maxPage" @click="handlePageChange(currentPage + 2)">{{currentPage + 2}}</span>
        <span class="vju-page-item" v-if="currentPage + 3 < maxPage" @click="handleFastNextPage()"><Icon name="more-right" /></span>
        <span class="vju-page-item" v-if="currentPage !== maxPage" @click="handlePageChange(maxPage)">{{maxPage}}</span>
        <span class="vju-page-item vju-page-item-next" @click="handleNextPage()"><Icon name="more" /></span>

        <Select @on-select="handleSelect" :value="pageSize" :style="selectStyle">
            <Option v-for="opt in pageSizeOpts" :key="opt" :value="opt">{{opt}} 条/页</Option>
        </Select>

        <span class="vju-page-total">共 {{total}} 条</span>
    </div>
</template>

<script>
import Icon from '../icon';
import Select from '../select';

const Option = Select.Option;

export default {
    name: 'Page',
    components: {
        Icon,
        Select,
        Option
    },
    props: {
        total: Number,
        current: {
            type: Number,
            default: 1
        },
        pageSize: {
            type: Number,
            default: 10
        },
        pageSizeOpts: {
            type: Array,
            default: function() {
                return [10, 20, 30, 40];
            }
        }
    },
    data() {
        return {
            currentPage: this.current,
            currentPageSize: this.pageSize
        };
    },
    computed: {
        selectStyle() {
            return {
                width: '85px',
                verticalAlign: 'middle'
            };
        },
        maxPage() {
            let maxPage = Math.ceil(this.total / this.currentPageSize);

            return maxPage === 0 ? 1 : maxPage;
        }
    },
    methods: {
        handlePageChange(pageIndex) {
            if (pageIndex !== this.currentPage) {
                this.currentPage = pageIndex;
                this.$emit('on-change', this.currentPage, this.currentPageSize);
            }
        },
        handlePrevPage() {
            if (this.currentPage !== 1) {
                this.currentPage -= 1;
                this.$emit('on-change', this.currentPage, this.currentPageSize);
            }
        },
        handleNextPage() {
            if (this.currentPage !== this.maxPage) {
                this.currentPage += 1;
                this.$emit('on-change', this.currentPage, this.currentPageSize);
            }
        },
        handleFastPrevPage() {
            let current = this.currentPage - 5;

            if (current < 1) current = 1;
            this.currentPage = current;
            this.$emit('on-change', this.currentPage, this.currentPageSize);
        },
        handleFastNextPage() {
            let current = this.currentPage + 5;

            if (current > this.maxPage) current = this.maxPage;
            this.currentPage = current;
            this.$emit('on-change', this.currentPage, this.currentPageSize);
        },
        handleSelect({ value, label }) {
            this.currentPageSize = value;
            this.$emit('on-page-size-change', this.currentPageSize);
            this.handlePageChange(1);
        }
    },
    watch: {
        pageSize(val) {
            this.currentPageSize = val;
        },
        current(val) {
            this.currentPage = val;
        }
    }
};
</script>

<style lang="scss">
@import '../var';

.vju-page {
    font-size: 12px;
}

.vju-page-item {
    display: inline-block;
    vertical-align: middle;
    user-select: none;
    min-width: 32px;
    height: 32px;
    line-height: 30px;
    list-style: none;
    text-align: center;
    cursor: pointer;
    color: $color;
    font-family: Arial;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    transition: all 0.2s ease-in-out;
    margin-right: 5px;

    &:hover {
        color: $blue;
        border-color: $blue;

        .vju-icon {
            color: $blue;
        }
    }

    .vju-icon[class^='vju-icon vju-icon-more-'] {
        font-size: 12px;
    }
}

.vju-page-item-active {
    color: $blue;
    border-color: $blue;
}

.vju-page-total {
    display: inline-block;
    vertical-align: middle;
    user-select: none;
    height: 32px;
    line-height: 32px;
    list-style: none;
    text-align: center;
    color: $color;
    margin-left: 10px;
}
</style>
