interface ImageComponentsProps {
    src: string;
    alt: string;
    className?:string;
}
const ImgBox = ({src, alt, className}:ImageComponentsProps) => {
  return (
    <>
      <img src={src} alt={alt} className={`w-full h-auto ${className}`} />
    </>
  )
}

export default ImgBox