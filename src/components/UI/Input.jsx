import classes from './Input.module.scss';
import React, {useRef, useImperativeHandle} from 'react';

const Input = React.forwardRef(
    (props,ref) => {
        const inputRef = useRef();
        const activate = () => {
            console.log("activate",inputRef);
            inputRef?.current?.focus();
        }
        useImperativeHandle(ref, () => {
            return {
                focus: activate
            }
        })
        return (
            <div className={`${classes.control} ${
                props.isValid === false ? classes.invalid : ''
              }`}>
            <input
                // ref={inputRef}
                // id={props.id}
                // className="form-content"
                // type={props.type}
                // placeholder={props.placeholder}
                // name={props.name}
                // {...props.register}
                // onChange={props.onChange}
                // onBlur={props.onBlur}
                ref={inputRef}
                type={props.type}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
            {/* {props.error && <span className="error-info">{props.error}</span>} */}
            </div>
        );
    }
    
) 
export default Input;