<template>
  <bh-avatar
    :size="size">
    <img
      v-if="profile.email"
      :class="size"
      :src="`https://robohash.org/${profile.email}`">
    <bh-icon
      v-else
      size="small"
      value="account" />
  </bh-avatar>
</template>

<script>
export default {
  name: 'UserAvatar',
  props: {
    profile: {
      required: true,
      type: Object,
    },
    size: {
      type: String,
      default: 'normal',
    },
  },
};
</script>
