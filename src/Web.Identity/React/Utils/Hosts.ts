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
      myHost = 'https://api.staging.meuperfil4d.com.br/';
    } else {
      myHost = 'https://api.meuperfil4d.com.br/';
    }

    return myHost;
  };

  Home = (): string => {
    let myHost: string;

    if (this.Host.includes('localhost')) {
      myHost = 'https://localhost:5050/';
    } else if (this.Host.includes('staging')) {
      myHost = 'https://www.staging.meuperfil4d.com.br/';
    } else {
      myHost = 'https://www.meuperfil4d.com.br/';
    }

    return myHost;
  };

  Client = (): string => {
    let myHost: string;

    if (this.Host.includes('localhost')) {
      myHost = 'https://localhost:5070/';
    } else if (this.Host.includes('staging')) {
      myHost = 'https://client.staging.meuperfil4d.com.br/';
    } else {
      myHost = 'https://client.meuperfil4d.com.br/';
    }

    return myHost;
  };

  Identity = (): string => {
    let myHost: string;

    if (this.Host.includes('localhost')) {
      myHost = 'https://localhost:5055/';
    } else if (this.Host.includes('staging')) {
      myHost = 'https://identity.staging.meuperfil4d.com.br/';
    } else {
      myHost = 'https://identity.meuperfil4d.com.br/';
    }

    return myHost;
  };

  Admin = (): string => {
    let myHost: string;

    if (this.Host.includes('localhost')) {
      myHost = 'https://localhost:5060/';
    } else if (this.Host.includes('staging')) {
      myHost = 'https://admin.staging.meuperfil4d.com.br/';
    } else {
      myHost = 'https://admin.meuperfil4d.com.br/';
    }

    return myHost;
  };

  WebJobs = (): string => {
    let myHost: string;

    if (this.Host.includes('localhost')) {
      myHost = 'https://localhost:5075/';
    } else if (this.Host.includes('staging')) {
      myHost = 'https://webjobs.staging.meuperfil4d.com.br/';
    } else {
      myHost = 'https://webjobs.meuperfil4d.com.br/';
    }

    return myHost;
  };
}
