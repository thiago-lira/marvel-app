import { shallowMount } from '@vue/test-utils';
import HeroComics from '@/components/HeroComics.vue';

describe('Hero Comics.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(HeroComics, {
      propsData: {
        title: 'Unit Testing',
        comics: [],
      },
    });
  });

  it('should to render', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should to render all comics received', async () => {
    await wrapper.setProps({
      title: 'Unit Testing',
      comics: [
        { url: '/path/to/image.jpg' },
        { url: '/path/to/image-2.jpg' },
      ],
    });

    const comics = wrapper.findAll('[data-comic-image]');
    expect(comics.length).toEqual(2);
  });
});
