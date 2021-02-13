import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import SearchInput from '@/components/SearchInput.vue';

describe('SearchInput.vue', () => {
  it('should to render', () => {
    const wrapper = shallowMount(SearchInput);
    expect(wrapper.exists()).to.equal(true);
  });

  it('should allow to set an optionally placeholder', async () => {
    const wrapper = shallowMount(SearchInput, {
      propsData: {
        placeholder: 'Procure por heróis',
      },
    });
    const input = wrapper.find('input');
    expect(input.element.placeholder).to.equal('Procure por heróis');
  });

  it('should to pass input value when "input" event is emitted', async () => {
    const wrapper = shallowMount(SearchInput);
    const input = wrapper.find('input');
    input.element.value = 'A';
    input.trigger('keyup');

    await wrapper.vm.$nextTick();

    expect(wrapper.emitted().input[0]).to.eql(['A']);
  });
});
