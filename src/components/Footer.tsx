const Footer = () => {
  return (
    <footer className="py-10 px-6 bg-charcoal/95 text-center border-t border-gold/20 backdrop-blur-md">
      <p className="font-display text-cream/60 text-sm">
        © {new Date().getFullYear()} — All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
