export function userAge() {
  return 18
}

export function fetchUserAge(): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(18)
    }, 0)
  })
}