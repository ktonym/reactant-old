import React, {Component} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import ResetPasswordForm from "../forms/ResetPasswordForm";
import { changePassRequest,validateTokenRequest } from "../../actions/auth";
import ModalDialog from "../dialogs/ModalDialog";

class ResetPasswordPage extends Component{
    state = {
        loading: true,
        success: false,
        message: ''
    };

    submit = (data) => this.props.changePassword(data);

    componentDidMount(){
        this.props.validateToken(this.props.match.params.token);
    }

    componentWillReceiveProps(nextProps){
        this.setState({loading: nextProps.loading, success: nextProps.success, message: nextProps.message})
    }

    render(){
        const { loading, success, message } = this.state;
        const token = this.props.match.params.token;
        return (
            <div>
                { loading && <h1>Validating...</h1> }
                { !loading && success && <ResetPasswordForm submit={this.submit} token={token}/> }
                { !loading && !success && <ModalDialog title="Password Reset Failed" message={"Invalid Token"} open={true}/> }
                { message && <ModalDialog message={message} open={true} />}
            </div>
        );
    }
}

ResetPasswordPage.propTypes = {
    validateToken: PropTypes.func.isRequired,
    changePassword: PropTypes.func.isRequired,
    match: PropTypes.shape({
        params: PropTypes.shape({
            token: PropTypes.string.isRequired
        }).isRequired
    }).isRequired
};

const mapStateToProps = (state) => ({
    loading: !!state.user.validating,
    success: !!state.user.validation,
    globalErrors: !!state.user.errors
});

export default connect(mapStateToProps,{changePassword: changePassRequest,validateToken: validateTokenRequest})(ResetPasswordPage);