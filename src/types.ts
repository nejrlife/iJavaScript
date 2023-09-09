export interface Transaction {
  date: string;
  desc: string;
  amount: string;
}

export interface CustomerDetails {
  id: string,
  name: string,
  last_login: string,
  balance: string,
  transaction: Transaction[]
}
