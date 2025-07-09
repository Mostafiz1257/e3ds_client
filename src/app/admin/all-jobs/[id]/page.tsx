"use client";

import React, { useState, useEffect, use } from "react";
import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Select, SelectItem } from "@nextui-org/select";
import { toast } from "sonner";

import { useUpdateJobPostMutation } from "@/src/redux/features/admin/jobApi";
interface Params {
  id: string;
}
interface Props {
  params: Promise<Params>;
}

const Page = ({ params }: Props) => {
  const resolvedParams = use(params);
  const { id } = resolvedParams;
  const [updateJobPost] = useUpdateJobPostMutation();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    requirements: [""],
    location: "",
    salaryRange: "",
    jobType: "Full-Time",
    postedBy: "64a76b8fe8798c0012345678",
  });

  useEffect(() => {
    const fetchJobPost = async () => {
      const response = await fetch(`/api/job/${id}`);
      const data = await response.json();

      setFormData(data);
    };

    fetchJobPost();
  }, [id]);

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
      const result = await updateJobPost({ updateData: formData, Id: id });

      if (result?.data?.success) {
        toast.success("Job updated successfully!");
      } else {
        toast.error("Failed to update the job. Please try again.");
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div className='p-6 max-w-4xl mx-auto '>
      <form className='space-y-6' onSubmit={handleSubmit}>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='w-full'>
            <Input
              required
              className='input-field w-full'
              label='Job Title'
              name='title'
              placeholder='Enter job title'
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className='w-full'>
            <Input
              required
              className='input-field w-full'
              label='Location'
              name='location'
              placeholder='Enter job location'
              value={formData.location}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='w-full'>
            <Input
              required
              className='input-field w-full'
              label='Salary Range'
              name='salaryRange'
              placeholder='Enter salary range'
              value={formData.salaryRange}
              onChange={handleChange}
            />
          </div>
          <div className='w-full'>
            <Select
              className='input-field w-full'
              label='Job Type'
              placeholder='Select job type'
              selectedKeys={new Set([formData.jobType])}
              onSelectionChange={(keys) => {
                const selectedKey = Array.from(keys)[0] as string;

                handleSelectChange(selectedKey);
              }}
            >
              <SelectItem key='Full-Time'>Full-Time</SelectItem>
              <SelectItem key='Part-Time'>Part-Time</SelectItem>
              <SelectItem key='Contract'>Contract</SelectItem>
              <SelectItem key='Internship'>Internship</SelectItem>
            </Select>
          </div>
        </div>

        <Textarea
          required
          className='input-field w-full'
          label='Description'
          name='description'
          placeholder='Enter job description'
          value={formData.description}
          onChange={handleChange}
        />

        <div>
          <label className='block text-sm font-medium' htmlFor='requirements'>
            Requirements
          </label>
          {formData.requirements.map((requirement, index) => (
            <div key={index} className='flex items-center space-x-3 mb-4'>
              <Input
                required
                className='input-field flex-grow'
                id={`requirement-${index}`}
                name={`requirement-${index}`}
                placeholder={`Requirement ${index + 1}`}
                value={requirement}
                onChange={(e) => handleRequirementChange(index, e.target.value)}
              />
              <Button
                className='text-sm rounded-full'
                color='danger'
                size='sm'
                type='button'
                onClick={() => removeRequirement(index)}
              >
                Remove
              </Button>
            </div>
          ))}
          <Button
            className='mt-2 rounded-full'
            color='primary'
            size='sm'
            type='button'
            onClick={addRequirement}
          >
            Add
          </Button>
        </div>
        <div className='flex justify-end'>
          <Button className='rounded-full w-1/4 ' color='primary' type='submit'>
            Update Job
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Page;
