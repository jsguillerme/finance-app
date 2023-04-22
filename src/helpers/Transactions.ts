import axios from "axios";

export class TransactionClass {
  static getAllTransactions() {
    return new Promise((resolve, reject) => {
      axios.get('http://localhost:9999/transactions/all?page=0')
        .then((res) => res.data)
        .then(resolve)
        .catch(reject)
    })
  }
}