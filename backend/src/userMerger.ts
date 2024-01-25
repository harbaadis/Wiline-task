import { User } from './models/User';

// Provided user data
const userEmailsData = [
    {
        email: "delores@wiline.com",
        firstName: "Delores",
        lastName: "Mind"
    },
    {
        email: "lorie@wiline.com",
        firstName: "Lorie",
        lastName: "Enak"
    },
    {
        email: "emma@wiline.com",
        firstName: "Emma",
        lastName: "Fisk"
    }
];


const userPhoneNumberData = [
    {
        "email": "marina@wiline.com",
        "phoneNumbers": [{
            type: "primary",
            value: "202-555-0105",
        }]
    },
    {
        "email": "kip@wiline.com",
        "phoneNumbers": [{
            type: "primary",
            value: "202-555-0168",
        }]
    },
    {
        "email": "lorie@wiline.com",
        "phoneNumbers": [{
            type: "primary",
            value: "202-555-0162",
        }]
    },
    {
        "email": "jasmin@wiline.com",
        "phoneNumbers": [{
            type: "primary",
            value: "202-555-0168",
        }]
    },
    {
        "email": "emma@wiline.com",
        "phoneNumbers": [{
            type: "primary",
            value: "202-555-0187",
        }]
    },
    {
        "email": "elvia@wiline.com",
        "phoneNumbers": [{
            type: "primary",
            value: "202-555-0164",
        }]
    },
    {
        "email": "liliana@wiline.com",
        "phoneNumbers": [{
            type: "primary",
            value: "202-555-0161",
        }]
    },
    {
        "email": "florencio@wiline.com",
        "phoneNumbers": [{
            type: "primary",
            value: "202-555-0127",
        }]
    },
    {
        "email": "delores@wiline.com",
        "phoneNumbers": [{
            type: "primary",
            value: "202-555-0143",
        }]
    }
];

// Since the data shows that all the emails in userEmailsData exist in userPhoneNumbersData
// we are going to creat User objects from userEmailsData and add the names to the users



let idCounter = 0;

// Create User objects
const usersWithNames: User[] = userEmailsData.map(user => ({
    _id: (idCounter++).toString(), // Generate a unique id
    firstName: user.firstName, // Use provided firstName 
    lastName: user.lastName, // Use provided lastName 
    email: user.email, // Use provided email 
    phoneNumber: '', // Blank phoneNumber for usersWithNames
}));

const usersWithPhoneNumbers: User[] = userPhoneNumberData.map(user => ({
    _id: (idCounter++).toString(), // Generate a unique id
    firstName: '', // Blank firstName for usersWithPhoneNumbers
    lastName: '', // Blank lastName for usersWithPhoneNumbers
    email: user.email, // Use provided email 
    phoneNumber: user.phoneNumbers?.[0]?.value.toString() // Use provided phoneNumber 
}));

// Update names in usersWithPhoneNumbers
function mergeUsers(usersWithNames: User[], usersWithPhoneNumbers: User[]): User[] {
    usersWithPhoneNumbers.forEach(userWithPhone => {
        const matchingUser = usersWithNames.find(userWithEmail => userWithEmail.email === userWithPhone.email);

        if (matchingUser) {
            userWithPhone.firstName = matchingUser.firstName;
            userWithPhone.lastName = matchingUser.lastName;
        }
    });

    return usersWithPhoneNumbers;
};

// Call the mergeUsers function
export let allUsers: User[] = mergeUsers(usersWithNames, usersWithPhoneNumbers);

// Log the merged data
console.log('Merged Users:', allUsers);