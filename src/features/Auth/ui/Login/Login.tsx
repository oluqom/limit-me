const Auth = () => {
  console.log("Login");
};

const Login = () => {
  return (
    <>
      <div className="flex items-center gap-x-24">
        <img src="/images/login.webp" />
        <div className="flex w-[350px] flex-col items-start">
          <button
            className="mb-5 text-white font-black text-4xl leading-none"
            onClick={Auth}
          >
            login
          </button>
          <div className="flex flex-col w-[350px] gap-y-3">
            <input className="input" type="text" placeholder="login" />
            <input className="input" type="password" placeholder="password" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
