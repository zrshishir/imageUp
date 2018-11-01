import api from '../../api/imgur';
import { router } from '../../main';

const state = {
    images: []
};

const getters = {
    allImages: state => state.images
};

const actions = {
    async fetchImages({ rootState, commit }){ //rootState is used for communicating with other modules's vars
        const { token } = rootState.auth;
        const response = await api.fetchImages(token);
     
        commit('setImages', response.data.data);
    },

    async uploadImages({ rootState }, images){
        const { token } = rootState.auth;//get the access token
        await api.upload(token, images);//call to upload function from api module
        router.push('/'); //redirect to the image list
       
    }
};

const mutations = {
    setImages: (state, images) => {
            state.images = images;
    }
};

export default{
    state,
    getters,
    actions,
    mutations
}