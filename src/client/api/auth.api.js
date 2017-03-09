import { createApi } from '../../client/libs/rapi';

const AuthApi = createApi({
  login: {
    url: '/api/v1/auth/login',
    method: 'post',
  },
});

export default AuthApi;
