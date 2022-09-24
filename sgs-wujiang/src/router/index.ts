import CaoCaoVue from '@/components/CaoCao.vue';
import CaoCaoSVue from '@/components/CaoCaoS.vue';
import FengHuoWuVue from '@/components/FengHuoWu.vue';
import JieXianWuVue from '@/components/JieXianWu.vue';
import ShenWuVue from '@/components/ShenWu.vue';
import WuWuVue from '@/components/WuWu.vue';
import XuShengVue from '@/components/XuSheng.vue';
import XuShengJNVue from '@/components/XuShengJN.vue';
import XuShengSVue from '@/components/XuShengS.vue';
import YiJiangWuVue from '@/components/YiJiangWu.vue';
import { createRouter, createWebHistory, createWebHashHistory, createMemoryHistory, RouteRecordRaw } from 'vue-router'
import QunXiongWuVue from '../components/QunXiongWu.vue';
import ShuWuVue from '../components/ShuWu.vue';
import WeiWuVue from '../components/WeiWu.vue';
import WeiWu from "./components/WeiWu.vue";
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('../components/HelloFriend.vue')
    },

    {
        path: '/KaiFa',
        name: 'KaiFa',
        component: () => import('../components/KaiFa.vue')
    },


    {
        path: '/demo2',
        component: () => import('../components/TheDemo2.vue')
    },

    {
        path: '/WeiWu',
        name: 'WeiWu',
        component: () => import('../components/WeiWu.vue')

    },

    {
        path: '/ShuWu',
        name: 'ShuWu',
        component: () => import('../components/ShuWu.vue')
        
    },



    {
        path: '/JieXianWu',
        name: 'JieXianWu',
        component: () => import('../components/JieXianWu.vue')
    },



    {
        path: '/YiJiangWu',
        name: 'YiJiangWu',
       
        component: () => import('../components/YiJiangWu.vue')
    },



    {
        path: '/FengHuoWu',
        name: 'FengHuoWu',
        component: () => import('../components/FengHuoWu.vue')
    },

    {
        path: '/ShenWu',
        name: 'ShenWu',
       
        component: () => import('../components/ShenWu.vue')
    },

    {
        path: '/WuWu',
        name: 'WuWu',
      
        component: () => import('../components/WuWu.vue')
    },


    {
        path: '/QunXiongWu',
        name: 'QunXiongWu',
       
        component: () => import('../components/QunXiongWu.vue')
    },

    {
        path: '/XuSheng',
        name: 'XuSheng',
        component: () => import('../components/XuSheng.vue'),
        children: [
            {
                path: '/XuSheng/XuShengJN',
                component: () => import('../components/XuShengJN.vue')

            } ,
           
        ]
    },

    {
        path: '/XuShengS',
        name: 'XuShengS',
       
        component: () => import('../components/XuShengS.vue')
    },

    {
        path: '/CaoCao',
        name: 'CaoCao',
        component: () => import('../components/CaoCao.vue'),
        children: [
            {
                path: '/CaoCao/CaoCaoJN',
                component: () => import('../components/CaoCaoJN.vue')

            } ,
           
        ]
    },

    {
        path: '/CaoCaoS',
        name: 'CaoCaoS',
       
        component: () => import('../components/CaoCaoS.vue')
    },

    {
        path: '/JiangWei',
        name: 'JiangWei',
       
        component: () => import('../components/JiangWei.vue'),
        children: [
            {
                path: '/JiangWei/JiangWeiJN',
                component: () => import('../components/JiangWeiJN.vue')

            } ,
           
        ]
    },

    {
        path: '/JiangW',
        name: 'JiangW',
       
        component: () => import('../components/JiangW.vue')
    },

    {
        path: '/JiangWeiS',
        name: 'JiangWeiS',
       
        component: () => import('../components/JiangWeiS.vue')
    },

    {
        path: '/ShenCao',
        name: 'ShenCao',
       
        component: () => import('../components/ShenCao.vue'),
        children: [
            {
                path: '/ShenCao/ShenCaoJN',
                component: () => import('../components/ShenCaoJN.vue')

            } ,
           
        ]
    },

    {
        path: '/ShenCaoS',
        name: 'ShenCaoS',
       
        component: () => import('../components/ShenCaoS.vue')
    },

    {
        path: '/XuY',
        name: 'XuY',
       
        component: () => import('../components/XuY.vue')
    },

    {
        path: '/XuYouS',
        name: 'XuYouS',
       
        component: () => import('../components/XuYouS.vue')
    },

    {
        path: '/XuYou',
        name: 'XuYou',
       
        component: () => import('../components/XuYou.vue'),
        children: [
            {
                path: '/XuYou/XuYouJN',
                component: () => import('../components/XuYouJN.vue')

            } ,
           
        ]
    },

    {
        path: '/LiuZanS',
        name: 'LiuZanS',
       
        component: () => import('../components/LiuZanS.vue')
    },


    {
        path: '/LiuZan',
        name: 'LiuZan',
       
        component: () => import('../components/LiuZan.vue'),
        children: [
            {
                path: '/LiuZan/LiuZanJN',
                component: () => import('../components/LiuZanJN.vue')

            } ,
           
        ]
    },

  
    {
        path: '/YaSuoS',
        name: 'YaSuoS',
       
        component: () => import('../components/YaSuoS.vue')
    },

    {
        path: '/YaSuo',
        name: 'YaSuo',
       
        component: () => import('../components/YaSuo.vue'),
        children: [
            {
                path: '/YaSuo/YaSuoJN',
                component: () => import('../components/YaSuoJN.vue')

            } ,
           
        ]
    },
    {
        path: '/WangYi',
        name: 'WangYi',
       
        component: () => import('../components/WangYi.vue'),
        children: [
            {
                path: '/WangYi/WangYiJN',
                component: () => import('../components/WangYiJN.vue')

            } ,
           
        ]
    },

    {
        path: '/WangYiS',
        name: 'WangYiS',
       
        component: () => import('../components/WangYiS.vue')
    },

    {
        path: '/WangJi',
        name: 'WangJi',
       
        component: () => import('../components/WangJi.vue'),
        children: [
            {
                path: '/WangJi/WangJiJN',
                component: () => import('../components/WangJiJN.vue')

            } ,
           
        ]
    },
    {
        path: '/WangJiS',
        name: 'WangJiS',
       
        component: () => import('../components/WangJiS.vue')
    },


    {
        path: '/GuanYu',
        name: 'GuanYu',
       
        component: () => import('../components/GuanYu.vue'),
        children: [
            {
                path: '/GuanYu/GuanYuJN',
                component: () => import('../components/GuanYuJN.vue')

            } ,
           
        ]
    },
    
    {
        path: '/GuanYuS',
        name: 'GuanYuS',
       
        component: () => import('../components/GuanYuS.vue')
    },

    {
        path: '/YangBiao',
        name: 'YangBiao',
       
        component: () => import('../components/YangBiao.vue'),
        children: [
            {
                path: '/YangBiao/YangBiaoJN',
                component: () => import('../components/YangBiaoJN.vue')

            } ,
           
        ]
    },

    {
        path: '/YangBiaoS',
        name: 'YangBiaoS',
       
        component: () => import('../components/YangBiaoS.vue')
    },
    {
        path: '/YuanShao',
        name: 'YuanShao',
       
        component: () => import('../components/YuanShao.vue'),
        children: [
            {
                path: '/YuanShao/YuanShaoJN',
                component: () => import('../components/YuanShaoJN.vue')

            } ,
           
        ]
    },

    {
        path: '/YuanShaoS',
        name: 'YuanShaoS',
       
        component: () => import('../components/YuanShaoS.vue')
    },

    {
        path: '/LuoTong',
        name: 'LuoTong',
       
        component: () => import('../components/LuoTong.vue'),
        children: [
            {
                path: '/LuoTong/LuoTongJN',
                component: () => import('../components/LuoTongJN.vue')

            } ,
           
        ]
    },

    {
        path: '/LuoTongS',
        name: 'LuoTongS',
       
        component: () => import('../components/LuoTongS.vue')
    },

    {
        path: '/ShenGuoJia',
        name: 'ShenGuoJia',
       
        component: () => import('../components/ShenGuoJia.vue'),
        children: [
            {
                path: '/ShenGuoJia/ShenGuoJiaJN',
                component: () => import('../components/ShenGuoJiaJN.vue')

            } ,
           
        ]
    },

    {
        path: '/ShenGuoJiaS',
        name: 'ShenGuoJiaS',
       
        component: () => import('../components/ShenGuoJiaS.vue')
    },

    {
        path: '/JuShou',
        name: 'JuShou',
       
        component: () => import('../components/JuShou.vue'),
        children: [
            {
                path: '/JuShou/JuShouJN',
                component: () => import('../components/JuShouJN.vue')

            } ,
           
        ]
    },

    {
        path: '/JuShouS',
        name: 'JuShouS',
       
        component: () => import('../components/JuShouS.vue')
    },

    {
        path: '/WoLongZhuGe',
        name: 'WoLongZhuGe',
       
        component: () => import('../components/WoLongZhuGe.vue'),
        children: [
            {
                path: '/WoLongZhuGe/WoLongZhuGeJN',
                component: () => import('../components/WoLongZhuGeJN.vue')

            } ,
           
        ]
    },

    {
        path: '/WoLongZhuGeS',
        name: 'WoLongZhuGeS',
       
        component: () => import('../components/WoLongZhuGeS.vue')
    },


]




const router = createRouter({
    history: createWebHashHistory(),
   
    routes
})

//导出router
export default router;