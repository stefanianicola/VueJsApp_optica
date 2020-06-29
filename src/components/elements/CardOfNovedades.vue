<template>
    <div class="wrapper-nov">
        <router-link :to="link" tag="li">
            <a>
                <div class="card-item cardDsk" :style="'background-image: url(src/assets/home/novedades/' + novedad.imgDsk + ')'"></div>
                <div class="wrap-title">
                    {{novedad.title}}
                </div>
            </a>
        </router-link>
    </div>
</template>


<script>
export default {
    data: function() {
        return {};
    },
    props: {
        novedad: Object,
        link: String
    }
};
</script>

<style lang="scss" scooped>
@import "../../styles/_all.scss";
.wrapper-nov {
    padding: 0;
    margin: 0;
    width: 100%;
    height: auto;
    margin-bottom: 20px;
    transition: all .5s;
    @include respond-to(small) {
        width: 300px;
        margin: 0 auto;
    }
    @include respond-to(medium) {
        margin: 0 10px;
        width: 340px;
    }
    a {
        &:hover {
            text-decoration: none;
            .card-item {
                background-size: 180%;
            }
        }
    }
    .card-item {
        width: 100%;
        height: 200px;
        background-repeat: no-repeat;
        background-position-x: center;
        background-position-y: center;
        background-size: cover;
        cursor: pointer;
        @include respond-to(normal) {
            height: 270px;
            background-size: 160%;
            transition: background-size .2s ease-in-out;
        }
    }
    .wrap-title {
        width: 100%;
        padding: 35px 20px;
        background-color: $sky;
        text-align: left;
        font-size: 20px;
        color: white;
        min-height: 100px;
        margin-bottom: 15px;
        line-height: 120%;
        @include respond-to(medium) {
            padding: 20px;
        }
        a {
            color: $white;
            text-decoration: none;
            font-weight: 100;
        }
    }
}
</style>

