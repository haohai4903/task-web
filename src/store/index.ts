import Vue from 'vue'
import Vuex from 'vuex'
import './mutation_type'
import {Login, LogOut, UserInfo} from "@/store/mutation_type";
import UserService from '@/service/UserService'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: '',
        user: undefined
    },
    mutations: {
        [Login]: (state, token) => {
            localStorage.setItem('token', token)
            state.token = token
        },
        [LogOut]: (state) => {
            localStorage.removeItem('token')
            state.token = ''
            state.user = undefined
        },
        [UserInfo]: (state, user) => {
            state.user = user;
        }
    },
    actions: {
        [UserInfo]: (context, token) => {
            context.commit(Login, token)
            UserService.findUserInfo().then((respData) => {
                context.state.user = respData.data;
                console.info(context.state.user)
            })
        },
        [Login]: (context, request) => {
            return UserService.login(request.username, request.password);
        }
    },
    modules: {}
})
