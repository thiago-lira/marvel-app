import { shallowMount } from '@vue/test-utils';
import HeroDetails from '@/components/HeroDetails.vue';

describe('HeroDetails.vue', () => {
  const character = {
    id: 123456,
    name: 'Spider-Man',
    description: 'É o piter parque',
    image: '/path/to/image.jpg',
  };

  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(HeroDetails, {
      propsData: {
        character,
        comics: [],
      },
    });
  });

  it('should to render', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should to set a character as favorite', async () => {
    const favButton = wrapper.find('[data-fav-button]');
    await favButton.trigger('click');

    expect(wrapper.emitted().toggleFavorite[0][0]).toEqual(character);
  });
});
