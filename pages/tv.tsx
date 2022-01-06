import { NextPage } from "next";
import HeaderTitle from "../components/HeaderTitle";
import Seo from "../components/Seo";

const TV: NextPage = () => {
  return (
    <div>
      <Seo title={"TV"} />
      <HeaderTitle title={"TV"} />
    </div>
  );
};

export default TV;
