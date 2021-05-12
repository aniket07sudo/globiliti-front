import React , {useState} from 'react';
import {ReactComponent as Eye} from '../Assets/Eye.svg';

const Input = (props) => {

    const [show,setShow] = useState(false)
    let inputElement = null;
    let inputclasses = ["bar"];
    console.log(props.invalid,props.Touched);
    if (props.invalid && props.Touched) {
        inputclasses.push("invalid")
}
    switch(props.elementType) {
        case("input"):
        inputElement = (
            <div className="group">
                <label htmlFor={props.elementConfig.placeholder}>{props.elementConfig.placeholder}</label>
                <div className="relative">
                <input {...props.elementConfig} id={props.elementConfig.placeholder} value={props.value} required onChange={props.onchange} autoComplete="off" />
                    <span className={inputclasses.join(" ")}></span>
                </div>
                {props.invalid && props.Touched && <div className="form-warn">Required</div>}
            </div>
        )
        break;
        case("password"):
        inputElement = (
            <div className="group">
                <label htmlFor={props.elementConfig.placeholder}>{props.elementConfig.placeholder}</label>
                <div className="relative">
                <div className="show-pass" onClick={() => setShow(!show)}><Eye style={{fill:show ? '#192451' :'#95a0ce'}} /></div>
                <input className="pass-field" placeholder="Password" type={show ? `text` : `password`} id={props.elementConfig.placeholder} value={props.value} required onChange={props.onchange} />
                    <span className={inputclasses.join(" ")}></span>
                </div>
                {props.invalid && props.Touched && <div className="form-warn">*Password Must Contain 8 Characters</div>}
                
            </div>
        )
        break;
        default:
            inputElement = (
                <div className="group">
                    <input type="text" required />
                    <span className="bar"></span>
                </div>
            )
    }
    return(
        <>
        {inputElement}
        </>
    )
}

export default Input;