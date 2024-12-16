import { Spinner } from "@nextui-org/spinner";

const Loader = () => {
  return (
    <div
      className="
      h-[70vh]
      flex 
      flex-col 
      justify-center 
      items-center 
    "
    >
      <Spinner color={"primary"} />
    </div>
  );
};

export default Loader;
