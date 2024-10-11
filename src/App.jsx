import Post from './components/Post.jsx';

function App() {

  const postData = {
    image: "/greatfrontend-blog-card/spacejoy-YqFz7UMm8qE-unsplash.jpg",
    title: "Top 5 Living Room Inspirations",
    desc: "Curated vibrant colors for your living, make it pop & calm in the same time.",
    tags: ["Interior"]

  }

  return (
    <Post {...postData} />
  )
}

export default App
