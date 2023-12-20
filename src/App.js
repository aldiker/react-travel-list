import Logo from './components/Logo'
import Form from './components/Form'
import PackingList from './components/PackingList'
import Stats from './components/Stats'
import { useState } from 'react'

const initialItems = [
    { id: 1, description: 'Passports', quantity: 2, packed: false },
    { id: 2, description: 'Socks', quantity: 12, packed: false },
]

export default function App() {
    const [items, setItems] = useState(initialItems)

    return (
        <div className="app">
            <Logo />
            <Form />
            <PackingList items={items} />
            <Stats />
        </div>
    )
}
