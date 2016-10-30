/**
 * Created by JIANBO on 2016/10/30.
 */
import {
    SET_MENU_WECHAT_LIST,
    CHAT,
    SET_NEWS_STATE,
    DELETE_NEWS
} from '../mutation-types';

let state={
    wechat_list:{
        "base":{
            "id":0,
            "name":"",
            "wxid":"",
            "qq":"",
            "email":"",
            "type":"",
            "iconSrc":"",
            "qrCode":"",
            "signature":""
        },
        "chatBaseModel":{
            "newsUnreadCount":null,
            "endTimeStr":null,
            "endChatAuth":"",
            "endChatTxt":""
        },
        "chatConfigModel":{
            "chatBackground":null,
            "groupNotice":null,
            "isStick":null,
            "newMute":true,
            "contactsSave":null,
            "showGroupNickname":null
        }
    },
    chat_base:{
        "id": 1,
        "name": "聊天中",
        "wxid": "",
        "qq": "",
        "email": "",
        "type": "friends",
        "iconSrc": "",
        "qrCode": "",
        "signature": ""
    },
    dialogue_type:'friends',
    dialogue:[],
    dialogue_bar:{
        menu:[{
            title:'',
            link:'',
            subMenu:[{
                title:'',
                link:''
            },{
                title:'',
                link:''
            }]
        }]
    },
    chat_member:[{
        "id":1,
        iconSrc:"",
        name:""
    }],
    chat_config:{
        "chatBackground":null,
        "groupNotice":"",
        "isStick":false,
        "newsMute":true,
        "contactsSave":false,
        "showGroupNickname":true
    }
};

const mutations={
    [SET_MENU_WECHAT_LIST](state,list){
        state.wechat_list=list;
    },
    [CHAT](state,{
        base,
        chatDialogueModel,
        chatDialogueBarModel,
        chatMemberModel,
        chatConfigModel
    }){
        state.dialogue_type=base.type;
        state.chat_base=base;
        state.dialogue=chatDialogueModel;
        state.dialogue_bar=chatDialogueBarModel;
        state.chat_member=chatMemberModel;
        state.chat_config=chatConfigModel;
    },
    [SET_NEWS_STATE](state,index,val){
        state.wechat_list[index].chatBaseModel.newsUnreadCount=val;
    },
    [DELETE_NEWS](state,index){
        state.wechat_list.splice(index,1);
    }
};

export default {
    state,
    mutations
}

