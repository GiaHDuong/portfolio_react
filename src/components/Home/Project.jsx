export default function Project() {
  return (
    <section id="projects">
      <p class="section__text__p1">Browse My Recent</p>
      <h1 class="title">PROJECTS</h1>
      <div class="experience-details-container">
        <div class="about-containers">
          <div class="details-container color-container">
            <div class="article-container">
              <img
                src="./assets/Img/project-1.png"
                alt="Project 1"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">
              Portfolio Website
            </h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/GiaHDuong/Portfolio'"
              >
                Github
              </button>
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/'"
              >
                Live Demo
              </button>
            </div>
            <div class="article-container">
              <ul>
                <li>
                  Create a visually appealing portfolio website using HTML for
                  structure, CSS for styling, and JavaScript for interactivity.{" "}
                </li>
                <li>
                  Ensure compatibility across devices, optimize performance, and
                  deploy online to showcase your skills and projects
                  effectively.
                </li>
              </ul>
            </div>
          </div>
          <div class="details-container color-container">
            <div class="article-container">
              <img
                src="./assets/Img/project-2.png"
                alt="Project 2"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">JoD-Rex Game</h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/GiaHDuong/T-Rex-Game'"
              >
                Github
              </button>
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='#home'"
              >
                Live Demo
              </button>
            </div>
            <div class="article-container">
              <ul>
                <li>
                  {" "}
                  Input: Prompt for user name, password, email (optional).
                </li>
                <li>
                  Processing: Calculating position of players to avoid detect
                  collision.
                </li>
                <li>
                  Output: Display user's current score, highest score, and all
                  users' scores as top 10 ranking from highest to lowest.
                </li>
              </ul>
            </div>
          </div>
          <div class="details-container color-container">
            <div class="article-container">
              <img
                src="./assets/Img/project-3.png"
                alt="Project 3"
                class="project-img"
              />
            </div>
            <h2 class="experience-sub-title project-title">
              The Escape Animation
            </h2>
            <div class="btn-container">
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='https://github.com/GiaHDuong/The-Escape-Animation'"
              >
                Github
              </button>
              <button
                class="btn btn-color-2 project-btn"
                onclick="location.href='#home'"
              >
                Live Demo
              </button>
            </div>
            <div class="article-container">
              <ul>
                <li>
                  Using graphics libraries and modules in Pygame, draw shapes,
                  and incorporate visual effects into animations.
                </li>
                <li>
                  Applying mathematical concepts like transformations, and
                  trigonometry to precisely control object position, rotation,
                  and scaling in animations.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <img
        src="./assets/Img/arrow.png"
        alt="Arrow icon"
        class="icon arrow"
        onclick="location.href='#contact'"
      />
    </section>
  );
}
