import { FC } from "react";
import { Auth, Logo } from "@/widgets";

const LayoutHeader: FC = () => {
  return (
    <>
      <header className="flex items-center justify-between bg-black p-8">
        <Logo logoName={"LM"} />
        <Auth />
      </header>
    </>
  );
};

export default LayoutHeader;
