import React from 'react';


class Register extends React.Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
			name: '',
			flag: false
		}
	}	
	onNameChange = (event) => {
		this.setState({name: event.target.value})
	}
	onEmailChange = (event) => {
		this.setState({email: event.target.value})
	}
	onPasswordChange = (event) => {
		this.setState({password: event.target.value})
	}

	onSubmitRegister = () => {
		fetch('https://obscure-badlands-06335.herokuapp.com/register', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.email,
				password: this.state.password,
				name: this.state.name
			})
		})
		.then(response => response.json())
		.then(user => {
			if (user.email) {
				this.props.loadUser(user)
				this.props.onRouteChange('home');
			} else {
				this.setState({flag: true});
			}
		})
		
	}

	render() {
		return (
			<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
				<main className="pa4 white-80">
				  <div className="measure">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f2 fw6 ph0 mh0">Register</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
				        <input 
				        	className="white b pa2 input-reset b--white ba bg-transparent hover-bg-black hover-white w-100" 
				        	type="text" 
				        	name="name"  
				        	id="name"
				        	onChange= {this.onNameChange}
				        />
				      </div>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
				        <input 
				        	className="white b pa2 input-reset b--white ba bg-transparent hover-bg-black hover-white w-100" 
				        	type="email" 
				        	name="email-address"  
				        	id="email-address" 
				        	onChange= {this.onEmailChange}
				        />
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				        <input 
				        	className="white b pa2 input-reset b--white ba bg-transparent hover-bg-black hover-white w-100" 
				        	type="password" 
				        	name="password"  
				        	id="password" 
				        	onChange= {this.onPasswordChange}
				        />
				      </div>
				      { this.state.flag === true && <p className="white">Invalid Credentials.</p>}
				    </fieldset>
				    <div className="">
				      <input 
				      	onClick={this.onSubmitRegister} 
				      	className="b ph3 pv2 input-reset white ba b--white bg-transparent grow pointer f6 dib" 
				      	type="submit" 
				      	value="Register"
				      />
				    </div>
				  </div>
				</main>
			</article>	
	);
	}
	
}

export default Register;