import { API } from "../../backend"
import { IsAuthenticated } from "../../user/apiCalls/localstorage"
const { user, token } = IsAuthenticated();

export const addtocart = (id) => {
    return fetch(`${API}/addTocart/${user._id}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
        body: JSON.stringify({ serviceId: `${id}` })
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err))
}
export const removeFromcart = (id) => {
    return fetch(`${API}/removeFromcart/${user._id}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
        body: JSON.stringify({ serviceId: `${id}` })
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err))
}