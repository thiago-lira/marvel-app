import { shallowMount } from '@vue/test-utils';
import SearchHeader from '@/components/SearchHeader.vue';

describe('SearchHeader.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(SearchHeader, {
      propsData: {
        totalHeroes: 2,
      },
    });
  });

  it('should to instantiate', () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it('should show a result message using plural', () => {
    expect(wrapper.text()).toContain('Encontrados 2 heróis');
  });

  it('should show a result message using singular', async () => {
    await wrapper.setProps({ totalHeroes: 1 });

    expect(wrapper.text()).toContain('Encontrado 1 herói');
  });

  it('should show to emit an event called "clickedFav" when click on fav button"', async () => {
    const favButton = wrapper.find('[data-fav-button]');
    favButton.trigger('click');

    await wrapper.vm.$nextTick();

    expect(wrapper.emitted().clickedFav[0]).toEqual([]);
  });
});
