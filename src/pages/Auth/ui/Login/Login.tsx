const Auth = () => {
  console.log("Login");
};

const Login = () => {
  return (
    <>
      <div>
        <img />
        <div>
          <button onClick={Auth}>login</button>
          <div>
            <input type="text" placeholder="login" />
            <input type="password" placeholder="password" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
