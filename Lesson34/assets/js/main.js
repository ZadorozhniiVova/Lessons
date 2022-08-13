// allCharasters = fetch('https://rickandmortyapi.com/api/character')

// console.log(allCharasters)
// allCharasters.then((response) => {
//     // console.log('response', response.json())
//     response.json().then((data) => {
//         console.log('data', data)
//     })
// })

const URL = 'https://reqres.in/api'
async function getUsers(){

    const response = await fetch(`${URL}/users`, {mode:'cors'})
    const respJSON = await response.json()
    return respJSON.data
           
}
getUsers().then((users) => {
    console.log('users', users)

})

async function removeUser(id){
    const response = await fetch(`${URL}/users/${id}`, {method: 'DELETE'})
    console.log(response.status)
    return response.status
}


$(function(){
    const container = $('#demo')
    getUsers().then((users) => {
      console.log('users', users)
      users.forEach(user => {
        const card = $(`<div class="card" id='${user.id}'></div>`)
        const image = $(`<img class="avatar" src='${user.avatar}'>`)
        console.log('image', image)
        const info =$(`<div class="info"></div>`)

        info.append($(`<div class="fullname">name: ${user.first_name} ${user.last_name}</div>`))
        info.append($(`<div class="email">email: ${user.email}</div>`))
        info.append($(`<div class="id">id: ${user.id}</div>`))
        info.append($(`<button class="update" onclick="updateUser (${user.id})">Update</button>`))
        info.append($(`<button class="delete" onclick="deleteUser (${user.id})">Delete</button>`))

        card.append(image)
        card.append(info)
        container.append(card)
      })
    })
})

const updateUser = function(id){
    alert(id);
}

const deleteUser = function(id){
    // alert('delete user'+id);
    removeUser(id).then( status => {
        if(status === 204){
            $(`#${id}`).remove()
        }
    })

    
}
  

