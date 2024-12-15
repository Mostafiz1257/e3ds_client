import { Input, Textarea } from "@nextui-org/input";

const Contract = () => {
  return (
    <div className="max-w-4xl mx-auto p-6  shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-8">Contract Form</h2>

      <div className="space-y-6">
        {/* Name Input */}
        <Input aria-label="Name" className="w-full" label="Name" type="text" />

        {/* Email Input */}
        <Input
          aria-label="Email"
          className="w-full"
          label="Email"
          type="email"
        />

        {/* Website Input */}
        <Input
          aria-label="Website"
          className="w-full"
          label="Website"
          type="url"
        />

        {/* Reason Textarea */}
        <Textarea
          className="w-full"
          label="Reason"
          placeholder="Enter your reason"
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
