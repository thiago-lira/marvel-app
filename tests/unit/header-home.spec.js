import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import HeaderHome from '@/components/HeaderHome.vue';

describe('HeaderHome.vue', () => {
  const RouterLink = Vue.component('router-link', { template: '' });
  it('should to exist', () => {
    const wrapper = shallowMount(HeaderHome, {
      components: {
        RouterLink,
      },
    });
    expect(wrapper.exists()).toEqual(true);
  });
});
