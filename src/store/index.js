import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

import HomeData from './homeData'
import CollectData from './collectData'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        homeData: {
            banner: HomeData.data.list[0].banner,
            radios: HomeData.data.list[1].radios,
            collections: HomeData.data.list[2].collections
        },
        collectData: CollectData.data.collects,
        player: {
            isShowPlayerDetail: false
        }
    },
    getters: {
        homeData: state => {
            return state.homeData;
        },
        collectData: state => state.collectData,
        player: state => state.player
    },
    mutations: {
        togglePlayerDetail: (state, flag) => {
            state.player.isShowPlayerDetail = flag;
        }
    }
})

export default store