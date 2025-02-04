import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { buttonFont, highlightFont, mainFont } from "@/app/fonts/fonts";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        
        const serviceId = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID as string;
        const templateId = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID as string;
        const publicKey = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY as string;

        try {
            await emailjs.send(serviceId, templateId, formData, publicKey);
            setFormData({ name: "", email: "", subject: "", message: "" });
        } catch (error) {
            console.error("Error sending email:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 md:p-10 lg:p-12 rounded-lg">
            <div className="flex flex-col justify-center items-center w-full text-center">
                <h3
                    className={`${mainFont.className} text-2xl md:text-5xl font-semibold bg-gradient-to-tl from-gray-600 via-gray-200 to-gray-600 bg-clip-text text-transparent`}
                >
                    Drop a <span className={`${highlightFont.className} text-white`}>Message</span>
                </h3>
                <p className="text-sm md:text-lg mt-2">Let&apos;s Connect! 🚀</p>
            </div>

            <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-4 mt-6 text-black">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full sm:w-4/5 lg:w-2/3 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full sm:w-4/5 lg:w-2/3 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full sm:w-4/5 lg:w-2/3 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                    name="message"
                    rows={5}
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full text-black sm:w-4/5 lg:w-2/3 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    disabled={loading}
                    className={`${buttonFont.className} mt-3 w-full sm:w-3/5 lg:w-1/3 bg-neutral-700 text-white p-3 rounded-full hover:bg-neutral-800 transition duration-300`}
                >
                    {loading ? "Sending..." : "Send Message"}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
