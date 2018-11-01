<template>
    <div v-if="isLoggedIn">
        You have Logged in...........
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

    export default {
        name: 'AuthHandler',
        computed: mapGetters(['isLoggedIn']),
        methods: mapActions(['finalizeLogin']),
        beforeCreate(){

        },
        created(){
            this.finalizeLogin(window.location.hash);   
        }
    }
</script>