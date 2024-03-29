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
import EditPersolInfo from 'src/components/profile/setting/EditPersolInfo.vue'
import EditUserInfo from 'src/components/profile/setting/Personal/EditUserInfo.vue'
import EditPhoneNumber from 'src/components/profile/setting/Personal/EditPhoneNumber.vue'
import ChangeEmail from 'src/components/profile/setting/Personal/ChangeEmail.vue'
import EditAdress from 'src/components/profile/setting/Personal/EditAdress.vue'
import Purchase from 'src/components/profile/setting/purchase'
import ReportsShortfalls from 'src/components/profile/setting/ReportsShortfalls'
import walet from 'src/components/profile/setting/walet'
import MarketByCommetion from 'src/components/profile/setting/MarketByCommission'
import dedications from 'src/components/profile/setting/dedications'









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
        {
          path:"edit-info",
          component:EditPersolInfo,
          name:"EditPersolInfo"
        },
        {
          path:"user-info",
          component:EditUserInfo,
          name:"EditUserName"
        },
        {
          path:"edit-phone-number",
          component:EditPhoneNumber,
          name:"EditPhoneNumber"
        },
        {
          path:"change-emailadress",
          component:ChangeEmail,
          name:"ChangeEmail"
        },
        {
          path:"change-adress",
          component:EditAdress,
          name:"EditAdress"
        },
        {
          path:"purchase",
          component:Purchase,
          name:"purchase"
        },
        {
          path:"reports-shortfalls",
          component:ReportsShortfalls,
          name:"reports-shortfalls"
        },
        {
          path:"walet",
          component:walet,
          name:"walet"
        },
        {
          path:"market-Commetion",
          component:MarketByCommetion,
          name:"market-Commetion"
        },
        {
          path:"dedications",
          component:dedications,
          name:"dedications"
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
