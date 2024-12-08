interface ImageComponentsProps {
    src: string;
    alt: string;
    className?:string;
}
const ImgBox = ({src, alt, className}:ImageComponentsProps) => {
  return (
    <>
      <img src={src} alt={alt} className={className} />
    </>
  )
}

export default ImgBox