const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  if (blogs.length === 0) return 0;
  
  const reducer = (sum, item) => {
    const likes = item.likes;

    return sum + likes;
  }

  const totalLikes = blogs.reduce(reducer, 0);

  return totalLikes;
}

const favoriteBlog = (blogs) => {
  if(blogs.length === 0) return 0;
  
  const newBlogs = [...blogs];
  newBlogs.sort((a,b) => b.likes - a.likes);
  const favoriteBlog = newBlogs[0];

  const {title, author, likes} = favoriteBlog;

  return {title, author, likes};
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
};