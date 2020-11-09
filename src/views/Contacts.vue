<template>
  <div>
    <!-- BootstrapVue Done -->
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <!-- Card stats -->
      <b-row>
        <b-col xl="4" md="6">
          <stats-card
            title="Total de Contatos"
            type="gradient-red"
            :sub-title="sizeItems.toString()"
            icon="ni ni-active-40"
            class="mb-4"
          >
            <template slot="footer">
              <span class="text-success mr-2">{{ items.length }}</span>
              <span class="text-nowrap">contatos em sua Agenda</span>
            </template>
          </stats-card>
        </b-col>
        <b-col xl="4" md="6">
          <stats-card
            title="Adicionados Hoje"
            type="gradient-orange"
            sub-title="2,356"
            icon="ni ni-chart-pie-35"
            class="mb-4"
          >
            <template slot="footer">
              <span class="text-success mr-2">12.18%</span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </b-col>
        <b-col xl="4" md="6">
          <stats-card
            title="Adicionados Mês"
            type="gradient-green"
            sub-title="924"
            icon="ni ni-money-coins"
            class="mb-4"
          >
            <template slot="footer">
              <span class="text-danger mr-2">5.72%</span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </b-col>
      </b-row>
      <b-row center>
        <b-col xl="8" md="6" class="float-center">
          <b-form-group class="mb-0">
            <b-input-group class="input-group-alternative input-group-merge">
              <b-form-input placeholder="Search" type="text"> </b-form-input>

              <div class="input-group-append">
                <span class="input-group-text"
                  ><i class="fas fa-search"></i
                ></span>
              </div>
            </b-input-group>
          </b-form-group>
        </b-col>
      </b-row>
    </base-header>

    <b-container fluid class="mt--7">
      <b-row class="justify-content-center">
        <b-col lg="12">
          <card header-classes="bg-transparent">
            <b-row align-v="center" slot="header">
              <b-col cols="8">
                <h3 class="mb-0">Contatos</h3>
              </b-col>
              <b-col cols="4" class="text-right">
                <a href="#!" class="btn btn-sm btn-primary">NOVO</a>
              </b-col>
            </b-row>
            <b-row class="icon-examples">
              <b-col
                v-for="item in items"
                :key="item"
                lg="4"
                md="6"
                class="pt-5"
              >
                <b-card
                  no-body
                  class="card-profile"
                  alt="Image placeholder"
                  img-top
                >
                  <b-row class="justify-content-center">
                    <b-col lg="3" class="order-lg-2">
                      <div class="card-profile-image">
                        <a href="#">
                          <b-img src="img/theme/team-4.jpg" rounded="circle" />
                        </a>
                      </div>
                    </b-col>
                  </b-row>

                  <b-card-header
                    class="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4"
                  >
                    <div class="d-flex justify-content-between">
                      <a href="#" class="btn btn-sm btn-info mr-4">Editar</a>
                    </div>
                  </b-card-header>

                  <b-card-body class="pt-0">
                    <b-row>
                      <b-col>
                        <div
                          class="card-profile-stats d-flex justify-content-center mt-md-5"
                        >
                          <!-- <div>
                            <span class="heading">22</span>
                            <span class="description">Friends</span>
                          </div>
                          <div>
                            <span class="heading">10</span>
                            <span class="description">Photos</span>
                          </div>
                          <div>
                            <span class="heading">89</span>
                            <span class="description">Comments</span>
                          </div> -->
                        </div>
                      </b-col>
                    </b-row>
                    <div class="text-center">
                      <h5 class="h3">
                        <span class="font-weight-light">{{ item.nome }}</span
                        >, {{ item.sexo }}
                      </h5>
                      <div class="h5 font-weight-300">
                        <i class="ni location_pin mr-2"></i>{{ item.email }}
                      </div>
                      <div>
                        <i class="ni education_hat mr-2"></i>{{ item.telefone }}
                      </div>
                    </div>
                  </b-card-body>
                </b-card>
              </b-col>
            </b-row>
          </card>
        </b-col>
      </b-row>
    </b-container>
    <modal></modal>
  </div>
</template>
<script>
import Vue from "vue";
import VueClipboard from "vue-clipboard2";
import BaseHeader from "@/components/BaseHeader";
import { BaseNav, Modal } from "@/components";
Vue.use(VueClipboard);
export default {
  name: "contatcs",
  components: {
    BaseHeader,
    Modal,
  },
  data() {
    return {
      items: [
        {
          nome: "David felipe",
          telefone: "929999",
          sexo: "M",
          email: "dasdsa@dhasdhasu.com",
        },
        {
          nome: "Roberson",
          telefone: "929999",
          sexo: "M",
          email: "rob@dhasdhasu.com",
        },
      ],
    };
  },
  methods: {
    onCopy() {
      this.$notify({
        type: "info",
        message: "Copied to clipboard",
      });
    },
    getContatos() {
      this.axios
        .get("http://127.0.0.1:9090/contact")
        .then((res) => {
          this.items = res.data;
        })
        .catch((err) => {
          this.$notify({
            type: "error",
            message: "Erro ao buscar",
          });
        });
    },
  },
  computed: {
    sizeItems() {
      return this.items.length;
    },
  },
  mounted() {
    this.getContatos();
  },
};
</script>
<style></style>
