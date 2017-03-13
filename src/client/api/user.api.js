import { createApi } from '../../client/libs/rapi';

const UserApi = createApi({
  get: {
    url: '/api/v1/user',
    method: 'get',
  },
  create: {
    url: '/api/v1/user',
    method: 'post',
  },
  update: {
    url: '/api/v1/user',
    method: 'put',
  },
  updateGroup: {
    url: '/api/v1/user/group',
    method: 'put',
  },
  remove: {
    url: '/api/v1/user',
    method: 'delete',
  },
});

export default UserApi;
