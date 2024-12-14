import { Input, Textarea } from "@nextui-org/input";

const Contract = () => {
  return (
    <div className="max-w-4xl mx-auto p-6  shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-8">Contract Form</h2>

      <div className="space-y-6">
        {/* Name Input */}
        <Input
          label="Name"
          type="text"
          className="w-full"
          aria-label="Name"
        />

        {/* Email Input */}
        <Input
          label="Email"
          type="email"
          className="w-full"
          aria-label="Email"
        />

        {/* Website Input */}
        <Input
          label="Website"
          type="url"
          className="w-full"
          aria-label="Website"
        />

        {/* Reason Textarea */}
        <Textarea
          label="Reason"
          placeholder="Enter your reason"
          className="w-full"
          rows={6}
        />

        {/* Submit Button */}
        <div className="flex justify-center">
        <button className="px-4 py-2 bg-blue-600 rounded-3xl hover:bg-blue-700 transition duration-300">
         Submit Now
        </button>
        </div>
      </div>
    </div>
  );
};

export default Contract;
