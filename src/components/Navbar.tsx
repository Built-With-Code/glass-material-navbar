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
    <nav className="sticky top-0 w-screen flex justify-center items-center z-10 h-24">
      <ul className="flex items-center gap-6 text-sm py-5 px-6 bg-white/30 dark:bg-neutral-800/30 dark:text-white backdrop-blur-lg rounded-md">
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
