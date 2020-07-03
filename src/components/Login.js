import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBMask,
  MDBInput,
  MDBIcon,
  MDBView,
  MDBBtn
} from 'mdbreact';
import './Login.css';
import NavbarPage from './Nav';
import FooterPage from './Footer';
import firebase from '../firebase';

class Login extends React.Component {
  state = {
    collapseID: '',
    email: '',
    password: ''
  };


  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));

  userSignIn = (e) => {
    // authentication
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then(() => {
      this.props.history.push('/profile')
    })
  }

  handleChange = (e) => {
    const {value, name} = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className='classic-form-page' id='login'>

        <NavbarPage />

        <MDBView>
          <MDBMask
            className='d-flex justify-content-center align-items-center'
            overlay='stylish-strong'
          >
            <MDBContainer>
              <MDBRow>
                <MDBCol md='10' lg='6' xl='5' sm='12' className='mt-5 mx-auto'>
                  <MDBCard>
                    <MDBCardBody>
                      <div className='form-header aqua-gradient'>
                        <h3>
                          <MDBIcon
                            icon='user'
                            className='mt-2 mb-2 text-white'
                          />{' '}
                          Log in:
                        </h3>
                      </div>
                      <MDBInput
                        type='email'
                        name='email'
                        label='Your email'
                        icon='envelope'
                        iconClass='white-text'
                        value={this.state.email}
                        onChange={this.handleChange}
                      />
                      <MDBInput
                        type='password'
                        name='password'
                        label='Your password'
                        icon='lock'
                        iconClass='white-text'
                        value={this.state.password}
                        onChange={this.handleChange}
                      />
                      <div className='text-center mt-3 black-text'>
                        <MDBBtn className='blue-gradient' size='lg' onClick={this.userSignIn}>
                          Sign In
                        </MDBBtn>
                        <hr />
                      </div>
                      <div className='inline-ul text-center d-flex justify-content-center'>
                        <a href='https://twitter.com/socialhoundco'>
                          <MDBIcon
                            fab
                            icon='twitter'
                            size='lg'
                            className='p-2 m-2  white-text'
                          />
                        </a>
                        <a href='https://www.facebook.com/SocialHound-110112560760116'>
                          <MDBIcon
                            fab
                            icon='facebook-f'
                            size='lg'
                            className='p-2 m-2 white-text'
                          />{' '}
                        </a>
                        <a href='https://www.instagram.com/socialhound.co/'>
                          <MDBIcon
                            fab
                            icon='instagram'
                            size='lg'
                            className='p-2 m-2 white-text'
                          />
                        </a>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
        <footer>
          <FooterPage />
        </footer>
      </div>
    );
  }
}

export default Login;