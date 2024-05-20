const Navbar = () => {
  const navLinks = [
    {
      display: "Platform",
    },
    {
      display: "Company",
    },
    {
      display: "Insights",
    },
    {
      display: "Contact",
    },
  ];

  return (
    <nav className="sticky top-6 w-screen flex justify-center z-10">
      <ul className="flex gap-6 text-sm py-5 px-6 bg-white/30 backdrop-blur-lg rounded-md">
        {navLinks.map((link) => (
          <li key={link.display} className="cursor-pointer font-medium">
            {link.display}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
