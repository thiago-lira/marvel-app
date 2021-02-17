import { shallowMount } from '@vue/test-utils';
import SearchPaginate from '@/components/SearchPaginate.vue';

describe('SearchPaginate.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(SearchPaginate, {
      propsData: {
        totalPages: 3,
      },
    });
  });

  it('should to render', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should to render buttons based on totalPage props', () => {
    expect(wrapper.findAll('[data-page-button]').length).toEqual(3);
  });

  it('should to emit an event with page number as payload', async () => {
    const firstButton = wrapper.find('button');
    firstButton.trigger('click');

    await wrapper.vm.$nextTick();

    expect(wrapper.emitted()['page-has-clicked'][0][0]).toEqual(1);
  });
});
