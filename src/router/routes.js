//////////////////////////////////////////
///////// wildom and login pages//////////
//////////////////////////////////////////
import { wlecomePage , wilcomeSlider , login , verification ,ForgetPassword, creatNewPassword , RejesterAccount  } from "./container-pages/welcomAndLogin"
//////////////////////////////////////////
///////////////// layouts ////////////////
//////////////////////////////////////////
import ProfileLayout from "src/layouts/childes/ProfileLayout.vue"
import HomeLayout from "src/layouts/childes/HomeLayout.vue"
import ShopsLayout from "src/layouts/childes/ShopsLayout.vue"
import FavoritsLayout from "src/layouts/childes/FavoritsLayout.vue"
///////////////////////////////////////////
///////////////// childes /////////////////
///////////////////////////////////////////
import ShopsPage from 'src/pages/ShopsPage.vue'
import vendorPage from 'src/components/shops/VendorPage.vue'
import FavoitsPage from 'src/pages/FavoritsPage.vue'
import Search from 'src/pages/serchPage/MainSearch.vue'
import ProductPageUrl from "src/components/shops/vendor-page/ProductPageWithId.vue"
import ProfilePage from "src/pages/ProfilePage.vue"
import SpacificPost from 'src/components/profile/SpacificPost.vue'
import setting from 'src/components/profile/VendorSeting.vue'



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
    {
      path: '',
      component: HomeLayout,
      meta: { firstView: true },
      children:[
          {
          path: '',
          component: () => import('pages/HomePage.vue'),
          },
          {
            path: 'search',
            component: Search,
            name:"search"
          }
      ]
      },

     ///////////////
    // shops page//
   ///////////////
      {
      path: 'shops',
      component: ShopsLayout,
      meta: { firstView: true },
      children:[
          {
          path: '',
          component: ShopsPage,
          name:"shops"
          },
          {
          path: 'vendor-page:id',
          component: vendorPage,
          name:"vendorPage",
          props:true,
          },
          {
          path: 'product:pid',
          component: ProductPageUrl,
          name:"singleProduct",
          props:true,
          },
      ]
      },
     ////////////////
    // shops page //
   ////////////////
      {
      path: 'favorite',
      component: FavoritsLayout,
      meta: { firstView: true },
      children:[
        {
          path: '',
          component: FavoitsPage,

        }

      ]
      },
     //////////////////
    // profile page //
   //////////////////
      {
      path: 'profile',
      component: ProfileLayout,
      meta: { firstView: true },
      children:[
        {
        path :"",
        component: ProfilePage,
        },
        {
          path:"post:post",
          component:SpacificPost,
          props:true,
          name:"spacificPost"
        },
        {
          path:"setting",
          component:setting,
          name:"setting",
        },
      ]
      },
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
