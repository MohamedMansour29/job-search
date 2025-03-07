import cloudinary from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadFile = async (file) => {
  const result = await cloudinary.uploader.upload(file.path, { folder: "jobsearch" });
  return { url: result.secure_url, id: result.public_id };
};

export const deleteFile = async (publicId) => {
  await cloudinary.uploader.destroy(publicId);
};