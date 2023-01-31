import instance from './instance';

class Http {
  constructor(url) {
    this.url = url;
  }

  get = async _params => {
    const { data } = await instance.get(this.url, { params: _params });
    return data;
  };

  post = async item => {
    const { data } = await instance.post(this.url, item);
    return data;
  };

  put = async item => {
    await instance.put(this.url, item);
  };

  patch = async item => {
    await instance.patch(this.url, item);
  };

  delete = async () => {
    await instance.delete(this.url);
  };
}

export default Http;
