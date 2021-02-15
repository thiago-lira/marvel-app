import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import SearchCard from '@/components/SearchCard.vue';

describe('SearchCard.vue', () => {
  let wrapper;
  let hero;
  beforeEach(() => {
    hero = {
      id: 123,
      name: 'Chico Xavier',
      image: 'path/to/image.jpg',
    };
    wrapper = shallowMount(SearchCard, {
      propsData: {
        isFavorite: false,
        hero,
      },
    });
  });

  it('should to render', async () => {
    expect(wrapper.exists()).to.equal(true);
  });

  it('should to render the character name', () => {
    expect(wrapper.text()).to.contains('Chico Xavier');
  });

  it('should to render the character image', () => {
    expect(wrapper.find('img').attributes('src')).to.equal('path/to/image.jpg');
  });

  it('should to emit "toggleFavorite" event', async () => {
    const button = wrapper.find('button');
    button.trigger('click');

    await wrapper.vm.$nextTick();

    const expectedData = {
      ...hero,
      favorite: true,
    };
    expect(wrapper.emitted().toggleFavorite[0]).to.eql([expectedData]);
  });
});
