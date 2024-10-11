import cover from "../assets/spacejoy-YqFz7UMm8qE-unsplash.jpg";

export default function Post() {

  return (
    <article className="post">

      <img className="post-cover" src={cover} alt="A nice image representing the article" />

      <section className="post-content">
        <header className="post-header">
          <div className="post-chip">
            <span>Interior</span>
          </div>

          <h2 className="post-title truncate">Top 5 Living Room Inspirations</h2>
        </header>

        <aside className="post-summary">
          <p className="post-description">Curated vibrant colors for your living, make it pop & calm in the same time. </p>
          <span className="post-btn">
            <a href="#">Read more</a>
            <span>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.9763 6.16658L6.50625 1.69657L7.68475 0.518066L14.1666 6.99992L7.68475 13.4817L6.50625 12.3032L10.9763 7.83325H0.833252V6.16658H10.9763Z"
                   />
              </svg>
            </span>
          </span>
        </aside>

      </section>
    </article>
  );
}

