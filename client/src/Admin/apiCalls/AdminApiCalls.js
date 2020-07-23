import { IsAuthenticated } from "../../user/apiCalls/localstorage";

const { API } = require("../../backend");

const { user, token } = IsAuthenticated();

export const getCategories = () => {
    return fetch(`${API}/categories`, {
        method: "GET"
    }).then(response => {
        return response.json();
    })
        .catch(err => {
            console.log(err);
        })
}

export const getServices = () => {
    return fetch(`${API}/services`, {
        method: "Get"
    }).then(response => {
        return response.json();
    })
        .catch(err => {
            console.log(err);
        })
}

export const getServicesByCategory = (categoryId) => {
    return fetch(`${API}/${categoryId}/services`, {
        method: "Get"
    }).then(response => {
        return response.json();
    })
        .catch(err => {
            console.log(err);
        })
}


export const DeleteCategory = (categoryId, token) => {
    return fetch(`${API}/deletecategory/${categoryId}/${user._id}`, {
        method: "Delete",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }).then(response => {
        return response.json();
    })
        .catch(err => {
            console.log(err);
        })
}

export const addCategory = name => {
    return fetch(`${API}/create/category/${user._id}`, {
        method: "Post",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(name)

    }).then(response => { return response.json() })
        .catch(err => console.log(err))
}