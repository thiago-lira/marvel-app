import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import SearchHeader from '@/components/SearchHeader.vue';

describe('SearchHeader.vue', () => {
  it('should to instantiate', () => {
    const wrapper = shallowMount(SearchHeader);
    expect(wrapper.exists()).to.equal(true);
  });
});
