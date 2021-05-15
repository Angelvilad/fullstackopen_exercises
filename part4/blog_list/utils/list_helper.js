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

module.exports = {
  dummy,
  totalLikes
};