

const Button = ({text,action,btnType,selected}) => {
    return (
        <div>
            <button className={`button ${btnType}`} onClick={action} selected={selected} role="button"> {text}</button>
        </div>
    )
}

export default Button
