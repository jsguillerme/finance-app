import axios from "axios";
import { ICreditCard } from "../interface/ICreditCard";

export class CardCreditClass {
  static createNewCard(data: ICreditCard): Promise<ICreditCard> {
    return new Promise((resolve, reject) => {
      axios.post('http://localhost:9999/card', data)
        .then((res) => res.data)
        .then(resolve)
        .catch(reject)
    })
  };

  static getInfoCardCredit(id: string): Promise<ICreditCard> {
    return new Promise((resolve, reject) => {
      axios.get(`http://localhost:9999/cards/:${id}`)
        .then((res) => res.data)
        .then(resolve)
        .then(reject)
    })
  }

  static getAllCards(): Promise<ICreditCard[]> {
    return new Promise((resolve, reject) => {
      axios.get('http://localhost:9999/cards')
        .then((res) => res.data)
        .then(resolve)
        .catch(reject)
    })
  }
}