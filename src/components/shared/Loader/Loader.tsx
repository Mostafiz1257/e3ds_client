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
      <Spinner  height={15} width={5} radius={2} color="#003580" />
    </div>
  );
};

export default Loader;
