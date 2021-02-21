import { shallowMount } from '@vue/test-utils';
import Toggle from '@/components/Toggle.vue';

describe('Toggle.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Toggle);
  });

  it('should to render', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should to apply "active" class when click on toggle', async () => {
    const toggle = wrapper.find('a');

    toggle.trigger('click');

    await wrapper.vm.$nextTick();

    expect(toggle.classes().includes('active')).toBe(true);
  });

  it('should to remove "active" class when click on toggle', async () => {
    await wrapper.setData({
      currentActive: true,
    });

    const toggle = wrapper.find('a');

    toggle.trigger('click');

    await wrapper.vm.$nextTick();

    expect(toggle.classes().includes('active')).toBe(false);
  });
});
