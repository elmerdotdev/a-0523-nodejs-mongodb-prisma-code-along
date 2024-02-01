import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Item } from '../types'

interface ItemFormProps {
  currentItem?: Item | null,
  getItems: () => void
}

const ItemForm: React.FC<ItemFormProps> = ({ currentItem, getItems }) => {
  const initialFields = { _id: '', name: '', description: '' }
  const [item, setItem] = useState<Item>(currentItem || initialFields)

  useEffect(() => {
    setItem(currentItem || initialFields)
  }, [currentItem])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (currentItem) {
      try {
        await axios.put(`http://localhost:3009/items/${currentItem._id}`, item)
      } catch (err) {
        console.error(err)
      }
    } else {
      await axios.post(`http://localhost:3009/items`, item)
    }
    setItem(initialFields)
    getItems()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItem({...item, [e.target.name]: e.target.value})
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={item.name} onChange={handleChange} placeholder="Item name" />
      <input type="text" name="description" value={item.description} onChange={handleChange} placeholder="Item description" />
      <button type="submit">Submit</button>
    </form>
  )
}

export default ItemForm