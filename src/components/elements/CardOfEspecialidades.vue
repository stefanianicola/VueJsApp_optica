<template>
    <router-link class="col p-0 card-wrapper" :to='link' :class="{ 'd-none' : especialidad.listOfEspecialidades_homeTitle == 'Insumos Medicos' }">
        <div class="card-item cardMob d-block d-md-none" :style="'background-image: url(src/assets/home/especialidades/' + especialidad.listOfEspecialidades_homeImgMob + ')'"></div>
        <div class="card-item cardDsk d-none d-md-block" :style="'background-image: url(src/assets/home/especialidades/' + especialidad.listOfEspecialidades_homeImg + ')'"></div>
        <h3>{{especialidad.listOfEspecialidades_homeTitle}}</h3>
    </router-link>
</template>


<script>
import Card from '../elements/CardOfEspecialidades.vue';

    export default {
        data: function(){
            return {
            }
        },
        props: {
            especialidad: Object,
            link: String
        }
    }
</script>

<style lang="scss" scooped>
    @import "../../styles/_all.scss";
    .card-wrapper {
        &:first-child {
            .card-item{
                border: none;                
            }
        }
        h3 {
            text-align: center;
            color: $baseBlue;
            font-weight: 700; 
            margin-top: -65px;
            position: inherit;
            @include respond-to(medium){
                display: none;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                -webkit-transform: translate(-50%, -50%);
            }      
        }
        &:hover {
            h3 {
                display: block;
            }
            .card-item {
                &.cardDsk{
                    &::before {
                    content: '';
                    background: $white;
                    opacity: .8;
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 500px;
                    }  
                }
            }        
        }
        
        .card-item {
            height: 230px;
            background-size: cover;
            background-position-y: center;
            background-position-x: center;
            background-repeat: no-repeat;
            margin: 20px 0;
            position: relative;
            @include respond-to(medium){
                height: 500px;
                background-size: cover;
                border-left: 10px solid white;
                box-sizing: border-box;
                cursor: pointer;
            }
            &.cardMob {
                &::before {
                    content: '';
                    background: $white;
                    opacity: .5;
                    position: absolute;
                    top: 170px;
                    left: 0;
                    width: 100%;
                    height: 60px;
                }  
            }
            
        }
    }
    

</style>
