async function getData(doc_type, document) {
  const response = await fetch(`https://dniruc.apisperu.com/api/v1/${doc_type}/${document}?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImkyMTE1NDM5QGNvbnRpbmVudGFsLmVkdS5wZSJ9.UpxpZ-JKtatPFHPBjv7gMpKX1AvUkaTcrwTNN7ZnXq4`);

  return await response.json();
}

export default getData;
