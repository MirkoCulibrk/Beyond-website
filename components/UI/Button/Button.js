

const Button = ({text,action,btnType}) => {
    return (
        <div>
            <button className={`button ${btnType}`} onClick={action} > {text}</button>
        </div>
    )
}

export default Button
