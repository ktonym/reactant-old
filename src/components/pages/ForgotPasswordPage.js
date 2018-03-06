import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {resetPassRequest} from "../../actions/auth";
import ForgotPasswordForm from "../forms/ForgotPasswordForm";
import Snackbar from "material-ui/Snackbar";

class ForgotPasswordPage extends React.Component{

    state = {
        success: false,
        errors: null
    };

    componentWillReceiveProps(nextProps){
        this.setState({success: nextProps.success, errors: nextProps.errors})
    }

    onSubmit = email => this.props.resetPassReq(email);
    render(){
        const {success,errors} = this.state;
        return(
            <div style={{position: 'relative'}}>
                { success ? <Snackbar
                    open={success}
                    message="Check your mailbox for instructions to reset your password."
                    autoHideDuration={6000}
                    //onRequestClose={this.handleRequestClose}
                /> :
                    <ForgotPasswordForm style={{marginLeft: '50%'}} submit={this.onSubmit}/>
                }
            </div>
        );
    }

}

const mapStateToProps = (state) => ({
    errors: state.user.errors,
    success: state.user.resetSent
});

const mapDispatchToProps = (dispatch) => ({
    resetPassReq: (email) => dispatch(resetPassRequest(email))
});

ForgotPasswordPage.propTypes = {
    resetPassReq: PropTypes.func.isRequired
};

export default connect(mapStateToProps,mapDispatchToProps)(ForgotPasswordPage);