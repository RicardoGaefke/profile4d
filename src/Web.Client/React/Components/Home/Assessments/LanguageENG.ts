// eslint-disable-next-line no-unused-vars
import { ILanguage } from './ILanguage';

export default {
  title: 'Your assessments',
  tabs: {
    available: 'Available',
    canceled: 'Canceled',
    expired: 'Expired',
  },
  item: {
    header: {
      action: 'Actions',
    },
    status: {
      0: {
        text: 'Available',
        title: 'You can now start this assessment',
      },
      1: {
        text: 'Incomplete',
        title: 'You have already started this assessment, but not yet finished',
      },
      2: {
        text: 'Expired',
        title: 'You started this review but didn’t complete it on time',
      },
      3: {
        text: 'Canceled',
        title: 'This review has been canceled by the key submitter',
      },
      4: {
        text: 'Overdue',
        title: 'This review was completed more than 180 days ago',
      },
    },
    expiration: 'Expiration:',
    action: {
      start: {
        text: 'Start',
        title: 'Start this assessment',
      },
      continue: {
        text: 'Continue',
        title: 'Continue this assessment',
      },
    },
  },
} as ILanguage;
