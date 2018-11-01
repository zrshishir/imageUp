<template>
    <div>
        <div class="image-container" v-if="isLoggedIn">
            <img v-for="image in allImages"  :src="image.link"/>
        </div>
        <div v-else>
            <h3>Please log in to see images</h3>
        </div>
    </div>
    
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';


    export default {
        name: 'ImageList',
        computed: mapGetters(['allImages', 'isLoggedIn']),
        methods: mapActions([ 'fetchImages' ]),
        created(){
            this.fetchImages();
        }
    }
</script>

<style scoped>
    .image-container{
        column-count: 3;
        column-gap: 0;
    }

    img{
        max-width: 100%;
        padding: 5px;
    }
</style>


