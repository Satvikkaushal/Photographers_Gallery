const { API } = require("../../backend");

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