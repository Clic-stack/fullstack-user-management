import "./styles/App.css"
import { useEffect, useState } from "react"
import { useCrud } from "./hooks/useCrud"
import UserContent from "./components/UserContent"
import Form from "./components/Form"
import Modal from "./components/Modal"
import { useModal } from "./hooks/useModal"
import LoadingScreen from "./components/LoadingScreen"
import usePagination from "./hooks/usePagination"
import Pagination from "./components/Pagination"

const baseUrl = import.meta.env.VITE_API_URL

function App() {
  const [
    users,
    loading, 
    error, 
    { getAll, create, update, remove }
  ] = useCrud(baseUrl)

  const {
    page,
    totalPages,
    pageItems,
    onPrev,
    onNext, 
    setPage
  } = usePagination({ itemsPerPage: 6, items: users })

  const { isOpen, openModal, closeModal, modalContent, setModalContent } = useModal()

  const [selectedUser, setSelectedUser] = useState(null)

  useEffect(() => {
    getAll()
  }, [getAll])

  const handleCreate = async (dataForm) => {
    await create(dataForm)  
    closeModal()
  }

  const handleAdd = () => {
    openModal()
    setModalContent(
      <Form onSubmit={handleCreate} />
    )
  }
  
  const handleDelete = async (user) => {
    const confirmDelete = window.confirm(`Are you sure to want to delete ${user.first_name} ${user.last_name}?`)
    if (confirmDelete) {
      await remove(user.id)   
    }
  }

  const handleCancel = () => {
    setSelectedUser(null)
    closeModal()
  }

  const handleUpdate = async (dataForm) => {
    await update(dataForm.id, dataForm)   
    setSelectedUser(null)
    closeModal()
  }

  const handleEdit = (user) => {
    setSelectedUser(user)
    openModal()
    setModalContent (
      <Form 
        onSubmit={handleUpdate}
        onCancel={handleCancel}
        user={user}
      />
    )
  }

  return (
    <div className="App">
      <div className="header"> 
        <h1 className="title">User CRUD</h1>
        <button onClick={handleAdd} className="btn btn-primary">
          Add User
        </button>
      </div>

      {loading ? (
        <LoadingScreen />
      ) : error ? (
        <p className="errors">{error}</p>
      ) : users.length > 0 ? (
        <>
          <UserContent
            users={pageItems} 
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
          <Pagination 
            page={page}
            totalPages={totalPages}
            onPrev={onPrev}
            onNext={onNext}
            setPage={setPage}
          />
        </>
      ) : (
        <p className="message">Ready to add your first user? Please give the first click!</p>
      )}

      <Modal openModal={isOpen} closeModal={closeModal}>
        {modalContent}
      </Modal>
    </div>
  )
}

export default App
