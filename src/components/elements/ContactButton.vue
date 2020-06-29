<template>
  <div>
    <div class="wrap-btn">
      <div class="btn-contact" v-b-modal.modal-contacto>
        <b-button variant="link" class="contact">Contacto</b-button>
      </div>
    </div>

    <b-modal id="modal-contacto" hide-backdrop hide-footer modal-cancel title="Contactanos" size="lg">
      <app-form></app-form>
    </b-modal>
  </div>
</template>


<script>
import Form from "../elements/Contacto.vue";
export default {
  components: {
    appForm: Form
  }
};
</script>
<style lang="scss" scooped>
@import "../../styles/_all.scss";
.wrap-btn {
  position: relative;
  cursor: pointer;
  .btn-contact {
    position: fixed;
    bottom: 15px;
    right: 30px;
    width: 110px;
    height: 110px;
    background-color: $baseBlue;
    border-radius: 100%;
    z-index: 10;
    transition: all 0.2s ease-in;
    outline: none;
    &:hover {
      background: #6d8db8;
      &::before {
        transform: rotate(15deg);
      }
      .contact {
        transform: rotate(-15deg);
      }
    }
    &::before {
      content: "";
      background-image: url(../../../src/assets/home/rueda-contactanos.svg);
      width: 94px;
      height: 94px;
      display: block;
      background-repeat: no-repeat;
      background-size: contain;
      left: 10px;
      top: 8px;
      position: absolute;
      transition: all 0.2s ease-in;
    }
    .contact {
      width: 35px;
      height: 35px;
      top: 37.5px;
      left: 37.5px;
      background-image: url(../../../src/assets/home/sobre.svg);
      background-repeat: no-repeat;
      background-size: contain;
      position: absolute;
      z-index: 50;
      text-indent: -9999px;
      transition: all 0.2s ease-in;
      &:focus {
        border: none;
        outline: none;
        box-shadow: none;
      }
    }
    &:focus {
      border: none;
      outline: none;
      box-shadow: none;
    }
  }
}
#modal-contacto {
  .modal-header {
    background-color: $baseBlue;
    border-bottom: none;
    //box-shadow: none;
    .modal-title {
      color: $white;
      font-size: 30px;
    }
    .close {
      position: absolute;
      top: 20px;
      right: 20px;
      color: $white;
      text-shadow: none;
      opacity: 1;
      &:hover {
        color: $sky;
      }
    }
  }
  .modal-body {
    background: $baseBlue;
    color: white;
  }
}
</style>