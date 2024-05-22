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
    <nav className="w-screen flex justify-center items-center h-24">
      <ul className="flex items-center gap-6 text-sm py-5 px-6 dark:text-white">
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
