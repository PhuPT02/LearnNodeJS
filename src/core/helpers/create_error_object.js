const { ABORT_EARLY } = require("../../core/configuration/validation.config");
const { date } = require("@hapi/joi");


exports.createErrorObject = async (schema,data) => {

    const validation = { value: {}, error: [] };
    const { value, error } = await schema.validate(data, ABORT_EARLY);

    validation.value = value;
    const lengthError = error?.details?.length;

    for (let index = 0; index < lengthError; index++) {
        const element = error?.details[index];
        validation.error.push({
            field: element.context.key,
            message: element.message
        });
    }

    return validation;

}