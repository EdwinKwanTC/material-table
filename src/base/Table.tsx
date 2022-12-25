import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik'
import {
    Box,
    Table as MuiTable,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from '@mui/material'

interface TableProps {
    headers: TableHeaders[]
    rows: Rows[]
    handleSubmit: (values: Rows[]) => void
    children?: React.ReactNode
}

interface Rows {
    [key: string]: string | number
}

export interface TableHeaders {
    key: string
    label: string
    align?: 'left' | 'right' | 'center'
    inputType: 'text' | 'number'
}

export default function Table(props: TableProps) {
    const { headers, rows, handleSubmit, children } = props
    return (
        <TableContainer component={Paper}>
            <Formik
                initialValues={rows}
                onSubmit={(values) => handleSubmit(values)}
            >
                {({ values }) => {
                    console.log('values', values)
                    return (
                        <Form>
                            {values.map((row, index) => (
                                <Box key={index} sx={{ display: 'flex' }}>
                                    <MuiTable>
                                        {headers && (
                                            <TableHead>
                                                <TableRow>
                                                    {headers.map(
                                                        (
                                                            header,
                                                            headerIndex
                                                        ) => (
                                                            <TableCell
                                                                key={
                                                                    headerIndex
                                                                }
                                                                align={
                                                                    header.align
                                                                        ? header.align
                                                                        : 'left'
                                                                }
                                                            >
                                                                {header.label}
                                                            </TableCell>
                                                        )
                                                    )}
                                                </TableRow>
                                            </TableHead>
                                        )}
                                        <TableBody>
                                            <TableRow>
                                                {headers.map(
                                                    (header, headerIndex) => {
                                                        return (
                                                            <TableCell
                                                                key={
                                                                    headerIndex
                                                                }
                                                            >
                                                                <Field
                                                                    name={`${index}.${header.key}`}
                                                                    placeholder={
                                                                        header.key
                                                                    }
                                                                    type={
                                                                        header.inputType
                                                                    }
                                                                />
                                                            </TableCell>
                                                        )
                                                    }
                                                )}
                                            </TableRow>
                                        </TableBody>
                                    </MuiTable>
                                </Box>
                            ))}
                            {children}
                        </Form>
                    )
                }}
            </Formik>
        </TableContainer>
    )
}
