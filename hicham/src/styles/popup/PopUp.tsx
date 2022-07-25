import { useEffect, useState } from 'react'
import './Modal.css'

export default function Modal(props: any) {
  const [modal, setModal] = useState(props.modal)
  useEffect(() => {
    setModal(props.modal)
  }, [props.modal])

  const toggleModal = () => {
    setModal(!modal)
  }

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Hello</h2>
            <p>{props.message}</p>
          </div>
        </div>
      )}
    </>
  )
}
