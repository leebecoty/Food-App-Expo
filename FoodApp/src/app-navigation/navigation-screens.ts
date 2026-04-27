export const ListStackScreens: Record<string, any> = {
  Home: {
    name: 'Home',
    component: require('@app-views/Home/Home')
      .default,
  },
  Search: {
    name: 'Search',
    component: require('@app-views/Search/Search')
      .default,
  },
  Personal: {
    name: 'Personal',
    component: require('@app-views/Personal/Personal')
      .default,
  },
  OrderList: {
    name: 'OrderList',
    component: require('@app-views/Order/OrderList')
      .default,
  },
  Splash: {
    name: 'Splash',
    component: require('@app-views/Splash/Splash')
      .default,
  },
  Login: {
    name: 'Login',
    component: require('@app-views/LoginAndRegister/Login')
      .default,
  },
  Register: {
    name: 'Register',
    component: require('@app-views/LoginAndRegister/Register')
      .default,
  },
  BottomContainer: {
    name: 'BottomContainer',
    component: require('@app-navigation/BottomTabs/BottomContainer')
      .default,
  },
}
