import { useAppSelector, useAppDispatch } from "@/app/hooks";
import { setUser } from "../../AuthSlice";

const Login = () => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const user = useAppSelector((state) => state.auth.user);
  const loading = useAppSelector((state) => state.auth.loading);
  const error = useAppSelector((state) => state.auth.error);
  const dispatch = useAppDispatch();

  const Auth = () => {
    dispatch(setUser([{ name: "admin", login: "admin", password: "admin" }]));
    console.log("Auth" + isAuthenticated + "n/ user:" + user);
    console.log("Loading" + loading);
  };

  return (
    <>
      <div className="flex items-center gap-x-24">
        <img src="/images/login.webp" />
        <div className="flex w-[350px] flex-col items-start">
          <button
            className="mb-5 text-4xl font-black leading-none text-white"
            onClick={Auth}
          >
            login
          </button>
          <div className="flex w-[350px] flex-col gap-y-3">
            <input className="input" type="text" placeholder="login" />
            <input className="input" type="password" placeholder="password" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
