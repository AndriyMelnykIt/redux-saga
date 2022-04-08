export const getLatestNews = async () => {
  const request = await fetch('https://h1111n.algolia.com/api/v1/search?query=react&hitsPerPage=10&page=0');
  return await request.json();
}

export const getPopularNews = async () => {
  const res = await fetch(`https://h111n.algolia.com/api/v1/search?query=&hitsPerPage=10&page=0`);
  return await res.json();
};