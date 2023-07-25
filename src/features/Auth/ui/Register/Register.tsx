const Auth = () => {
  console.log("Register");
};

const Register = () => {
  return (
    <>
      <div className="flex items-center gap-x-24">
        <img src="/images/register.webp" />
        <div>
          <button
            className="mb-5 text-4xl font-black text-white"
            onClick={Auth}
          >
            register
          </button>
          <div className="flex flex-col gap-y-3">
            <input className="input" type="text" placeholder="name" />
            <input className="input" type="text" placeholder="login" />
            <input className="input" type="password" placeholder="password" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
