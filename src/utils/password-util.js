import bcrypt from 'bcryptjs';

const SALT_ROUNDS = 12;

// Hash a user's password before saving it to the database
export const hashPassword = async (password) => {
  return await bcrypt.hash(password, SALT_ROUNDS);
};

// Compare a login password with the hashed password in the database
export const comparePassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};