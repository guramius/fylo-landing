interface TextContainerProps {
    text: string;         
    hText: string;        
    color?: string;       
    fontSize?: string; 
    fontSizeP?:string;      
    margin?:string
  }
const TextContainer = ({text, hText, color, fontSize, fontSizeP, margin}:TextContainerProps) => {
  return (
    <>
        <h1 className={` ${color} ${fontSize} ${margin}`}>
            {hText}
        </h1>
        <p  className={` ${color} ${fontSizeP}`}>
            {text}
        </p>
    </>
  )
}

export default TextContainer