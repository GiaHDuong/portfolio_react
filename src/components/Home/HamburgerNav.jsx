export default function HamburgerNav() {
  return (
    <nav id="hamburger-nav">
      <div class="logo">Gia Duong</div>
      <div class="hamburger-menu">
        <div class="hamburger-icon" onclick="toggleMenu()">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="menu-links">
          <li>
            <a href="#about" onclick="toggleMenu()">
              About
            </a>
          </li>
          <li>
            <a href="#experience" onclick="toggleMenu()">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" onclick="toggleMenu()">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onclick="toggleMenu()">
              Contact
            </a>
          </li>
        </div>
      </div>
    </nav>
  );
}
