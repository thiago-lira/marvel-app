import { shallowMount } from '@vue/test-utils';
import HeaderDetails from '@/components/HeaderDetails.vue';

describe('HeaderDetails.vue', () => {
  it('should to render', () => {
    const wrapper = shallowMount(HeaderDetails);

    expect(wrapper.exists()).toBe(true);
  });
});
