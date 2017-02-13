import {createApi} from '../../client/libs/rapi';

const GroupApi = createApi({
  get: {
    url: '/api/v1/group',
    method: 'get'
  },
  create: {
    url: '/api/v1/group',
    method: 'post'
  },
  addRight: {
    url: '/api/v1/group/add',
    method: 'put'
  },
  removeRight: {
    url: '/api/v1/group/remove',
    method: 'put'
  },
  remove: {
    url: '/api/v1/group',
    method: 'delete'
  },
});

export default GroupApi;
