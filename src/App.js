import Logo from './components/Logo'
import Form from './components/Form'
import PackingList from './components/PackingList'
import Stats from './components/Stats'
import { useState } from 'react'

// const initialItems = [
//     { id: 1, description: 'Passports', quantity: 2, packed: false },
//     { id: 2, description: 'Socks', quantity: 12, packed: false },
// ]

export default function App() {
    const [items, setItems] = useState([])
    console.log(items)

    const handleAddItem = (item) => {
        console.log(item)
        const newItems = [...items, item]
        setItems(newItems)
    }

    const handleDeleteItem = (id) => {
        console.log(id)
        const newItems = items.filter((item) => item.id !== id)
        setItems(newItems)
    }

    const handleToggleItemPacked = (id) => {
        console.log(id)
        const newItems = items.map((item) =>
            item.id === id ? { ...item, packed: !item.packed } : item
        )
        setItems(newItems)
    }

    return (
        <div className="app">
            <Logo />
            <Form onAddItem={handleAddItem} />
            <PackingList
                items={items}
                onDeleteItem={handleDeleteItem}
                onToggleItemPacked={handleToggleItemPacked}
            />
            <Stats items={items} />
        </div>
    )
}
