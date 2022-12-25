import Table from './base/Table'
import { TableHeaders } from './base/Table'

type Data = {
    [key: string]: string | number
}

function App() {
    const headers: TableHeaders[] = [
        {
            key: 'name',
            inputType: 'text',
        },
        {
            key: 'age',
            inputType: 'number',
        },
    ]

    const data = [
        {
            name: 'John',
            age: 20,
        },
        {
            name: 'Jane',
            age: 21,
        },
    ]

    const handleSubmit = (values: Data[]) => {
        console.log(values)
    }

    return <Table headers={headers} rows={data} handleSubmit={handleSubmit} />
}

export default App
