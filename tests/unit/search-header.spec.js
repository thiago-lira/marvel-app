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

  it('should show a result message using plural', () => {
    expect(wrapper.text()).to.include('Encontrados 2 heróis');
  });

  it('should show a result message using singular', () => {
    wrapper = shallowMount(SearchHeader, {
      propsData: {
        totalHeroes: 1,
      },
    });
    expect(wrapper.text()).to.include('Encontrado 1 herói');
  });
});
