webpackJsonp([16,21],{3:function(e,n,t){n=e.exports=t(1)(),n.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",file:"top-handle.vue",sourceRoot:"webpack://"}])},4:function(e,n,t){var i=t(3);"string"==typeof i&&(i=[[e.id,i,""]]);t(2)(i,{});i.locals&&(e.exports=i.locals)},5:function(e,n){e.exports=' <div class=_cover-top _v-593b4d4e=""> <div class=top-back _v-593b4d4e=""> <div class="_ellipsis iconfont icon-return-arrow" v-link=backPath v-text=backText _v-593b4d4e=""> </div> </div> <div class=top-other _v-593b4d4e=""> <slot name=right _v-593b4d4e=""> <div class=_align-right v-link=nextPath _v-593b4d4e=""> <span class=iconfont :class=nextIcon _v-593b4d4e=""></span> </div> </slot> </div> <div class="top-title _effect" :class="{\'_effect--50\':decline}" _v-593b4d4e=""> <slot name=center _v-593b4d4e=""> <p _v-593b4d4e=""> <span v-text=curText _v-593b4d4e=""></span> </p> </slot> </div> </div> '},6:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(8);n.default={props:{backText:{type:String,default:"返回"},decline:{default:!1},curText:{},nextPath:{},nextIcon:{type:String}},vuex:{getters:{backPath:i.backPath}},data:function(){return{}},methods:{}}},7:function(e,n,t){var i,c,s={};t(4),i=t(6),c=t(5),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports.default);var l="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;c&&(l.template=c),l.computed||(l.computed={}),Object.keys(s).forEach(function(e){var n=s[e];l.computed[e]=function(){return n}})},74:function(e,n,t){n=e.exports=t(1)(),n.push([e.id,".component-chat-detail[_v-293602d0]{z-index:5}","",{version:3,sources:["/./src/views/chat/chat-detail.vue"],names:[],mappings:"AAwJA,oCACI,SAAW,CACd",file:"chat-detail.vue",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.component-chat-detail[_v-293602d0]{\r\n    z-index: 5;\r\n}\r\n"],sourceRoot:"webpack://"}])},143:function(e,n,t){var i=t(74);"string"==typeof i&&(i=[[e.id,i,""]]);t(2)(i,{});i.locals&&(e.exports=i.locals)},174:function(e,n){e.exports=' <div class="_full_router component-chat-detail" _v-293602d0=""> <div class=_full_inner _v-293602d0=""> <top-handle :back-text=&quot;返回&quot; :decline=decline :cur-text=topModel.curText _v-293602d0=""> </top-handle> <div class="_cover-content _effect" :class="{\'_effect--30\':decline}" _v-293602d0=""> <div class="_full _scroll" _v-293602d0=""> <ul class=chat-dialogue-entry-collect _v-293602d0=""> <li v-for="item in chat_member" v-touch:tap=go_personInfo(item.id) _v-293602d0=""> <div class=pic :style="{backgroundImage:\'url(\'+item.iconSrc+\')\'}" _v-293602d0=""> </div> <p class="username _ellipsis" v-text=item.name _v-293602d0=""></p> </li> <li _v-293602d0=""> <div class=pic _v-293602d0=""> <div _v-293602d0=""> <span class="iconfont icon-chat-detail-add" _v-293602d0=""></span> </div> </div> </li> </ul> <div class="weui_cells weui_cells_form" _v-293602d0=""> <div class="weui_cell weui_cell_switch" _v-293602d0=""> <div class="weui_cell_hd weui_cell_primary" _v-293602d0="">置顶聊天</div> <div class=weui_cell_ft _v-293602d0=""> <input class=weui_switch type=checkbox _v-293602d0=""> </div> </div> <div class="weui_cell weui_cell_switch" _v-293602d0=""> <div class="weui_cell_hd weui_cell_primary" _v-293602d0="">消息免打扰</div> <div class=weui_cell_ft _v-293602d0=""> <input class=weui_switch type=checkbox _v-293602d0=""> </div> </div> </div> <div class="weui_cells weui_cells_access" _v-293602d0=""> <a class=weui_cell href=javascript:; _v-293602d0=""> <div class="weui_cell_bd weui_cell_primary" _v-293602d0=""> <p _v-293602d0="">聊天文件</p> </div> <div class=weui_cell_ft _v-293602d0=""> </div> </a> </div> <div class="weui_cells weui_cells_access" _v-293602d0=""> <a class=weui_cell href=javascript:; _v-293602d0=""> <div class="weui_cell_bd weui_cell_primary" _v-293602d0=""> <p _v-293602d0="">设置当前聊天背景</p> </div> <div class=weui_cell_ft _v-293602d0=""> </div> </a> <a class=weui_cell href=javascript:; _v-293602d0=""> <div class="weui_cell_bd weui_cell_primary" _v-293602d0=""> <p _v-293602d0="">查找聊天内容</p> </div> <div class=weui_cell_ft _v-293602d0=""> </div> </a> </div> <div class=weui_cells _v-293602d0=""> <div class=weui_cell _v-293602d0=""> <div class="weui_cell_bd weui_cell_primary" _v-293602d0=""> <p _v-293602d0="">清空聊天记录</p> </div> </div> </div> <div class="weui_cells weui_cells_access" _v-293602d0=""> <a class=weui_cell href=javascript:; _v-293602d0=""> <div class="weui_cell_bd weui_cell_primary" _v-293602d0=""> <p _v-293602d0="">投诉</p> </div> <div class=weui_cell_ft _v-293602d0=""> </div> </a> </div> <br _v-293602d0=""> <br _v-293602d0=""> </div> </div> </div> <router-view transition=cover _v-293602d0=""></router-view> </div> '},251:function(e,n,t){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var c=t(7),s=i(c),l=t(8),d=t(22);n.default={vuex:{getters:{chat_member:l.chat_member},actions:{get_person_info:d.get_person_info}},route:{activate:function(e){var n=(e.from,e.to,e.next);this.$parent.$emit("route-pipe",!0),n()},deactivate:function(e){var n=(e.from,e.to,e.next);this.$parent.$emit("route-pipe",!1),n()}},data:function(){return{decline:!1,topModel:{backText:"",curText:"聊天详情",nextPath:{poth:""},nextIcon:""}}},events:{"route-pipe":function(e){this.decline=e}},methods:{go_personInfo:function(e){var n=this;console.log(this.chat_member),this.get_person_info(e,function(){n.$router.go({path:"person-info",append:!0})})}},components:{topHandle:s.default}}},276:function(e,n,t){var i,c,s={};t(143),i=t(251),c=t(174),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports.default);var l="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;c&&(l.template=c),l.computed||(l.computed={}),Object.keys(s).forEach(function(e){var n=s[e];l.computed[e]=function(){return n}})}});