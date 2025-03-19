interface Buttons {
    text?: string,
    className?: string,
}

const ButtonRef = ({text,className}: Buttons)=>{
    return(
        <a className={className}>{text}</a>
    )
        
}

export default ButtonRef;