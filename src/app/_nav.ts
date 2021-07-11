import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    // badge: {
    //   variant: 'info',
    //   text: 'NEW'
    // }
  },
  // {
  //   title: true,
  //   name: 'Theme'
  // },
  // {
  //   name: 'Colors',
  //   url: '/theme/colors',
  //   icon: 'icon-drop'
  // },
  // {
  //   name: 'Typography',
  //   url: '/theme/typography',
  //   icon: 'icon-pencil'
  // },
  // {
  //   title: true,
  //   name: 'Components'
  // },
  // {
  //   name: 'Base',
  //   url: '/base',
  //   icon: 'icon-puzzle',
  //   children: [
  //     {
  //       name: 'Cards',
  //       url: '/base/cards',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Carousels',
  //       url: '/base/carousels',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Collapses',
  //       url: '/base/collapses',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Forms',
  //       url: '/base/forms',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Navbars',
  //       url: '/base/navbars',
  //       icon: 'icon-puzzle'

  //     },
  //     {
  //       name: 'Pagination',
  //       url: '/base/paginations',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Popovers',
  //       url: '/base/popovers',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Progress',
  //       url: '/base/progress',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Switches',
  //       url: '/base/switches',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Tables',
  //       url: '/base/tables',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Tabs',
  //       url: '/base/tabs',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Tooltips',
  //       url: '/base/tooltips',
  //       icon: 'icon-puzzle'
  //     }
  //   ]
  // },
  // {
  //   name: 'Buttons',
  //   url: '/buttons',
  //   icon: 'icon-cursor',
  //   children: [
  //     {
  //       name: 'Buttons',
  //       url: '/buttons/buttons',
  //       icon: 'icon-cursor'
  //     },
  //     {
  //       name: 'Dropdowns',
  //       url: '/buttons/dropdowns',
  //       icon: 'icon-cursor'
  //     },
  //     {
  //       name: 'Brand Buttons',
  //       url: '/buttons/brand-buttons',
  //       icon: 'icon-cursor'
  //     }
  //   ]
  // },
  // {
  //   name: 'Charts',
  //   url: '/charts',
  //   icon: 'icon-pie-chart'
  // },
  // {
  //   name: 'Icons',
  //   url: '/icons',
  //   icon: 'icon-star',
  //   children: [
  //     {
  //       name: 'CoreUI Icons',
  //       url: '/icons/coreui-icons',
  //       icon: 'icon-star',
  //       badge: {
  //         variant: 'success',
  //         text: 'NEW'
  //       }
  //     },
  //     {
  //       name: 'Flags',
  //       url: '/icons/flags',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Font Awesome',
  //       url: '/icons/font-awesome',
  //       icon: 'icon-star',
  //       badge: {
  //         variant: 'secondary',
  //         text: '4.7'
  //       }
  //     },
  //     {
  //       name: 'Simple Line Icons',
  //       url: '/icons/simple-line-icons',
  //       icon: 'icon-star'
  //     }
  //   ]
  // },
  // {
  //   name: 'Notifications',
  //   url: '/notifications',
  //   icon: 'icon-bell',
  //   children: [
  //     {
  //       name: 'Alerts',
  //       url: '/notifications/alerts',
  //       icon: 'icon-bell'
  //     },
  //     {
  //       name: 'Badges',
  //       url: '/notifications/badges',
  //       icon: 'icon-bell'
  //     },
  //     {
  //       name: 'Modals',
  //       url: '/notifications/modals',
  //       icon: 'icon-bell'
  //     }
  //   ]
  // },
  {
    name: 'Master',
    url: '/master',
    icon: 'icon-doc',
    children: [
      // {
      //   name: 'Company Info',
      //   url: '/master/company-info',
      //   icon: 'icon-people'
      // },
      {
        name: 'User Management',
        url: '/master/user-management',
        icon: 'icon-people'
      },
      {
        name: 'Employee',
        url: '/master/employee',
        icon: 'icon-people'
      },
      {
        name: 'Services',
        url: '/master/services',
        icon: 'icon-wrench'
      },
      {
        name: 'Incident',
        url: '/master/incident-risk',
        icon: 'icon-people'
      },
      // {
      //   name: 'Inventory',
      //   url: '/master/inventory',
      //   icon: 'icon-people'
      // },
      // {
      //   name: 'Training',
      //   url: '/master/training',
      //   icon: 'icon-people'
      // },
      {
        name: 'DocumentControl',
        url: '/master/document-control',
        icon: 'icon-people'
      },
    ]
  },
  {
    name: 'Project Management',
    url: '/project-management',
    icon: 'icon-doc',
    children: [
      {
        name: 'Data Customer',
        url: '/project-management/data-customer',
        icon: 'icon-doc'
      },
      {
        name: 'Data Project',
        url: '/project-management/data-project',
        icon: 'icon-doc'
      },
      // {
      //   name: 'KPI Project',
      //   url: '/project-management/kpi-project',
      //   icon: 'icon-doc'
      // },
      // {
      //   name: 'Training Management',
      //   url: '/project-management/data-customer',
      //   icon: 'icon-doc'
      // },
      {
        name: 'Incident Management',
        url: '/project-management/incident-management',
        icon: 'icon-doc'
      },
    ]
  },
  {
    name: 'Services Operations',
    url: '/services-operations',
    icon: 'icon-doc',
    children: [
      {
        name: 'Attendance',
        url: '/services-operations/attendance',
        icon: 'icon-doc',
        children:[
          {
            name: 'Security Guards',
            url: '/services-operations/attendance-security-guards',
            icon: 'icon-doc'
          },
          {
            name: 'Security Patrol',
            url: '/services-operations/attendance-security-patrol',
            icon: 'icon-doc'
          },
          {
            name: 'Office Workers',
            url: '/services-operations/attendance-office-worker',
            icon: 'icon-doc'
          },
        ]
      },
      {
        name: 'Repllacement',
        url: '/services-operations/replacement',
        icon: 'icon-doc'
      },
      {
        name: 'Incident Monitoring',
        url: '/services-operations/incident-monitoring',
        icon: 'icon-doc'
      },
      {
        name: 'Training Monitoring',
        url: '/services-operations/attendance',
        icon: 'icon-doc'
      },
      {
        name: 'KPI Monitoring',
        url: '/services-operations/attendance',
        icon: 'icon-doc'
      },
      {
        name: 'News & Notification',
        url: '/services-operations/attendance',
        icon: 'icon-doc'
      },
    ]
  },
  {
    name: 'Reports',
    url: '/services-operations',
    icon: 'icon-printer',
    children: [
      {
        name: 'Reports Dashboard',
        url: '/services-operations/attendance',
        icon: 'icon-printer'
      },
      {
        name: 'Schedule Reports',
        url: '/services-operations/attendance',
        icon: 'icon-printer'
      },
      {
        name: 'Incident Reports',
        url: '/services-operations/attendance',
        icon: 'icon-printer'
      },
      {
        name: 'Activity Dashboard',
        url: '/services-operations/attendance',
        icon: 'icon-printer'
      },
      {
        name: 'Mom Reports',
        url: '/services-operations/attendance',
        icon: 'icon-printer'
      },
      {
        name: 'KPI Reports',
        url: '/services-operations/attendance',
        icon: 'icon-printer'
      },
    ]
  },
  {
    name: 'Evaluations & Improvements',
    url: '/services-operations',
    icon: 'icon-folder-alt',
    children: [
      {
        name: 'Dashboard',
        url: '/services-operations/attendance',
        icon: 'icon-folder-alt'
      },
      {
        name: 'Improvement',
        url: '/services-operations/attendance',
        icon: 'icon-folder-alt'
      }
    ]
  },
  // {
  //   name: 'Widgets',
  //   url: '/widgets',
  //   icon: 'icon-calculator',
  //   badge: {
  //     variant: 'info',
  //     text: 'NEW'
  //   }
  // },
  // {
  //   divider: true
  // },
  // {
  //   title: true,
  //   name: 'Extras',
  // },
  // {
  //   name: 'Pages',
  //   url: '/pages',
  //   icon: 'icon-star',
  //   children: [
  //     {
  //       name: 'Login',
  //       url: '/login',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Register',
  //       url: '/register',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Error 404',
  //       url: '/404',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Error 500',
  //       url: '/500',
  //       icon: 'icon-star'
  //     }
  //   ]
  // },
  // {
  //   name: 'Disabled',
  //   url: '/dashboard',
  //   icon: 'icon-ban',
  //   badge: {
  //     variant: 'secondary',
  //     text: 'NEW'
  //   },
  //   attributes: { disabled: true },
  // },
  // {
  //   name: 'Download CoreUI',
  //   url: 'http://coreui.io/angular/',
  //   icon: 'icon-cloud-download',
  //   class: 'mt-auto',
  //   variant: 'success',
  //   attributes: { target: '_blank', rel: 'noopener' }
  // },
  // {
  //   name: 'Try CoreUI PRO',
  //   url: 'http://coreui.io/pro/angular/',
  //   icon: 'icon-layers',
  //   variant: 'danger',
  //   attributes: { target: '_blank', rel: 'noopener' }
  // }
];
