import instance from './instance';

class Http {
  constructor(url) {
    this.url = url;
  }

  get = async () => {
    const { data } = await instance.get(this.url);
    return data;
  };

  post = async item => {
    const { data } = await instance.post(this.url, item);
    return data;
  };

  put = async item => {
    const { data } = await instance.put(this.url, item);
    return data;
  };

  patch = async (url, item) => {
    const { data } = await instance.patch(`${this.url}/${url}`, item);
    return data;
  };
}

export default Http;
