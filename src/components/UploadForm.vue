<template>
<div>
    <div class="dropper" v-if="isLoggedIn">
        <input 
            type="file" 
            @change="uploadImages($event.target.files)" 
            multiple 
            accept="image/*">
        <span>Drag File Here!</span>
    </div>
    <div v-else>
        <h3>Please login to see images</h3>
    </div>
</div>
    
</template>


<script>
import { mapActions, mapGetters } from 'vuex';

    export default {
        name: "UploadForm",
        computed: mapGetters(['isLoggedIn']),
        methods: mapActions(['uploadImages'])
    }
</script>

<style scoped>
    .dropper{
        height: 30vh;
        border: 2px dashed black;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    .dropper:hover{
        background-color: rgb(165, 134, 134);
    }

    input {
        width: 100%;
        height: 30vh;
        position: absolute;
        opacity: 0;
    }
</style>