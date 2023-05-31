import { useState } from 'react'

import Section from '../Section'
import { GalleryItem } from '../../pages/Home'

import play from '../../images/botao-play.png'
import zoom from '../../images/mais-zoom.png'
import close from '../../images/close.png'

import { Action, Item, Items, Modal, ModalContent } from './styles'

type Props = {
  defaultCover: string
  name: string
  itens: GalleryItem[]
}

interface ModalState extends GalleryItem {
  isVisible: boolean
}

const Gallery = ({ defaultCover, name, itens }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  const closeModal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: ''
    })
  }

  return (
    <>
      <Section background="black" title="Galeria">
        <Items>
          {itens.map((midia, index) => (
            <Item
              key={midia.url}
              onClick={() => {
                setModal({
                  isVisible: true,
                  type: midia.type,
                  url: midia.url
                })
              }}
            >
              <img
                src={getMediaCover(midia)}
                alt={`Midia ${index + 1} de ${name}`}
              />
              <Action>
                <img src={getMediaIcon(midia)} alt="Midia" />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      {/* aqui comeca o modal */}
      <Modal className={modal.isVisible ? 'visible' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={close} onClick={closeModal} alt="Icone para fechar" />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} />
          ) : (
            <iframe frameBorder={0} src={modal.url} />
          )}
        </ModalContent>
        <div className="overlay" onClick={closeModal}></div>
      </Modal>
    </>
  )
}

export default Gallery
