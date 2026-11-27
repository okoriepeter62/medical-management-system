import { v2 as cloudinary } from 'cloudinary';

// Cloudinary configuration for medical documents and laboratory files.
// TODO: Initialize and export configured client/helpers as needed.
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;
