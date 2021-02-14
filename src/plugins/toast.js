import Toast from '@/components/Toast.vue';

export default {
  install(Vue) {
    const vueConstructor = Vue;
    const Component = vueConstructor.extend({
      extends: Toast,
    });

    const createParentsHtml = () => {
      const div = document.createElement('div');
      const containerDiv = document.createElement('div');

      div.appendChild(containerDiv);
      div.id = 'toast-plugin';

      return [div, containerDiv];
    };

    let toastInstance;
    const createToast = () => {
      const [div, containerDiv] = createParentsHtml();

      document.body.appendChild(div);

      toastInstance = new Component();
      toastInstance.$mount(containerDiv);
    };

    vueConstructor.prototype.$addMessage = function addMessage(message) {
      const toastDiv = document.getElementById('toast-plugin');
      if (!toastDiv) {
        createToast();
      }

      toastInstance.addMessage(message);
    };
  },
};
