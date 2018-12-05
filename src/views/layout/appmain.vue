<template>
  <div class="appmain">
    <transition name="fade" mode="in-out">
      <keep-alive :key="key">
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'appmain',
  computed: {
    key: function() {
      return this.$route.name !== undefined ? this.$route.name + new Date() : this.$route + new Date()
    }
  }
}
</script>
