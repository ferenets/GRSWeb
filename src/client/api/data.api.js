import {createApi} from '../../client/libs/rapi';

export const DataApi = createApi({
  getPoints: {
    url: '/api/v1/data/points',
    method: 'get'
  },
  endpoint: {
    url: '/api/v1/data/indicators',
    method: 'get'
  }
});

export default DataApi;
