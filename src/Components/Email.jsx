import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Email = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (!name.trim() || name.length < 3) {
      newErrors.name = "Name must be at least 3 characters.";
    }

    if (!mobile || mobile.length < 8) {
      newErrors.mobile = "Enter a valid mobile number.";
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email address.";
    }

    if (!message.trim() || message.length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    const serviceId = "service_f2xcxmg";
    const templateId = "template_tj4rwvv";
    const publicKey = "a_n9xYFQ483odiPng";

    const templateParams = {
      from_name: name,
      from_email: email,
      from_mobile: mobile,
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email Sent Successfully:", response);
        setSuccess("Message sent successfully ✅,We response Soon!");
        setName("");
        setMobile("");
        setEmail("");
        setMessage("");
        setErrors({});
      })
      .catch((error) => {
        console.error("Error Sending Email:", error);
        setSuccess("Failed to send message. ❌");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6 max-w-lg mx-auto">
      <div>
        <input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full ${
            errors.name ? "border-red-500" : ""
          }`}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>

      <div>
        <PhoneInput
          country={"in"}
          value={mobile}
          onChange={(phone) => setMobile(phone)}
          inputClass="!w-full !border-gray-300 !rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
      </div>

      <div>
        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full ${
            errors.email ? "border-red-500" : ""
          }`}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      <div>
        <textarea
          cols="30"
          rows="5"
          placeholder="Enter Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full ${
            errors.message ? "border-red-500" : ""
          }`}
        ></textarea>
        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-500 transition duration-300 disabled:bg-gray-400"
      >
        {loading ? "Sending..." : "Send Email"}
      </button>

      {success && <p className="text-center font-semibold mt-2">{success}</p>}
    </form>
  );
};

export default Email;
