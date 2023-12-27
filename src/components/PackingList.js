import Item from './Item'

export default function PackingList({
    items,
    onDeleteItem,
    onToggleItemPacked,
}) {
    return (
        <div className="list">
            <ul>
                {items.map((item) => (
                    <Item
                        item={item}
                        onDeleteItem={onDeleteItem}
                        onToggleItemPacked={onToggleItemPacked}
                        key={item.id}
                    />
                ))}
            </ul>
        </div>
    )
}
