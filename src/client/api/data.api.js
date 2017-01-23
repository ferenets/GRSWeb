import {createApi} from '../../client/libs/rapi';

const DataApi = createApi({
  getPoints: {
    url: '/api/v1/data/points',
    method: 'get'
  }
});

export default DataApi;
