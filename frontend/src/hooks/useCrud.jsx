import { useState, useRef, useCallback } from "react"
import axios from "axios"

export function useCrud(url) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const api = useRef(axios.create({ baseURL: url }))

  const getAll = useCallback(async () => {
    setLoading(true)
    try {
      const res = await api.current.get('/')
      await new Promise((resolve) => setTimeout(resolve, 5000))
      const results = Array.isArray(res.data) ? res.data : []
      setData(results)
    } catch (error) {
      const errorMessage = error.response?.data?.message || 
        "Whoops! Looks like we're having a temporary hiccup with the server. Please try again later."
      setError(errorMessage)
      console.error('[Error GetAll]: ', error.message)
    } finally {
      setLoading(false)
    }
  }, [])

  const create = useCallback(async (item) => {
    try {
      const res = await api.current.post('/', item)
      const newItem = res.data.user   
      setData((prev) => Array.isArray(prev) ? [...prev, newItem] : [newItem])
    } catch (error) {
      const errorMessage = error.response?.data?.message || 
        'Oops! Something went wrong while saving your data. Please try again later.'
      setError(errorMessage)
      console.error('[Error Create]: ', error.message)
    }
  }, [])

  const update = useCallback(async (id, item) => {
    try {
      const res = await api.current.put(`/${id}`, item)
      const itemEdited = res.data.user   
      setData((prev) => prev.map((u) => (
        u.id === id ? itemEdited : u
      )))
    } catch (error) {
      const errorMessage = error.response?.data?.message || 
        'We couldn’t update your information. Please try again later.'
      setError(errorMessage)
      console.error('[Error Update]: ', error.message)
    }
  }, [])

  const remove = useCallback(async (id) => {
    try {
      await api.current.delete(`/${id}`)
      setData((prev) => prev.filter((item) => item.id !== id))
    } catch (error) {
      const errorMessage = error.response?.data?.message || 
        'Sorry but, We couldn’t delete your information. Please try again later.'
      setError(errorMessage)
      console.error('[Error Delete]: ', error.message)
    }
  }, [])

  return [data, loading, error, { getAll, create, update, remove }]
}
