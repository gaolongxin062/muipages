import Vue from 'vue'
import Router from 'vue-router'
import CheckTask from '@/module/group/pages/CheckTask'
import ClassManage from '@/module/group/pages/ClassManage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/check',
      name: 'CheckTask',
      component: CheckTask
    }, {
      path: '/class',
      name: 'ClassManage',
      component: ClassManage
    }
  ]
})
