import { shallowMount } from '@vue/test-utils';
import HeroComics from '@/components/HeroComics.vue';

describe('Hero Comics.vue', () => {
  it('should to render', () => {
    const wrapper = shallowMount(HeroComics, {
      propsData: {
        title: 'Unit Testing',
        comics: [],
      },
    });

    expect(wrapper.exists()).toBe(true);
  });
});
