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

const mostBlogs = (blogs) => {
  if(blogs.length === 0) return 0;

  const totalBlogsByAuthors = {};

  blogs.forEach(blog => {
    if(!totalBlogsByAuthors[blog.author]) return totalBlogsByAuthors[blog.author] = 1;

    ++totalBlogsByAuthors[blog.author];
  });

  const authorWithMostBlogs = Object.keys(totalBlogsByAuthors).reduce((a, b) => (totalBlogsByAuthors[a] > totalBlogsByAuthors[b]) ? a : b);


  return ({
    author: authorWithMostBlogs,
    blogs: totalBlogsByAuthors[authorWithMostBlogs]
  });

}

const mostLikes = (blogs) => {
  if(blogs.length === 0) return 0;
  
  const totalLikesByAuthors = {};

  blogs.forEach(blog => {
    if(!totalLikesByAuthors[blog.author]) return totalLikesByAuthors[blog.author] = blog.likes;

    totalLikesByAuthors[blog.author] += blog.likes;
  });

  const authorWithMostLikes = Object.keys(totalLikesByAuthors).reduce((a, b) => (totalLikesByAuthors[a] > totalLikesByAuthors[b]) ? a : b);

  return ({
    author: authorWithMostLikes,
    likes: totalLikesByAuthors[authorWithMostLikes]
  });
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
};