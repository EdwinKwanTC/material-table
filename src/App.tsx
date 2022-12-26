import Table from './base/Table'
import { TableHeaders } from './base/Table'
import { Button, Box } from '@mui/material'
import { schema } from './validatior/classValidator'

type Data = {
    [key: string]: string | number | boolean
}

function App() {
    const headers: TableHeaders[] = [
        {
            key: 'name',
            label: 'Name',
            inputType: 'text',
        },
        {
            key: 'age',
            label: 'Age',
            inputType: 'number',
        },
        {
            key: 'grade',
            label: 'Grade',
            inputType: 'select',
        },
        {
            key: 'class',
            label: 'Class',
            inputType: 'text',
        },
        {
            key: 'isGraduated',
            label: 'Graduated',
            inputType: 'checkbox',
        },
    ]

    const data = [
        {
            name: 'John',
            age: 20,
            grade: 'a',
            class: '5D',
            isGraduated: true,
        },
        {
            name: 'Jane',
            age: 21,
            grade: 'c',
            isGraduated: false,
        },
        {
            name: 'Jack',
            age: 22,
            grade: 'c',
            isGraduated: false,
        },
    ]

    const handleSubmit = (values: Data[]) => {
        console.log(values)
    }

    const options = {
        grade: [
            { id: 1, name: 'A', value: 'a' },
            { id: 2, name: 'B', value: 'b' },
            { id: 3, name: 'C', value: 'c' },
        ],
    }

    const tableButton = () => {
        return (
            <Box sx={{ width: '100v%', p: 2 }}>
                <Button size="small" variant="outlined" type="submit">
                    Submit
                </Button>
            </Box>
        )
    }

    return (
        <Table
            headers={headers}
            rows={data}
            handleSubmit={handleSubmit}
            schema={schema}
            options={options}
        >
            {tableButton()}
        </Table>
    )
}

export default App
