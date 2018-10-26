<template>
<div class="vju-notification">
    <Notice
        v-for="notice in notices"
        :key="notice.name"
        :name="notice.name"
        :content="notice.content"
        :duration="notice.duration"
        :onClose="notice.onClose">
    </Notice>
</div>
</template>

<script>
import Notice from './notice';

let uuid = 0;

function getUuid() {
    return 'vju-notification-uuid-' + uuid++;
}

export default {
    name: 'Notification',
    components: {
        Notice
    },
    props: {},
    data() {
        return {
            notices: []
        };
    },
    methods: {
        add(option) {
            let name = option.name || getUuid();

            let notice = Object.assign(
                {
                    name,
                    content: '',
                    duration: 3
                },
                option
            );

            this.notices.push(notice);
        },
        close(name) {
            for (let i = 0; i < this.notices.length; i++) {
                if (this.notices[i].name === name) {
                    this.notices.splice(i, 1);
                    break;
                }
            }
        },
        closeAll() {
            this.notices = [];
        }
    },
    mounted() {
        if (this.duration > 0) {
            this.closeTimer = setTimeout(() => {
                this.close();
            }, duration * 1000);
        }
    }
};
</script>

<style lang="scss">
@import '../../var';

.vju-notification {
    font-size: 14px;
    position: fixed;
    z-index: 1010;
    width: 100%;
    top: 16px;
    left: 0;
    pointer-events: none;
}
</style>
