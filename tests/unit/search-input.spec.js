import { shallowMount } from '@vue/test-utils';
import SearchInput from '@/components/SearchInput.vue';

describe('SearchInput.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(SearchInput);
  });

  it('should to render', () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it('should allow to set an optionally placeholder', async () => {
    await wrapper.setProps({
      placeholder: 'Procure por heróis',
    });
    const input = wrapper.find('input');
    expect(input.element.placeholder).toEqual('Procure por heróis');
  });
});
