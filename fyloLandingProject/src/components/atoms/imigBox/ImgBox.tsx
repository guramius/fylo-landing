import ImageComponentsProps from '../../interface'
const ImgBox = ({src, alt, className}:ImageComponentsProps) => {
  return (
    <>
      <img src={src} alt={alt} className={className} />
    </>
  )
}

export default ImgBox