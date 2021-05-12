import React , {useState} from 'react';
import { ReactComponent as Eye } from '../Assets/Eye.svg';
import { motion} from 'framer-motion';

const Input = (props) => {

    const [show,setShow] = useState(false)
    let inputElement = null;
    let inputclasses = ["bar"];
   
    if (props.invalid && props.Touched) {
        inputclasses.push("invalid")
}
    switch(props.elementType) {
        case("input"):
        inputElement = (
            <motion.div className="group" variants={ props.variants}>
                <label htmlFor={props.elementConfig.placeholder}>{props.elementConfig.placeholder}</label>
                <div className="relative">
                <input {...props.elementConfig} id={props.elementConfig.placeholder} value={props.value} required onChange={props.onchange} autoComplete="off" />
                    <span className={inputclasses.join(" ")}></span>
                </div>
                {props.invalid && props.Touched && <div className="form-warn">Required</div>}
            </motion.div>
        )
        break;
        case("password"):
        inputElement = (
            <motion.div className="group" variants={props.variants}>
                <label htmlFor={props.elementConfig.placeholder}>{props.elementConfig.placeholder}</label>
                <div className="relative">
                <div className="show-pass" onClick={() => setShow(!show)}><Eye style={{fill:show ? '#192451' :'#95a0ce'}} /></div>
                <input className="pass-field" placeholder="Password" type={show ? `text` : `password`} id={props.elementConfig.placeholder} value={props.value} required onChange={props.onchange} />
                    <span className={inputclasses.join(" ")}></span>
                </div>
                {props.invalid && props.Touched && <div className="form-warn">*Password Must Contain 8 Characters</div>}
                
            </motion.div>
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