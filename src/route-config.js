/**
 * Created by JIANBO on 2016/10/30.
 */
import store from 'store';
export default function (router) {
    //个人详细资料
    const personInfo={
        component:resolve=>{
            require(['./views/contact/person-info.vue'],resolve)
        },
        subRoutes:{
            // 个人资料设置
            'person-info-set':{
                component:resolve=>{
                    require(['./views/contact/person-info-set.vue'],resolve)
                }
            }
        }
    };
    // 个人相册
    const albums={
        componentL:resolve=>{
            require(['./views/find/albums-friends.vue'],resolve)
        },
        subRoutes:{
            'person-info':personInfo
        }
    };
    //??这里不懂
    personInfo.albums=albums;

    //对话框
    const dialogue={
        component:resolve=>{
            require(['./views/chat/dialogue.vue'],resolve)
        },
        subRoutes:{
            //聊天详情
            'chat-detail':{
                component:resolve=>{
                    require(['./views/chat/chat-detail.vue'],resolve)
                },
                subRoutes:{
                    'person-info':personInfo
                }
            },
            //群聊天信息
            'chat-info':{
                component:resolve=>{
                    require(['./views/chat/chat-info.vue'],resolve)
                },
                subRoutes:{
                    'person-info':personInfo
                }
            },
            'link':{
                component:resolve=>{
                    require(['./components/iframe.vue'],resolve)
                }
            }
        }
    };

    router.map({
        // 第一个tab--微信
        '/chat':{
            component:resolve=>{
                require(['./views/chat.vue'],resolve)
            },
            subRoutes:{
                'dialogue':dialogue,
                'add-friends':{
                    component:resolve=>{
                        require(['./views/contact/add-friends.vue'],resolve)
                    }
                },
                'sao-yi-sao':{
                    component:resolve=>{
                        require(['./views/find/sao-yi-sao.vue'],resolve)
                    }
                },
                'group-chat':{
                    component:resolve=>{
                        require(['./views/contact/group-chat.vue'],resolve)
                    }
                }
            }
        },
        '*':{
            name:'404',
            component:resolve=>{
                require(['./views/404.vue'],resolve)
            }
        },
        //第二个tab--通讯录
        '/contact':{
            component:resolve=>{
                require(['./views/contact.vue'],resolve)
            },
            subRoutes:{
                'person-info':personInfo,
                'public-info':{
                    component:resolve=>{
                        require(['./views/contact/public-info.vue'],resolve)
                    }
                },
                'new-friend':{
                    component:resolve=>{
                        require(['./views/contact/new-friends.vue'],resolve)
                    },
                    subRoutes:{
                        'add-friends':{
                            component:resolve=>{
                                require(['./views/contact/add-frineds.vue'],resolve)
                            }
                        }
                    }
                },
                'add-friends':{
                    component:resolve=>{
                        require(['./views/contact/add-frineds.vue'],resolve)
                    }
                },
                'group-chat':{
                    component:resolve=>{
                        require(['./views/contact/group-chat.vue'],resolve)
                    }
                },
                'tag':{
                    component:resolve=>{
                        require(['./views/contact/tag.vue'],resolve)
                    }
                },
                'public':{
                    component:resolve=>{
                        require(['./views/contact/public.vue'],resolve)
                    }
                },


            }
        },
        //第三个tab--发现
        '/find':{
            component:resolve=>{
                require(['./views/find.vue'],resolve)
            },
            subRoutes:{
                'albums-friends':albums,
                'sao-yi-sao':{
                    component:resolve=>{
                        require(['./views/find/sao-yi-sao.vue'],resolve)
                    }
                },
                'yao-yi-yao':{
                    component:resolve=>{
                        require(['./views/find/yao-yi-yao.vue'],resolve)
                    }
                },
                'drift-bottle':{
                    component:resolve=>{
                        require(['./views/find/drift-bottle.vue'],resolve)
                    }
                },
                'shopping':{
                    component:resolve=>{
                        require(['./components/iframe.vue'],resolve)
                    }
                }
            }
        },
        //第四个tab--我
        '/me':{
            component:resolve=>{
                require(['./views/me.vue'],resolve)
            }
        }
    });

    router.redirect({
        '/':'/chat'
    });

    router.afterEach(function ({from,to}) {
        let fromPath=from.path||'/';
        let toPath=to.Path;
        let toPath_end=toPath.lastIndexOf('/');
        let backPath=toPath.slice(0,toPath_end);
        store.dispatch('BACK_PATH',backPath);
    })







}
