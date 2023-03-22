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
      myHost = 'https://api.staging.hextriade.com/';
    } else {
      myHost = 'https://api.hextriade.com/';
    }

    return myHost;
  };

  Home = (): string => {
    let myHost: string;

    if (this.Host.includes('localhost')) {
      myHost = 'https://localhost:5050/';
    } else if (this.Host.includes('staging')) {
      myHost = 'https://www.staging.hextriade.com/';
    } else {
      myHost = 'https://www.hextriade.com/';
    }

    return myHost;
  };

  Identity = (): string => {
    let myHost: string;

    if (this.Host.includes('localhost')) {
      myHost = 'https://localhost:5055/';
    } else if (this.Host.includes('staging')) {
      myHost = 'https://identity.staging.hextriade.com/';
    } else {
      myHost = 'https://identity.hextriade.com/';
    }

    return myHost;
  };

  Admin = (): string => {
    let myHost: string;

    if (this.Host.includes('localhost')) {
      myHost = 'https://localhost:5060/';
    } else if (this.Host.includes('staging')) {
      myHost = 'https://admin.staging.hextriade.com/';
    } else {
      myHost = 'https://admin.hextriade.com/';
    }

    return myHost;
  };

  Client = (): string => {
    let myHost: string;

    if (this.Host.includes('localhost')) {
      myHost = 'https://localhost:5080/';
    } else if (this.Host.includes('staging')) {
      myHost = 'https://client.staging.hextriade.com/';
    } else {
      myHost = 'https://client.hextriade.com/';
    }

    return myHost;
  };
}
