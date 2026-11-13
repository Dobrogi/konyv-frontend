const API_URL = "/api/books";
const getBooks = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

const createBook = async () => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "applciation/json",
    },
    body: JSON.stringify(book),
  });
  return response.json();
};

const deleteBooks = async (id) => {
  const response = await fetch(API_URL, {
    method: "DELETE",
  });
};
export { getBooks, createBook };
