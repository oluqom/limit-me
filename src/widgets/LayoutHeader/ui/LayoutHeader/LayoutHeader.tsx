import { FC } from "react";
import { Auth, Logo } from "@/widgets";

const LayoutHeader: FC = () => {
  return (
    <>
      <header className="p-8 flex items-center justify-between bg-black">
        <Logo logoName={"LM"} />
        <Auth />
      </header>
    </>
  );
};

export default LayoutHeader;
