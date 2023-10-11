export const errorHandler = (statusCode, message)=>{
    // create error constructor
    const error = new error();
    error.statusCode =  statusCode
    error.message = message
    return error
}