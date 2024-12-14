import { FaArrowLeft } from "react-icons/fa";


const TitleHeader = () => {
  return (
    <div className='  p-6'>
      {/* Back button */}
      <div className='flex'>
        <FaArrowLeft className='mr-2' />
        <span>Back</span>
      </div>

      {/* Heading */}
      <h1 className='text-4xl font-bold mt-6'>Career At </h1>
      <h1 className='text-4xl font-bold my-6 ml-12'>Eagle 3D Streaming </h1>
    </div>
  );
};

export default TitleHeader;
