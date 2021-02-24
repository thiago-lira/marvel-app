import { shallowMount } from '@vue/test-utils';
import LogoApp from '@/components/LogoApp.vue';

describe('LogoApp.vue', () => {
  it('should to render', () => {
    const wrapper = shallowMount(LogoApp);
    expect(wrapper.exists()).toBe(true);
  });
});
