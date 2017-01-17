import React from 'react';

import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

import Button from 'react-uikit-button';
import Form from 'react-uikit-form';
import FormInput from 'react-uikit-form/lib/form-input';
import Grid from 'react-uikit-grid';
import Nav from 'react-uikit-nav';
import NavItem from 'react-uikit-nav/lib/nav-item';
import Panel from 'react-uikit-panel';
import Text from 'react-uikit-text';


class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '' };

        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChangeUsername(event) {
        this.setState({ username: event.target.value });
        console.log(this.state);
    }
    handleChangePassword(event) {
        this.setState({ password: event.target.value });
    }
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.username + "and " + this.state.password);
        event.preventDefault();
    }
    
    render() {
        return (
            <div>
                <nav className="uk-navbar-container uk-margin" >
                    <div className="uk-navbar-left">
                        <a className="uk-navbar-item uk-logo" href="#">RBC RISK API Viewer</a>
                    </div>
                </nav>
                <Grid >
                    <Panel col='7-10' box>
                        Col
                    </Panel>
                    <Panel col='3-10' box>
                        <Form layout="stacked" onSubmit={this.handleSubmit}>
                            <Text heading='h2'>Login</Text>
                            <FormInput
                                label='Username'
                                placeholder='Username'
                                value={this.state.username} onChange={this.handleChangeUsername} required
                                />

                            <FormInput
                                type='password'
                                label='Password'
                                placeholder='Password'
                                value={this.state.password} onChange={this.handleChangePassword} required
                                />
                            <Button type="submit" >Login</Button>
                        </Form>
                    </Panel>

                </Grid>
                <Grid indent>
                    <Panel col='7-10' margin='bottom' title='Protect Your Information' link='#' hover>
                        <p>
                            RBC Capital Markets has strong measures in place to ensure the security of your transactions and the confidentiality of your information.
                            It is also important that you take the necessary measures to ensure the security of your information, when you log on to any secure website or Internet service;
                            Use unique passwords that combine 8 or more letters, numbers and special characters.
                            Avoid obvious passwords, like your name, names of family members, your address, or any other information that a thief might find in your purse or wallet.
                            Use a different and unique password for each of your applications or Internet services.
                            Change your password frequently
                            If your login IDs or passwords automatically appear in the sign-in page of a secure website, you should disable the auto complete function.
                            Do not leave an unattended application or Internet service open on your computer. Be sure to lock down your screen or computer every time you leave
                            your desk.
                            When you are finished conducting online transactions, always properly log-off and close your browser.
                            For more safe computing practices please visit the RBC Financial Group security site at http://www.rbc.com/security/
                        </p>
                    </Panel>
                </Grid>
            </div>
        );
    }
}

LoginComponent.defaultProps = {
};

export default LoginComponent;
