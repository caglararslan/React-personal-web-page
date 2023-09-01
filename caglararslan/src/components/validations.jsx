import { object, string } from 'yup';

const validations = object({
    firstName: string().required(),
    email: string().email().required(),
    message: string().required(),
});

export default validations;