import { AnchorHTMLAttributes, MouseEvent, ReactNode, useEffect, useState } from "react";

// Bỏ dấu / ở cuối để /dich-vu/ và /dich-vu là cùng một trang
const getPath = () => window.location.pathname.replace(/\/+$/, "") || "/";

export function usePathname() {
  const [path, setPath] = useState(getPath);

  useEffect(() => {
    const update = (event: Event) => {
      setPath(getPath());
      // Chuyển trang mới thì lên đầu ngay; bấm Back thì để trình duyệt tự khôi phục vị trí
      if (event.type === "app:navigate") window.scrollTo({ top: 0, behavior: "instant" });
    };

    window.addEventListener("popstate", update);
    window.addEventListener("app:navigate", update);
    return () => {
      window.removeEventListener("popstate", update);
      window.removeEventListener("app:navigate", update);
    };
  }, []);

  return path;
}

export function navigate(to: string) {
  if (window.location.pathname === to) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  window.history.pushState({}, "", to);
  window.dispatchEvent(new Event("app:navigate"));
}

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  to: string;
  children: ReactNode;
};

export function Link({ to, children, onClick, ...props }: LinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (
      event.defaultPrevented ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0 ||
      to.startsWith("#") ||
      to.startsWith("mailto:") ||
      to.startsWith("tel:")
    ) {
      return;
    }

    event.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
