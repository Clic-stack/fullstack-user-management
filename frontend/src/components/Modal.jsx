import '../styles/Modal.scss'

function Modal({openModal, closeModal, children}) {
  return (
    <div className={`modal ${openModal ? 'show-modal' : ''}`} onClick={closeModal}>
      <div className="modal-content" onClick={(e) => 
        e.stopPropagation()}>
        {children}
        <button onClick={closeModal} className='close-btn'>X</button>
      </div>
    </div>
  )
}
 
export default Modal