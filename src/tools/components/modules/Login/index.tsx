import { Component, ChangeEvent, FormEvent } from 'react';

interface Props {}

interface State {
  credentials: LoginCredentials;
  isLoginLoading: boolean;
  validated: boolean;
}

interface LoginCredentials {
  email: string;
  password: string;
}

class Login extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isLoginLoading: false,
      credentials: {
        email: '',
        password: '',
      },
      validated: false,
    };
  }

  handleCredentialsChange = (e: ChangeEvent<HTMLInputElement>) => {
    let { credentials } = this.state;
    credentials[e.target.name] = e.target.value;

    this.setState({ credentials });
  };

  handleLoginSubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    this.setState({ isLoginLoading: true });

    setTimeout(() => {
      this.setState({ isLoginLoading: false });
    }, 500);
  };

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    // console.log('Submit event!');
    e.preventDefault();
    console.log(
      // 'TCL: Login -> handleSubmit -> e.currentTarget.checkValidity()',
      e.currentTarget.checkValidity()
    );
    if (e.currentTarget.checkValidity()) {
      this.setState({ validated: true });
    }
  };

  render() {
    const { credentials } = this.state;

    return (
      <div id="login-wrapper">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            id="formEmail"
            name="email"
            type="email"
            value={credentials.email}
            onChange={this.handleCredentialsChange}
            required
          />
          <input
            name="password"
            type="password"
            value={credentials.password}
            onChange={this.handleCredentialsChange}
            required
          />

          <button id="loginSubmit" onClick={this.handleLoginSubmit}>
            {this.state.isLoginLoading ? 'Logging in...' : 'Log in'}
          </button>
        </form>
        <div>
          <ul>
            <li>{this.state.validated ? 'Form validated' : 'Form not validated'}</li>
            <li>{this.state.isLoginLoading ? 'Loading' : 'Not loading'}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Login;
