/**
 * Created by JIANBO on 2016/10/30.
 */
import Vue from 'vue';
import Vuex from 'vuex';

import base from './modules/base';
import chat from './modules/chat';
import contacts from './modules/contacts';
import find from './modules/find';

Vue.use(Vuex);

export default new Vuex.store({
    modules:{
        base,
        chat,
        contacts,
        find
    },
    strict:true
})
