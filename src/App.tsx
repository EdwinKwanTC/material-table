import Table from './base/Table'
import { TableHeaders } from './base/Table'
import { Button, Box } from '@mui/material'
import { schema } from './validatior/classValidator'

type Data = {
    [key: string]: string | number
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
    ]

    const data = [
        {
            name: 'John',
            age: 20,
            grade: 'a',
            class: '5D',
        },
        {
            name: 'Jane',
            age: 21,
            grade: 'c',
        },
        {
            age: 22,
            grade: 'c',
        },
    ]

    const handleSubmit = (values: Data[]) => {
        console.log(values)
    }

    const options = {
        grade: [
            { id: 1, name: 'a', value: 'A' },
            { id: 2, name: 'b', value: 'B' },
            { id: 3, name: 'c', value: 'C' },
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
