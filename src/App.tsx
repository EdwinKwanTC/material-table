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
            inputType: 'text',
        },
    ]

    const data = [
        {
            name: 'John',
            age: 20,
            grade: 'A',
        },
        {
            name: 'Jane',
            age: 21,
            grade: 'B',
        },
        {
            name: 'Edwin',
            age: 22,
            grade: 'C',
        },
    ]

    const handleSubmit = (values: Data[]) => {
        console.log(values)
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
        >
            {tableButton()}
        </Table>
    )
}

export default App
