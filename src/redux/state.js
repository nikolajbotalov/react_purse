let state = {
  balance: 0.0,
  mainPage: {
    sourceBalance: [],
  },
  newListPage: {},
  financePage: {
    financeInfo: [
      { id: 0, message: 'Мобильная связь', sum: 150 },
      { id: 0, message: 'Мобильная связь', sum: 150 },
      { id: 0, message: 'Мобильная связь', sum: 150 },
    ],
  },
};

export const addBalanceList = (balanceInfo) => {
  let newList = {
    id: 3,
    balanceName: balanceInfo.listName,
    currentBalance: balanceInfo.balance,
  };
  state.mainPage.sourceBalance.push(newList);
  updateBalance(balanceInfo.balance);
};

export const updateBalance = (balance) => {
  state.balance += +balance;
};

export const addCosts = () => {
  let newList = {
    id: 3,
    message: 'Еда',
    sum: 2000,
    color: 'e60000',
  };
  state.financePage.financeInfo(newList);
  // updateBalance();
};

export const addIncome = () => {
  let newList = {
    id: 3,
    message: 'Аванс',
    sum: 30000,
    color: '33cc33',
  };
  state.financePage.financeInfo(newList);
  // updateBalance();
};

export default state;
