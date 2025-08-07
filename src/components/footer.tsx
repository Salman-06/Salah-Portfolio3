import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 md:px-6 py-6">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {currentYear} Salah. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
