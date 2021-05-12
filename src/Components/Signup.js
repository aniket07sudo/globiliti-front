import React , {Component} from 'react';
import Input from './Input';
import {Link,Redirect} from 'react-router-dom';
import {ReactComponent as Logo} from '../Assets/Logo.svg';
import { ReactComponent as Illus } from '../Assets/illustration.svg';
import { LoadingOutlined } from '@ant-design/icons';
import axios from 'axios';
import {motion } from 'framer-motion';
import {connect } from 'react-redux';
import { toast } from 'react-toastify';
import { PageAnimation } from '../Animations/pageAnimations';
import {ContactForm,Photo } from '../Animations/login';

class Signup extends Component {

    state = {
        addUser: {
            firstName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder:'First Name'
                },
                value: '',
                validation: {
                    required:true
                },
                valid: false,
                touched:false
            },
            lastName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder:'Last Name'
                },
                value: '',
                validation: {
                    required:true
                },
                valid: false,
                touched:false
            },
            username: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder:'Username'
                },
                value: '',
                validation: {
                    required:true
                },
                valid: false,
                touched:false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder:'Email'
                },
                value: '',
                validation: {
                    required:true,
                    email:true
                },
                valid: false,
                touched:false
            },
            password: {
                elementType: 'password',
                elementConfig: {
                    type: 'password',
                    placeholder:'Password'
                },
                value: '',
                validation: {
                    required:true,
                    minlength:8
                },
                valid: false,
                touched:false
            }
        },
        formValid: false,
        loading:false
    }

    componentDidMount() {
        document.title = 'Globiliti | Signup';

    }

    checkValidity = (value, rules) => {
        let isValid = true;
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
        if(rules.minlength) {
          isValid = value.length >= rules.minlength && isValid;
        }
        if (rules.email) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            isValid = re.test(String(value).toLowerCase()) && isValid;
        }
        return isValid;
    }

    inputChangedHandler = (event,identifier) => {
        const updatedForm = {
            ...this.state.addUser
        }
        const updatedElement = {
            ...this.state.addUser[identifier]
        }
        updatedElement.value = event.target.value;
        updatedElement.valid = this.checkValidity(updatedElement.value, updatedElement.validation);
        updatedElement.touched = true;
        updatedForm[identifier] = updatedElement;
        let formValid = true;
        for (let inputIdentifier in updatedForm) {
            formValid = updatedForm[inputIdentifier].valid && formValid;
        }
        this.setState({ addUser: updatedForm, formValid: formValid });
    }

    createAccount = () => {
        this.setState({ loading: true });
        
        let formData = {};
        for (let identifier in this.state.addUser) {
            formData[identifier] = this.state.addUser[identifier].value;
        }
     
        axios.post("/signup", { ...formData })
            .then(res => {
                 toast.success('Account Created', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
                this.setState({ loading: false });
            })
            .catch(err => this.setState({ loading: false }));
    }

    render() {
        let formElement = [];
        for (let key in this.state.addUser) {
            formElement.push({
                id: key,
                config:this.state.addUser[key]
            })
        }
       
        return (
            <motion.div variants={PageAnimation} initial="hidden" exit="exit" animate="show" className="login_container auto_wrap">
                {this.props.userId && <Redirect to="/impact" />}

                <div className="login">
                    <div className="login_header">
                        <Logo />
                    </div>
                    <div className="login_body">
                        <div className="login_form">
                            <h1 className="head">Welcome To Globiliti!</h1>
                            <h3>Create Your School Account</h3>
                            <motion.div variants={ContactForm} initial="hidden" exit="exit" animate="show" className="login_form-field">
                                {formElement.map(form => (
                                    <Input variants={ContactForm} key={form.id} value={form.value} elementConfig={form.config.elementConfig} onchange={(event) => this.inputChangedHandler(event,form.id)} invalid={!form.config.valid} elementType={form.config.elementType} Touched={form.config.touched} />
                                ))}
                                
                            </motion.div>
                            <button onClick={this.createAccount} className={!this.state.formValid ? 'login-btn disabled' : 'login-btn'} disabled={!this.state.formValid}>
                                CREATE ACCOUNT&nbsp;{this.state.loading && <LoadingOutlined style={{ fontSize: 24 }} spin />}
                            </button>
                            <Link to="/login"><div className="new_acc">Already Register ? LOGIN</div></Link>
                        </div>
                       <motion.div variants={Photo} initial="hidden" animate="show" className="login_illustration">
                            <Illus />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userId:state.reducer.userId
    }
}

export default connect(mapStateToProps)(Signup);