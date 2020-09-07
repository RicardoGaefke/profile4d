interface LinkProps {
  title: string;
  text: string;
}

export interface ILanguage {
  title: string;
  tabs: {
    available: string;
    canceled: string;
    expired: string;
  };
  item: {
    header: {
      action: string;
    };
    status: {
      0: LinkProps;
      1: LinkProps;
      2: LinkProps;
      3: LinkProps;
      4: LinkProps;
    };
    expiration: string;
    action: {
      start: LinkProps;
      continue: LinkProps;
    }
  };
}
