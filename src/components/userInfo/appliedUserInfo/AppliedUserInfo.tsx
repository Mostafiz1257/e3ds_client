import { useState } from "react";
import { Input } from "@nextui-org/input";
import { toast } from "sonner";

import { useCreateApplicationMutation } from "@/src/redux/features/admin/applicationApi";

const AppliedUserInfo = ({ id }: { id: string }) => {
  const [createApplication] = useCreateApplicationMutation();
  const [loading, setLoading] = useState(false); // State for loading
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
    setLoading(true); // Start loading
    try {
      const result = await createApplication(formData);

      if (result?.data?.success) {
        toast.success("Thank you for your Application!");
        setFormData({
          name: "",
          email: "",
          website: "",
          linkedin: "",
          address: "",
          resume: "",
          jobPost: id,
        }); // Clear form
      } else {
        toast.error("Failed to submit. Please try again.");
      }
    } catch (error) {
      toast.error("Something is wrong");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <form
      className="max-w-4xl mx-auto p-6 shadow-lg rounded-lg"
      onSubmit={handleSubmit}
    >
      <h1 className="text-3xl font-bold text-blue-600">Apply Here</h1>
      <p className="mt-2">Use the form below to submit your job application</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          required
          className="w-full"
          label="Name"
          labelPlacement="outside"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
        />
        <Input
          required
          className="w-full"
          label="Email"
          labelPlacement="outside"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          required
          className="w-full"
          label="Website"
          labelPlacement="outside"
          name="website"
          type="url"
          value={formData.website}
          onChange={handleChange}
        />
        <Input
          required
          className="w-full"
          label="LinkedIn"
          labelPlacement="outside"
          name="linkedin"
          type="url"
          value={formData.linkedin}
          onChange={handleChange}
        />
        <Input
          required
          className="w-full"
          label="Address"
          labelPlacement="outside"
          name="address"
          type="text"
          value={formData.address}
          onChange={handleChange}
        />
        <Input
          required
          className="w-full"
          label="Resume"
          labelPlacement="outside"
          name="resume"
          type="url"
          value={formData.resume}
          onChange={handleChange}
        />
      </div>

      <button
        className={`mt-6 w-full md:w-auto py-2 px-4 rounded-full transition duration-200 ${
          loading
            ? "bg-gray-500 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700 text-white"
        }`}
        disabled={loading}
        type="submit"
      >
        {loading ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
};

export default AppliedUserInfo;
