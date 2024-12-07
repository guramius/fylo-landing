interface TextContainerProps {
    text: string;         
    hText: string;        
    color?: string;       
    fontSize?: string; 
    fontSizeP?:string;      
  }
const TextContainer = ({text, hText, color, fontSize, fontSizeP}:TextContainerProps) => {
  return (
    <>
        <h1 className={` ${color} ${fontSize}`}>
            {hText}
        </h1>
        <p  className={` ${color} ${fontSizeP}`}>
            {text}
        </p>
    </>
  )
}

export default TextContainer