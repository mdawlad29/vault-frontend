import { useCallback, useEffect, useState } from "react";

interface RootProps {
  children: (scrollToTop: () => void) => React.ReactNode;
  length: number;
  cssDesign?: string;
}

const CustomScrollBar = ({ length, cssDesign, children }: RootProps) => {
  const [activeBar, setActiveBar] = useState(false);
  const [showIcon, setShowIcon] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    setActiveBar(scrollPosition > length);
    setShowIcon(scrollPosition > length);
  }, [length]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showIcon && (
        <div className={activeBar ? cssDesign : undefined}>
          {children(scrollToTop)}
        </div>
      )}
    </>
  );
};

export default CustomScrollBar;
