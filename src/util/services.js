import request from './apiManager';

const getCategories = () => {
    return request(
      {
        method: 'get',
        url: `/posts`,
      },
      true,
    );
  };

export default {
    getCategories
  }