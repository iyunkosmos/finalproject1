import axios from 'axios'

const base_url = 'localhost:5000'

export function login(email, password) {
    return axios.post(base_url + '/login', {
        email: email,
        password: password
    })
}

export function getOpenRequestForms(){
    return axios.get(base_url+'/request-form',)
}
