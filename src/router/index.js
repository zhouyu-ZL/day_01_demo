import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: "/login",
  },
  {
    path: '/login',
    name: 'login',
    component: () => import("../views/login.vue")
  },

  {
    path: '/home',
    name: 'home',
    component: () => import("../views/home/index.vue"),
    children: [
      {
        path: '/album',
        name: 'album',
        component: () => import("../views/home/album.vue"),
      },
      {
        path: '/background',
        name: 'background',
        component: () => import("../views/home/background.vue"),
      },
      {
        path: '/shoplist',
        name: 'shoplist',
        component: () => import("../views/home/shoplist.vue"),
      },
    ],
  },

  {
    path: '/member',
    name: 'member',
    component: () => import("../views/member/index.vue"),
    children: [
      {
        path: '/grade',
        name: 'grade',
        component: () => import("../views/member/grade.vue"),
      },
      {
        path: '/memberlist',
        name: 'memberlist',
        component: () => import("../views/member/memberlist.vue"),
      },
    ],
  },

  {
    path: '/order',
    name: 'order',
    component: () => import("../views/order/index.vue"),
    children: [
      {
        path: '/after',
        name: 'after',
        component: () => import("../views/order/after.vue"),
      },
      {
        path: '/invoice',
        name: 'invoice',
        component: () => import("../views/order/invoice.vue"),
      },
      {
        path: '/orders',
        name: 'orders',
        component: () => import("../views/order/orders.vue"),
      },
    ],
  },

  {
    path: '/search',
    name: 'search',
    component: () => import("../views/search/index.vue"),
    children: [
      {
        path: '/classlist',
        component: () => import("../views/search/classlist.vue"),
      },
      {
        path: '/comlist',
        name: 'comlist',
        component: () => import("../views/search/comlist.vue"),
      },
      {
        path: '/comment',
        name: 'comment',
        component: () => import("../views/search/comment.vue"),
      },
      {
        path: '/size',
        name: 'size',
        component: () => import("../views/search/size.vue"),
      },
      {
        path: '/type',
        name: 'type',
        component: () => import("../views/search/type.vue"),
      },
    ],
  },

  {
    path: '/stp',
    name: 'stp',
    component: () => import("../views/stp/index.vue"),
    children: [
      {
        path: '/admin',
        name: 'admin',
        component: () => import("../views/stp/admin.vue"),
      },
      {
        path: '/basics',
        name: 'basics',
        component: () => import("../views/stp/basics.vue"),
      },
      {
        path: '/logistics',
        name: 'logistics',
        component: () => import("../views/stp/logistics.vue"),
      },
      {
        path: '/trst',
        name: 'trst',
        component: () => import("../views/stp/trst.vue"),
      },
    ],
  },
]

const router = new VueRouter({
  routes
})

//设置路由导航守卫
router.beforeEach((to, from, next) => {
  if (localStorage.getItem("token")) {
    next();
  } else {
    if (to.path == "/login") {
      next();
    } else {
      next("/login")
    }
  }
});



export default router
