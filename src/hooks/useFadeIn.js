import React, {useRef, useEffect} from 'react'

function useFadeIn(duration = 1) {
  const ref = useRef()
  useEffect(() => {
    if (ref.current) {
      ref.current.style.transition = `opacity ${duration}s ease-in`
      ref.current.style.opacity = 1
    }
  }, [])
  return {ref, style: {opacity: 0}}
}

export default useFadeIn
