import { Link } from "react-router-dom";

const Auth = () => {
  return (
    <>
      <div className="flex items-center gap-x-2 text-4xl font-black text-white">
        <Link to="/auth">login</Link>
        <span>/</span>
        <Link to="/auth">register</Link>
      </div>
    </>
  );
};

export default Auth;
