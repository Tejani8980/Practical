import  React, {Component} from 'react';

import axios from 'axios';

// import userData from '../data/'


import {Form, Button} from "react-bootstrap";

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:"",
            valid: false,
            userData: []

        }
    }

    // validate = () => {
    //     if(this.state.name.lengh>1 && this.state.password.length>1){
    //         this.setState({valid : true})
    //     }
    // }

    componentDidMount = () => {
        axios.get('./users.json')
        .then((res)=>{
          this.setState({userData:res.data }, () => {
              console.log("..." , this.state.userData
              )
          })
        }).catch((err)=>{
          console.log(err);
        })
      }

      handleSubmit = (e) => {
        e.preventDefault();
          const email = this.state.email;
          const password = this.state.password;
          console.log(email)
          console.log(password)
          this.state.userData.map((user) =>  {
            (email===user.email && password === user.password) ? this.props.history.push('/home') :  console.log("user invalid")
            return user.email.indexOf(email);
          });
            
          
          
      }

    handleChange =(e) => {
        console.log("in")
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value}, () => {
            console.log(this.state)
        })
    }
    render() {
       
        return (
            <>
            <div className=" d-flex justify-content-center align-items-center" style={{marginTop:"12%"}}>
                <Form>
                    <Form.Group >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" onChange={this.handleChange} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" onChange={this.handleChange}/>
                    </Form.Group>
                    
                    <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                        Submit
                    </Button>
                </Form>
                </div>
            </>
        )
    }
}

export default Login;