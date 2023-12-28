import { useState } from 'react'
import Item from './Item'

export default function PackingList({
    items,
    onDeleteItem,
    onToggleItemPacked,
    onClearList,
}) {
    const [sortBy, setSortBy] = useState('input')

    let sortedItems = items

    if (sortBy === 'description') {
        sortedItems = items
            .slice()
            .sort((a, b) => (a.description < b.description ? -1 : 1))
        // .sort((a, b) => a.description.localeCompare(b.description))
    }

    if (sortBy === 'packed') {
        sortedItems = items
            .slice()
            .sort((a, b) => (a.packed < b.packed ? -1 : 1))
    }

    return (
        <div className="list">
            <ul>
                {sortedItems.map((item) => (
                    <Item
                        item={item}
                        onDeleteItem={onDeleteItem}
                        onToggleItemPacked={onToggleItemPacked}
                        key={item.id}
                    />
                ))}
            </ul>

            <div className="actions">
                <select
                    value={sortBy}
                    onChange={(event) => setSortBy(event.target.value)}
                >
                    <option value="input">Sort by input order</option>
                    <option value="description">Sort by description</option>
                    <option value="packed">Sort by packed status</option>
                </select>
                <button onClick={onClearList}>Clear list</button>
            </div>
        </div>
    )
}
