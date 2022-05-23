export default class Hosts {
  private Host: string;

  constructor(host: string) {
    this.Host = host;
  }

  Api = (): string => {
    let myHost: string;

    if (this.Host.includes('localhost')) {
      myHost = 'https://localhost:5065/';
    } else if (this.Host.includes('staging')) {
      myHost = 'https://api.staging.performance9x.com.br/';
    } else {
      myHost = 'https://api.performance9x.com.br/';
    }

    return myHost;
  };

  Home = (): string => {
    let myHost: string;

    if (this.Host.includes('localhost')) {
      myHost = 'https://localhost:5050/';
    } else if (this.Host.includes('staging')) {
      myHost = 'https://www.staging.performance9x.com.br/';
    } else {
      myHost = 'https://www.performance9x.com.br/';
    }

    return myHost;
  };

  Identity = (): string => {
    let myHost: string;

    if (this.Host.includes('localhost')) {
      myHost = 'https://localhost:5055/';
    } else if (this.Host.includes('staging')) {
      myHost = 'https://identity.staging.performance9x.com.br/';
    } else {
      myHost = 'https://identity.performance9x.com.br/';
    }

    return myHost;
  };

  Admin = (): string => {
    let myHost: string;

    if (this.Host.includes('localhost')) {
      myHost = 'https://localhost:5060/';
    } else if (this.Host.includes('staging')) {
      myHost = 'https://admin.staging.performance9x.com.br/';
    } else {
      myHost = 'https://admin.performance9x.com.br/';
    }

    return myHost;
  };

  Client = (): string => {
    let myHost: string;

    if (this.Host.includes('localhost')) {
      myHost = 'https://localhost:5080/';
    } else if (this.Host.includes('staging')) {
      myHost = 'https://client.staging.performance9x.com.br/';
    } else {
      myHost = 'https://client.performance9x.com.br/';
    }

    return myHost;
  };
}
