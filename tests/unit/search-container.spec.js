import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import SearchContainer from '@/components/SearchContainer.vue';

describe('SearchContainer.vue', () => {
  it('should to instantiate', () => {
    const wrapper = shallowMount(SearchContainer);
    expect(wrapper.exists()).to.equal(true);
  });
});
