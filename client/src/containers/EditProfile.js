import React, { Component } from 'react';
import { connect } from 'react-redux';
import bindActionCreators from 'redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { createProfile } from '../actions';
import { getProfile } from '../actions';
import { updateProfile } from '../actions';
import { getKarma } from '../actions';
import { Button, TextField, Paper } from '@material-ui/core';
import '../styles/style.css';

let data = {
  firstName: 'Jim',
  lastName: 'Smith',
  email: 'john.smith@smith.com',
  street: 'Johnsmith dr.',
  city: 'Smithcity',
  userState: 'Bigstate',
  zipCode: '00000'
}

class EditProfile extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    // this.props.getProfile(5678);
    // this.props.load(data);
    this.props.getKarma(1234);
  }

  renderField (field) {
    return (
      <div>
        <div className="label">
          <label>{field.label}</label>
        </div>
        {/* <input
          type="text"  
            {...field.input}
        /> */}
        <TextField
          placeholder={field.placeholder}
          type="text" 
            {...field.input}
          margin="normal"
        />
        {field.meta.touched ? field.meta.error : ''}
      </div>
    );
  }

  onSubmit (values) {
    console.log('INSIDE ONSUBMIT:', this.props.karma);
    values.karma = this.props.karma.Item.points;
    // this.props.createProfile(values);
    this.props.updateProfile(values);
  }

  render () {
    const { classes } = this.props;
    const { handleSubmit, load, pristine, reset, submitting } = this.props;
    console.log('PROPS:', this.props);
    return (
      <div>
        <Link to="/profile" >Profile</Link>
        <h2>Edit Profile</h2>
        <div className="main">
          <Paper>
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))} >
              <div className="button-margin">
                <Button type="button" variant="contained" onClick={() => this.props.getProfile(this.props.initialValues.userId || 'null')} >Load Account Information
                </Button> 
              </div>
              <Field
                placeholder={"UserId"}
                label="userId"
                name="userId"
                component={this.renderField}
              />
              <Field
                placeholder={"First Name"}
                label="First Name"
                name="firstName"
                component={this.renderField}
              />
              <Field
                placeholder={"Last Name"}
                label="Last Name"
                name="lastName"
                component={this.renderField}
              />
              <Field
                placeholder={"Email"}
                label="Email"
                name="email"
                component={this.renderField}
              />
              <Field
                placeholder={"Street"}
                label="Street"
                name="street"
                component={this.renderField}
              />
              <Field
                placeholder={"City"}
                label="City"
                name="city"
                component={this.renderField}
              />
              <Field
                placeholder={"State"}
                label="State"
                name="userState"
                component={this.renderField}
              />
              <Field
                placeholder={"Zip Code"}
                label="Zipcode"
                name="zipCode"
                component={this.renderField}
              />
              <Button type="submit" color="primary" variant="contained" disabled={pristine || submitting}>Submit Changes
              </Button>
              <Button type="button" color="secondary" variant="contained"  disabled={pristine || submitting} onClick={reset}>Undo Changes
              </Button>
            </form>
          </Paper> 
        </div> {/* main */}
      </div>
    )
  }
}

function validate (values)  {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Please enter your first name'
  }

  if (!values.lastName) {
    errors.lastName = 'Please enter your last name'
  }

  if (!values.email) {
    errors.email = 'Please enter your email'
  }

  if (!values.street) {
    errors.street = 'Please enter your street address'
  }

  if (!values.city) {
    errors.city = 'Please enter your city'
  }

  if (!values.userState) {
    errors.userState = 'Please enter your state'
  }

  if (!values.zipCode) {
    errors.zipCode = 'Please enter your zipcode'
  }

  return errors;
}

function mapStateToProps (state) {
  //whatever is returned will show up as props inside of Profile
  console.log('STATE:', state);
  return {
    // userId: state.userProfile.userId,
    // firstName: state.userProfile.firstName,
    // lastName: state.userProfile.lastName,
    // email: state.userProfile.email,
    // street: state.userProfile.street,
    // city: state.userProfile.city,
    // userState: state.userProfile.userState,
    // zipCode: state.userProfile.zipCode,

    initialValues: state.userProfile,
    karma: state.karma
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators ({ getKarma: getKarma, getProfile: getProfile, updateProfile: updateProfile }, dispatch);
}


// export default connect (mapStateToProps, mapDispatchToProps) (UserInfo);
EditProfile = reduxForm({
  validate: validate,
  form: 'profileForm',
  enableReinitialize: true,
  // make sure dirty fields (those the user has already edited)
  // are not overwritten by reinitialization
  keepDirtyOnReinitialize: true
  // destroyOnUnmount: false
})(EditProfile);
EditProfile = connect(mapStateToProps, { getKarma, getProfile, updateProfile })(EditProfile)
    // connect(mapStateToProps, mapDispatchToProps )(EditProfile)

export default EditProfile;
//proptypes

