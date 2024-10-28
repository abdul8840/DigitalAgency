import { Alert, Button, Label, Spinner, Textarea, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { TbWorldSearch } from "react-icons/tb";
import { RiAdvertisementFill } from "react-icons/ri";
import { MdMarkEmailUnread } from "react-icons/md";
import { MdGroups } from "react-icons/md";

const servicesList = [
    { name: "Web Design", icon: <HiOutlineDesktopComputer className="max-w-full mx-auto text-4xl" /> },
    { name: "Search Engine Optimization", icon: <TbWorldSearch className="max-w-full mx-auto text-4xl" /> },
    { name: "Pay Per Click Advertising", icon: <RiAdvertisementFill className="max-w-full mx-auto text-4xl" /> },
    { name: "Email & SMS Marketing", icon: <MdMarkEmailUnread className="max-w-full mx-auto text-4xl" /> },
    { name: "Social Media Marketing", icon: <MdGroups className="max-w-full mx-auto text-4xl" /> }
];

const ContactForm = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        services: [],
        message: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            if (checked) {
                setFormData((prevData) => ({
                    ...prevData,
                    services: [...prevData.services, value]
                }));
            } else {
                setFormData((prevData) => ({
                    ...prevData,
                    services: prevData.services.filter(service => service !== value)
                }));
            }
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            setError(null);
            const response = await fetch('api/form/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    company: '',
                    services: [],
                    message: ''
                });
            } else {
                throw new Error('Failed to submit the form.');
            }
        } catch (error) {
            console.error(error);
            alert('There was an error submitting your information.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mt-10 max-w-[800px] mx-auto p-3">
            <h2 className='text-4xl font-bold mb-10 text-center'>Contact Us</h2>
            <form onSubmit={handleSubmit} className="contact-form flex flex-col gap-5">
                <div>
                    <Label value="Your Name" />
                    <TextInput
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required={true}
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <Label value="Your Email" />
                    <TextInput
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required={true}
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <Label value="Your Phone" />
                    <TextInput
                        type="tel"
                        name="phone"
                        placeholder="Your Phone"
                        required={true}
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <Label value="Your Company" />
                    <TextInput
                        type="text"
                        name="company"
                        placeholder="Your Company"
                        required={true}
                        value={formData.company}
                        onChange={handleChange}
                    />
                </div>

                <h3>Select Services:</h3>
                <div className="flex gap-4 flex-wrap justify-center">
                    {servicesList.map((service) => (
                        <label>
                        <div key={service.name} className="w-[130px] h-[180px] border-2 border-gray-200 rounded-xl p-3 gap-5 flex flex-col items-center hover:shadow-lg">
                            
                                <input
                                    type="checkbox"
                                    value={service.name}
                                    checked={formData.services.includes(service.name)}
                                    onChange={handleChange}
                                />
                                <div className=" flex flex-col gap-2">
                                    <div className="text-purple-500">{service.icon}</div>
                                    <span className="ml-2 text-md text-center font-semibold">{service.name}</span>
                                </div>
                            
                        </div>
                        </label>
                    ))}
                </div>

                <div>
                    <Label value="Your Message" />
                    <Textarea
                        type="text"
                        name="message"
                        placeholder="Your Message"
                        required={true}
                        value={formData.message}
                        onChange={handleChange}
                    />
                </div>

                <Button
                    className="w-full mt-5"
                    gradientDuoTone="pinkToOrange"
                    type="submit"
                    disabled={loading}
                >
                    {loading ? (
                        <>
                            <Spinner size='sm' />
                            <span className="pl-3">Loading...</span>
                        </>
                    ) : "Submit"}
                </Button>
            </form>
            {
            error && (
              <Alert className="mt-5" color='failure'>{error}</Alert>
            )
          }
        </div>
    );
};

export default ContactForm;
