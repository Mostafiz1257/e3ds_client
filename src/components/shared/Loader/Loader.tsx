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
      <Spinner color="#003580" height={15} radius={2} width={5} />
    </div>
  );
};

export default Loader;
