import React from "react";
import Button from "../UI/Button";
interface LinkProps {
  label: string;
  children: React.ReactNode;
}
const Navigation = ({ label, children }: LinkProps) => {
  return (
    <Button variant="secondary">
      <div className="relative w-full">
        <span className="absolute left-0 flex h-full items-center">
          {children}
        </span>
        {label}
      </div>
    </Button>
  );
};

export default Navigation;
