<template>
  <div>
    <b-modal
      @ok="handleOk"
      ref="modal-store"
      id="modal-footer-sm"
      :title="title"
      button-size="sm"
    >
      <b-form @submit.prevent="save">
        <div class="pl-lg-4">
          <b-row>
            <b-col lg="6">
              <form-group
                id="input-group-nome"
                label="Nome:"
                label-for="input-nome"
                label-class="form-control-nome"
                required
              >
                <b-form-input
                  id="input-group-nome"
                  v-model="contato.nome"
                  type="text"
                  name="nome"
                  required
                ></b-form-input>
              </form-group>
            </b-col>
            <b-col lg="6">
              <form-group
                id="input-group-email"
                label="Email:"
                label-for="input-email"
                label-class="form-control-email"
                required
              >
                <b-form-input
                  id="input-group-email"
                  v-model="contato.email"
                  type="email"
                  name="email"
                  required
                ></b-form-input>
              </form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col lg="6">
              <form-group
                id="input-group-telefone"
                label="Telefone:"
                label-for="input-3"
                label-class="form-control-label"
                required
              >
                <b-form-input
                  id="input-group-telefone"
                  v-model="contato.telefone"
                  type="text"
                  name="telefone"
                  required
                  v-mask="['(##) ####-####', '(##) #####-####']"
                ></b-form-input>
              </form-group>
            </b-col>
            <b-col lg="6">
              <form-group
                id="input-group-3"
                label="Sexo:"
                name="sexo"
                label-class="form-control-label"
                required
              >
                <b-form-select
                  required
                  v-model="contato.sexo"
                  :options="options"
                >
                </b-form-select>
              </form-group>
            </b-col>
          </b-row>
        </div>
      </b-form>
    </b-modal>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
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
            :sub-title="sizeItems.toString()"
            icon="ni ni-chart-pie-35"
            class="mb-4"
          >
            <template slot="footer">
              <span class="text-success mr-2">{{ items.length }}</span>
              <span class="text-nowrap">contatos em sua Agenda</span>
            </template>
          </stats-card>
        </b-col>
      </b-row>
      <b-row center>
        <b-col xl="8" md="6" class="float-center">
          <b-form-group class="mb-0">
            <b-input-group class="input-group-alternative input-group-merge">
              <b-form-input
                v-model="searchTerm"
                placeholder="Procure um contato"
                type="text"
                @keyup="getsearchTerm"
              >
              </b-form-input>

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
          <card header-classes="bg-transparent" class="size-card-min">
            <b-row align-v="center" slot="header">
              <b-col cols="8">
                <h3 class="mb-0">Contatos</h3>
              </b-col>
              <b-col cols="4" class="text-right">
                <b-button
                  class="btn btn-sm btn-primary"
                  @click="modalShow(true)"
                  >NOVO</b-button
                >
              </b-col>
            </b-row>
            <b-row class="icon-examples">
              <b-col
                lg="4"
                md="6"
                class="pt-5"
                v-for="item in items"
                :key="item.id"
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
                          <b-img src="img/theme/contato.png" rounded="circle" />
                        </a>
                      </div>
                    </b-col>
                  </b-row>

                  <b-card-header
                    class="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4"
                  >
                    <div class="d-flex justify-content-between">
                      <b-button
                        class="btn btn-sm btn-info mr-4"
                        @click="editar(item)"
                        ><i class="fas fa-edit"></i> Editar</b-button
                      >
                      <b-button
                        href="#"
                        class="btn btn-sm btn-danger float-right"
                        @click="deletar(item)"
                        ><i class="fas fa-trash"></i> Deletar</b-button
                      >
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
                        >, <span class="font-weight-light">sexo: </span
                        >{{ item.sexo }}
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
  </div>
</template>
<script>
import Vue from "vue";
import VueClipboard from "vue-clipboard2";
import BaseHeader from "@/components/BaseHeader";
import ModalStore from "../components/ModalStore";
import FormGroup from "../components/FormGroup";
import FormMixin from "../mixins/FormMixin";
import { mask } from "vue-the-mask";

