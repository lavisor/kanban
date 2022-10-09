import './Input.scss';

const Input = (props) => {
    return (
        <div className="form-field">
        <input
            id={props.id}
            className="form-content"
            type={props.type}
            placeholder={props.placeholder}
            name={props.name}
            {...props.register}
            onBlur={props.onBlur}
        />
        {props.error && <span className="error-info">{props.error}</span>}
        </div>
    );
}

export default Input;