export async function uploadImage(file) {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "huaychulo-images");
  const response = await fetch("https://api.cloudinary.com/v1_1/jeanenmanuel/image/upload", { method: "POST", body: data });
  const image = await response.json();

  return image.secure_url;
}
