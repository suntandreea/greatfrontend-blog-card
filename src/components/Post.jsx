import styles from "./Post.module.scss";

export default function Post({image, title, desc, tags}) {

  return (
    <article className={styles.post}>

      <img className={styles["post-cover"]} src={image} alt={title} />

      <section className={styles["post-content"]}>
        <header className={styles["post-header"]}>
          <div className={styles["post-chip"]}>
            {tags.map((tag, idx) => <span key={idx}>{tag}</span>)}
          </div>

          <h2 className={`${styles["post-title"]} ${styles.truncate}`}>{title}</h2>
        </header>

        <aside className={styles["post-summary"]}>
          <p className={styles["post-description"]}>{desc}</p>
          <button className={styles["post-btn"]}>
            <a href="#">Read more</a>
            <span>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.9763 6.16658L6.50625 1.69657L7.68475 0.518066L14.1666 6.99992L7.68475 13.4817L6.50625 12.3032L10.9763 7.83325H0.833252V6.16658H10.9763Z"
                />
              </svg>
            </span>
          </button>
        </aside>

      </section>
    </article>
  );
}

