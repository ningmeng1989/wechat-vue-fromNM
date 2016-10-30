/**
 * Created by JIANBO on 2016/10/30.
 */
import {
    SET_MENU,
    SET_MENU_ACTIVE,
    BACK_PATH,
    SET_CHAT_COUNT
} from '../mutation-types';

let state={
    backPath:'',
    index_nav:[{
        index:0,
        path:{
            path:'/chat'
        },
        hint:{
            type:"count",
            count:0
        },
        iconClass:'icon-wechat',
        text:'微信'
    }],
    menu_active:{text:"",index:0}
};

const mutations={
    [SET_MENU](state,index_nav){
        state.index_nav=index_nav;
    },
    [SET_MENU_ACTIVE](state,_index){
        state.menu_active=state.index_nav[index];
    },
    [BACK_PATH](state,_path){
        state.backPath={path:_path};
    },
    [SET_CHAT_COUNT](state,count){
        state.index_nav[0].hint.count=count;
    }
};

export default{
    state,
    mutations
}
