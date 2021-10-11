const en = {
  actions: {
    save: 'Save',
  },
  screens: {
    debit: {
      title: 'Debit Card',
      caption: 'Available Balance',
      hide: {
        label: 'Hide card number',
      },
      card: {
        exp: 'Thru',
        cvv: 'CVV',
      },
    },
    limit: {
      title: 'Spending limit',
      spendingTitle: 'Debit card spending limit',
      caption: 'Set weekly debit card spending limit',
      notify: 'Here weekly means the last 7 days, not the calendar week',
    },
    menu: {
      topup: {
        title: 'Top-up account',
        caption: 'Deposit money to your account to use with card',
      },
      spending: {
        title: 'Weekly spending limit',
        caption: {
          one: "You haven't set any spending limit on card",
          other: 'Your weekly spending limit is {{count}}',
        },
      },
      freeze: {
        title: 'Freeze card',
        caption: 'Your dibit card is currently active',
      },
      new: {
        title: 'Get a new card',
        caption: 'This deactivates your current debit card',
      },
      deactivate: {
        title: 'Deactivated cards',
        caption: 'Your previously deactivated cards',
      },
    },
  },
};

export default en;
