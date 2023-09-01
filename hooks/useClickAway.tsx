import { useEffect } from 'react'
const useClickAway = (ref, handleClick) => {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref && ref.current && !ref.current.contains(event.target)) {
        handleClick()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])
}

export default useClickAway
