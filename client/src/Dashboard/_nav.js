export default [
    {
      _tag: 'CSidebarNavItem',
      name: 'Dashboard',
      to: '/Home/dashboard',
      // icon: 'cil-speedometer',
      fontIcon: 'fas fa-tachometer-alt',
      badge: {
        color: 'info',
        text: 'NEW',
      }
    },
    {
      _tag: 'CSidebarNavTitle',
      _children: ['Menu']
    },
    // {
    //   _tag: 'CSidebarNavItem',
    //   name: 'Colors',
    //   to: '/theme/colors',
    //   icon: 'cil-drop',
    // },
    // {
    //   _tag: 'CSidebarNavItem',
    //   name: 'Typography',
    //   to: '/theme/typography',
    //   icon: 'cil-pencil',
    // },
    // {
    //   _tag: 'CSidebarNavTitle',
    //   _children: ['Components']
    // },
    {
      _tag: 'CSidebarNavDropdown',
      name: 'Account',
      route: '/Home/Account',
      fontIcon: 'fas fa-tachometer-alt',
      _children: [
        {
          _tag: 'CSidebarNavItem',
          name: 'Profile',
          to: '/Home/Account/Profile',
        },
        {
          _tag: 'CSidebarNavItem',
          name: 'Update password',
          to: '/Home/Account/Updatepassword',
        },
        {
          _tag: 'CSidebarNavItem',
          name: 'Update transaction password',
          to: '/Home/Account/Update-transaction-password',
        },
        {
          _tag: 'CSidebarNavItem',
          name: 'Update Wallet Address',
          to: '/Home/Account/Update-wallet-address',
        },
        // {
        //   _tag: 'CSidebarNavItem',
        //   name: 'Forms',
        //   to: '/base/forms',
        // },
        // {
        //   _tag: 'CSidebarNavItem',
        //   name: 'Jumbotron',
        //   to: '/base/jumbotrons',
        // },
        // {
        //   _tag: 'CSidebarNavItem',
        //   name: 'List group',
        //   to: '/base/list-groups',
        // },
        // {
        //   _tag: 'CSidebarNavItem',
        //   name: 'Navs',
        //   to: '/base/navs',
        // },
        // {
        //   _tag: 'CSidebarNavItem',
        //   name: 'Navbars',
        //   to: '/base/navbars',
        // },
        // {
        //   _tag: 'CSidebarNavItem',
        //   name: 'Pagination',
        //   to: '/base/paginations',
        // },
        // {
        //   _tag: 'CSidebarNavItem',
        //   name: 'Popovers',
        //   to: '/base/popovers',
        // },
        // {
        //   _tag: 'CSidebarNavItem',
        //   name: 'Progress',
        //   to: '/base/progress-bar',
        // },
        // {
        //   _tag: 'CSidebarNavItem',
        //   name: 'Switches',
        //   to: '/base/switches',
        // },
        // {
        //   _tag: 'CSidebarNavItem',
        //   name: 'Tables',
        //   to: '/base/tables',
        // },
        // {
        //   _tag: 'CSidebarNavItem',
        //   name: 'Tabs',
        //   to: '/base/tabs',
        // },
        // {
        //   _tag: 'CSidebarNavItem',
        //   name: 'Tooltips',
        //   to: '/base/tooltips',
        // },
      ],
    },
    {
      _tag: 'CSidebarNavDropdown',
      name: 'My Team',
      route: '/Home/My-team',
      fontIcon: 'fas fa-tachometer-alt',
      _children: [
        {
          _tag: 'CSidebarNavItem',
          name: 'Direct team',
          to: '/Home/My-team/Direct-team',
        },
        {
          _tag: 'CSidebarNavItem',
          name: 'All Team',
          to: '/Home/My-team/All-Team',
        },
        {
          _tag: 'CSidebarNavItem',
          name: 'Autopool',
          to: '/Home/My-team/Autopool',
        },
        // {
        //   _tag: 'CSidebarNavItem',
        //   name: 'Dropdowns',
        //   to: '/buttons/button-dropdowns',
        // }
      ],
    },
    // {
    //   _tag: 'CSidebarNavItem',
    //   name: 'Fund Wallet',
    //   to: '/Fund-Wallet',
    //   fontIcon: 'fas fa-tachometer-alt',
    // },
    {
      _tag: 'CSidebarNavDropdown',
      name: 'Fund Wallet',
      to: '/Home/Fund-Wallet',
      fontIcon: 'fas fa-tachometer-alt',
      _children: [
        {
          _tag: 'CSidebarNavItem',
          name: 'Send Fund',
          to: '/Home/Fund-wallet/send-fund',
          badge: {
            color: 'success',
            text: 'NEW',
          },
        },
        {
          _tag: 'CSidebarNavItem',
          name: 'Send Fund to pin wallet',
          to: '/Home/Fund-wallet/send-fund-to-pin-wallet',
        },
        {
          _tag: 'CSidebarNavItem',
          name: 'Statement',
          to: '/Home/Fund-wallet/Statement',
         },
        // {
        //   _tag: 'CSidebarNavItem',
        //   name: 'Fund sharing',
        //   to: '/Fund-wallet/Fund-sharing'
        // }

      ],
    },
    {
      _tag: 'CSidebarNavDropdown',
      name: 'Deposit',
      route: '/Home/Deposit',
      fontIcon: 'fas fa-tachometer-alt',
      _children: [
        {
          _tag: 'CSidebarNavItem',
          name: 'Direct Deposit',
          to: '/Home/Deposit/Direct-deposit',
        },
        {
          _tag: 'CSidebarNavItem',
          name: 'History',
          to: '/Home/Deposit/History',
        },
      ]
    },
    // {
    //   _tag: 'CSidebarNavItem',
    //   name: 'Widgets',
    //   to: '/widgets',
    //   icon: 'cil-calculator',
    //   badge: {
    //     color: 'info',
    //     text: 'NEW',
    //   },
    // },
    // {
    //   _tag: 'CSidebarNavDivider'
    // },
    // {
    //   _tag: 'CSidebarNavTitle',
    //   _children: ['Extras'],
    // },
    {
      _tag: 'CSidebarNavDropdown',
      name: 'Pin Wallet',
      route: '/Home/Pin-wallet',
      fontIcon: 'fas fa-tachometer-alt',
      _children: [
        {
          _tag: 'CSidebarNavItem',
          name: 'Activate',
          to: '/Home/Pin-wallet/Activate',
        },
        {
          _tag: 'CSidebarNavItem',
          name: 'Generate Pin',
          to: '/Home/Pin-wallet/GeneratePin',
        },
        {
          _tag: 'CSidebarNavItem',
          name: 'Available Pins',
          to: '/Home/Pin-wallet/AvailablePins',
        },
        {
          _tag: 'CSidebarNavItem',
          name: 'Pin Balance',
          to: '/Home/Pin-wallet/Pin-Balance',
        },
      ],
    },
    {
      _tag: 'CSidebarNavDropdown',
      name: 'Withdraw',
      to: '/Home/Withdraw',
      fontIcon: 'fas fa-tachometer-alt',
      _children: [
        {
          _tag: 'CSidebarNavItem',
          name: 'Withdraw',
          to: '/Home/Withdraw/withdraw',
        },
        {
          _tag: 'CSidebarNavItem',
          name: 'Withdraw Statement',
          to: '/Home/Withdraw/Withdraw-Statement',
        },
      ]
    },

    {
      _tag: 'CSidebarNavDropdown',
      name: 'Tickets',
      to: '/Home/Ticket',
      fontIcon: 'fas fa-tachometer-alt',
      _children: [
        {
          _tag: 'CSidebarNavItem',
          name: 'Raise Ticket',
          to: '/Home/Ticket/Raise-ticket',
        },
        {
          _tag: 'CSidebarNavItem',
          name: 'Old Tickets',
          to: '/Home/Ticket/Old-tickets',
        },
        
      ]
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Royalty',
      to: '/Home/Royalty',
      fontIcon: 'fas fa-tachometer-alt',

    },
  
  ]
  
  