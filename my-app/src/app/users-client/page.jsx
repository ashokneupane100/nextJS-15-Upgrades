"use client";
import { useState, useEffect } from 'react';

export default function UsersClient() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");

                if (!response.ok) {
                    throw new Error("Failed to fetch users");
                }

                const data = await response.json();
                setUsers(data);
            } catch (err) {
                setError(`Failed to fetch users: ${err.message}`);
            } finally {
                setLoading(false);
            }
        }

        fetchUsers();
    }, []); // Run effect only once on mount

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p className="text-red-500">{error}</p>;
    }

    return (
        <ul className='space-y-4 p-4'>
            {users.map((user) => (
                <li key={user.id} className='p-4 bg-white shadow-md rounded-lg text-gray-700'>
                    {user.name} ({user.email})
                </li>
            ))}
        </ul>
    );
}