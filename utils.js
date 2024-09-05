/**
 * Return the body if not empty or an empty array
 * @param {*} params 
 */
const getBodyArrayOrDefault = (body) => {
    return body && Object.entries(body).length !== 0 ? body : []

}

/**
 * 
 */
const validateArray= (arr, next) => {
    if (!Array.isArray(arr)) {
        const err = new Error('Body is not an array');
        err.status = 400;
        next(err);
        return false
    }
    return true
}

module.exports = {getBodyArrayOrDefault, validateArray}