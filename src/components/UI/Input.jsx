import './Input.scss';
import React, {useRef, useImperativeHandle} from 'react';

const Input = React.forwardRef(
    (props,ref) => {
        const inputRef = useRef();
        const activate = () => {
            inputRef?.current?.focus();
        }
        useImperativeHandle(ref, () => {
            return {
                focus: activate
            }
        })
        return (
            <div>
            <input
                id={props.id}
                className="form-content"
                type={props.type}
                placeholder={props.placeholder}
                name={props.name}
                {...props.register}
                onChange={props.onChange}
                // onFoucs = {props.onFoucs}
                onInput={props.onInput}
                ref={inputRef}
            />
            {props.error && <span className="error-info">{props.error}</span>}
            </div>
        );
    }
    
) 
export default Input;