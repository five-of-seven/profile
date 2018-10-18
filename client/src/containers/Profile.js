import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { Grid, Paper, Button } from '@material-ui/core';
import { getKarma, getProfile } from '../actions/index';
import '../styles/style.css';

// import axios from 'axios';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // userId: this.props.userId || this.props.location.search.slice(8),
      userId: this.props.userId || this.props.location.search.slice(8)  || this.props.location.pathname.slice(9),
    };
  }

  componentDidMount() {
    console.log('LOCATION IN PROFILE:', this.props.location);
    console.log('USERID IN PROFILE:', this.state.userId);
    console.log('USERID:', this.state.userId);
    this.props.getKarma(this.state.userId);
    this.props.getProfile(this.state.userId);
    console.log('PROPS:', this.props);
  }

  render() {
    // const { firstName, lastName, email, street, city, zipCode } = this.props.userProfile;
    console.log('PROPS INSIDE RENDER:', this.props);
    return (
      <div>
      <Grid>
    <Button variant="contained" color="secondary"> <Link to={`/editprofile/${this.state.userId}`} params={{ userId: this.state.userId }}>Edit Profile</Link> </Button>
        <h2>Profile</h2>
        <div className="main">
        <Paper elevation="4">
        <ul>
            <li>
              <span>Karma Points: </span>
              {this.props.karma}
            </li> 
            <li>
            <span>First Name: </span>
              {this.props.firstName}
            </li>
            <li>
            <span>Last Name: </span>
              {this.props.lastName}
            </li>
            <li>
            <div className="float-left">Email: </div>
            <div className="float-left">  {this.props.email} </div>
            </li>
            <li>
            <span>Street: </span>
              {this.props.street}
            </li>
            <li>
            <span>City: </span>
              {this.props.city}
            </li>
            <li>
            <span>State: </span>
              {this.props.userState}
            </li>
            <li>
            <span>Zip Code: </span> 
              {this.props.zipCode}
            </li>
        </ul>
        </Paper>
        </div>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('STATE:', state);
  return {
    userId: state.userProfile.userId,
    firstName: state.userProfile.firstName,
    lastName: state.userProfile.lastName,
    email: state.userProfile.email,
    street: state.userProfile.street,
    city: state.userProfile.city,
    userState: state.userProfile.userState,
    zipCode: state.userProfile.zipCode,
    karma: state.karma,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getProfile, getKarma }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Profile);

// export default connect (null, {getProfile})(Profile);

// export default Profile;

//proptypes





