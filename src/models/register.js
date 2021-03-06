/* eslint-disable class-methods-use-this */
import ModelBase from './base';
import store from '@/store';


class Login extends ModelBase {
  defaults() {
    return {
      email: '',
      name: '',
      nickname: '',
      password: '',
    };
  }

  mutations() {
    return {
      email: String,
      name: String,
      nickname: String,
      password: String,
    };
  }

  routes() {
    return {
      save: '/register/',
    };
  }

  onSaveSuccess(response) {
    super.onSaveSuccess(response);
    store.dispatch(
      'register',
      {
        email: this.email,
        name: this.name,
        nickname: this.nickname,
        password: this.password,
      },
    );
  }
}

export default Login;
