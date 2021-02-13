import { expect } from 'chai';
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
    expect(wrapper.exists()).to.equal(true);
  });

  it('should show total result', () => {
    expect(wrapper.text()).to.include('Encontrados 2 heróis');
  });
});
