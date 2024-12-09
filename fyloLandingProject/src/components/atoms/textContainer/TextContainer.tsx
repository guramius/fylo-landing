import TextContainerProps from "../../interface"

const TextContainer = ({text, hText, color, fontSize, fontSizeP, margin, padding}:TextContainerProps) => {
  return (
    <>
      <h1 className={` ${color} ${fontSize} ${margin} max-tablet:text-center max-tablet:text-[24px] `}>
        {hText}
      </h1>
      <p className={` ${color} ${fontSizeP} ${padding} max-tablet:text-[14px] max-tablet:text-center`}>
        {text}
      </p>
    </>
  )
}

export default TextContainer