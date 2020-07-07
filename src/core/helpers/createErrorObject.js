exports.createErrorObject = (listError) =>{

    const errors = [];
    const lengthError = listError?.length || listError?.details?.length;
    
    if(!lengthError) return errors;
 
    for (let index = 0; index < lengthError; index++) {
        const element = listError[index] || listError?.details[index];
        errors.push({
            field: element.context.key,
            message: element.message
        });
    }
    return errors;
}