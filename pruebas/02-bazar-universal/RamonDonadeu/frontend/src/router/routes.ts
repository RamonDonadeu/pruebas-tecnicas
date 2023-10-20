import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/LandingPageLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }]
  },
  {
    path: '/items',
    component: () => import('layouts/VisualizeItemsLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/ItemsList.vue')
      },
      {
        path: '/items/:id',
        component: () => import('pages/ItemDetail.vue')
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
