const Footer = () => (
  <footer className="bg-light text-center text-lg-start fixed-bottom">
    <div
      className="text-center p-3"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
    >
      &copy; {new Date().getFullYear()} Made by Aryan Jaya & Zulham
    </div>
  </footer>
);

export default Footer;
