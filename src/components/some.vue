<template>
    <div id="app">

        <header class="app-header" style="display:none;" v-show="appload">
            <div class="_effect" :class="{'_effect--50':decline}">
                <index-header style="overfolw:visible;"></index-header>
            </div>
        </header>
        <section class="app-content" style="display:none;" v-show="appload">
            <!--路由插入位置-->
            <router-view keep-alive></router-view>
        </section>
        <footer class="app-footer _line-fine" style="display:none;" v-show="appload">
            <div class="_effect" :class="{'_effect--50':decline}">
                <!--底部导航栏tab-->
                <index-nav></index-nav>
            </div>
        </footer>

        <!--启动时，提示用户切换到手机模拟模式或者直接用手机访问-->
        <section class="welocome" v-show="welcome" transition="welcome"></section>
        <section class="mobile-tips" style="display:none;" v-show="isnotMobile">
            <div class="mobile-tips-inner">
                <div class="mobile-model"><img src="./assets/images/mobile.png" alt=""></div>
                <p><br>为保证最佳用户体验，<br></p>
                <p class="_align-left">1.请用chrome移动设备调试模式(F12)下打开</p>
                <p class="_align-left">2.手机浏览器访问</p>
                <br>
                <button class="weui-btn weui_btn_mini weui_btn_primary" v-touch:tap='isnotMobile=false'>关闭</button>
            </div>
        </section>

    </div>
</template>


<style>
    body{
        background-color:#ff0000;
    }
</style>


<script>
    import store from 'store';
    import indexHeader from 'components/index-header.vue';
    import indexNav from 'components/index-nav.vue';

    require('assets/css/common.css');
    require('assets/css/base.css');

    export default{
        replace:false,
        store,
        data(){
            return{
                appload:false,
                welcome:false,
                isnotMobile:false,
                decline:false
            }
        },
        create(){
            let isMobile=function(){
                let userAgentInfo=navigator.userAgent;
                let Agents=new Array=("Andriod","iPhone","SymbianOS","Windows Phone","iPad","iPod");
                let flag=false;
                for(let v=0;v<Agents.length;v++){
                    if(userAgentInfo.indexOf(Agents[v])>0){
                        flag=true;
                        break;
                    }
                };
                return flag
            }();
            if(!isMobile){
                this.isnotMobile=true;
            }
            if(this.$route.matched.length===1){
                this.welcome=true;
            }
            this.appload=true;
            setTimeout(()=>{
                this.welcome=false
            },2000);
        },
        events:{
            'route-pipe'(_decline){
                this.decline=_decline;
            }
        },
        components:{
            indexHeader,
            indexNav
        }
    }
</script>
