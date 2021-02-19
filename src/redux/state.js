const UPDATE_NEW_LIST_NAME = 'UPDATE-NEW-LIST-NAME';
const UPDATE_NEW_LIST_BALANCE = 'UPDATE-NEW-LIST-BALANCE';
const ADD_NEW_BALANCE_LIST = 'ADD-NEW-BALANCE-LIST';
const GET_FINANCE_INFO = 'GET-FINANCE-INFO';
const UPDATE_NEW_COSTS_VALUE = 'UPDATE-NEW-COSTS-VALUE';
const UPDATE_NEW_COSTS_DESC = 'UPDATE-NEW-COSTS-DESC';
const ADD_NEW_COSTS = 'ADD-NEW-COSTS';

let store = {
  _state: {
    balance: 0.0,
    mainPage: {
      sourceBalance: [],
    },
    newListPage: {
      listNameText: '',
      listBalanceText: '',
    },
    financePage: {
      financeBalance: 15000.0,
      financeInfo: [],
    },
    costsPage: {
      costsValue: '',
      costsDesc: '',
    },
  },
  _callSubscriber() {
    console.log('state changed');
  },

  getState() {
    return this._state;
  },
  subscriber(observer) {
    this._callSubscriber = observer;
  },

  updateBalance(balance) {
    this._state.balance += +balance;
    this._callSubscriber(this._state);
  },
  updateFinanceBalance(balance) {
    this._state.financePage.financeBalance -= +balance;
    this._callSubscriber(this._state);
  },

  dispatch(action) {
    if (action.type === ADD_NEW_BALANCE_LIST) {
      // метод добавление нового источника финансов
      let newList = {
        id: 3,
        balanceName: action.newListName,
        currentBalance: action.updateBalance,
      };
      this._state.mainPage.sourceBalance.push(newList);
      this.updateBalance(newList.currentBalance);
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_LIST_NAME) {
      // метод обновления названия источника финансов
      this._state.newListPage.listNameText = action.newListName;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_LIST_BALANCE) {
      // метод обновления баланса источника финансов
      this._state.newListPage.listBalanceText = +action.newListBalance;
      this._callSubscriber(this._state);
    } else if (action.type === GET_FINANCE_INFO) {
      // метод получение информации о текущем источнике финансов
      // this.
    } else if (action.type === UPDATE_NEW_COSTS_VALUE) {
      // метод обновления суммы нового расхода
      this._state.costsPage.costsValue = action.newCostsValue;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_COSTS_DESC) {
      // метод обновления описания нового расхода
      this._state.costsPage.costsDesc = action.newCostsDesc;
      this._callSubscriber(this._state);
    } else if (action.type === ADD_NEW_COSTS) {
      // метод добавения нового расхода
      let newCosts = {
        id: 3,
        message: action.newCostsDesc,
        sum: action.newCostsValue,
      };
      this._state.financePage.financeInfo.push(newCosts);
      this.updateFinanceBalance(newCosts.sum);
      this._callSubscriber(this._state);
    }
  },
};

export const updateNewListNameCreator = (listName) => ({
  type: UPDATE_NEW_LIST_NAME,
  newListName: listName,
});

export const updateNewListBalanceCreator = (listBalance) => ({
  type: UPDATE_NEW_LIST_BALANCE,
  newListBalance: listBalance,
});

export const addNewBalanceListCreator = (listName, balance) => ({
  type: ADD_NEW_BALANCE_LIST,
  newListName: listName,
  updateBalance: balance,
});

export const updateNewCostsValueCreator = (costsValue) => ({
  type: UPDATE_NEW_COSTS_VALUE,
  newCostsValue: costsValue,
});

export const updateNewCostsDescCreator = (costsDesc) => ({
  type: UPDATE_NEW_COSTS_DESC,
  newCostsDesc: costsDesc,
});

export const addNewCostsCreator = (costs, desc) => ({
  type: ADD_NEW_COSTS,
  newCostsValue: costs,
  newCostsDesc: desc,
});

export const getFinanceInfoCreator = (id, title, sum) => ({
  type: GET_FINANCE_INFO,
  currentId: id,
  currentTitle: title,
  currentSum: sum,
});

export default store;
window.store = store;
