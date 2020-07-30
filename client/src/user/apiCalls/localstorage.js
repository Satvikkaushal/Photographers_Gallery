export const authenticate = (data, next) => {
    if (typeof window !== "undefined") {
        localStorage.setItem("jwt", JSON.stringify(data));
        next();

    }
}

export const IsAuthenticated = () => {
    if (typeof window == undefined) {
        return (false);
    }
    if (localStorage.getItem("jwt")) {
        return JSON.parse(localStorage.getItem("jwt"));
    }
    else {
        return false;
    }
}

export const addToSaved = (next) => {
    if (typeof window !== "undefined") {
        localStorage.setItem("saved", []);
        next();
    }
}

