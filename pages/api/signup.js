import connectDB from '@/DB/db';
import UserDB from '@/DB/models/users';
import bcrypt from 'bcrypt';
import AddressDB from '@/DB/models/address';
import { generateToken, verifyToken } from '@/lib/jwtMiddleware';
import {setCookie} from 'cookie';

export default async function handler(req, res) {
  const { addressData, userData } = req.body;
  console.log(addressData);
  const { firstname, lastname, email, password } = userData; // Use destructuring

  try {
    await connectDB();

    // Check if a user with the same email already exists
    const userExist = await UserDB.findOne({ email });

    if (userExist) {
      return res.json({status: "failed", message: 'User with this email already exists' });
    }

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const createUser = await UserDB.create({
      firstname,
      lastname,
      email,
      password: hashedPassword, // Store the hashed password
    });
    let token;
    if (createUser) {
       token = generateToken('auth', {
        id: createUser._id,
      }, process.env.JWT_SECRET);

      const createAddress = await AddressDB.create({...addressData, userId: createUser._id});
      if (!createAddress) {
        const deleteUser = await UserDB.deleteOne({email});
        return res.json({status: "failed", message: "address entery failed, try again"});
      }
      return res.json({ status: 'ok', message: 'Registration successful', token: token });
    } else {
      return res.json({ status: "failed", message: 'Failed to create user' });
    }
  } catch (error) {
    return res.json({ status: "failed", message: 'Internal server error' });
  }
}
