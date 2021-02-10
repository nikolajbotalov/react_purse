let state = {
  mainPage: {
    sourceBalance: [
      // { id: 0, balanceName: 'ВТБ', currentBalance: 0.0 },
      // { id: 1, balanceName: 'Сбербанк', currentBalance: 0.0 },
      // { id: 2, balanceName: 'Наличные', currentBalance: 0.0 },
    ],
    balance: 0.0,
  },
  newListPage: {},
};

export const addBalanceList = (balanceInfo) => {
  // debugger;
  let newList = {
    id: 3,
    balanceName: balanceInfo.listName,
    currentBalance: balanceInfo.balance,
  };
  state.mainPage.sourceBalance.push(newList);
  updateBalance(balanceInfo.balance);
};

export const updateBalance = (balance) => {
  state.mainPage.balance += +balance;
};

export default state;
