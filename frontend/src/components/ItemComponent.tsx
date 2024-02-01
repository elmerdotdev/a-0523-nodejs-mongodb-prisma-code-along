import React from 'react'
import { Item } from '../types'

interface ItemProps {
  item: Item,
  onDelete: () => void,
  onEdit: () => void
}

const ItemComponent: React.FC<ItemProps> = ({ item, onDelete, onEdit }) => {
  return (
    <div>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  )
}

export default ItemComponent