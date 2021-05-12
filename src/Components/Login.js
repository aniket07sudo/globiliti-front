import React  from 'react';
import Input from './Input';
import {Redirect } from 'react-router-dom';
import {Link,withRouter} from 'react-router-dom';
import {ReactComponent as Logo} from '../Assets/Logo.svg';
import {ReactComponent as Illus} from '../Assets/illustration.svg'; 
import { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { toast} from 'react-toastify';
import { LoadingOutlined } from '@ant-design/icons';
import {Setid } from '../Store/Action/auth';


class Login extends Component {

    state = {
        addUser:{
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
        document.title = 'Globiliti | Login';
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

    loginSubmit = () => {
        this.setState({ loading: true });
        let formData = {};
        for (let identifier in this.state.addUser) {
            formData[identifier] = this.state.addUser[identifier].value;
        }
        axios.post("/login", { ...formData })
            .then(res => {
                toast.success('Logged In Succesfully');

                // console.log(res.data.user._id);
                // Setid
                this.props.setId(res.data.user._id);
                this.setState({ loading: false });
                this.props.history.push("/impact")
            localStorage.setItem('guser',res.data.user._id);

            })
            .catch(err => {
                console.log(err);
                toast.error("Something Went Wrong");
                this.setState({ loading: false });
        })
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
            <div className="login_container auto_wrap">
                {this.props.userId && <Redirect to="/impact" />}
                <div className="login">
                    <div className="login_header"  >
                        <Logo />
                    </div>
                    <div className="login_body">
                        <div className="login_form">
                            <h1 className="head">Welcome To Globiliti!</h1>
                            <h3>Log in to your school account</h3>
                            <div className="login_form-field">
                                {formElement.map(form => (
                                <Input key={form.id} value={form.value} elementConfig={form.config.elementConfig} onchange={(event) => this.inputChangedHandler(event,form.id)} invalid={!form.config.valid} elementType={form.config.elementType} Touched={form.config.touched} />
                                ))}
                            </div>
                            <button className={!this.state.formValid ? 'login-btn disabled' : 'login-btn'} onClick={this.loginSubmit} disabled={!this.state.formValid}>
                                LOG IN&nbsp;{this.state.loading && <LoadingOutlined style={{ fontSize: 24 }} spin />}
                   </button>
                            <Link to="/signup"><div className="new_acc">Create New Account</div></Link>
                        </div>
                        <div className="login_illustration">
                            <Illus />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userId:state.reducer.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setId:(id) => dispatch(Setid(id))
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Login));