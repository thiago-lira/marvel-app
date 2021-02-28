import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import HeaderDetails from '@/components/HeaderDetails.vue';
import SearchInput from '@/components/SearchInput.vue';

describe('HeaderDetails.vue', () => {
  let wrapper;
  const RouterLink = Vue.component('router-link', { template: '' });
  beforeEach(() => {
    wrapper = shallowMount(HeaderDetails, {
      components: {
        RouterLink,
      },
    });
  });

  it('should to render', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should to emit "input" event after type', async () => {
    const searchInput = wrapper.findComponent(SearchInput);
    searchInput.vm.$emit('input', 'teste');

    await wrapper.vm.$nextTick();

    expect(wrapper.emitted().input[0][0]).toEqual('teste');
  });
});
