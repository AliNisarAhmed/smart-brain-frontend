import React from 'react';

class Register extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
    }
  }


  onEmailChange = (event) => {
    this.setState({email: event.target.value});
  }

  onNameChange = (event) => {
    this.setState({name: event.target.value});
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value});
  }

  onSubmitSignIn = () => {
    // console.log(this.state);
    fetch('https://fast-sierra-78927.herokuapp.com/register', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
      })
    })
      .then(response => response.json())
      .then(user => {
        if(user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange('home');
        }
      })
    
  }

  render() {
    return (
      <article className="br3 w1 ba shadow-5 b--black-10 mv4 w-250 w-150-m w-25-l mw5 center">
        <main className="pa1 black-80 w5">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0 ">
              <legend className="f1 fw5 ph0 mh1">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                <input 
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                  type="text" 
                  name="name" 
                  id="name"
                  onChange={this.onNameChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input 
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                  type="email" 
                  name="email-address" 
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input 
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                  type="password" 
                  name="password" 
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="">
                <input 
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                  type="submit" 
                  value="Register"
                  onClick={this.onSubmitSignIn}
                />
            </div>
          </div>
        </main>
      </article>

  );
  }
    
}

export default Register;