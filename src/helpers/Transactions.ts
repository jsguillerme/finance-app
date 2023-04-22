import axios from "axios";
import { ITransaction } from "../interface/ITransaction";

export class TransactionClass {
  static getAllTransactions() {
    return new Promise((resolve, reject) => {
      axios.get('http://localhost:9999/transactions/all?page=0')
        .then((res) => res.data)
        .then(resolve)
        .catch(reject)
    })
  }

  static createTransaction(data: ITransaction) {
    console.log(data)
    return new Promise((resolve, reject) => {
      axios.post('http://localhost:9999/transaction', data)
        .then((res) => res.data)
        .then(resolve)
        .catch(reject)
    })
  }
}