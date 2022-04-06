import { featureObjOne, featureObjTwo } from "./Data";
import First from "./First";
import Memo from "./Memo";
import Second from "./Second";

export const Features = () => {
  return (
    <>
      <First {...featureObjOne} />
      <Second />
      <First {...featureObjTwo} />
      <Memo />
    </>
  );
};
