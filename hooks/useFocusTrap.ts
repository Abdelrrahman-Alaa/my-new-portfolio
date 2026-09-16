import { useEffect, RefObject } from "react";

interface UseFocusTrapOptions {
  isOpen: boolean;
  onClose?: () => void;
  initialFocusSelector?: string;
}

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Hook to trap keyboard focus within a container (Modal / Drawer) and handle Escape key.
 */
export function useFocusTrap(
  containerRef: RefObject<HTMLElement | null>,
  { isOpen, onClose, initialFocusSelector }: UseFocusTrapOptions
) {
  useEffect(() => {
    if (!isOpen || !containerRef.current) return;

    const container = containerRef.current;

    // Focus the initial element or the first focusable child
    requestAnimationFrame(() => {
      if (initialFocusSelector) {
        const initialEl = container.querySelector<HTMLElement>(initialFocusSelector);
        if (initialEl) {
          initialEl.focus();
          return;
        }
      }
      const focusables = container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
      if (focusables.length > 0) {
        focusables[0].focus();
      }
    });

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose?.();
        return;
      }

      if (e.key === "Tab") {
        const focusables = container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
        if (focusables.length === 0) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, containerRef, initialFocusSelector]);
}
