import { shallowMount } from '@vue/test-utils';
import SearchContainer from '@/components/SearchContainer.vue';
import SearchCard from '@/components/SearchCard.vue';

describe('SearchContainer.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(SearchContainer, {
      data() {
        return {
          favoritesId: [],
        };
      },
      propsData: {
        isLoading: false,
        heroes: [],
      },
    });
  });

  it('should to instantiate', () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it('should not to have characters card when heroes prop is empty', () => {
    expect(wrapper.find('.search-card').exists()).toEqual(false);
  });

  it('should to have characters card when heroes props is not empty', async () => {
    await wrapper.setProps({
      heroes: [
        { name: 'O Incrível Hurgui', id: 123, image: 'path/to/image.jpg' },
        { name: 'Loboverine', id: 321, image: 'path/to/image.jpg' },
      ],
    });
    expect(wrapper.findAllComponents(SearchCard).length).toEqual(2);
  });

  it('should include id character in favoritesId list', async () => {
    const hurgui = { name: 'O Incrível Hurgui', id: 123, image: 'path/to/image.jpg' };
    await wrapper.setProps({
      heroes: [hurgui],
    });
    const searchCard = wrapper.findComponent(SearchCard);
    searchCard.vm.$emit('toggleFavorite', { ...hurgui, favorite: true });

    await wrapper.vm.$nextTick();

    expect(wrapper.vm.favoritesId).toEqual([123]);
  });

  it('should remove id character in favoritesId list', async () => {
    const hurgui = { name: 'O Incrível Hurgui', id: 123, image: 'path/to/image.jpg' };
    await wrapper.setData({
      favoritesId: [123],
    });
    await wrapper.setProps({
      heroes: [hurgui],
    });
    const searchCard = wrapper.findComponent(SearchCard);
    searchCard.vm.$emit('toggleFavorite', { ...hurgui, favorite: true });

    await wrapper.vm.$nextTick();

    expect(wrapper.vm.favoritesId).toEqual([]);
  });

  it('should not include character id in favorites list when it already has 5 items', async () => {
    const hurgui = { name: 'O Incrível Hurgui', id: 123, image: 'path/to/image.jpg' };
    await wrapper.setData({
      favoritesId: [1, 2, 3, 4, 5],
    });
    await wrapper.setProps({
      heroes: [hurgui],
    });
    const searchCard = wrapper.findComponent(SearchCard);
    searchCard.vm.$emit('toggleFavorite', { ...hurgui, favorite: true });

    await wrapper.vm.$nextTick();

    expect(wrapper.vm.favoritesId).toEqual([1, 2, 3, 4, 5]);
  });

  it('should to emit "toggleFavorite" when to listen "toggleFavorite" SearchCard event', async () => {
    const hulk = { name: 'O Incrível Hurgui', id: 123, image: 'path/to/image.jpg' };

    await wrapper.setProps({
      heroes: [hulk],
    });

    const searchCard = wrapper.findComponent(SearchCard);
    searchCard.vm.$emit('toggleFavorite', { ...hulk, favorite: true });

    await wrapper.vm.$nextTick();

    expect(wrapper.emitted().toggleFavorite[0]).toEqual([]);
  });
});
