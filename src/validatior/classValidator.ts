import * as yup from 'yup'

export const schema = yup.array().of(
    yup.object().shape({
        name: yup.string().required(),
        age: yup
            .number()
            .required()
            .min(18, 'must be greater than 80')
            .max(60, 'must be less than 60'),
        grade: yup.string().required(),
        class: yup.string(),
        isGraduated: yup.boolean().required(),
        sex: yup.string(),
    })
)
