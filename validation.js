export const validation = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
        throw new Error(`Invalid email`)
    }
}


export const validateArrayNotEmpty = (arr) => {
    if (!Array.isArray(arr) || arr.length === 0) {
        throw new Error(`Array can not empty`)
    }
}