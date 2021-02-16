import { shallowMount } from '@vue/test-utils';
import Toast from '@/components/Toast.vue';

describe('Toast.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Toast);
  });

  it('should to render', () => {
    expect(wrapper.exists()).toEqual(true);
  });
});
