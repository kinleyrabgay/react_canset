/* eslint-disable react-refresh/only-export-components */
import { AiOutlineStock } from 'react-icons/ai';
import { FiShoppingBag, FiCreditCard } from 'react-icons/fi';
import { BsCurrencyDollar, BsShield } from 'react-icons/bs';
import { RiFile4Line } from 'react-icons/ri';
import { RiMap2Fill } from 'react-icons/ri';
import { IoMdContacts } from 'react-icons/io';

export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'druksat',
        icon: <FiShoppingBag />,
      },
    ],
  },

  {
    title: 'Pages',
    links: [
      {
        name: 'reports',
        icon: <RiFile4Line />,
      },
      {
        name: 'employees',
        icon: <IoMdContacts />,
      },
      {
        name: 'maps',
        icon: <RiMap2Fill />,
      },
    ],
  },
  // {
  //   title: 'Apps',
  //   links: [
  //     {
  //       name: 'map',
  //       icon: <RiMap2Fill />,
  //     },
  //   ],
  // },
  {
    title: 'Charts',
    links: [
      {
        name: 'line',
        icon: <AiOutlineStock />,
      },
    ],
  },
];

export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];

export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: 'My Profile',
    desc: 'Account Settings',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  {
    icon: <BsShield />,
    title: 'My Inbox',
    desc: 'Messages & Emails',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
  },
  {
    icon: <FiCreditCard />,
    title: 'My Tasks',
    desc: 'To-do and Daily Tasks',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
  },
];
