import React, { useEffect, useState } from 'react';
import Card from './Card/Card';
import { getUsers } from './data/usersList';

const UserList = () => {
  const [cards, setCards] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // To handle loading state
  const [error, setError] = useState(null); // To handle errors

  const page = 'users'; // Adjusted to a fixed page or dynamic based on requirements
  const buttonText = 'View More';

  // Map users to card data format
  const mapUsersToCards = (users) => {
    return users.map((user) => ({
      name: user.username,
      extraDetail: `${user.email} - ${user.website}`,
      image:  '', // Assuming 'picture' is the correct field for user image
    }));
  };

  // Fetch users data and update state
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers();
        setUsers(response.data);
        setCards(mapUsersToCards(response.data));
      } catch (error) {
        setError(error);
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container">
      <Card cards={cards} page={page} buttonText={buttonText} />
    </div>
  );
};

export default UserList;
