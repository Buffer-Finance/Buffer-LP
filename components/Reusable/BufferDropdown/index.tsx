import { useState, useEffect, ReactNode, useRef } from 'react'
import Background from './style'

import useClickAway from '../../../hooks/useClickAway'
interface Imessage {
  position: 'top' | 'bottom'
  msg: string
}

interface IBufferDropdown {
  items: any[]
  dropdownBox: (a: any, open: boolean) => ReactNode
  initialActive: number
  item: (a: any, b: any, c: any, d: boolean) => ReactNode
  message?: Imessage
  bottom?: boolean
}

const BufferDropdown: React.FC<IBufferDropdown> = ({ items, dropdownBox, initialActive, item, message, bottom }) => {
  const [open, setOpen] = useState(false)

  const handelOpen = () => {
    setOpen(true)
  }
  const handelClose = () => {
    open && setOpen(false)
  }
  const handelClick = () => {
    setOpen(!open)
  }
  const [activeItemIndex, setActiveInex] = useState(0)
  const onChange = ({ property, item }) => {
    let idx = 0
    for (let singleItem of items) {
      console.log('singleItem,property,item : ', singleItem, property, item)
      if (singleItem[property] === item[property]) {
        setActiveInex(idx)
      }
      idx++
    }
  }
  const wrapperRef = useRef(null)
  const handleClickOutside = () => {
    setOpen(!open)
  }
  useClickAway(open ? wrapperRef : null, handleClickOutside)

  return (
    <Background ref={wrapperRef}>
      {items.length ? (
        <div
          className={['dropdown-box', 'mxxph', bottom && 'bottom', open && (bottom ? 'active-bottom' : 'active')].join(
            ' '
          )}
          onClick={handelClick}
        >
          {dropdownBox(items[activeItemIndex], open)}
          <div className="dropdown-items">
            {message && message.position === 'top' && <span className="message">{message.msg}</span>}
            {items.slice(1, items.length).map((i, key) => item(i, handelClose, onChange, key === activeItemIndex))}
          </div>
          {message && message.position === 'bottom' && <span className="message">{message.msg}</span>}
        </div>
      ) : null}
    </Background>
  )
}

export default BufferDropdown
