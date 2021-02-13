import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import SearchContainer from '@/components/SearchContainer.vue';
import SearchCard from '@/components/SearchCard.vue';

describe('SearchContainer.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(SearchContainer, {
      propsData: {
        heroes: [],
      },
    });
  });

  it('should to instantiate', () => {
    expect(wrapper.exists()).to.equal(true);
  });

  it('should not to have characters card when heroes prop is empty', () => {
    expect(wrapper.find('.search-card').exists()).to.equal(false);
  });

  it('should to have characters card when heroes props is not empty', async () => {
    await wrapper.setProps({
      heroes: [
        { name: 'O Incrível Hurgui', id: 123, image: 'path/to/image.jpg' },
        { name: 'Loboverine', id: 321, image: 'path/to/image.jpg' },
      ],
    });
    expect(wrapper.findAllComponents(SearchCard).length).to.equal(2);
  });
});
