import React, { Component } from 'react';
import { connect } from 'react-redux';
import bindActionCreators from 'redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { Button, TextField, Paper, Grid, withStyles } from '@material-ui/core';
import { getProfile, updateProfile, getKarma } from '../actions';
import '../styles/style.css';

const styles = theme => ({
  root: {

  },
  button: {
    margin: theme.spacing.unit,
  },
});

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.location.pathname.slice(13),
    };
  }

  componentDidMount() {
    console.log('USERID:', this.state.userId);
  }

  onSubmit(values) {
    values.userId = this.state.userId;
    console.log('VALUES:', values);
    this.props.updateProfile(values);
  }

  renderField(field) {
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


  render() {
    const { classes } = this.props;
    const { handleSubmit, pristine, reset, submitting } = this.props;
    console.log('PROPS:', this.props);
    return (
      <div>
        <Button variant="contained" color="secondary">
          <Link to={`/profile/${this.state.userId}`} params={{ userId: this.state.userId }}>
           Profile
          </Link>
        </Button>
        <h2>Edit Profile</h2>
        <div className="main">
          <Paper className={this.props.classes.root} elevation="4">
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
              <div className="button-margin">
            {/*    <Button type="button" variant="contained" onClick={() => this.props.getProfile(this.props.initialValues.userId || 'null')} >Load Account Information
                </Button> */}
              </div>
              <Field
                placeholder="First Name"
                label="First Name"
                name="firstName"
                component={this.renderField}
              />
              <Field
                placeholder="Last Name"
                label="Last Name"
                name="lastName"
                component={this.renderField}
              />
              <Field
                placeholder="Email"
                label="Email"
                name="email"
                component={this.renderField}
              />
              <Field
                placeholder="Street"
                label="Street"
                name="street"
                component={this.renderField}
              />
              <Field
                placeholder="City"
                label="City"
                name="city"
                component={this.renderField}
              />
              <Field
                placeholder="State"
                label="State"
                name="userState"
                component={this.renderField}
              />
              <Field
                placeholder="Zip Code"
                label="Zipcode"
                name="zipCode"
                component={this.renderField}
              />
              <Button className={this.props.classes.button} type="submit" color="primary" variant="contained" disabled={pristine || submitting}>
                Submit Changes
              </Button>
              <Button className={this.props.classes.button} type="button" color="secondary" variant="contained" disabled={pristine || submitting} onClick={reset}>
                Undo Changes
              </Button>
            </form>
          </Paper>
        </div>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Please enter your first name';
  }

  if (!values.lastName) {
    errors.lastName = 'Please enter your last name';
  }

  if (!values.email) {
    errors.email = 'Please enter your email';
  }

  if (!values.street) {
    errors.street = 'Please enter your street address';
  }

  if (!values.city) {
    errors.city = 'Please enter your city';
  }

  if (!values.userState) {
    errors.userState = 'Please enter your state';
  }

  if (!values.zipCode) {
    errors.zipCode = 'Please enter your zipcode';
  }

  return errors;
}

function mapStateToProps(state) {
  console.log('STATE:', state);
  return {
    initialValues: state.userProfile,
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators ({ getKarma: getKarma, getProfile: getProfile, updateProfile: updateProfile }, dispatch);
}


// export default connect (mapStateToProps, mapDispatchToProps) (UserInfo);
EditProfile = reduxForm({
  validate,
  form: 'profileForm',
  enableReinitialize: true,
  // make sure dirty fields (those the user has already edited)
  // are not overwritten by reinitialization
  keepDirtyOnReinitialize: true,
  // destroyOnUnmount: false
})(EditProfile);
EditProfile = connect(mapStateToProps, { getKarma, getProfile, updateProfile })(withStyles(styles)(EditProfile));
// connect(mapStateToProps, mapDispatchToProps )(EditProfile)

export default EditProfile;
//proptypes
