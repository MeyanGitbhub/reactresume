import { useState } from "react";
import { Link } from "react-router";


export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    const { name, value } = event.target;

    setFormData(previous => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('form submitted: ', formData);
    setSubmitted(true);

    setFormData({ name: '', email: '', phone: '' });
    //send data to backend
  };

  return (
    <div className="flex flex-col items-center justify-center pt-16 pb-4 gap-8">
      <div className="flex flex-col items-center gap-4">
        <p className="leading-6 text-gray-700 dark:text-gray-200 text-center text-xl font-semibold">
          Contact Me
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm text-center">
          Email: wright.brentonj@gmail.com
        </p>
        <Link to="/">Back to Resume</Link>

      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md space-y-4 w-full max-w-md"
      >
        <div>
          <label className="block mb-1 text-gray-700 dark:text-gray-300">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2 dark:bg-gray-900 dark:text-white"
          />
        </div>
        <div>
          <label className="block mb-1 text-gray-700 dark:text-gray-300">Email Address:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2 dark:bg-gray-900 dark:text-white"
          />
        </div>
        <div>
          <label className="block mb-1 text-gray-700 dark:text-gray-300">Phone Number:</label>
          <input
            type="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2 dark:bg-gray-900 dark:text-white"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

