import React,{Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import Button from "antd/lib/button";
import {logoutRequest} from "../../actions/auth";

class HomePage extends Component{
    render(){
        const {isAuthenticated,logout} = this.props;
        return (
            <div>
                <h3>Homepage</h3>
                { isAuthenticated ? (<Button onClick={()=>logout()} label="Logout"/>) : (<Link to="/login">Login</Link>)}
            </div>
        );
    }
}

const mapStateToProps = (state) =>({
   isAuthenticated: !!state.user.access_token
});

HomePage.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired
};

export default connect(mapStateToProps,{logout: logoutRequest})(HomePage);