import { Formik, Field, Form, ErrorMessage } from 'formik'
import {
    Table as MuiTable,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Box,
} from '@mui/material'
import { SchemaOf } from 'yup'

type Rows<T, U extends keyof T> = {
    [key in U]: string | number | boolean
}

type Options = {
    id: number
    name: string
    value: string
}

export type TableHeaders = {
    key: string
    label: string
    align?: 'left' | 'right' | 'center'
    inputType: 'text' | 'number' | 'select' | 'checkbox'
}

type TableProps<T, U extends keyof T> = {
    headers: TableHeaders[]
    rows: Rows<T, U>[]
    handleSubmit: (values: Rows<T, U>[]) => void
    children?: React.ReactNode
    schema?: SchemaOf<Partial<Rows<T, U>>[]>
    options?: { [key: string]: Options[] }
}

export default function Table<T, U extends keyof T>(props: TableProps<T, U>) {
    const { headers, rows, handleSubmit, children, schema, options } = props

    const fullRowsKeysObject = rows.reduce((r, c) => Object.assign(r, c), {} as keyof T)

    const rowsWithMissingKeys = rows.map((row) => {
        const missingKeys = Object.keys(fullRowsKeysObject).filter(
            (key) => !Object.keys(row).includes(key)
        )
        return {
            ...row,
            ...missingKeys.reduce((r, c) => Object.assign(r, { [c]: '' }), {}),
        }
    })

    return (
        <TableContainer component={Paper}>
            <Formik
                initialValues={rowsWithMissingKeys}
                onSubmit={(values) => handleSubmit(values)}
                validationSchema={schema}
            >
                {({ values, errors, touched }) => {
                    return (
                        <Form>
                            <MuiTable>
                                {headers && (
                                    <TableHead>
                                        <TableRow>
                                            {headers.map((header, headerIndex) => (
                                                <TableCell
                                                    key={headerIndex}
                                                    align={header.align ? header.align : 'left'}
                                                >
                                                    {header.label}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    </TableHead>
                                )}
                                <TableBody>
                                    {values.map((row, index) => (
                                        <TableRow key={`table-row.${index}`}>
                                            {headers.map((header, headerIndex) => {
                                                return (
                                                    <TableCell key={headerIndex}>
                                                        {(header.inputType === 'number' ||
                                                            header.inputType === 'text' ||
                                                            header.inputType === 'checkbox') && (
                                                            <Field
                                                                style={{
                                                                    minHeight: '15px',
                                                                    fontSize: '12px',
                                                                    border: '0px solid #ccc',
                                                                }}
                                                                name={`${index}.${header.key}`}
                                                                placeholder={header.key}
                                                                type={header.inputType}
                                                            />
                                                        )}

                                                        {header.inputType === 'select' && (
                                                            <Field
                                                                as="select"
                                                                name={`${index}.${header.key}`}
                                                            >
                                                                {options &&
                                                                    options[header.key].map(
                                                                        (option, optionKey) => (
                                                                            <option
                                                                                key={optionKey}
                                                                                value={option.value}
                                                                            >
                                                                                {option.name}
                                                                            </option>
                                                                        )
                                                                    )}
                                                            </Field>
                                                        )}

                                                        <ErrorMessage
                                                            render={(msg) => (
                                                                <Box
                                                                    sx={{
                                                                        color: 'red',
                                                                    }}
                                                                >
                                                                    {msg}
                                                                </Box>
                                                            )}
                                                            name={`${index}.${header.key}`}
                                                        />
                                                    </TableCell>
                                                )
                                            })}
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </MuiTable>
                            {children}
                        </Form>
                    )
                }}
            </Formik>
        </TableContainer>
    )
}
