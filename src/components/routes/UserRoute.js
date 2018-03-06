import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Route,Redirect} from "react-router-dom";

const UserRoute = ({isAuthenticated, component: Component, ...rest}) => (
    <Route
        {...rest}
        render={ props =>
            isAuthenticated ? <Component {...props}/>: <Redirect to="/login"/>
        }
    />
);

UserRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.user.access_token
});

export default connect(mapStateToProps)(UserRoute);