//////////////////////////////////////////
///////// wildom and login pages//////////
//////////////////////////////////////////
import { wlecomePage , wilcomeSlider , login , verification ,ForgetPassword, creatNewPassword , RejesterAccount  } from "./container-pages/welcomAndLogin"
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
import ShopsPage from 'src/pages/ShopsPage.vue'

const routes = [
  {
    /////////////////////////////
    // wellcom and auth pages///
    ///////////////////////////
    path:'/welcome',
    component:wlecomePage,
    name:"welcome",
    children:[
      {
        path:'slider',
        component:wilcomeSlider,
        name:"wilcomeSlider",
      },
      {
        path:'login',
        component:login,
        name:"login",

      },
      {
        path:'verification/:phone',
        component:verification,
        name:"verification",
        props:true
      },
      {
        path:'ForgetPassword',
        component:ForgetPassword,
        name:"ForgetPassword",
        props:true
      },
      {
        path:'creatNewPassword',
        component:creatNewPassword,
        name:"creatNewPassword",
      },
      {
        path:'RejesterAccount',
        component:RejesterAccount,
        name:"RejesterAccount",
      },
    ]
  },
      /////////////////
     // main layouts//
    ////////////////
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
    ////////////////
    // home page///
    //////////////
      { path: '',
      component: () => import('pages/HomePage.vue'),
      meta: { firstView: true },
      },
     ///////////////
    // shops page//
   ///////////////
      { path: 'shops',
      component: ShopsPage,
      meta: { firstView: true },
      name:"shops"
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
