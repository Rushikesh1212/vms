import * as React from 'react';
import LoginLogo from './LoginLogo';
import LoginBody from './LoginBody';
export interface LoginPageComponent extends React.StatelessComponent<{}> {
    Logo: typeof LoginLogo;
    Body: typeof LoginBody;
}
declare const LoginPage: LoginPageComponent;
export default LoginPage;
