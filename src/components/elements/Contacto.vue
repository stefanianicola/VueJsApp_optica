<template>
  <b-row class="contact-modal-wrapper">

    <b-col sm="6">
      <!-- <h3>{{titleForm}}</h3> -->
      <p v-if="!isProcessed">{{textForm}}</p>

      <div class="loading-form" v-if="isLoading">
        <app-spinner></app-spinner>
      </div>

      <form v-if="!isProcessed" class="contact-form text-center" :class="{ loading : isLoading }">
        <input v-model="form[nameInput.name]" :placeholder="nameInput.label" />
        <input v-model="form[emailInput.name]" :placeholder="emailInput.label" />
        <input v-model="form[telInput.name]" :placeholder="telInput.label" />
        <input v-model="form[celInput.name]" :placeholder="celInput.label" />

        <b-form-textarea
          id="textarea-no-resize"
          :placeholder="messageInput.label"
          v-model="form[messageInput.name]"
          rows="3"
          no-resize
        ></b-form-textarea>

        <button v-if="!isProcessed" @click.prevent="getAllData()">{{sendButton}}</button>
      </form>
      <p class="text-center mt-5">
        <span v-if="showResult">{{formResult}}</span>
      </p>
      <p v-if="isProcessed" class="sent-success text-center">{{sentSuccess}}</p>
    </b-col>
    <b-col sm="6">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3005.150107099482!2d-58.4006190220583!3d-34.77727018864301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd2e14ecceddb%3A0xc54793e3a722255d!2sCentro%20%C3%93ptico%20Falconaro!5e0!3m2!1ses!2sar!4v1591553816310!5m2!1ses!2sar"
        width="100%"
        height="100%"
        frameborder="0"
        style="border:0;"
        allowfullscreen
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </b-col>
  </b-row>
</template>

<script>
import * as text from "../../assets/texts";
import Spinner from "./../elements/Spinner.vue";
export default {
  data: function() {
    return {
      form: {}, // create an object to hold all form values
      isProcessed: false,
      isLoading: false,
      formResult: "",
      showResult: false,
      titleForm: text.FORM_CONTACTO_TITLE,
      textForm: text.FORM_CONTACTO_TEXT,
      nameInput: { name: "name", label: text.FORM_CONTACTO_NAME },
      emailInput: { name: "email", label: text.FORM_CONTACTO_EMAIL },
      telInput: { name: "tel", label: text.FORM_CONTACTO_TEL },
      celInput: { name: "cel", label: text.FORM_CONTACTO_CEL },
      messageInput: { name: "message", label: text.FORM_CONTACTO_MESSAGE },
      sendButton: text.FORM_CONTACTO_SEND,
      sentSuccess: text.FORM_SENT_SUCCESS
    };
  },
  methods: {
    getAllData() {
      var formData = this.form;
      this.showResult = true;
      this.isLoading = true;
      console.log(formData);
      if (!formData.name || !formData.email || !formData.message) {
        this.formResult = "Complete todos los campos obligatorios.";
        this.isLoading = false;
      } else {
        this.$http
          .post(
            "/API/send/",
            {
              name: formData.name,
              email: formData.email,
              tel: formData.tel,
              cel: formData.cel,
              message: formData.message
            },
            { emulateJSON: true }
          )
          .then(data => {
            console.log(data);
            this.formResult = data.data.message;
            this.isProcessed = true;
            this.isLoading = false;
          })
          .catch(err => {
            console.log("Error", err);
            this.formResult = err.data.message;
            this.isLoading = false;
          });
      }
    }
  },
  components: {
    appSpinner: Spinner
  }
};
</script>

<style lang="scss" scooped>
@import "../../styles/_all.scss";
.loading-form {
  position: absolute;
  width: 100%;
  z-index: 1;
  top: 0;
  left: 0;
  height: 100%;
}
.contact-form {
  input,
  textarea {
    display: block;
    width: 100%;
    border: none;
    background: transparent;
    border-bottom: 1px solid $white;
    color: $white;
    margin-bottom: 20px;
    padding: 5px 0;
    border-radius: 0;
    opacity: 0.6;
    &:focus {
      box-shadow: none;
      outline: none;
      background: transparent;
      opacity: 1;
    }
  }
  button {
    background: $sky;
    color: $white;
    text-transform: uppercase;
    border: 1px solid $white;
    border-radius: 5px;
    min-width: 150px;
    height: 50px;
    cursor: pointer;
    &:hover {
      background: $baseBlue;
    }
  }
  ::-webkit-input-placeholder,  /* Edge */
  :-ms-input-placeholder /* Internet Explorer 10-11 */
  ::placeholder {
    color: $white;
  }
  &.loading {
    opacity: 0.2;
    pointer-events: none;
  }
}
.sent-success {
  margin-bottom: 300px;
  min-height: 50px;
}
</style>