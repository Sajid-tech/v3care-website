import { all_routes } from '../routes/all_routes';

const routes = all_routes;

export const header = [
 






  
  // {
  //   id:1,
  //   tittle: 'Services',
  //   showAsTab: false,
  //   separateRoute: false,
  //   menu: [
  //     {
  //       id:1,
  //       menuValue: 'Service Grid',
  //       routes: routes.serviceGrid,
  //       hasSubRoute: false,
  //       showSubRoute: false,
  //       subMenus: [],
  //     },
  //     {
  //       id:2,
  //       menuValue: 'Service List',
  //       routes: routes.serviceList,
  //       hasSubRoute: false,
  //       showSubRoute: false,
  //       subMenus: [],
  //     },
  //     {
  //       id:3,
  //       menuValue: 'Service Details',
  //       hasSubRoute: true,
  //       showSubRoute: false,
  //       subMenus: [
  //         {
  //           id:1,
  //           menuValue: 'Service Details 1',
  //           routes: routes.serviceDetails1,
  //           hasSubRoute: false,
  //           showSubRoute: false,
  //           subMenus: [],
  //         },
  //         {
  //           id:2,
  //           menuValue: 'Service Details 2',
  //           routes: routes.serviceDetails2,
  //           hasSubRoute: false,
  //           showSubRoute: false,
  //           subMenus: [],
  //         },
  //       ],
  //     },
  //     {
  //       id:4,
  //       menuValue: 'Service Request',
  //       routes: routes.serviceRequest,
  //       hasSubRoute: false,
  //       showSubRoute: false,
  //       subMenus: [],
  //     },
  //     {
  //       id:4,
  //       menuValue: 'Search',
  //       routes: routes.search,
  //       hasSubRoute: false,
  //       showSubRoute: false,
  //       subMenus: [],
  //     },
  //     {
  //       id:5,
  //       menuValue: 'Providers',
  //       hasSubRoute: true,
  //       showSubRoute: false,
  //       subMenus: [
  //         {
  //           id:1,
  //           menuValue: 'Providers List',
  //           routes: routes.provider,
  //           hasSubRoute: false,
  //           showSubRoute: false,
  //           subMenus: [],
  //         },
  //         {
  //           id:2,
  //           menuValue: 'Providers Details',
  //           routes: routes.providerDetails,
  //           hasSubRoute: false,
  //           showSubRoute: false,
  //           subMenus: [],
  //         },
  //       ],
  //     },
  //     {
  //       id:6,
  //       menuValue: 'categories',
  //       hasSubRoute: true,
  //       showSubRoute: false,
  //       subMenus: [
  //         {
  //           id:1,
  //           menuValue: 'categories 1',
  //           routes: routes.categories,
  //           hasSubRoute: false,
  //           showSubRoute: false,
  //           subMenus: [],
  //         },
  //         {
  //           id:2,
  //           menuValue: 'categories 2',
  //           routes: routes.categories2,
  //           hasSubRoute: false,
  //           showSubRoute: false,
  //           subMenus: [],
  //         },
  //       ],
  //     },
  //     {
  //       id:7,
  //       menuValue: 'Create Service',
  //       routes: routes.createService,
  //       hasSubRoute: false,
  //       showSubRoute: false,
  //       subMenus: [],
  //     },
  //   ],
  // },
 
  
  {
    id:1,
    tittle: 'Pages',
    showAsTab: false,
    separateRoute: false,
    menu: [
      {
        id:1,
        menuValue: 'About',
        routes: routes.aboutUs,
        hasSubRoute: false,
        showSubRoute: false,
        subMenus: [],
      },
      {
        id:6,
        menuValue: 'Blog',
        hasSubRoute: true,
        showSubRoute: false,
        subMenus: [
          {
            id:1,
            menuValue: 'Blog Grid',
            routes: routes.blogGrid,
            hasSubRoute: false,
            showSubRoute: false,
            subMenus: [],
          },
          {
            id:2,
            menuValue: 'Blog List',
            routes: routes.blogList,
            hasSubRoute: false,
            showSubRoute: false,
            subMenus: [],
          },
          {
            id:3,
            menuValue: 'Blog Details',
            routes: routes.blogDetails,
            hasSubRoute: false,
            showSubRoute: false,
            subMenus: [],
          },
        ],
      },
      {
        id:2,
        menuValue: 'Contact Us',
        routes: routes.contactUs,
        hasSubRoute: false,
        showSubRoute: false,
        subMenus: [],
      },
      {
        id:3,
        menuValue: 'How It Works',
        routes: routes.howItWorks,
        hasSubRoute: false,
        showSubRoute: false,
        subMenus: [],
      },
      {
        id:4,
        menuValue: 'Error Page',
        hasSubRoute: true,
        showSubRoute: false,
        subMenus: [
          {
            id:1,
            menuValue: '404 Error',
            routes: routes.error404,
            hasSubRoute: false,
            showSubRoute: false,
            subMenus: [],
          },
          {
            id:2,
            menuValue: '500 Error',
            routes: routes.error500,
            hasSubRoute: false,
            showSubRoute: false,
            subMenus: [],
          },
        ],
      },
      {
        id:5,
        menuValue: 'Authentication',
        hasSubRoute: true,
        showSubRoute: false,
        subMenus: [
          {
            id:4,
            menuValue: 'Login',
            routes: routes.login,
            hasSubRoute: false,
            showSubRoute: false,
            subMenus: [],
          },
          {
            id:2,
            menuValue: 'Customer Signup',
            routes: routes.userSignup,
            hasSubRoute: false,
            showSubRoute: false,
            subMenus: [],
          },
          {
            id:3,
            menuValue: 'Provider Signup',
            routes: routes.providerSignup,
            hasSubRoute: false,
            showSubRoute: false,
            subMenus: [],
          },
          
          {
            id:5,
            menuValue: 'Reset Password',
            routes: routes.resetPassword,
            hasSubRoute: false,
            showSubRoute: false,
            subMenus: [],
          },
          {
            id:7,
            menuValue: 'Phone OTP',
            routes: routes.phoneOtp,
            hasSubRoute: false,
            showSubRoute: false,
            subMenus: [],
          },
          {
            id:8,
            menuValue: 'Email OTP',
            routes: routes.emailOtp,
            hasSubRoute: false,
            showSubRoute: false,
            subMenus: [],
          },
          {
            id:9,
            menuValue: 'Free Trial',
            routes: routes.freeTrail,
            hasSubRoute: false,
            showSubRoute: false,
            subMenus: [],
          },
        ],
      },
      {
        id:6,
        menuValue: 'Booking',
        hasSubRoute: true,
        showSubRoute: false,
        subMenus: [
          {
            id:1,
            menuValue: 'Booking 1',
            routes: routes.bookings,
            hasSubRoute: false,
            showSubRoute: false,
            subMenus: [],
          },
          {
            id:2,
            menuValue: 'Booking 2',
            routes: routes.booking2,
            hasSubRoute: false,
            showSubRoute: false,
            subMenus: [],
          },
          {
            id:3,
            menuValue: 'Booking Checkout',
            routes: routes.bookingPayment,
            hasSubRoute: false,
            showSubRoute: false,
            subMenus: [],
          },
          {
            id:4,
            menuValue: 'Booking Success',
            routes: routes.bookingDone,
            hasSubRoute: false,
            showSubRoute: false,
            subMenus: [],
          },
          {
            id:5,
            menuValue: 'Booking Details',
            routes: routes.bookingDetails,
            hasSubRoute: false,
            showSubRoute: false,
            subMenus: [],
          },
        ],
      },
      {
        id:7,
        menuValue: 'Categories',
        routes: routes.categories,
        hasSubRoute: false,
        showSubRoute: false,
        subMenus: [],
      },
      {
        id:8,
        menuValue: 'Pricing Plan',
        routes: routes.pricingPlan,
        hasSubRoute: false,
        showSubRoute: false,
        subMenus: [],
      },
      {
        id:9,
        menuValue: 'FAQ',
        routes: routes.faq,
        hasSubRoute: false,
        showSubRoute: false,
        subMenus: [],
      },
      {
        id:10,
        menuValue: 'Maintenance',
        routes: routes.maintenance,
        hasSubRoute: false,
        showSubRoute: false,
        subMenus: [],
      },
      {
        id:11,
        menuValue: 'Coming Soon',
        routes: routes.comingSoon,
        hasSubRoute: false,
        showSubRoute: false,
        subMenus: [],
      },
      {
        id:12,
        menuValue: 'Privacy Policy',
        routes: routes.privacyPolicy,
        hasSubRoute: false,
        showSubRoute: false,
        subMenus: [],
      },
      {
        id:13,
        menuValue: 'Terms & Conditions',
        routes: routes.termsCondition,
        hasSubRoute: false,
        showSubRoute: false,
        subMenus: [],
      },
      {
        id:14,
        menuValue: 'Session Expired',
        routes: routes.sessionExpired,
        hasSubRoute: false,
        showSubRoute: false,
        subMenus: [],
      },
      {
        id:15,
        menuValue: 'Installer',
        routes: routes.installer,
        hasSubRoute: false,
        showSubRoute: false,
        subMenus: [],
      },
    ],
  },
  // {
  //   id:6,
  //   tittle: 'Blog',
  //   showAsTab: false,
  //   separateRoute: false,
  //   menu: [
  //     {
  //       id:1,
  //       menuValue: 'Blog Grid',
  //       routes: routes.blogGrid,
  //       hasSubRoute: false,
  //       showSubRoute: false,
  //       subMenus: [],
  //     },
  //     {
  //       id:2,
  //       menuValue: 'Blog List',
  //       routes: routes.blogList,
  //       hasSubRoute: false,
  //       showSubRoute: false,
  //       subMenus: [],
  //     },
  //     {
  //       id:3,
  //       menuValue: 'Blog Details',
  //       routes: routes.blogDetails,
  //       hasSubRoute: false,
  //       showSubRoute: false,
  //       subMenus: [],
  //     },
  //   ],
  // },
];