Vue.use(VueClipboard);
export default {
  name: "Contacts",
  components: {
    BaseHeader,
    ModalStore: "modal",
    FormGroup,
  },
  mixins: [FormMixin],
  directives: { mask },
  data() {
    return {
      searchTerm: "",
      title: "CADASTRO DE CONTATOS",
      contato: {},
      options: [
        { text: "Feminino", value: "F" },
        { text: "Masculino", value: "M" },
      ],
      items: [],
      method: "",
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
        .get("/contact")
        .then((res) => {
          this.items = res.data;
        })
        .catch((err) => {
          this.$notify({
            type: "danger",
            message: "Erro ao buscar",
          });
        });
    },
    editar(item) {
      this.contato = { ...item };
      this.title = "EDITAR CONTATO";
      this.method = "put";
      this.modalShow();
    },
    save() {
      this.axios
        .post("/contact", this.contato)
        .then((res) => {
          this.$notify({
            type: "success",
            message: "Cadastrado com sucesso.",
          });
          this.contato = {};
          this.modalClose();
          this.getContatos();
        })
        .catch((error) => {
          this.showErrors(error);
          this.$notify({
            type: "danger",
            message: "Erro ao Cadastrar "+error.response.data.title,
          });
        });
    },
    update() {
      this.axios
        .put("/contact/" + this.contato.id, this.contato)
        .then((res) => {
          this.$notify({
            type: "success",
            message: "Atualizado com sucesso.",
          });
          this.contato = {};
          this.modalClose();
          this.getContatos();
        })
        .catch((error) => {
          this.showErrors(error);
          this.$notify({
            type: "danger",
            message: "Erro ao Atualizar contato.",
          });
        });
    },
    deletar(item) {
      this.contato = { ...item };
      let text = `Você realamente deseja deletar o ${this.contato.nome}`;
      this.$toast.question(text, "Atenção", {
        timeout: 20000,
        close: false,
        overlay: true,
        toastOnce: true,
        id: "question",
        zindex: 999,
        position: "center",
        buttons: [
          [
            "<button><b>Sim</b></button>",
            (instance, toast) => {
              this.delete(this.contato.id);
              instance.hide({ transitionOut: "fadeOut" }, toast, "button");
            },
            true,
          ],
          [
            "<button>Não</button>",
           (instance, toast) => {
              instance.hide({ transitionOut: "fadeOut" }, toast, "button");
            },
          ],
        ],
        onClosing: function (instance, toast, closedBy) {
        },
        onClosed: function (instance, toast, closedBy) {
        },
      });
    },
    delete(id) {
      this.axios
        .delete("/contact/" + id)
        .then((res) => {
          this.$notify({
            type: "success",
            message: "Deletado com sucesso.",
          });
          this.contato = {};
          this.getContatos();
          this.modalClose();
        })
        .catch((err) => {
          this.$notify({
            type: "danger",
            message: "Erro ao deletar contato.",
          });
        });
    },
    modalShow(novo = null) {
      if (novo) {
        (this.title = "CADASTRO DE CONTATOS"), (this.method = "");
        this.contato = {};
      }
      this.$refs["modal-store"].show();
    },
    modalClose() {
      this.$refs["modal-store"].hide();
    },
    handleOk(bvModalEvt) {
      bvModalEvt.preventDefault();
      if (this.method == "put") {
        this.update();
      } else {
        this.save();
      }
    },
    getsearchTerm(event) {
        this.axios
          .get(`/contact/search?searchTerm=${event.target.value}`)
          .then((res) => {
            this.items = res.data;
          })
          .catch((err) => {
            this.$notify({
              type: "danger",
              message: "Erro ao Pesquisar",
            });
          });
      }
    },
    computed: {
      sizeItems() {
        return this.items.length.toString();
      },
    },
  mounted() {
    this.getContatos();
  },
};
</script>
<style scoped>
.size-card-min{
  min-height: 300px;
}
</style>>
