import axios from "axios"
import { IGoals } from "../interface/IGoals"

export class GoalsClass {

  static listGoalsAll(): Promise<IGoals[]> {
    return new Promise((resolve, reject) => {
      axios.get('http://localhost:9999/goal/all')
        .then((res) => res.data)
        .then(resolve)
        .catch(reject)
    })
  }

  static getGoal(id: string): Promise<IGoals> {
    return new Promise((resolve, reject) => {
      axios.get(`http://localhost:9999/goal/${id}`)
        .then((res) => res.data)
        .then(resolve)
        .catch(reject)
    })
  }

  static createGoal(data: IGoals): Promise<IGoals> {
    console.log(data)
    return new Promise((resolve, reject) => {
      axios.post('http://localhost:9999/goal', data)
        .then((res) => res.data)
        .then(resolve)
        .catch(reject)
    })
  }
}