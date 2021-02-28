import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import LogoApp from '@/components/LogoApp.vue';

describe('LogoApp.vue', () => {
  it('should to render', () => {
    const RouterLink = Vue.component('router-link', { template: '' });
    const wrapper = shallowMount(LogoApp, {
      components: {
        RouterLink,
      },
    });
    expect(wrapper.exists()).toBe(true);
  });
});
