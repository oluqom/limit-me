import { Link } from "react-router-dom";

const Auth = () => {
  return (
    <>
      <div className="flex text-4xl text-white font-black gap-x-2 items-center">
        <Link to="/auth">login</Link>
        <span>/</span>
        <Link to="/auth">register</Link>
      </div>
    </>
  );
};

export default Auth;
