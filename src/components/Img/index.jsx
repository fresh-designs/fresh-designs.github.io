import React, {useState, useEffect, useCallback} from 'react'

const Img = ({src, lq, fallback, height, width, ...props}) => {
  const [url, setUrl] = useState(lq || src || fallback)

  useEffect(() => {
    if (url === lq && src) loadImg(src)
    else if (!url && !lq) loadImg(fallback)
  }, [])

  const loadImg = useCallback(
    u =>
      fetch(u)
        .then(response => response.blob())
        .then(blob => {
          var reader = new FileReader()
          reader.onload = function() {
            setUrl(this.result)
          }
          reader.readAsDataURL(blob)
        }),
    [setUrl],
  )
  const onError = useCallback(() => url !== fallback && setUrl(fallback), [
    setUrl,
    url,
  ])

  // TODO: css blur effect + transition
  return (
    <img
      {...{
        src: url,
        onload,
        onError,
        ...(height && {height}),
        ...(width && {width}),
        ...props,
      }}
    />
  )
}

export default Img
