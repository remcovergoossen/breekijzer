export default [
  {
    url: '/dashboards',
    name: 'Serviceweekend',
    icon: 'mdi mdi-calendar',
    i18n: 'Serviceweekend',
    index: 1,
    child: [
      {
        url: '/dashboards/serviceweekend-dashboard',
        name: 'Dashboard',
        icon: 'mdi mdi-view-dashboard',
        i18n: 'Dashboard',
        index: 1.1
      },
      {
        url: '/dashboards/classic-dashboard',
        name: 'Deployments',
        icon: 'mdi mdi mdi-adjust',
        i18n: 'Deployments',
        index: 1.2
      },
      {
        url: '/serviceweekend/compliancy',
        name: 'Compliancy',
        icon: 'mdi mdi mdi-adjust',
        i18n: 'Compliancy',
        index: 1.3
      },

      {
        url: '/dashboards/ecommerce-dashboard',
        name: 'Environments',
        icon: 'mdi mdi-application',
        i18n: 'Environments',
        index: 1.4
      },
      {
        url: '/dashboards/general-dashboard',
        name: 'Updates',
        icon: 'mdi mdi mdi-update',
        i18n: 'Updates',
        index: 1.5
      },
      {
        url: '/serviceweekend/checklist',
        name: 'Checklist',
        icon: 'mdi mdi-format-list-numbers',
        i18n: 'Checklist',
        index: 1.6
      }
    ]
  }
]
