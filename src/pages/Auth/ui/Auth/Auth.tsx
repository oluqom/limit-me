import Login from "../Login/Login";
import Register from "../Register/Register";

const Auth = () => {
  const AuthToggle = true;

  return (
    <>
      <section>
        <div className="container flex items-center justify-center h-mainScreen">
          {AuthToggle ? (
            <>
              <Login />
            </>
          ) : (
            <>
              <Register />
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Auth;
