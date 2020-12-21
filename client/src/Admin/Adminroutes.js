import React from 'react';


import WithdrawRequests from './Admin/withdrawRequests';
import Totaljoinings from './Admin/totalJoinings';
import Updatenews from './Admin/UpdateNews';
import Tickets from './Admin/AdminTikets';
import Dailyreport from './Admin/dailyRport';
import Mainautopool from './Admin/Mainautopool';
import Depositrequests from './Admin/Deposit';
import Dashboard from './Dashboard';

const routes = [

  { path: '/', exact: true, name: 'Home' },
  { path: '/Admin/2b87b6e8-3928-11eb-adc1-0242ac120002/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/Admin/2b87b6e8-3928-11eb-adc1-0242ac120002/Withdraw_requests', name: 'Withdraw Requests', component : WithdrawRequests },
  { path: '/Admin/2b87b6e8-3928-11eb-adc1-0242ac120002/Total_members', name: 'Total Joinings', component: Totaljoinings },
  { path: '/Admin/2b87b6e8-3928-11eb-adc1-0242ac120002/Update_news', name: 'Update news', component: Updatenews },
  { path: '/Admin/2b87b6e8-3928-11eb-adc1-0242ac120002/Tickets', name: 'Tickets', component: Tickets, exact: true },
  { path: '/Admin/2b87b6e8-3928-11eb-adc1-0242ac120002/Autopool', name: 'Daily Report', component: Mainautopool},
  { path: '/Admin/2b87b6e8-3928-11eb-adc1-0242ac120002/Daily_report', name: 'Autopool', component: Dailyreport },
  { path: '/Admin/2b87b6e8-3928-11eb-adc1-0242ac120002/Deposit', name: 'Deposit Requests', component: Depositrequests },

  // { path: '/users/:id', exact: true, name: 'User Details', component: User }
  
];

export default routes;
