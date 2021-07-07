import * as yup from 'yup'

const FormSchema = yup.object().shape({
    name: yup.string()
    .trim()
    .min(3, 'The Name must be at least 2 characters')
    .required('The Name is a required field')

})

export default FormSchema