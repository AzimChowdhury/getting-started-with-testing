export const add = (numbers) => {
    let result = 0;
    for (const number of numbers) {
        result += +number
    }
    return result
}