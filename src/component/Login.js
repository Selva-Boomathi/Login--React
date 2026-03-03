import React, {Component} from 'react'
import './Login.css'

class Login extends Component{
    state={
        email:'',
        password:'',
        message:'',
    }
    emailChange=(event)=>{
        this.setState({email:event.target.value})
    }
    passwordChange=(event)=>{
        this.setState({password:event.target.value})
    }
    Login=()=>{
        const {email,password} = this.state;
        
       if(
        email.endsWith('@gmail.com') && email.length>'@gmail.com'.length
       ){
        if(password.length>=6){
            this.setState({message:'Login Successful'})
        } else{
            this.setState({message:'Password must be at least 6 character'})
        }
       } else{
        this.setState({message:'Enter email like abcd@gmail.com'})
       }
        
    }
    render(){
        return (
            <div className='container'>
                <h1>Login Form</h1>
                    <label>Email:</label>
                <input type='email' value={this.state.email} onChange={this.emailChange}/>
            <label>Password</label>
            <input type='password' value={this.state.password} onChange={this.passwordChange}/>
            <button onClick={this.Login}>Login</button>
            <p className={this.state.message.includes('Successful')?'success' :'error'}>{this.state.message}</p>
            </div>
        )
    }
}
export default Login