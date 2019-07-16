

document.querySelector(`#friends-btn`).addEventListener(`click`, event => {
  fetch(`/api/friends`)
    .then(users => users.json())
    .then(users => {
      users.forEach(user => {
        let userDiv = document.createElement(`div`)
        userDiv.className = `userDiv`
        userDiv.innerHTML = `
        
        `
      })
    })
})