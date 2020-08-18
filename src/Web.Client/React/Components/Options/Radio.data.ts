export interface IRadio {
  id: number;
  name: string;
}

const radioData: IRadio[] = [
  {
    id: 1,
    name: 'disagreeStrongly',
  },
  {
    id: 2,
    name: 'disagreePartially',
  },
  {
    id: 3,
    name: 'noAgreeOrDisagree',
  },
  {
    id: 4,
    name: 'agreePartially',
  },
  {
    id: 5,
    name: 'agreeStrongly',
  },
];

export default radioData;
