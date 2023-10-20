import {useState} from 'react'

type ModalProps = {
    children: JSX.Element;
}

const Modal_movie = ({children}:ModalProps)=>{
  const [modalOpen,setModalOpen] = useState(false)

  return(
    <>
  {modalOpen ?
    <div>
      <div>asdsad</div>
    </div>
  :
    {children}
  }
      </>
  )
}

export default Modal_movie;