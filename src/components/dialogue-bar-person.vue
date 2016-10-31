<template>
    <div class="component-dialogue-bar-person">
        <span class="iconfont icon-dialogue-jianpan" v-show="way==='say'" v-touch:tap="switch_way('txt')"></span>
        <span class="iconfont icon-dialogue-voice" v-show="way==='txt'" v-touch:tap="switch_way('say')"></span>
        <!--say-->
        <div chat="chat-way" v-show="way==='say'">
            <div class="chat-way" :class="!!state_say?'chat-say-touched':''" v-touch:press="switch_way_say(true)" @touchend="switch_way_say(false)" @touchmove="switch_say_cancel(true)">
                <span class="one">按住说话</span>
                <span class="two">松开结束</span>
            </div>
        </div>
        <!--text-->
        <div class="chat-way" v-show="way==='txt'">
            <input class="chat-txt" type="text">
        </div>
        <!--两个小按钮-->
        <span class="expression iconfont icon-dialogue-smile"></span>
        <span class="more iconfont icon-dialogue-jia"></span>

        <!--tips-->
        <div class="recording" v-show="state_say">
            <div class="recording-voice" v-show="!say_cancel&&state_say">
                <div class="voice-inner">
                    <div class="voice-icon"></div>
                    <div class="voice-volume">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <p>手指上划，取消发送</p>
                </div>
                <div class="recording-cancel" v-show="saycancel&&state_say">
                    <div class="cancel-inner"></div>
                    <p>松开手指，取消发送</p>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>

</style>

<script type="text/ecmascript-6">
export default {
    replace:true,
    props:{

    },
    data:{
        return{
            way:'txt',
            state_say:false,
            say_cancel:false
        }
    },
    methods:{
        switch_way(way){
            this.say=way;
        },
        switch_way_say(boo){
            this.state_say=boo;
            this.say_cancel=false
        },
        switch_say_cancel(){
            this.say_cancel=true;
        }
    }
}
</script>
