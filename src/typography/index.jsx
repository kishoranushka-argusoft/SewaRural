import React from "react";

export const H1 = ({ children, className = "", ...props }) => (
  <h1
    className={`text-5xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-8xl font-mono font-bold ${className}`}
    {...props}
  >
    {children}
  </h1>
);

export const H2 = ({ children, className = "", ...props }) => (
  <h2
    className={`text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-mono font-bold ${className}`}
    {...props}
  >
    {children}
  </h2>
);

export const H3 = ({ children, className = "", ...props }) => (
  <h3
    className={`text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl  md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[3.5rem] font-mono font-bold ${className}`}
    {...props}
  >
    {children}
  </h3>
);

export const H4 = ({ children, className = "", ...props }) => (
  <h4
    className={`text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-mono ${className} 
      md:leading-[2.25rem] lg:leading-[3rem] xl:leading-[2.5rem] `}
    {...props}
  >
    {children}
  </h4>
);

export const H5 = ({ children, className = "", ...props }) => (
  <h5
    className={`text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-2xl font-mono  ${className}`}
    {...props}
  >
    {children}
  </h5>
);

export const H6 = ({ children, className = "", ...props }) => (
  <h6
    className={` text-md sm:text-md md:text-lg lg:text-lg xl:text-xl font-mono font-semibold  ${className}`}
    {...props}
  >
    {children}
  </h6>
);

export const P = ({ children, className = "", ...props }) => (
  <p
    className={`font-pop md:text-left tracking-wide text-sm md:text-md xl:text-lg text-black   md:leading-6  ${className} w-full`}
    {...props}
  >
    {children}
  </p>
);

export const Span = ({ children, className = "", ...props }) => (
  <span
    className={`text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl ${className}`}
    {...props}
  >
    {children}
  </span>
);

export const Div = ({
  children,
  className = "",
  onClick,
  bg,
  rounded,
  ref,
}) => {
  const classes = ` ${bg ? "bg-secondary" : ""} ${
    rounded ? "rounded-lg" : ""
  } ${className}`;
  return (
    <div className={classes} onClick={onClick} ref={ref}>
      {children}
    </div>
  );
};

export const Section = ({ children, className = "", onClick, bg, rounded }) => {
  const classes = `py-8 md:py-16  ${bg ? "bg-secondary" : ""} ${
    rounded ? "rounded-2xl" : ""
  } ${className}`;
  return (
    <section className={classes} onClick={onClick}>
      {children}
    </section>
  );
};

export const P2 = ({ children, className = "", ...props }) => (
  <p
    className={`font-pop md:text-left tracking-wide text-sm md:text-base text-black   md:leading-6  ${className} w-full`}
    {...props}
  >
    {children}
  </p>
);
