import debounce from 'lodash/debounce'
export default {
  install: function (app) {
    /**
     * @description: 表单防止重复提交指令
     * @param {*}
     * @return {*}
     * @author: gumingchen
     */
    app.directive('debounce', {
      mounted(el, binding) {
        // const func = debounce(binding.value, 5000)
        // el.addEventListener('click', func);
        el.addEventListener('click', debounce(() => { binding.value }, 1000, { leading: true, trailing: false }))
      }
    })
  }
}