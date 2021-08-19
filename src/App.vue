<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div>
    <Disclosure
      v-slot="{ open }"
      as="nav"
      class="bg-white border-b-2 border-archRed border-dashed"
    >
      <div class="container mx-auto px-4 md:px-0">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <router-link to="/">
                <img
                  class="h-12"
                  src="img/text-logo.png"
                  alt="archeun logo"
                >
              </router-link>
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <ArchVueMenuItemList
                  :menu-items="menuItems"
                  :current-route="currentRoute"
                />
              </div>
            </div>
          </div>
          <div class="-mr-2 flex md:hidden">
            <DisclosureButton
              class="mobile-menu-hamburger"
            >
              <span class="sr-only">Open main menu</span>
              <MenuIcon
                v-if="!open"
                class="block h-6 w-6"
                aria-hidden="true"
              />
              <XIcon
                v-else
                class="block h-6 w-6"
                aria-hidden="true"
              />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <ArchVueMenuItemList
            :menu-items="menuItems"
            :current-route="currentRoute"
            mobile
          />
        </div>
      </DisclosurePanel>
    </Disclosure>

    <main>
      <div class="container mx-auto my-6 p-6">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
import {
  Disclosure, DisclosureButton, DisclosurePanel,
} from '@headlessui/vue';
import { MenuIcon, XIcon } from '@heroicons/vue/outline';
import { useRoute } from 'vue-router';
import ArchVueMenuItemList from './components/archvue/utils/navbar/ArchVueNavMenuItemList.vue';

const menuItems = [
  {
    title: 'Components',
    route: { name: 'components' },
  },
  {
    title: 'Blog',
    route: { name: 'blog' },
  },
];

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    MenuIcon,
    XIcon,
    ArchVueMenuItemList,
  },
  setup() {
    const route = useRoute();
    return {
      menuItems,
      route,
    };
  },
  data() {
    return {
      currentRoute: '/',
    };
  },
  watch: {
    $route(to) {
      this.currentRoute = to.name;
    },
  },
};
</script>
