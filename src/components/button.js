import React, { useState, useEffect, forwardRef, useRef, useImperativeHandle } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import OutsideClick from "./outside-click";

const Button = forwardRef((props, ref) => {
  const {
    children,
    size,
    preset,
    type,
    label,
    title,
    onClick,
    iconOnly,
    fluid,
    className,
    ariaExpanded,
    ariaControls,
    popover,
    popoverContent,
    popoverPlacement,
    popoverToggle,
    popoverWidth,
    popoverHideOnClick,
  } = props;
  const buttonRef = useRef();
  const buttonPosition = buttonRef?.current?.getBoundingClientRect();

  let popoverPlacementClasses = {
    "top-left": ` -translate-y-full fixed z-50 `,
    "top-right": ` -translate-y-full -translate-x-full fixed z-50 `,
    "bottom-right": ` -translate-x-full fixed z-50 `,
    "bottom-left": ` fixed z-50 `,
  };

  let popoverOriginClasses = {
    "top-left": ` origin-bottom-left `,
    "top-right": ` origin-bottom-right `,
    "bottom-right": ` origin-top-right `,
    "bottom-left": ` origin-top-left `,
  };

  const [popoverOriginClass, setPopoverOriginClass] = useState();
  const [popoverPlacementClass, setPopoverPlacementClass] = useState();
  const [popupIsVisible, setPopupIsVisible] = useState();

  const updatePopoverClasses = () => {
    setPopoverOriginClass(classNames(popoverOriginClasses[popoverPlacement]));
    setPopoverPlacementClass(classNames(popoverPlacementClasses[popoverPlacement]));
  };

  const showPopover = () => {
    setPopupIsVisible(true);
    updatePopoverClasses();
  };

  const hidePopover = () => {
    setPopupIsVisible(false);
    updatePopoverClasses();
  };

  const togglePopover = () => {
    setPopupIsVisible(!popupIsVisible);
    updatePopoverClasses();
  };

  useImperativeHandle(ref, () => ({
    getShowPopoverFn() {
      showPopover();
    },
    getHidePopoverFn() {
      hidePopover();
    },
  }));

  useEffect(() => {
    const handlePopupResize = () => {
      hidePopover();
    };

    window.addEventListener("resize", handlePopupResize);
    window.addEventListener("scroll", handlePopupResize);

    return () => {
      window.removeEventListener("resize", handlePopupResize);
      window.removeEventListener("scroll", handlePopupResize);
    };
  }, []);

  const buttonClasses = {
    base: "transition-all duration-75 shrink-0 group/button inline-flex items-center justify-center whitespace-nowrap shadow-sm border outline-none",
    size: {
      small: "h-[calc(2rem+2px)] min-w-[calc(2rem+2px)] py-1 px-2.5 gap-1 text-sm",
      medium: "h-[calc(2.5rem+2px)] min-w-[calc(2.5rem+2px)] py-2 px-4 gap-2 text-base",
    },
    preset: {
      primary: "bg-primary text-white border-primary hover:bg-primary-dark focus-visible:bg-primary-dark focus-visible:border-primary-darkest",
      "primary-outline": "bg-white text-primary border-primary hover:bg-primary-lightest focus-visible:bg-primary-lightest focus-visible:border-primary-darkest",
      secondary: "bg-white text-neutral-700 border-neutral-300 hover:bg-neutral-100 focus-visible:bg-neutral-100 focus-visible:border-primary",
      white: "bg-white text-neutral-700 border-transparent hover:bg-neutral-100 focus-visible:bg-neutral-100 focus-visible:border-primary",
      plain: "shadow-none text-neutral-700 border-transparent hover:bg-neutral-100 focus-visible                      :bg-neutral-100 focus-visible:border-primary",
    },
    iconOnly: {
      small: "w-[calc(2rem+2px)]",
      medium: "w-[calc(2.5rem+2px)]",
    },
    fluid: {
      true: "w-full",
      false: "",
    },
  };

  const buttonClassName = classNames(buttonClasses.base, buttonClasses.size[size], buttonClasses.preset[preset], buttonClasses.fluid[fluid], {
    [buttonClasses.iconOnly[size]]: iconOnly,
  });

  return popover ? (
    <OutsideClick hidePopover={hidePopover}>
      <button
        ref={buttonRef}
        type={type}
        className={className ? className : buttonClassName}
        onClick={popoverToggle ? togglePopover : showPopover}
        title={title}
        aria-expanded={ariaExpanded}
        aria-controls={ariaControls}
      >
        {children && <span className={iconOnly ? "transition-transform duration-75 group-hover/button:scale-90 group-focus-visible/button:scale-90" : " "}>{children}</span>}
        {label && (
          <span className="relative truncate after:transition-all after:opacity-0 after:absolute after:left-0 after:right-0 after:bottom-px after:h-px after:bg-current after:w-0 group-hover/button:after:w-full group-focus-visible/button:after:w-full group-hover/button:after:opacity-100 group-focus-visible/button:after:opacity-100">
            {label}
          </span>
        )}
      </button>
      {popupIsVisible && (
        <div
          className={`min-w-[8rem]
            ${popoverWidth ? popoverWidth : `w-[${buttonRef.current.clientWidth}px]`}
            ${popoverPlacementClass}
            ${popoverPlacement === "top-left" ? `top-[${buttonPosition.top}px] left-[${buttonPosition.left}px]` : " "}
            ${popoverPlacement === "top-right" ? `top-[${buttonPosition.top}px] left-[${buttonPosition.right}px]` : " "}
            ${popoverPlacement === "bottom-right" ? `top-[calc(${buttonPosition.top}px+${buttonRef.current.clientHeight}px)] left-[${buttonPosition.right}px]` : " "}
            ${popoverPlacement === "bottom-left" ? `top-[calc(${buttonPosition.top}px+${buttonRef.current.clientHeight}px)] left-[${buttonPosition.left}px]` : " "}
          `}
        >
          <div
            className={popoverOriginClass + " animate-popover py-2 max-w-[calc(100vw-2rem)] bg-white shadow-lg shadow-neutral-800/10 ring-1 ring-black/5 focus:outline-none"}
            onClick={(e) => e.stopPropagation()}
          >
            <div onClick={popoverHideOnClick && hidePopover} className="block px-4 py-2 text-sm">
              {popoverContent}
            </div>
          </div>
        </div>
      )}
    </OutsideClick>
  ) : (
    <button ref={buttonRef} type={type} className={className ? className : buttonClassName} onClick={onClick} title={title} aria-expanded={ariaExpanded} aria-controls={ariaControls}>
      {children && <span className={iconOnly ? "transition-transform duration-75 group-hover/button:scale-90 group-focus-visible/button:scale-90" : " "}>{children}</span>}
      {label && (
        <span className="relative truncate after:transition-all after:opacity-0 after:absolute after:left-0 after:right-0 after:bottom-px after:h-px after:bg-current after:w-0 group-hover/button:after:w-full group-focus-visible/button:after:w-full group-hover/button:after:opacity-100 group-focus-visible/button:after:opacity-100">
          {label}
        </span>
      )}
    </button>
  );
});

Button.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf(["small", "medium"]),
  preset: PropTypes.oneOf(["primary", "secondary", "plain"]),
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  iconOnly: PropTypes.bool,
  onClick: PropTypes.func,
  fluid: PropTypes.oneOf(["false", "true"]),
  ariaExpanded: PropTypes.bool,
  ariaControls: PropTypes.string,
  className: PropTypes.string,
  popover: PropTypes.bool,
  popoverContent: PropTypes.node,
  popoverPlacement: PropTypes.oneOf(["top-left", "top-right", "bottom-right", "bottom-left"]),
  popoverToggle: PropTypes.bool,
  popoverWidth: PropTypes.string,
  popoverHideOnClick: PropTypes.bool,
};

Button.defaultProps = {
  size: "medium",
  preset: "secondary",
  type: "button",
  fluid: "false",
  popoverToggle: true,
  popoverPlacement: "bottom-left",
  popoverHideOnClick: true,
};

export { Button };
