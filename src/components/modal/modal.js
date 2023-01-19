import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { ModalFooter } from "./modal-footer";
import { ModalHeader } from "./modal-header";
import { useRef, useEffect } from "react";

const Modal = ({ title, content, footer, customHeader, customFooter, visible, hide, dismissableMask, sidebar }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (visible) {
      document.documentElement.classList.add("scrollbar-hide");
    } else {
      document.documentElement.classList.remove("scrollbar-hide");
    }

    const handleKeyDown = (e) => {
      if (!visible) {
        return;
      }
      if (e.key === "Tab") {
        const focusableElements = modalRef.current.querySelectorAll("a, button, input, textarea, select, details, [tabindex]:not([tabindex='-1'])");
        if (e.shiftKey) {
          if (document.activeElement === focusableElements[0]) {
            e.preventDefault();
            focusableElements[focusableElements.length - 1].focus();
          }
        } else if (document.activeElement === focusableElements[focusableElements.length - 1]) {
          e.preventDefault();
          focusableElements[0].focus();
        }
      } else if (e.key === "Escape") {
        e.preventDefault();
        hide();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [visible, hide]);

  if (!visible) {
    return null;
  }
  return createPortal(
    <div className={`${sidebar ? " " : " animate-modalFade grid place-items-center "}  bg-neutral-800/40 fixed inset-0 overflow-y-auto overscroll-contain`} onClick={dismissableMask ? hide : null}>
      <div
        ref={modalRef}
        className={`${sidebar ? " animate-sidebar min-h-full ml-auto sm:max-w-sm " : " animate-modal sm:max-w-xl "} bg-white shadow-lg p-6 w-full flex flex-col gap-6`}
        onClick={(e) => e.stopPropagation()}
      >
        <ModalHeader title={title} customHeader={customHeader} hide={hide} />
        <div className="text-neutral-700">{content}</div>
        <ModalFooter customFooter={customFooter}>{footer}</ModalFooter>
      </div>
    </div>,
    document.body
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  content: PropTypes.node,
  footer: PropTypes.node,
  customHeader: PropTypes.node,
  customFooter: PropTypes.node,
  visible: PropTypes.bool,
  hide: PropTypes.func,
  dismissableMask: PropTypes.bool,
  sidebar: PropTypes.bool,
};

Modal.defaultProps = {
  dismissableMask: true,
};

export { Modal };
