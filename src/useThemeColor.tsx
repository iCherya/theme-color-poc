import { useEffect } from "react";

const DEFAULT_THEME_CONTENT = "#000000";

export const useThemeColor = (
  cssProperty: string,
  isEnabled: boolean = true
): void => {
  useEffect(() => {
    if (!isEnabled) return;

    const updateThemeColor = () => {
      const themeColorMeta = document.querySelector('meta[name="theme-color"]');
      const appleStatusBarMeta = document.querySelector(
        'meta[name="apple-mobile-web-app-status-bar-style"]'
      );

      const cssPropertyValue =
        getComputedStyle(document.documentElement)
          .getPropertyValue(cssProperty)
          .trim() || DEFAULT_THEME_CONTENT;

      if (themeColorMeta) {
        themeColorMeta.setAttribute("content", cssPropertyValue);
      }

      if (appleStatusBarMeta) {
        appleStatusBarMeta.setAttribute("content", cssPropertyValue);
      }
    };

    updateThemeColor();

    const observer = new MutationObserver(updateThemeColor);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["style"],
    });

    return () => observer.disconnect();
  }, [isEnabled, cssProperty]);
};

export default useThemeColor;
