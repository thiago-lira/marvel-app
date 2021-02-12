import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import HeaderHome from '@/components/HeaderHome.vue';

describe('HeaderHome.vue', () => {
  it('should to exist', () => {
    const wrapper = shallowMount(HeaderHome);
    expect(wrapper.exists()).to.equal(true);
  });
});
