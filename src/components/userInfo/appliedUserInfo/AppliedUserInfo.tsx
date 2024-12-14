import { useState } from "react";
import { Input } from "@nextui-org/input";
import { useCreateApplicationMutation } from "@/src/redux/features/admin/applicationApi";
import { toast } from "sonner";

const AppliedUserInfo = ({ id }: { id: string }) => {
  const [createApplication] = useCreateApplicationMutation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    linkedin: "",
    address: "",
    resume: "",
    jobPost: id,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const result = await createApplication(formData);
      if (result?.data?.success) {
        toast.success("Thank you for your Application!");
        
      } else {
        toast.error("Failed to submit. Please try again.");
      }
    } catch (error) {
      toast.error("Something is wrong");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='max-w-4xl mx-auto p-6 shadow-lg rounded-lg'
    >
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <Input
          label='Name'
          labelPlacement='outside'
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
          className='w-full'
          required
        />
        <Input
          label='Email'
          labelPlacement='outside'
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          className='w-full'
          required
        />
        <Input
          label='Website'
          labelPlacement='outside'
          type='url'
          name='website'
          value={formData.website}
          onChange={handleChange}
          className='w-full'
          required
        />
        <Input
          label='LinkedIn'
          labelPlacement='outside'
          type='url'
          name='linkedin'
          value={formData.linkedin}
          onChange={handleChange}
          className='w-full'
          required
        />
        <Input
          label='Address'
          labelPlacement='outside'
          type='text'
          name='address'
          value={formData.address}
          onChange={handleChange}
          className='w-full'
          required
        />
        <Input
          label='Resume'
          labelPlacement='outside'
          type='url'
          name='resume'
          value={formData.resume}
          onChange={handleChange}
          className='w-full'
          required
        />
      </div>

      <button
        type='submit'
        className='mt-6 w-full md:w-auto bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-200'
      >
        Submit Application
      </button>
    </form>
  );
};

export default AppliedUserInfo;
