import { Login, Register } from "@/features";

const Auth = () => {
  const AuthToggle = false;

  return (
    <>
      <section>
        <div className="container flex h-mainScreen items-center justify-center">
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
