<template>
  <div class="slideOS container-fluid">
    <div class="w-slide">
      <h3 v-if="mainTitle">{{mainTitle}}</h3>
      <vueper-slides
        class="no-shadow"
        :visible-slides="5"
        :gap="3"
        :arrows-outside="true"
        :lazyLoadOnDrag="true"
        :bullets="false"
        :autoplay="true"
        :slide-ratio="1 / 6"
        :breakpoints="{ 768: { visibleSlides: 3 } }"
        :dragging-distance="200"
      >
      <vueper-slide v-for="(item, index) in items" :key="index" 
        :image="url + item.image"/>
      </vueper-slides>
    </div>
    <div class="w-btn">
      <b-button v-if="more" class="btn" id="show-btn" @click="$bvModal.show('bv-modal-OS')">VER TODAS</b-button>

      <b-modal id="bv-modal-OS" modal-class="w-modal" hide-backdrop hide-footer size="lg">
        <template v-slot:modal-title>OBRAS SOCIALES</template>
        <template v-slot:default>
        <b-row align-h="start">
          <b-col v-for="(item, index) in items" :key="index" cols="4" class="col-md-3 os-modal-wrapper" align-self="center">
            <img :src="url + item.image" style="width: 100%"/>
          </b-col>
        </b-row>
        </template>
      </b-modal>
    </div>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";

export default {
  props: {
    mainTitle: String,
    type: String,
    items: Array,
    more: Boolean
  },
  data: function () {
      return {
        url: ''
      };
  },
  created(){
    this.updateUrl(this.type)
  },
  methods: {
    updateUrl(type){
      let self = this;
      if (type == 'obrassociales'){
        self.url = '/src/assets/home/obrasSociales/';
      }
      if (type == 'marcasarmazones'){
        self.url = '/src/assets/especialidades/optica/marcas/';
      }
    }
  },
  components: { VueperSlides, VueperSlide }
};
</script>

<style lang="scss" scooped>
@import "../../styles/_all.scss";
.slideOS {
  background-color: $white;
  margin-top: -1px;
  padding-bottom: 50px;
  padding-left: 50px;
  padding-right: 50px;
  .w-slide {
    margin: 0 20px;
    @include respond-to(medium) {
      margin: 0 60px;
    }
    h3 {
      font-size: 30px;
      text-align: center;
      font-family: barlow;
      font-weight: 500;
      text-transform: uppercase;
      color: $baseBlue;
      padding: 30px 0;
      padding-top: 20px;
    }
    .vueperslides {
      .vueperslides__arrow {
        background-color: $lightGrey;
        border-radius: 100%;
        &.vueperslides__arrow--next {
          right: -3em;
        }
      }
      svg {
        width: 30px;
        padding: 10px;
      }
      .vueperslide {
        background-size: 50%;
        background-size: 70%;
        background-repeat: no-repeat;
        &.vueperslide--active {
          &.vueperslide--visible {
            background-size: 100%;
          }
        }
      }
    }
  }
  .w-btn {
    text-align: center;
    margin-top: 30px;
    @include respond-to(medium) {
      margin-top: 0;
    }
    .btn {
      border: 1px solid $baseBlue;
      background-color: $baseBlue;
      color: $white;
      margin: 0 auto;
      &:hover {
        border: 1px solid $sky;
        background-color: $sky;
      }
    }

  }
}
.modal-body {
  // padding-top: 30px;
  .os-modal-wrapper {
    padding: 10px;
    img {
      transform: scale(.8);
    }
  }
}

</style>