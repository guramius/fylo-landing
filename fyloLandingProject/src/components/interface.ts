export default interface TextContainerProps {
    text?: string;         
    hText?: string;        
    color?: string;       
    fontSize?: string; 
    fontSizeP?:string;      
    margin?:string
    padding?:string;
}

export default interface InputProps {
    placeholder?: string;
    className?:string;
    styleButton?:string;
}

export default interface ImageComponentsProps {
    src?: string;
    alt?: string;
    className?:string;
}