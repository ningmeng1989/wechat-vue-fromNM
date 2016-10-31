<template>
    <div class="_cover-top">
        //左侧
        <div class="top-back">
            <div class="_ellipsis iconfont icon-return-arrow" v-link="backPath" v-text="backText">
            </div>
        </div>
        //中间
        <div class="top-title _effect" :class="{'_effect--50':decline}">
            <slot name="center">
                <p>
                    <span v-text="curText"></span>
                </p>
            </slot>
        </div>
        //右侧
        <div class="top-other">
            <slot name="right">
                <div class="_align-right" v-link="nextPath">
                    <span class="iconfont" :class="nextIcon"></span>
                </div>
            </slot>
        </div>

    </div>
</template>

<style scoped>

</style>

<script type="text/ecmascript-6">
import {
    backPath
} from 'getters'

export default {
    props:{
        'backText':{
            type:String,
            default:'返回'
        },
        'decline':{
            default:false
        },
        'curText':{

        },
        'nextPath':{

        },
        'nextIcon':{
            type:String
        }
    },
    vuex:{
        getters:{
            backPath
        }
    },
    data(){
        return {

        }
    },
    methods:{}
}
</script>
