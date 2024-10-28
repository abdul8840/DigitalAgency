// AdminPanel.js
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Button, Modal } from 'flowbite-react';

const AdminPanel = () => {
    const [contacts, setContacts] = useState([]);
    const { currentUser } = useSelector((state) => state.user);
    const [showModal, setShowModal] = useState(false);
    const [contactIdToDelete, setContactIdToDelete] = useState('')

    const handleDeleteContact = async () => {
        setShowModal(false);
        try {
            const res = await fetch(
                `/api/form/deletecontact/${contactIdToDelete}/${currentUser._id}`,
                {
                    method: 'DELETE',
                }
            );
            const data = await res.json();
            if (!res.ok) {
                console.log(data.message);
            } else {
                setContacts((prev) =>
                    prev.filter((contact) => contact._id !== contactIdToDelete)
                );
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await fetch(`api/form/getcontact?userId=${currentUser._id}`); // Adjust URL if necessary
                if (response.ok) {
                    const data = await response.json();
                    setContacts(data);
                } else {
                    console.error('Failed to fetch contacts');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };
        if (currentUser.isAdmin) {
            fetchContacts();
        }
    }, [currentUser._id]);

    return (
        <div className="admin-panel p-5">
            <h2 className="text-2xl font-bold mb-4">Contact Submissions</h2>
            <div className="overflow-x-auto w-full">
                <table className="table-auto w-full border border-gray-300">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border">Name</th>
                            <th className="px-4 py-2 border">Email</th>
                            <th className="px-4 py-2 border">Phone</th>
                            <th className="px-4 py-2 border">Company</th>
                            <th className="px-4 py-2 border">Services</th>
                            <th className="px-4 py-2 border">Message</th>
                            <th className="px-4 py-2 border">Date Submitted</th>
                            <th className="px-4 py-2 border">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((contact) => (
                            <tr key={contact._id}>
                                <td className="px-4 py-2 border">
                                    {new Date(contact.createdAt).toLocaleString()}
                                </td>
                                <td className="px-4 py-2 border">{contact.name}</td>
                                <td className="px-4 py-2 border">{contact.email}</td>
                                <td className="px-4 py-2 border">{contact.phone}</td>
                                <td className="px-4 py-2 border">{contact.company}</td>
                                <td className="px-4 py-2 border">{contact.services.join(', ')}</td>
                                <td className="px-4 py-2 border">{contact.message}</td>
                                <td className='px-4 py-2 border'>
                                    <span
                                        onClick={() => {
                                            setShowModal(true);
                                            setContactIdToDelete(contact._id);
                                        }}
                                        className='font-medium text-red-500 hover:underline cursor-pointer'
                                    >
                                        Delete
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        popup
        size="md"
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto" />
            <h3 className="mb-5 text-lg text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this Contact
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={handleDeleteContact}>
                Yes, I'm sure
              </Button>
              <Button color="gray" onClick={() => setShowModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
        </div>
    );
};

export default AdminPanel;
