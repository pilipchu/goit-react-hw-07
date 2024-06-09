import css from "./Loading.module.css";
import { MagnifyingGlass } from "react-loader-spinner";
export default function Loading() {
  return (
    <div className={css.box}>
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
}
