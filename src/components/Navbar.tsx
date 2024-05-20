const Navbar = () => {
  return (
    <nav className="sticky top-6 w-screen flex justify-center z-10">
      <ul className="flex gap-6 text-sm py-3 px-4 bg-white/30 backdrop-blur-lg rounded-md">
        <li>Platform</li>
        <li>Company</li>
        <li>Insights</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
