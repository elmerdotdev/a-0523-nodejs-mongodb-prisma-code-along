import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ItemComponent from './ItemComponent'
import ItemForm from './ItemForm'
import { Item } from '../types'

const ItemList: React.FC = () => {
  const [items, setItems] = useState([])
  const [currentItem, setCurrentItem] = useState<Item | null>(null)

  useEffect(() => {
    getItems()
  }, [])

  const getItems = async () => {
    const response = await axios.get('http://localhost:3009/items')
    setItems(response.data)
  }

  const handleEdit = (item: Item) => {
    setCurrentItem(item)
  }

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`http://localhost:3009/items/${id}`)
    } catch (err) {
      console.log(err)
    }
    getItems()
  }

  return (
    <div>
      <ItemForm currentItem={currentItem} getItems={getItems} />
      {items.map((item, index) => (
        <ItemComponent
          key={index}
          item={item}
          onEdit={() => handleEdit(item)}
          onDelete={() => handleDelete(item._id)}
        />
      ))}
    </div>
  )
}

export default ItemList