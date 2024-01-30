const fetchItems = async (API_URL) => {
  let data = "";
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw Error("Did not reciveve the data!");
    data = await response.json();
  } catch (err) {
    console.log(err.message);
  }
  return data;
};
export default fetchItems;
