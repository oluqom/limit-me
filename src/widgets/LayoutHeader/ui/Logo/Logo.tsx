import { FC } from "react";
import { Logo } from "@/widgets/LayoutHeader/model/types";
import { Link } from "react-router-dom";

const Logo: FC<Logo> = ({ logoName }: Logo) => {
  return (
    <div className="navbar-start">
      <Link
        className="text-4xl font-black uppercase leading-none text-white"
        to="/"
      >
        {logoName}
      </Link>
    </div>
  );
};

export default Logo;
