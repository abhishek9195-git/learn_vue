<script lang="ts">
import type { PropType } from 'vue';
import type { IUser } from './UserList.vue';

export default {
    name: 'UserCard',
    props: {
        user: {
            type: Object as PropType<IUser>,
            default: () => ({})
        },
        getUserName: {
            type: Function,
            default: null
        }
    },
    methods: {
        handleCardClick() {
            if (this.getUserName) {
                this.getUserName(this.user as IUser);
            }
        }
    }
}
</script>
<template>
    <div class="card" v-on:click="handleCardClick">
        {{ user?.firstName ?? '' }}
    </div>
</template>
<style>
div.card {
    border: 1px solid #f3f3f3;
    margin: 15px 0px;
    padding: 15px;
    border-radius: 14px;
}
</style>