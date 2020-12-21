import React from 'react';
import Dashboard from './dashboard';

import Profile from './myaccount/profile_component';
import Updatepassword from './myaccount/updatepassword';
import Updatetransitionpassword from './myaccount/updateTransitionPsd';
import Updatewalletaddress from './myaccount/updateWalletAddress';

import Directteam from './myteam/directMembers';
import Allteam from './myteam/allMembers';
import Treasure from './myteam/poolTeam';
import Autopool from './myteam/Autopool';

import Sendfund from './FundWallet/sendFund';
import Sendfundtopinwallet from './FundWallet/sendFundToPinWallet';
import Fundstatement from './FundWallet/fundStatment';

import Depositstatement from './Deposit/depositStatement';
import Deposit from './Deposit/directDeposit'

import Activate from './PinWallet/activate';
import GeneratePin from './PinWallet/generatePin';
import  Availablepins from './PinWallet/availablePins';
import Pinbalance from './PinWallet/pinBalance';

import Withdraw from './withdraw/withdrawal';
import WithdrawStatement from './withdraw/withdrawStatement';

import Raise from './Tickets/tickets';
import Old from './Tickets/oldtickets';

import Royalty from './Royalty';

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/Home/dashboard', name: 'Dashboard', component: Dashboard },
  
  //My - Account

  { path: '/Home/Account/Profile', name: 'Profile', component: Profile, exact: true },
  { path: '/Home/Account/Updatepassword', name: 'Update Password', component: Updatepassword },
  { path: '/Home/Account/Update-transaction-password', name: 'Update transaction password', component: Updatetransitionpassword },
  { path: '/Home/Account/Update-wallet-address', name: 'Update wallet address', component: Updatewalletaddress, exact: true },

  //MY TEAM

  { path: '/Home/My-team/Direct-team', name: 'Direct-team', component: Directteam },
  { path: '/Home/My-team/All-Team', name: 'All-team', component: Allteam },
  { path: '/Home/My-team/Autopool', name: 'Autopool', component: Autopool },

  //Fund Wallet

  { path: '/Home/Fund-wallet/send-fund', name: 'send fund', component: Sendfund },
  { path: '/Home/Fund-wallet/send-fund-to-pin-wallet', name: 'send fund to pin wallet', component: Sendfundtopinwallet },
  { path: '/Home/Fund-wallet/Statement', name: 'Statement', component: Fundstatement },
  // { path: '/Fund-wallet/Fund-sharing', name: 'Fund Sharing', component:  },

  //Deposit

  { path: '/Home/Deposit/Direct-deposit', name: 'Direct deposit', component:Deposit},
  { path: '/Home/Deposit/History', name: 'History', component: Depositstatement },

  //Pin wallet

  { path: '/Home/Pin-wallet/Activate', name: 'Activate', component: Activate },
  { path: '/Home/Pin-wallet/GeneratePin', name: 'Generate Pins', component: GeneratePin },
  { path: '/Home/Pin-wallet/AvailablePins', name: 'Available Pins', component: Availablepins },
  { path: '/Home/Pin-wallet/Pin-Balance', name: 'Pin balance', component: Pinbalance },

  //Withdraw

  { path: '/Home/Withdraw/withdraw', name: 'Withdraw', component: Withdraw },
  { path: '/Home/Withdraw/Withdraw-Statement', name: 'Withdraw-statement', component: WithdrawStatement },

  //Tickets

  { path: '/Home/Ticket/Raise-ticket', name: 'Raise Tickets', component: Raise },
  { path: '/Home/Ticket/Old-tickets', name: 'Old-Tickets', component: Old, exact: true },

  //Royalty

   { path: '/Home/Royalty', name: 'Royalty', component: Royalty },
  
   // { path: '/buttons/button-dropdowns', name: 'Dropdowns', component: ButtonDropdowns },
  // { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  // { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  // { path: '/charts', name: 'Charts', component: Charts },
  // { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  // { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  // { path: '/icons/flags', name: 'Flags', component: Flags },
  // { path: '/icons/brands', name: 'Brands', component: Brands },
  // { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
  // { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  // { path: '/notifications/badges', name: 'Badges', component: Badges },
  // { path: '/notifications/modals', name: 'Modals', component: Modals },
  // { path: '/notifications/toaster', name: 'Toaster', component: Toaster },
  // { path: '/widgets', name: 'Widgets', component: Widgets },
  // { path: '/users', exact: true,  name: 'Users', component: Users },
  // { path: '/users/:id', exact: true, name: 'User Details', component: User }
];

export default routes;
