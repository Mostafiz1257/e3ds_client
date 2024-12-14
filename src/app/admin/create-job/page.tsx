"use client";

import React, { useState } from "react";
import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Select, SelectItem } from "@nextui-org/select";
import { useCreateJobMutation } from "@/src/redux/features/admin/jobApi";
import { toast } from "sonner";

const Page = () => {
  const [createJob] = useCreateJobMutation();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    requirements: [""],
    location: "",
    salaryRange: "",
    jobType: "Full-Time",
    postedBy: "64a76b8fe8798c0012345678",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      jobType: value,
    }));
  };

  const handleRequirementChange = (index: number, value: string) => {
    const updatedRequirements = [...formData.requirements];
    updatedRequirements[index] = value;
    setFormData((prevData) => ({
      ...prevData,
      requirements: updatedRequirements,
    }));
  };

  const addRequirement = () => {
    setFormData((prevData) => ({
      ...prevData,
      requirements: [...prevData.requirements, ""],
    }));
  };

  const removeRequirement = (index: number) => {
    const updatedRequirements = formData.requirements.filter(
      (_, i) => i !== index
    );
    setFormData((prevData) => ({
      ...prevData,
      requirements: updatedRequirements,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const result = await createJob(formData);
      if (result?.data?.success) {
        toast.success("Job posted successfully!");
      } else {
        toast.error("Failed to post the job. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="w-full">
            <Input
              label="Job Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter job title"
              required
              className="input-field w-full"
            />
          </div>
          <div className="w-full">
            <Input
              label="Location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter job location"
              required
              className="input-field w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="w-full">
            <Input
              label="Salary Range"
              name="salaryRange"
              value={formData.salaryRange}
              onChange={handleChange}
              placeholder="Enter salary range"
              required
              className="input-field w-full"
            />
          </div>
          <div className="w-full">
            <Select
              label="Job Type"
              selectedKeys={new Set([formData.jobType])}
              onSelectionChange={(keys) => handleSelectChange([...keys][0])}
              placeholder="Select job type"
              className="input-field w-full"
            >
              <SelectItem key="Full-Time">Full-Time</SelectItem>
              <SelectItem key="Part-Time">Part-Time</SelectItem>
              <SelectItem key="Contract">Contract</SelectItem>
              <SelectItem key="Internship">Internship</SelectItem>
            </Select>
          </div>
        </div>

        <Textarea
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter job description"
          required
          className="input-field w-full"
        />

        <div>
          <label className="block text-sm font-medium">Requirements</label>
          {formData.requirements.map((requirement, index) => (
            <div key={index} className="flex items-center space-x-3 mb-4">
              <Input
                name={`requirement-${index}`}
                value={requirement}
                onChange={(e) => handleRequirementChange(index, e.target.value)}
                placeholder={`Requirement ${index + 1}`}
                required
                className="input-field flex-grow"
              />
              <Button
                type="button"
                color="danger"
                onClick={() => removeRequirement(index)}
                className="text-sm rounded-full"
                size="sm"
              >
                Remove
              </Button>
            </div>
          ))}
          <Button
            type="button"
            color="secondary"
            onClick={addRequirement}
            className="mt-2 rounded-full"
            size="sm"
          >
            Add
          </Button>
        </div>

        <Button type="submit" className="rounded-full w-full" color="primary">
          Publish Now
        </Button>
      </form>
    </div>
  );
};

export default Page;
