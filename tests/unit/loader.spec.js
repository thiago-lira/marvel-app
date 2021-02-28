import { shallowMount } from '@vue/test-utils';
import Loader from '@/components/Loader.vue';

describe('Loader.vue', () => {
  it('should to render', () => {
    const wrapper = shallowMount(Loader);
    expect(wrapper.exists()).toBe(true);
  });
});
