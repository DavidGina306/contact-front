<template>
  <div>
    <b-modal
      v-model="modalShow"
      id="modal-1"
      >
      <card>
        <b-row align-v="center" slot="header">
          <b-col cols="8">
            <h3 class="mb-0">Edit profile</h3>
          </b-col>
          <b-col cols="4" class="text-right">
            <a href="#!" class="btn btn-sm btn-primary">Settings</a>
          </b-col>
        </b-row>

        <b-form @submit.prevent="updateProfile">
          <h6 class="heading-small text-muted mb-4">Contato</h6>

          <div class="pl-lg-4">
            <b-row>
              <b-col lg="6">
                <base-input
                  type="text"
                  label="Nome"
                  placeholder="Nome"
                  v-model="contato.nome"
                >
                </base-input>
              </b-col>
              <b-col lg="6">
                <base-input
                  type="email"
                  label="Email address"
                  placeholder="mike@email.com"
                  v-model="contato.email"
                >
                </base-input>
              </b-col>
            </b-row>
            <b-row>
              <b-col lg="6">
                <base-input
                  type="text"
                  label="First Name"
                  placeholder="First Name"
                  v-model="contato.firstName"
                >
                </base-input>
              </b-col>
              <b-col lg="6">
                <base-input
                  type="text"
                  label="Last Name"
                  placeholder="Last Name"
                  v-model="contato.lastName"
                >
                </base-input>
              </b-col>
            </b-row>
          </div>

          <hr class="my-4" />
          <!-- Description -->
          <h6 class="heading-small text-muted mb-4">About me</h6>
          <div class="pl-lg-4">
            <b-form-group
              label="About Me"
              label-class="form-control-label"
              class="mb-0"
              label-for="about-form-textaria"
            >
              <!--  <label class="form-control-label">About Me</label> -->
              <b-form-textarea
                rows="4"
                value="A beautiful premium dashboard for BootstrapVue."
                id="about-form-textaria"
                placeholder="A few words about you ..."
              ></b-form-textarea>
            </b-form-group>
          </div>
        </b-form>
      </card>
    </b-modal>
  </div>
</template>
<script>
export default {
  name: "modalstore",
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    },
  },
  data() {
    return {
      modalShow: false,
    };
  },
};
</script>
