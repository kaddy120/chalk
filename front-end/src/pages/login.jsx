const Login = () => {
  const handleLogin = async (e) => {
    // e.preventDefault();
    console.log('login...');

    const url = 'http://localhost:3000/auth/github';
    fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
    })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };
  const handleLogout = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1>Login</h1>
      <div>
        <label htmlFor='gitHub'>
          GitHub  
          <a id='gitHub' href="https://github.com/login/oauth/authorize?scope=user:email&client_id=4544762620983c1aad5c">
            Login with GitHub
          </a>
        </label>
        <label htmlFor='gitHub'>
          Logout
          <a id='gitHub' href="http://localhost:3000/auth/logout">
            Logout
          </a>
        </label>
      </div>
    </div>
  );
};

export default Login;
