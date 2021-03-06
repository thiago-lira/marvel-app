import { shallowMount } from '@vue/test-utils';
import SearchContainer from '@/components/SearchContainer.vue';
import SearchCard from '@/components/SearchCard.vue';

describe('SearchContainer.vue', () => {
  let wrapper;
  const hulk = { name: 'O Incrível Hurgui', id: 123, image: 'path/to/image.jpg' };
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
    wrapper.vm.$addMessage = () => {};
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
    await wrapper.setProps({
      heroes: [hulk],
    });
    const searchCard = wrapper.findComponent(SearchCard);
    searchCard.vm.$emit('toggleFavorite', { ...hulk, favorite: true });

    await wrapper.vm.$nextTick();

    expect(wrapper.vm.favoritesId).toEqual([123]);
  });

  it('should remove id character in favoritesId list', async () => {
    await wrapper.setData({
      favoritesId: [123],
    });
    await wrapper.setProps({
      heroes: [hulk],
    });
    const searchCard = wrapper.findComponent(SearchCard);
    searchCard.vm.$emit('toggleFavorite', { ...hulk, favorite: true });

    await wrapper.vm.$nextTick();

    expect(wrapper.vm.favoritesId).toEqual([]);
  });

  it('should not include character id in favorites list when it already has 5 items', async () => {
    await wrapper.setData({
      favoritesId: [1, 2, 3, 4, 5],
    });
    await wrapper.setProps({
      heroes: [hulk],
    });
    const searchCard = wrapper.findComponent(SearchCard);
    searchCard.vm.$emit('toggleFavorite', { ...hulk, favorite: true });

    await wrapper.vm.$nextTick();

    expect(wrapper.vm.favoritesId).toEqual([1, 2, 3, 4, 5]);
  });

  it('should to emit "toggleFavorite" when to listen "toggleFavorite" SearchCard event', async () => {
    await wrapper.setProps({
      heroes: [hulk],
    });

    const searchCard = wrapper.findComponent(SearchCard);
    const payload = { ...hulk, favorite: true };
    searchCard.vm.$emit('toggleFavorite', payload);

    await wrapper.vm.$nextTick();

    expect(wrapper.emitted().toggleFavorite[0][0]).toEqual(payload);
  });

  it('should to show a "no results" message when characters list is empty', () => {
    expect(wrapper.find('[data-no-results]').exists()).toBe(true);
  });

  it('should to listen "detailsClick" from SearchCard and to emit "detailsClick" event', async () => {
    await wrapper.setProps({
      heroes: [hulk],
    });
    const searchCard = wrapper.findComponent(SearchCard);
    await searchCard.vm.$emit('detailsClick', hulk);

    await wrapper.vm.$nextTick();

    expect(wrapper.emitted().detailsClick[0][0]).toEqual(hulk);
  });
});
