const { MongoClient } = require('mongodb');

// MongoDB configuration
const MONGO_URI = 'mongodb+srv://karancsengg1:Sanjaybhai%40123@cluster0.iozlj.mongodb.net/theaterBooking?retryWrites=true&w=majority';  // Your MongoDB Atlas URIconnection string if necessary
const DATABASE_NAME = 'theaterBooking';
const COLLECTION_NAME = 'users';

// Dummy data
const dummyUsers = [
    { name: 'John Doe', phoneNumber: '1234567890' },
    { name: 'Jane Smith', phoneNumber: '2345678901' },
    { name: 'Alice Johnson', phoneNumber: '3456789012' },
    { name: 'Bob Brown', phoneNumber: '4567890123' },
    { name: 'Charlie Davis', phoneNumber: '5678901234' },
    { name: 'Daisy Evans', phoneNumber: '6789012345' },
    { name: 'Frank White', phoneNumber: '7890123456' },
    { name: 'Grace Hall', phoneNumber: '8901234567' },
    { name: 'Henry King', phoneNumber: '9012345678' },
    { name: 'Ivy Moore', phoneNumber: '0123456789' },
    { name: 'Jack Lee', phoneNumber: '1123456789' },
    { name: 'Karen Scott', phoneNumber: '1223456789' },
    { name: 'Leo Green', phoneNumber: '1323456789' },
    { name: 'Mia Adams', phoneNumber: '1423456789' },
    { name: 'Noah Clark', phoneNumber: '1523456789' },
    { name: 'Olivia Lewis', phoneNumber: '1623456789' },
    { name: 'Paul Harris', phoneNumber: '1723456789' },
    { name: 'Quincy Young', phoneNumber: '1823456789' },
    { name: 'Rachel Walker', phoneNumber: '1923456789' },
    { name: 'Sam Turner', phoneNumber: '2023456789' }
];

// Function to insert dummy data into MongoDB
async function setupDatabase() {
    const client = new MongoClient(MONGO_URI, { useUnifiedTopology: true });

    try {
        await client.connect();
        console.log('Connected to MongoDB');

        const db = client.db(DATABASE_NAME);
        const collection = db.collection(COLLECTION_NAME);

        // Insert dummy data
        await collection.insertMany(dummyUsers);
        console.log('Dummy data inserted into MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    } finally {
        await client.close();
    }
}

// Run the function to set up the database
setupDatabase();









