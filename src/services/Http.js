const BASE_URL = process.env.REACT_APP_BASE_URL;

class Http {
  constructor(url) {
    this.url = url;
  }

  get = () => {
    const response = fetch(`${BASE_URL}/${this.url}`).then(res => res.json());
    return response;
  };

  post = item => {
    const response = fetch(`${BASE_URL}/${this.url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    });
    return response;
  };
}
