import {User} from './UserClass'
export function doubleUserAge() :number {
  const user = new User()
  console.log(user)
  return user.age * 2
}