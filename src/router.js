import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    }
  },
  base: process.env.BASE_URL,
  routes: [
    // ======================
    // Blank Layout
    // ======================
    {
      path: '',
      component: () => import('./layout/blank/Blank.vue'),
      // ======================
      // Theme routes / pages
      // ======================
      children: [
        {
          path: '/',
          redirect: '/login'
        },
        {
          path: '/login',
          name: 'Login',
          index: 1,
          component: () => import('./views/authentication/Login.vue')
        },
        {
          path: '/error404',
          name: 'Error 404',
          index: 2,
          component: () => import('./views/authentication/Error404.vue')
        },
        {
          path: '/register',
          name: 'Register',
          index: 3,
          component: () => import('./views/authentication/Register.vue')
        }
      ]
    },
    {
      // ======================
      // Full Layout
      // ======================
      path: '',
      component: () => import('./layout/full/MainContainer.vue'),
      // ======================
      // Theme routes / pages
      // ======================
      children: [
        {
          path: '/starterkit',
          name: 'Starterkit',
          index: 1,
          i18n: 'Starterkit',
          component: () => import('./views/StarterPage.vue')
        },
        {
          path: '/helloworld',
          name: 'Helloworld',
          index: 2,
          component: () => import('./views/HelloWorld.vue')
        },
        {
          path: '/component/alert',
          name: 'Alert',
          index: 3,
          meta: {
            breadcrumb: [
              {
                title: 'Component',
                url: '/component/alert'
              },
              {
                title: 'Alert',
                active: true
              }
            ]
          },
          component: () => import('./views/components/vuesax/alert/Alert.vue')
        },
        {
          path: '/component/avatar',
          name: 'Avatar',
          index: 4,
          meta: {
            breadcrumb: [
              {
                title: 'Component',
                url: '/component/alert'
              },
              {
                title: 'Avatar',
                active: true
              }
            ]
          },
          component: () => import('./views/components/vuesax/avatar/Avatar.vue')
        },
        {
          path: '/component/breadcrumb',
          name: 'Breadcrumb',
          index: 5,
          meta: {
            breadcrumb: [
              {
                title: 'Component',
                url: '/component/alert'
              },
              {
                title: 'Breadcrumb',
                active: true
              }
            ]
          },
          component: () =>
            import('./views/components/vuesax/breadcrumb/Breadcrumb.vue')
        },
        {
          path: '/component/buttons',
          name: 'Buttons',
          index: 6,
          meta: {
            breadcrumb: [
              {
                title: 'Component',
                url: '/component/alert'
              },
              {
                title: 'Buttons',
                active: true
              }
            ]
          },
          component: () =>
            import('./views/components/vuesax/buttons/Buttons.vue')
        },
        {
          path: '/component/cards',
          name: 'Cards',
          index: 7,
          meta: {
            breadcrumb: [
              {
                title: 'Component',
                url: '/component/alert'
              },
              {
                title: 'Cards',
                active: true
              }
            ]
          },
          component: () => import('./views/components/vuesax/cards/Cards.vue')
        },
        {
          path: '/form-elements/checkbox',
          name: 'Checkbox',
          index: 8,
          meta: {
            breadcrumb: [
              {
                title: 'Component',
                url: '/component/alert'
              },
              {
                title: 'Checkbox',
                active: true
              }
            ]
          },
          component: () =>
            import('./views/forms/form-elements/checkbox/Checkbox.vue')
        },
        {
          path: '/component/chips',
          name: 'Chips',
          index: 9,
          meta: {
            breadcrumb: [
              {
                title: 'Component',
                url: '/component/alert'
              },
              {
                title: 'Chips',
                active: true
              }
            ]
          },
          component: () => import('./views/components/vuesax/chips/Chips.vue')
        },
        {
          path: '/component/collapse',
          name: 'Collapse',
          index: 10,
          meta: {
            breadcrumb: [
              {
                title: 'Component',
                url: '/component/alert'
              },
              {
                title: 'Collapse',
                active: true
              }
            ]
          },
          component: () =>
            import('./views/components/vuesax/collapse/Collapse.vue')
        },
        {
          path: '/component/dialog',
          name: 'Dialog',
          index: 11,
          meta: {
            breadcrumb: [
              {
                title: 'Component',
                url: '/component/alert'
              },
              {
                title: 'Dialog',
                active: true
              }
            ]
          },
          component: () => import('./views/components/vuesax/dialog/Dialog.vue')
        },
        {
          path: '/component/divider',
          name: 'Divider',
          index: 12,
          meta: {
            breadcrumb: [
              {
                title: 'Component',
                url: '/component/alert'
              },
              {
                title: 'Divider',
                active: true
              }
            ]
          },
          component: () =>
            import('./views/components/vuesax/divider/Divider.vue')
        },
        {
          path: '/component/dropdown',
          name: 'Dropdown',
          index: 13,
          meta: {
            breadcrumb: [
              {
                title: 'Component',
                url: '/component/alert'
              },
              {
                title: 'Dropdown',
                active: true
              }
            ]
          },
          component: () =>
            import('./views/components/vuesax/dropdown/Dropdown.vue')
        },
        {
          path: '/form-elements/input',
          name: 'Input',
          index: 14,
          meta: {
            breadcrumb: [
              {
                title: 'Component',
                url: '/component/alert'
              },
              {
                title: 'Input',
                active: true
              }
            ]
          },
          component: () => import('./views/forms/form-elements/input/Input.vue')
        },
        {
          path: '/component/list',
          name: 'List',
          index: 15,
          meta: {
            breadcrumb: [
              {
                title: 'Component',
                url: '/component/alert'
              },
              {
                title: 'List',
                active: true
              }
            ]
          },
          component: () => import('./views/components/vuesax/list/List.vue')
        },
        {
          path: '/component/loading',
          name: 'Loading',
          index: 16,
          meta: {
            breadcrumb: [
              {
                title: 'Component',
                url: '/component/alert'
              },
              {
                title: 'Loading',
                active: true
              }
            ]
          },
          component: () =>
            import('./views/components/vuesax/loading/Loading.vue')
        },
        {
          path: '/component/navbar',
          name: 'Navbar',
          index: 17,
          meta: {
            breadcrumb: [
              {
                title: 'Component',
                url: '/component/alert'
              },
              {
                title: 'Navbar',
                active: true
              }
            ]
          },
          component: () => import('./views/components/vuesax/navbar/Navbar.vue')
        },
        {
          path: '/component/notification',
          name: 'Notification',
          index: 18,
          meta: {
            breadcrumb: [
              {
                title: 'Component',
                url: '/component/alert'
              },
              {
                title: 'Notification',
                active: true
              }
            ]
          },
          component: () =>
            import('./views/components/vuesax/notification/Notification.vue')
        },
        {
          path: '/component/number-input',
          name: 'Number input',
          index: 19,
          meta: {
            breadcrumb: [
              {
                title: 'Component',
                url: '/component/alert'
              },
              {
                title: 'Number Input',
                active: true
              }
            ]
          },
          component: () =>
            import('./views/components/vuesax/number-input/NumberInput.vue')
        },
        {
          path: '/component/pagination',
          name: 'Pagination',
          index: 20,
          meta: {
            breadcrumb: [
              {
                title: 'Component',
                url: '/component/alert'
              },
              {
                title: 'Pagination',
                active: true
              }
            ]
          },
          component: () =>
            import('./views/components/vuesax/pagination/Pagination.vue')
        },
        {
          path: '/component/popup',
          name: 'Popup',
          index: 21,
          meta: {
            breadcrumb: [
              {
                title: 'Component',
                url: '/component/alert'
              },
              {
                title: 'Popup',
                active: true
              }
            ]
          },
          component: () => import('./views/components/vuesax/popup/Popup.vue')
        },
        {
          path: '/component/progress',
          name: 'Progress',
          index: 22,
          meta: {
            breadcrumb: [
              {
                title: 'Component',
                url: '/component/alert'
              },
              {
                title: 'Progress',
                active: true
              }
            ]
          },
          component: () =>
            import('./views/components/vuesax/progress/Progress.vue')
        },
        {
          path: '/form-elements/radio',
          name: 'Radio',
          index: 23,
          meta: {
            breadcrumb: [
              {
                title: 'Component',
                url: '/component/alert'
              },
              {
                title: 'Radio',
                active: true
              }
            ]
          },
          component: () => import('./views/forms/form-elements/radio/Radio.vue')
        },
        {
          path: '/form-elements/select',
          name: 'Select',
          index: 24,
          meta: {
            breadcrumb: [
              {
                title: 'Component',
                url: '/component/alert'
              },
              {
                title: 'Select',
                active: true
              }
            ]
          },
          component: () =>
            import('./views/forms/form-elements/select/Select.vue')
        },
        {
          path: '/component/sidebar',
          name: 'Sidebar',
          index: 25,
          meta: {
            breadcrumb: [
              {
                title: 'Component',
                url: '/component/alert'
              },
              {
                title: 'Sidebar',
                active: true
              }
            ]
          },
          component: () =>
            import('./views/components/vuesax/sidebar/Sidebar.vue')
        },
        {
          path: '/component/slider',
          name: 'Slider',
          index: 26,
          meta: {
            breadcrumb: [
              {
                title: 'Component',
                url: '/component/alert'
              },
              {
                title: 'Slider',
                active: true
              }
            ]
          },
          component: () => import('./views/components/vuesax/slider/Slider.vue')
        },
        {
          path: '/form-elements/switch',
          name: 'Switch',
          index: 27,
          meta: {
            breadcrumb: [
              {
                title: 'Component',
                url: '/component/alert'
              },
              {
                title: 'Switch',
                active: true
              }
            ]
          },
          component: () =>
            import('./views/forms/form-elements/switch/Switch.vue')
        },
        {
          path: '/component/tabs',
          name: 'Tabs',
          index: 28,
          meta: {
            breadcrumb: [
              {
                title: 'Component',
                url: '/component/alert'
              },
              {
                title: 'Tabs',
                active: true
              }
            ]
          },
          component: () => import('./views/components/vuesax/tabs/Tabs.vue')
        },
        {
          path: '/form-elements/textarea',
          name: 'Textarea',
          index: 29,
          meta: {
            breadcrumb: [
              {
                title: 'Component',
                url: '/component/alert'
              },
              {
                title: 'Textarea',
                active: true
              }
            ]
          },
          component: () =>
            import('./views/forms/form-elements/textarea/Textarea.vue')
        },
        {
          path: '/component/tooltip',
          name: 'Tooltip',
          index: 30,
          meta: {
            breadcrumb: [
              {
                title: 'Component',
                url: '/component/alert'
              },
              {
                title: 'Tooltip',
                active: true
              }
            ]
          },
          component: () =>
            import('./views/components/vuesax/tooltip/Tooltip.vue')
        },
        {
          path: '/form-elements/upload',
          name: 'Upload',
          index: 31,
          meta: {
            breadcrumb: [
              {
                title: 'Component',
                url: '/component/alert'
              },
              {
                title: 'Upload',
                active: true
              }
            ]
          },
          component: () =>
            import('./views/forms/form-elements/upload/Upload.vue')
        },
        {
          path: '/charts/apexcharts',
          name: 'ApexCharts',
          index: 32,
          meta: {
            breadcrumb: [
              {
                title: 'Charts',
                url: '/charts/apexcharts'
              },
              {
                title: 'Apex Charts',
                active: true
              }
            ]
          },
          component: () => import('./views/charts/apexcharts/ApexCharts.vue')
        },
        {
          path: '/form-layouts/form-action',
          name: 'Form Action',
          index: 33,
          meta: {
            breadcrumb: [
              {
                title: 'Form Layouts',
                url: '/form-layouts/form-action'
              },
              {
                title: 'Form Action',
                active: true
              }
            ]
          },
          component: () =>
            import('./views/forms/form-layouts/form-action/FormAction.vue')
        },
        {
          path: '/form-layouts/form-basic',
          name: 'Form Basic',
          index: 34,
          meta: {
            breadcrumb: [
              {
                title: 'Form Layouts',
                url: '/form-layouts/form-action'
              },
              {
                title: 'Form Action',
                active: true
              }
            ]
          },
          component: () =>
            import('./views/forms/form-layouts/form-basic/FormBasic.vue')
        },
        {
          path: '/form-layouts/form-horizontal',
          name: 'Form Horizontal',
          index: 35,
          meta: {
            breadcrumb: [
              {
                title: 'Form Layouts',
                url: '/form-layouts/form-action'
              },
              {
                title: 'Form Horizontal',
                active: true
              }
            ]
          },
          component: () =>
            import(
              './views/forms/form-layouts/form-horizontal/FormHorizontal.vue'
            )
        },
        {
          path: '/tables/basic-table',
          name: 'Basic Table',
          index: 36,
          meta: {
            breadcrumb: [
              {
                title: 'Tables',
                url: '/tables/basic-table'
              },
              {
                title: 'Basic Table',
                active: true
              }
            ]
          },
          component: () => import('./views/tables/basic-table/BasicTable.vue')
        },
        {
          path: '/tables/editable-datatable',
          name: 'Editable DataTable',
          index: 37,
          meta: {
            breadcrumb: [
              {
                title: 'Tables',
                url: '/tables/basic-table'
              },
              {
                title: 'Editable Table',
                active: true
              }
            ]
          },
          component: () =>
            import('./views/tables/editable-datatable/EditableDatatable.vue')
        },
        {
          path: '/tables/expand-datatable',
          name: 'Expand Datatable',
          index: 38,
          meta: {
            breadcrumb: [
              {
                title: 'Tables',
                url: '/tables/basic-table'
              },
              {
                title: 'Expand Table',
                active: true
              }
            ]
          },
          component: () =>
            import('./views/tables/expand-datatable/ExpandDatatable.vue')
        },
        {
          path: '/tables/filter-table',
          name: 'Filter Table',
          index: 39,
          meta: {
            breadcrumb: [
              {
                title: 'Tables',
                url: '/tables/basic-table'
              },
              {
                title: 'Filter Table',
                active: true
              }
            ]
          },
          component: () => import('./views/tables/filter-table/FilterTable.vue')
        },
        {
          path: '/tables/miscellaneous-table',
          name: 'Miscellaneous Table',
          index: 40,
          meta: {
            breadcrumb: [
              {
                title: 'Tables',
                url: '/tables/basic-table'
              },
              {
                title: 'Miscellaneous Table',
                active: true
              }
            ]
          },
          component: () =>
            import('./views/tables/miscellaneous-table/MiscellaneousTable.vue')
        },
        {
          path: '/tables/pagination-table',
          name: 'Pagination Table',
          index: 41,
          meta: {
            breadcrumb: [
              {
                title: 'Tables',
                url: '/tables/basic-table'
              },
              {
                title: 'Pagination Table',
                active: true
              }
            ]
          },
          component: () =>
            import('./views/tables/pagination-table/PaginationTable.vue')
        },
        {
          path: '/tables/selected-table',
          name: 'Selected Table',
          index: 42,
          meta: {
            breadcrumb: [
              {
                title: 'Tables',
                url: '/tables/basic-table'
              },
              {
                title: 'Selected Table',
                active: true
              }
            ]
          },
          component: () =>
            import('./views/tables/selected-table/SelectedTable.vue')
        },
        {
          path: '/tables/sst-table',
          name: 'SST Table',
          index: 43,
          meta: {
            breadcrumb: [
              {
                title: 'Tables',
                url: '/tables/basic-table'
              },
              {
                title: 'SST Table',
                active: true
              }
            ]
          },
          component: () => import('./views/tables/sst-table/SstTable.vue')
        },
        {
          path: '/charts/chartjs',
          name: 'ChartJs',
          index: 44,
          meta: {
            breadcrumb: [
              {
                title: 'Charts',
                url: '/charts/apex-charts'
              },
              {
                title: 'ChartJs',
                active: true
              }
            ]
          },
          component: () => import('./views/charts/chartjs/ChartJs.vue')
        },
        {
          path: '/icons/material-icons',
          name: 'Material Icons',
          index: 45,
          meta: {
            breadcrumb: [
              {
                title: 'Icons',
                url: '/icons/material-icons'
              },
              {
                title: 'Material Icons',
                active: true
              }
            ]
          },
          component: () =>
            import('./views/icons/material-icons/MaterialIcons.vue')
        },
        {
          path: '/icons/themify-icons',
          name: 'Themify Icons',
          index: 46,
          meta: {
            breadcrumb: [
              {
                title: 'Icons',
                url: '/icons/material-icons'
              },
              {
                title: 'Themify Icons',
                active: true
              }
            ]
          },
          component: () =>
            import('./views/icons/themify-icons/ThemifyIcons.vue')
        },
        {
          path: '/apps/chat',
          name: 'Chats',
          index: 47,
          meta: {
            breadcrumb: [
              {
                title: 'Apps',
                url: '/apps/chat'
              },
              {
                title: 'Chat Application',
                active: true
              }
            ]
          },
          component: () => import('./views/apps/chat/Chat.vue')
        },
        {
          path: '/extra-components/carousel',
          name: 'Carousel',
          index: 48,
          meta: {
            breadcrumb: [
              {
                title: 'Extra Components',
                url: '/extra-components/carousel'
              },
              {
                title: 'Carousel',
                active: true
              }
            ]
          },
          component: () =>
            import('./views/extra-components/carousel/Carousel.vue')
        },
        {
          path: '/apps/calendar',
          name: 'Calendar',
          index: 49,
          meta: {
            breadcrumb: [
              {
                title: 'Apps',
                url: '/apps/chat'
              },
              {
                title: 'Calendar',
                active: true
              }
            ]
          },
          component: () => import('./views/apps/calendar/Calendar.vue')
        },
        {
          path: '/dashboards/serviceweekend-dashboard',
          name: 'Serviceweekend Dashboard',
          index: 50,
          meta: {
            breadcrumb: [
              {
                title: 'Dashboards',
                url: '/dashboards/serviceweekend-dashboard'
              },
              {
                title: 'Serviceweekend Dashboard',
                active: true
              }
            ]
          },
          component: () =>
            import('./views/serviceweekend/ServiceweekendDashboard.vue')
        },
        {
          path: '/serviceweekend/deployments',
          name: 'deployments',
          index: 50,
          meta: {
            breadcrumb: [
              {
                title: 'Deployments',
                url: '/serviceweekend/deployments'
              },
              {
                title: 'Deployments',
                active: true
              }
            ]
          },
          component: () => import('./views/serviceweekend/Deployments.vue')
        },
        {
          path: '/serviceweekend/compliancy',
          name: 'Compliancy',
          index: 51,
          meta: {
            breadcrumb: [
              {
                title: 'Dashboards',
                url: '/dashboards/classic-dashboard'
              },
              {
                title: 'Analytical Dashboard',
                active: true
              }
            ]
          },
          component: () => import('./views/serviceweekend/Compliancy.vue')
        },
        {
          path: '/dashboards/ecommerce-dashboard',
          name: 'Ecommerce Dashboard',
          index: 52,
          meta: {
            breadcrumb: [
              {
                title: 'Dashboards',
                url: '/dashboards/classic-dashboard'
              },
              {
                title: 'Ecommerce Dashboard',
                active: true
              }
            ]
          },
          component: () =>
            import(
              './views/dashboards/ecommerce-dashboard/EcommerceDashboard.vue'
            )
        },
        {
          path: '/apps/email',
          name: 'Email',
          index: 53,
          meta: {
            breadcrumb: [
              {
                title: 'Apps',
                url: '/apps/chat'
              },
              {
                title: 'Email Application',
                active: true
              }
            ]
          },
          component: () => import('./views/apps/email/Email.vue')
        },
        {
          path: '/form-elements/datepicker',
          name: 'Form Datepicker',
          index: 54,
          meta: {
            breadcrumb: [
              {
                title: 'Form Elements',
                url: '/form-elements/checkboxes'
              },
              {
                title: 'Datepicker',
                active: true
              }
            ]
          },
          component: () =>
            import('./views/forms/form-elements/datepicker/Datepicker.vue')
        },
        {
          path: '/serviceweekend/checklist',
          name: 'Checklist',
          index: 55,
          meta: {
            breadcrumb: [
              {
                title: 'Checklist',
                url: '/serviceweekend/checklist-dashboard'
              },
              {
                title: 'Checklist',
                active: true
              }
            ]
          },
          component: () => import('./views/serviceweekend/Checklist.vue')
        },
        {
          path: '/dashboards/general-dashboard',
          name: 'General Dashboard',
          index: 55,
          meta: {
            breadcrumb: [
              {
                title: 'Dashboards',
                url: '/dashboards/classic-dashboard'
              },
              {
                title: 'General Dashboard',
                active: true
              }
            ]
          },
          component: () =>
            import('./views/dashboards/general-dashboard/GeneralDashboard.vue')
        },
        {
          path: '/apps/contact',
          name: 'Contact',
          index: 56,
          meta: {
            breadcrumb: [
              {
                title: 'Apps',
                url: '/apps/chat'
              },
              {
                title: 'Contact',
                active: true
              }
            ]
          },
          component: () => import('./views/apps/contact/Contact.vue')
        },
        {
          path: '/apps/contact-grid',
          name: 'Contact Grid',
          index: 57,
          meta: {
            breadcrumb: [
              {
                title: 'Apps',
                url: '/apps/chat'
              },
              {
                title: 'Contact Grid',
                active: true
              }
            ]
          },
          component: () => import('./views/apps/contact-grid/ContactGrid.vue')
        },
        {
          path: '/widgets/widget-apps',
          name: 'Widget Apps',
          index: 58,
          meta: {
            breadcrumb: [
              {
                title: 'Widgets',
                url: '/widgets/widget-apps'
              },
              {
                title: 'Widget Apps',
                active: true
              }
            ]
          },
          component: () => import('./views/widgets/widget-apps/WidgetApp.vue')
        },
        {
          path: '/widgets/widget-data',
          name: 'Widget Data',
          index: 59,
          meta: {
            breadcrumb: [
              {
                title: 'Widgets',
                url: '/widgets/widget-apps'
              },
              {
                title: 'Widget Data',
                active: true
              }
            ]
          },
          component: () => import('./views/widgets/widget-data/WidgetData.vue')
        },
        {
          path: '/forms/form-wizard',
          name: 'Form Wizard',
          index: 59,
          meta: {
            breadcrumb: [
              {
                title: 'Forms',
                url: '/forms/form-elements/checkboxes'
              },
              {
                title: 'Form Wizard',
                active: true
              }
            ]
          },
          component: () => import('./views/forms/form-wizard/FormWizard.vue')
        },
        {
          path: '/extra-components/drag-n-drop',
          name: 'Drag & Drop',
          index: 60,
          meta: {
            breadcrumb: [
              {
                title: 'Forms',
                url: '/forms/form-elements/checkboxes'
              },
              {
                title: 'Drag & Drop',
                active: true
              }
            ]
          },
          component: () =>
            import('./views/extra-components/drag-n-drop/DragnDrop.vue')
        },
        {
          path: '/apps/todo',
          name: 'Todo',
          index: 61,
          meta: {
            breadcrumb: [
              {
                title: 'Apps',
                url: '/apps/todo'
              },
              {
                title: 'Todo Application',
                active: true
              }
            ]
          },
          component: () => import('./views/apps/todo/Todo.vue')
        }
      ]
    },
    // Redirect to 404 page, if no match found
    {
      path: '*',
      redirect: '/Error404'
    }
  ]
})

import NProgress from 'nprogress'

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    // Start the route progress bar.
    NProgress.start()
  }
  next()
})

router.afterEach(() => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})
export default router
