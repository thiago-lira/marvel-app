import { shallowMount } from '@vue/test-utils';
import HeroDetails from '@/components/HeroDetails.vue';

describe('HeroDetails.vue', () => {
  it('should to render', () => {
    const wrapper = shallowMount(HeroDetails);

    expect(wrapper.exists()).toBe(true);
  });
});
