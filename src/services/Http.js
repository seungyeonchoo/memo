const BASE_URL = process.env.REACT_APP_BASE_URL;

class Http {
  constructor(url) {
    this.url = url;
  }

  get = async () => {
    const response = await fetch(`${BASE_URL}/${this.url}`).then(res => res.json());
    return response;
  };

  post = async item => {
    const response = await fetch(`${BASE_URL}/${this.url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    });
    return response;
  };
}

export default Http;
