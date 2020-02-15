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
      myHost = 'https://api.staging.profile4d.com/';
    } else {
      myHost = 'https://api.profile4d.com/';
    }

    return myHost;
  };
}
