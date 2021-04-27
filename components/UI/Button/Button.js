

const Button = ({text,action,btnType}) => {
    return (
        <div>
            <button className={`button ${btnType}`} onClick={action} role="button"> {text}</button>
        </div>
    )
}

export default Button
