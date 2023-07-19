import { FC } from "react";
import { Logo } from "@/widgets/LayoutHeader/model/types";
import { Link } from "react-router-dom";

const Logo: FC<Logo> = ({ logoName }: Logo) => {
  return (
    <div className="navbar-start">
      <Link
        className="font-black text-white leading-none uppercase text-4xl"
        to="/"
      >
        {logoName}
      </Link>
    </div>
  );
};

export default Logo;
