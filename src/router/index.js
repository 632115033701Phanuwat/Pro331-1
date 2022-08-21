import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import AboutView from '../views/AboutView.vue'
import EventDetails from '@/views/event/EventDetailView.vue'
import EventComment from '@/views/event/EventComment.vue'
import EventEdit from '@/views/event/EditView.vue'
import Eventlayout from '@/views/event/EventLayoutView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import NetWorkError from '@/views/NetworkErrorView.vue'
import EventVaccineDetail from '@/views/event/EventVaccineDetail.vue'

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventListView,
    props: (route) => ({
      page: parseInt(route.query.page) || 1,
      morepage: parseInt(route.query.morepage) || 5
    })
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/event/:id',
    name: 'EventLayout',
    props: true,
    component: Eventlayout,
    children: [
      {
        path: '',
        name: 'EventDetails',
        component: EventDetails
      },
      {
        path: '/vaccineDetails',
        name: 'EventVaccineDetail',
        component: EventVaccineDetail
      },
      {
        path: '/comment',
        name: 'EventComment',
        props: true,
        component: EventComment
      }
    ]
  },
  {
    path: '/404/:resource',
    name: '404Resource',
    component: NotFoundView,
    props: true
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFoundView
  },
  {
    path: '/network-error',
    name: 'NetworkError',
    component: NetWorkError
  },
  {
    path: '/event/:id/register',
    name: 'EventComment',
    props: true,
    component: EventComment
  },
  {
    path: '/event/:id/edit',
    name: 'EventEdit',
    props: true,
    component: EventEdit
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router