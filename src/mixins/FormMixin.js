export default {
  methods: {
      showErrors(error, form = null) {
          if (error.response.status === 400) {
              Object.values(error.response.data.fields).forEach(error => {
                  console.log(error);
                  let legend, errorElement;
                  legend = (form || document).querySelector(`[data-legend=${error['name']}]`);
                  errorElement = (form || document).querySelector(`[data-error=${error['name']}]`);
                  if (legend) legend.classList.add('text-danger');
                  if (errorElement) errorElement.innerHTML = error['message'];
              });
          }
      },

      reset() {
          Object.assign(this.$data, this.$options.data.apply(this));
      },
  }
}
