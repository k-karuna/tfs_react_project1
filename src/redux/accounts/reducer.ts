import {
  LOAD_ACCOUNTS,
  LOAD_ACCOUNTS_SUCCESS,
  LOAD_ACCOUNTS_FAILURE,
  ADD_ACCOUNT,
  CHANGE_ACCOUNT_TITLE,
  REMOVE_EXTERNAL_ACCOUNT,
} from "./actions";

export enum CardType {
  Debit = "debit",
  Credit = "credit",
  External = "external",
  Saving = "saving",
  Loan = "loan",
}

export enum CurrencyType {
  RUB,
  USD,
  EUR,
  GBP,
}

export interface Account {
  id: number;
  type: CardType;
  title: string;
  amount?: number;
  currency?: CurrencyType;
  customTitle?: string;
}

const initialState: Account[] = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ACCOUNTS: {
      return null;
    }

    case LOAD_ACCOUNTS_SUCCESS: {
      const { accounts } = action.payload;
      return accounts;
    }

    case LOAD_ACCOUNTS_FAILURE: {
      return null;
    }

    case ADD_ACCOUNT: {
      const { account } = action.payload;
      return [...state, account];
    }

    case CHANGE_ACCOUNT_TITLE: {
      const { id, customTitle } = action.payload;

      return state.map((acc) =>
        acc.id !== id ? acc : { ...acc, customTitle: customTitle }
      );
    }

    case REMOVE_EXTERNAL_ACCOUNT: {
      const account: Account = action.payload.account;
      const cardType = state.find((acc) => acc.id === account.id)?.type;

      if (cardType === CardType.External) {
        return [...state.filter((acc) => acc.id !== account.id)];
      }

      return state;
    }
    default:
      return state;
  }
}
