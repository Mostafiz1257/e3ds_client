import React from "react";
import jsPDF from "jspdf";

const ApplicantDetails = ({ data }) => {
  const handleDownload = () => {
    // Create a new instance of jsPDF
    const doc = new jsPDF();

    // Add content to the PDF
    doc.setFontSize(18);
    doc.text(`Applicant Details`, 10, 10);

    doc.setFontSize(14);
    doc.text(`Name: ${data?.name}`, 10, 20);
    doc.text(`Applying for: ${data?.jobPost?.title}`, 10, 30);

    doc.setFontSize(12);
    doc.text(`Contact Details:`, 10, 40);
    doc.text(`- Email: ${data?.email}`, 10, 50);
    doc.text(`- Website: ${data?.website}`, 10, 60);
    doc.text(`- LinkedIn: ${data?.linkedin}`, 10, 70);
    doc.text(`- Address: ${data?.address}`, 10, 80);

    doc.text(`Resume:`, 10, 90);
    doc.text(data?.resume, 10, 100, { maxWidth: 180 });

    doc.text(`Job Details:`, 10, 110);
    doc.text(`- Job Title: ${data?.jobPost?.title}`, 10, 120);
    doc.text(`- Job Type: ${data?.jobPost?.jobType}`, 10, 130);
    doc.text(`- Salary Range: ${data?.jobPost?.salaryRange}`, 10, 140);

    doc.text(`Job Requirements:`, 10, 150);
    data?.jobPost?.requirements?.forEach((req, index) => {
      doc.text(`  ${index + 1}. ${req}`, 10, 160 + index * 10);
    });

    doc.text(
      `Application Created: ${new Date(data?.createdAt).toLocaleDateString()}`,
      10,
      180
    );
    doc.text(
      `Last Updated: ${new Date(data?.updatedAt).toLocaleDateString()}`,
      10,
      190
    );

    // Save the PDF
    doc.save(`${data?.name}_application.pdf`);
  };

  return (
    <div className='max-w-4xl mx-auto p-6  shadow-lg rounded-lg border border-gray-200'>
      {/* Applicant's Name */}
      <header className='mb-6 border-b pb-4'>
        <h1 className='text-3xl font-bold '>{data?.name}</h1>
        <p className=''>
          Applying for:{" "}
          <span className='font-medium'>{data?.jobPost?.title}</span>
        </p>
      </header>

      {/* Contact Details */}
      <section className='mb-6'>
        <h2 className='text-xl font-semibold mb-3'>Contact Details</h2>
        <div className='space-y-2'>
          <p>
            <span className='font-medium '>Email:</span> {data?.email}
          </p>
          <p>
            <span className='font-medium '>Website:</span>{" "}
            <a
              href={data?.website}
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-500 hover:underline'
            >
              {data?.website}
            </a>
          </p>
          <p>
            <span className='font-medium '>LinkedIn:</span>{" "}
            <a
              href={data?.linkedin}
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-500 hover:underline'
            >
              {data?.linkedin}
            </a>
          </p>
          <p>
            <span className='font-medium '>Address:</span> {data?.address}
          </p>
        </div>
      </section>

      {/* Resume */}
      <section className='mb-6'>
        <h2 className='text-xl font-semibold  mb-3'>Resume</h2>
        <a
          href={data?.resume}
          target='_blank'
          rel='noopener noreferrer'
          className='inline-block px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700'
        >
          View Resume
        </a>
      </section>

      {/* Job Application Details */}
      <section className='mb-6'>
        <h2 className='text-xl font-semibold  mb-3'>Application Details</h2>
        <div className='space-y-2'>
          <p>
            <span className='font-medium '>Job Title:</span>{" "}
            {data?.jobPost?.title}
          </p>
          <p>
            <span className='font-medium '>Job Type:</span>{" "}
            {data?.jobPost?.jobType}
          </p>
          <p>
            <span className='font-medium '>Salary Range:</span>{" "}
            {data?.jobPost?.salaryRange}
          </p>
        </div>
      </section>

      {/* Requirements */}
      <section className='mb-6'>
        <h2 className='text-xl font-semibold  mb-3'>Job Requirements</h2>
        <ul className='list-disc list-inside space-y-1 '>
          {data?.jobPost?.requirements?.map((requirement, index) => (
            <li key={index} className='pl-2'>
              {requirement}
            </li>
          ))}
        </ul>
      </section>

      {/* Download Button */}
      <div className='flex justify-end'>
        <button
          onClick={handleDownload}
          className='px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700'
        >
          Download as PDF
        </button>
      </div>

      {/* Timestamps */}
      <footer className=' text-sm border-t pt-4 mt-6'>
        <p>
          <span className='font-medium'>Application Created:</span>{" "}
          {new Date(data?.createdAt).toLocaleDateString()}
        </p>
        <p>
          <span className='font-medium'>Last Updated:</span>{" "}
          {new Date(data?.updatedAt).toLocaleDateString()}
        </p>
      </footer>
    </div>
  );
};

export default ApplicantDetails;
