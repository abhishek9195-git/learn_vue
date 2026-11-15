<script lang="ts">
import { useRoute } from 'vue-router';

export default {
  name: 'Profile',
  data: () => ({
    profileId: ''
  }),
  mounted() {
    const route = useRoute();
    const id = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id;
    console.log('Route', id);
    this.profileId = id || '';
  }
};
</script>
<template >
    Profile
<h1>{{ profileId }}</h1>
</template>
<style scoped>
</style>