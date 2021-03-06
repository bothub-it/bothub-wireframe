import Vue from 'vue';
import Router from 'vue-router';
// import Home from '@/views/Home';
// import LandingPage from '@/views/LandingPage';
// import SignUp from '@/views/auth/SignUp';
// import MyProfile from '@/components-v1/MyProfile';
// import ResetPassword from '@/components-v1/ResetPassword';
// import RepositoryHome from '@/views/repository/Home';
// import RepositoryTrainings from '@/views/repository/Trainings';
// import RepositoryTranslate from '@/views/repository/Translate';
// import RepositoryTranslations from '@/views/repository/Translations';
// import RepositorySettings from '@/views/repository/Settings';
// import RepositoryAnalyzeText from '@/views/repository/AnalyzeText';
// import RepositoryEvaluate from '@/views/repository/Evaluate';
import NotFound from '@/views/NotFound';
// import SafariAlert from '@/views/SafariAlert';
// import store from '../store';

// wireframe import
import step1 from '@/views/wireframe/step1';
import step2 from '@/views/wireframe/step2';
import step3 from '@/views/wireframe/step3';
import step4 from '@/views/wireframe/step4';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      name: 'step1',
      component: step1,
    },
    {
      path: '/create-repository',
      name: 'step2',
      component: step2,
    },
    {
      path: '/choose-category',
      name: 'step3',
      component: step3,
    },
    {
      path: '/repository',
      name: 'step4',
      component: step4,
    },
    // {
    //   path: '/signup',
    //   name: 'signUp',
    //   component: SignUp,
    //   beforeEnter: async (to, from, next) => {
    //     if (store.getters.authenticated) {
    //       next('/home');
    //     } else {
    //       next();
    //     }
    //   },
    // },
    // {
    //   path: '/home',
    //   name: 'home',
    //   component: Home,
    // },
    // {
    //   path: '/reset-password/:nickname/:token/',
    //   component: ResetPassword,
    // },
    // {
    //   path: '/myprofile/',
    //   name: 'myProfile',
    //   component: MyProfile,
    //   beforeEnter: async (to, from, next) => {
    //     if (!store.getters.authenticated) {
    //       store.dispatch('openLoginModal', {
    //         next: to,
    //         redirectToWhenFails: { name: 'home' },
    //       });
    //     } else {
    //       next();
    //     }
    //   },
    // },
    // {
    //   path: '/:ownerNickname/:slug/',
    //   name: 'repository-summary',
    //   component: RepositoryHome,
    // },
    // {
    //   path: '/:ownerNickname/:slug/training/',
    //   name: 'repository-training',
    //   component: RepositoryTrainings,
    // },
    // {
    //   path: '/:ownerNickname/:slug/translate/',
    //   name: 'repository-translate',
    //   component: RepositoryTranslate,
    // },
    // {
    //   path: '/:ownerNickname/:slug/translations/',
    //   name: 'repository-translations-status',
    //   component: RepositoryTranslations,
    // },
    // {
    //   path: '/:ownerNickname/:slug/Integration/',
    //   name: 'repository-integration',
    //   component: RepositoryAnalyzeText,
    // },
    // {
    //   path: '/:ownerNickname/:slug/settings/',
    //   name: 'repository-settings',
    //   component: RepositorySettings,
    // },
    // {
    //   path: '/:ownerNickname/:slug/evaluate/',
    //   name: 'repository-test',
    //   component: RepositoryEvaluate,
    // },
    {
      path: '*',
      name: '404',
      component: NotFound,
    },
    // {
    //   path: '/safariAlert/',
    //   name: 'safari-alert',
    //   component: SafariAlert,
    // },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});
