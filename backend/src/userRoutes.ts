// userRoutes.ts
import express, { Request, Response } from 'express';
import { allUsers } from './userMerger';
import { User } from './models/User';

const router = express.Router();

// Dummy data for demonstration
const usersWithNames: User[] = [];
const usersWithPhoneNumbers: User[] = [];

// GET /users
router.get('/users', (req: Request, res: Response) => {
    const { query, email, phoneNumber } = req.query;

    // Filter users based on query parameters
    let filteredUsers: User[] = [...allUsers];

    if (query && typeof query === 'string') {
        // Simple case-insensitive filter by entire word
        filteredUsers = filteredUsers.filter(user =>
            Object.values(user).some(value => typeof value === 'string' && value.toLowerCase().includes(query.toLowerCase()))
        );
    }

    if (email && typeof email === 'string') {
        filteredUsers = filteredUsers.filter(user => user.email.toLowerCase().includes(email.toLowerCase()));
    }

    if (phoneNumber && typeof phoneNumber === 'string') {
        filteredUsers = filteredUsers.filter(user => user.phoneNumber.toLowerCase().includes(phoneNumber.toLowerCase()));
    }

    res.json(filteredUsers);
});


// GET /users/{id}
router.get('/users/:id', (req: Request, res: Response) => {
    const userId = req.params.id;
    
    // Find the user with the given ID
    const user = allUsers.find((u) => u._id === userId);

    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

// POST /users
router.post('/users', (req: Request, res: Response) => {
    const userData = req.body; // Assuming the request body contains the new user details

    // Validate user data (you can add more validation logic as needed)
    if (!userData.email || !userData.firstName || !userData.lastName || !userData.phoneNumber) {
        return res.status(400).json({ message: 'Invalid user data' });
    }

    // Generate a unique ID
    const newUserId = (allUsers.length + 1).toString();

    // Create a new User object
    const newUser: User = {
        _id: newUserId,
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        phoneNumber: userData.phoneNumber
    };

    // Add the new user to the array
    allUsers.push(newUser);

    res.status(201).json(newUser); // Respond with the created user
});

// PUT /users/{id}
router.put('/users/:id', (req: Request, res: Response) => {
    const userId = req.params.id;
    const updatedUserData: User = req.body; // Assuming the request body contains the updated user details

    // Validate user data (you can add more validation logic as needed)
    if (!updatedUserData.email || !updatedUserData.firstName || !updatedUserData.lastName || !updatedUserData.phoneNumber) {
        return res.status(400).json({ message: 'Invalid user data' });
    }

    // Find the user by ID
    const userToUpdate = allUsers.find(user => user._id === userId);

    // Check if the user exists
    if (!userToUpdate) {
        return res.status(404).json({ message: 'User not found' });
    }

    // Update the user data
    userToUpdate.email = updatedUserData.email;
    userToUpdate.firstName = updatedUserData.firstName;
    userToUpdate.lastName = updatedUserData.lastName;
    userToUpdate.phoneNumber = updatedUserData.phoneNumber;

    res.json(userToUpdate); // Respond with the updated user
});

// DELETE /users/{id}
router.delete('/users/:id', (req: Request, res: Response) => {
    const userId = req.params.id;

    // Find the user by ID
    const userIndex = allUsers.findIndex(user => user._id === userId);

    // If the user is not found, return a 404 error
    if (userIndex === -1) {
        return res.status(404).json({ message: 'User not found' });
    }

    // Remove the user from the array
    allUsers.splice(userIndex, 1);

    res.json({ success: true });
});

// Other endpoints (GET /users/{id}, POST /users, PUT /users/{id}, DELETE /users/{id}) can be added similarly

export default router;
