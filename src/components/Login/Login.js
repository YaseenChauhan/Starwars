import React, { Component, Fragment } from 'react';
import axios from 'axios';

import './Login.css';


class Login extends Component {

    constructor(props) {
		super(props);
		this.state = {
			username: '',
            password: '',
            stars: []
		}
    }
    componentDidMount() {
         axios.get('https://swapi.co/api/people/')
         .then(response => {
                this.setState({
                    stars: response.data.results
                })
         })
         .catch(err => console.log(err));
    }
	handleChange = (key, value) => {
		this.setState({
			[key]: value	
		})
	}
	login = () => {
		const username = this.state.username;
        const pass = this.state.password;
        let names = this.state.stars;
            for(let i= 0;i < names.length;i++){
                
                if(names[i].name === username && names[i].birth_year === pass){
                    this.props.history.push('/dashboard');
                    localStorage.setItem('token', names[i].name)
                    return;
                }
            }
            this.props.history.push('/');
            
		
	}
    render() {

        return (
            <Fragment>
                <form>
                    <div className="form-group">
                        <label>username</label>
                        <input type="text" className="form-control" id="username"  placeholder="Enter username" value= {this.state.username} onChange={(e) => this.handleChange('username', e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value= {this.state.password} onChange={(e) => this.handleChange('password', e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.login}>Submit</button>
                </form>
            </Fragment>
        )
    }
}


export default Login;