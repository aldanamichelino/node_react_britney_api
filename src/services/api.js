export const getQuote = async () => {
  const data = await fetch('http://localhost:9001/quotes');
  const response = await data.json();
  return response;
};