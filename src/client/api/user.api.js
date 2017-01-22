import {createApi} from '../../client/libs/rapi';

const UserApi = createApi({
  get: {
    url: '/api/v1/user',
    method: 'get'
  }
});

export default UserApi;
