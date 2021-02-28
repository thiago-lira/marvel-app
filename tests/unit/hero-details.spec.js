import { shallowMount } from '@vue/test-utils';
import HeroDetails from '@/components/HeroDetails.vue';

describe('HeroDetails.vue', () => {
  it('should to render', () => {
    const wrapper = shallowMount(HeroDetails, {
      propsData: {
        character: { name: 'Spider-Man', description: 'É o piter parque', image: '/path/to/image.jpg' },
        comics: [],
      },
    });

    expect(wrapper.exists()).toBe(true);
  });
});
