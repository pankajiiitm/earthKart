import bcrypt from  'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Sagun Kuhu Murmu',
        email: 'sagun@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    },
    {
        name: 'Shivam Hansda',
        email: 'shivam@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    }
]

export default users;