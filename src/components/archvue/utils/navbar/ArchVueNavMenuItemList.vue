<template>
  <template
    v-for="(item, itemIdx) in menuItems"
    :key="itemIdx"
  >
    <router-link
      :class="`${currentRoute === item.route.name ? 'active' : 'inactive'}-${viewType}-menu-item`"
      :to="item.route"
    >
      {{ item.title }}
    </router-link>
  </template>
</template>

<script>

export default {
  name: 'ArchVueMenuItemList',
  props: {
    menuItems: {
      type: Array,
      required: true,
    },
    mobile: {
      type: Boolean,
      default: false,
    },
    currentRoute: {
      type: String,
      default: '/',
    },
  },
  computed: {
    viewType() {
      return this.mobile ? 'mobile' : 'main';
    },
  },
};
</script>

<style>
.active-main-menu-item {
  @apply bg-archTeal text-white px-3 py-2 rounded-md text-base font-medium;
}
.inactive-main-menu-item {
  @apply text-archTeal hover:bg-archTeal
  hover:text-white px-3 py-2 rounded-md text-base font-medium;
}
.active-mobile-menu-item {
  @apply bg-archTeal text-white block px-3 py-2 rounded-md text-base font-medium;
}
.inactive-mobile-menu-item {
  @apply text-archTeal hover:bg-archTeal
  hover:text-white block px-3 py-2 rounded-md text-base font-medium;
}
.mobile-menu-hamburger {
  @apply bg-gray-800 inline-flex
            items-center justify-center p-2 rounded-md
            text-gray-400 hover:text-white hover:bg-gray-700
            focus:outline-none focus:ring-2 focus:ring-offset-2
            focus:ring-offset-gray-800 focus:ring-white;
}
</style>
