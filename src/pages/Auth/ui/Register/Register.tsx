const Auth = () => {
  console.log("Register");
};

const Register = () => {
  return (
    <>
      <div>
        <img />
        <div>
          <button onClick={Auth}>register</button>
          <div>
            <input type="text" placeholder="name" />
            <input type="text" placeholder="login" />
            <input type="password" placeholder="password" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
