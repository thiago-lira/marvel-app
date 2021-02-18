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

  it('should to show buttons pagination with page number', () => {
    expect(wrapper.findAll('[data-page-button]').at(2).text()).toEqual('3');
  });

  it('should to emit an event with page number as payload', async () => {
    const firstButton = wrapper.find('button');
    firstButton.trigger('click');

    await wrapper.vm.$nextTick();

    expect(wrapper.emitted()['page-has-clicked'][0][0]).toEqual(1);
  });

  // TODO: Para as 4 últimas páginas não deve exibir reticências no meio da paginação

  it('should to render 4 buttons when totalPages > 5', async () => {
    await wrapper.setProps({
      totalPages: 10,
    });

    expect(wrapper.findAll('[data-page-button]').length).toBe(4);
  });

  it('should to render "10" as text to the last button when totalPages > 5', async () => {
    await wrapper.setProps({
      totalPages: 10,
    });

    expect(wrapper.findAll('[data-page-button]').at(3).text()).toBe('10');
  });
});
