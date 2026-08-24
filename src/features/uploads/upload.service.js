import supabase from "../../config/supabase.js";

export const uploadFileService = async (file) => {
  const fileName = `${Date.now()}-${file.originalname}`;

  const { data, error } = await supabase.storage
    .from("uploads")
    .upload(fileName, file.buffer, {
      contentType: file.mimetype,
    });

  if (error) {
    throw error;
  }

  const { data: publicUrlData } = supabase.storage
    .from("uploads")
    .getPublicUrl(fileName);

  return {
    path: data.path,
    url: publicUrlData.publicUrl,
  };
};

export const deleteFileService = async (fileName) => {
  const { data, error } = await supabase.storage
    .from("uploads")
    .remove([fileName]);

  if (error) {
    throw error;
  }
  return data;
};

export const deleteFilesService = async (fileNames) => {
  const { data, error } = await supabase.storage
    .from("uploads")
    .remove(fileNames);

  if (error) {
    throw error;
  }
  return data;
};
