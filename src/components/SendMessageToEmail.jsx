import { useState } from "react";
import { toast } from "sonner";

function SendMessageToEmail() {
  const [formData, setFormData] = useState({
    userName: "",
    companyName: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const BOT_TOKEN = "8609904626:AAGGjaKL2jvi1QZlvjMQDGc0GLL7Iyd-z1M";
  const CHAT_ID = "1384563291";

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validateForm = () => {
    if (!formData.userName.trim()) {
      toast.error("Name kiriting ❌");
      return false;
    }

    if (!formData.companyName.trim()) {
      toast.error("Company name kiriting ❌");
      return false;
    }

    if (!formData.email.trim()) {
      toast.error("Email kiriting ❌");
      return false;
    }

    if (!formData.message.trim()) {
      toast.error("Message yozing ❌");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    const text = `
📩 <b>New Contact Form</b>

👤 <b>Name:</b> ${formData.userName}
🏢 <b>Company:</b> ${formData.companyName}
📧 <b>Email:</b> ${formData.email}

💬 <b>Message:</b>
${formData.message}
`;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: text,
            parse_mode: "HTML",
          }),
        },
      );

      if (!response.ok) throw new Error();

      toast.success("Xabar yuborildi ✅");

      setFormData({
        userName: "",
        companyName: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast.error("Xabar yuborilmadi ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full px-14">
      <form
        onSubmit={handleSubmit}
        className="w-full text-black flex flex-col gap-4 bg-gray-900 p-6 rounded-2xl shadow-xl"
      >
        <div className="flex flex-col gap-2 items-start w-full">
          <label className="text-white font-medium">Name :</label>
          <input
            className="w-full px-5 py-3 rounded-xl text-md font-semibold focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-800 text-white placeholder-gray-400 transition-all"
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            placeholder="Enter your Name"
          />
        </div>

        <div className="flex flex-col gap-2 items-start w-full">
          <label className="text-white font-medium">Company Name :</label>
          <input
            className="w-full px-5 py-3 rounded-xl text-md font-semibold focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-800 text-white placeholder-gray-400 transition-all"
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Enter your Company Name"
          />
        </div>

        <div className="flex flex-col gap-2 items-start w-full">
          <label className="text-white font-medium">Email Address :</label>
          <input
            className="w-full px-5 py-3 rounded-xl text-md font-semibold focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-800 text-white placeholder-gray-400 transition-all"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your Email"
          />
        </div>

        <div className="flex flex-col gap-2 items-start w-full">
          <label className="text-white font-medium">Message :</label>
          <textarea
            className="w-full px-5 py-3 rounded-xl text-md font-semibold focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-800 text-white placeholder-gray-400 transition-all resize-none"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write me your opinion"
            rows={5}
          />
        </div>

        <button
          disabled={loading}
          className="ml-auto px-10 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg shadow-purple-400/50 hover:scale-105 active:scale-95 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
}

export default SendMessageToEmail;
