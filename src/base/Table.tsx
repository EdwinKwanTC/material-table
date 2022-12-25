import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik'

interface TableProps {
    headers: TableHeaders[]
    rows: Rows[]
    handleSubmit: (values: Rows[]) => void
}

interface Rows {
    [key: string]: string | number
}

export interface TableHeaders {
    key: string
    inputType: 'text' | 'number'
}

export default function Table<T>(props: TableProps) {
    const { headers, rows, handleSubmit } = props
    return (
        <Formik
            initialValues={rows}
            onSubmit={(values) => handleSubmit(values)}
        >
            {({ values }) => (
                <Form>
                    {values.map((row, index) => (
                        <div key={index}>
                            {headers.map((header, headerIndex) => {
                                console.log('header', header)
                                return (
                                    <div key={headerIndex}>
                                        <Field
                                            name={`rows.${index}.${header.key}`}
                                            placeholder={header.key}
                                            type={header.inputType}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    ))}
                </Form>
            )}
        </Formik>
    )
}

{
    /* <div>
    {rows.map((row, index) => (
        <div key={index}>
            {headers.map((header, headerIndex) => {
                return (
                    <div key={headerIndex}>
                        {header.key}: {row[`${header.key}`]}
                    </div>
                )
            })}
        </div>
    ))}
</div> */
}
