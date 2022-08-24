import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import EventDetailsview from '@/views/event/EventDetailView.vue'
import EventDetails from '@/views/EventDetails.vue'
import EventComment from '@/views/event/EventComment.vue'
import EventEdit from '@/views/event/EditView.vue'
import EventlayoutView from '@/views/event/EventLayoutView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import GStore from '@/store'
import NetWorkError from '@/views/NetworkErrorView.vue'
import EventService from '@/services/EventService.js'
import EventVaccineDetail from '@/views/event/EventVaccineDetail.vue'

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventDetails,
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
    name: 'EventLayoutView',
    component: EventlayoutView,
    props: true,
    beforeEnter: (to) => {
      //<-- put API call here
      return EventService.getEvent(to.params.id) //return and params.id
        .then((response) => {
          //still need to set the data here
          GStore.event = response.data
        })
        .catch((error) => {
          if (error.response && error.response.status == 404) {
            return {
              //<---Return
              name: '404Resource',
              params: { resource: 'event' }
            }
          } else {
            return { name: 'NetworkError' }
          }
        })
    },
    children: [
      {
        path: 'Patient',
        name: 'EventDetails',
        component: EventDetailsview,
        props: true
      },
      {
        path: 'VaccineCertificate ',
        name: 'VaccineDetail',
        props: true,
        component: EventVaccineDetail
      },
      {
        path: 'DoctorRecommendation',
        name: 'EventRegister',
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
