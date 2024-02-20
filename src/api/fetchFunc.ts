export const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return await response.json();
};

export const getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return await response.json();
};

export const getPostsAndUsers = async () => {
  const posts = await getPosts();
  const users = await getUsers();
  return { posts, users };
};

export async function getPostsAndUsersAll() {
  const [posts, users] = await Promise.all([getPosts(), getUsers()]);
  return { posts, users };
}
