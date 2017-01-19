import {createApi} from '../../client/libs/rapi';

const UserApi = createApi({
  getAll: {
    url: '/api/v1/user',
    method: 'get'
  }
});

export default UserApi;
