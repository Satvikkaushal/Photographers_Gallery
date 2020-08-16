import { API } from '../../backend'
import { IsAuthenticated } from './localstorage'
const { user, token } = IsAuthenticated();

export const signUp = user => {
    return fetch(`${API}/signUp`, {
        method: "Post",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
        body: JSON.stringify(user)

    })
        .then(response => {
            console.log(response.json())
            return response.json()
        })
        .catch(err => {
            console.log(err);
            return err.json()
        })
}

export const signIn = user => {
    return fetch(`${API}/signIn`, {
        method: "Post",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            return err.json()
        })
}
export const signOut = next => {
    if (typeof window !== "undefined") {
        localStorage.removeItem("jwt")
        next();
        return fetch(`${API}/signOut`, {
            method: "Get"
        })
            .then(response => console.log(response))
            .catch(err => console.log(err))
    }
}

export const updateUser = UpdatedUser => {
    console.log(JSON.stringify(UpdatedUser))
    return fetch(`${API}/user/${user._id}`, {
        method: "Put",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(UpdatedUser)
    }).then(response => { return response.json() })
        .catch(err => console.log(err))

}