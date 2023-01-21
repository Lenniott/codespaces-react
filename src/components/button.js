import React, {
  useState,
  useEffect,
  forwardRef,
  useRef,
  useImperativeHandle,
} from "react";
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
    mobileLabelHidden,
    title,
    onClick,
    iconOnly,
    fluid,
    className,
    ariaExpanded,
    ariaControls,
    popoverContent,
    popoverPlacement,
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
    setPopoverPlacementClass(
      classNames(popoverPlacementClasses[popoverPlacement])
    );
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
      small:
        "h-[calc(2rem+2px)] min-w-[calc(2rem+2px)] py-1 px-2.5 gap-1.5 text-sm [&>i]:-mx-1 [&>i+span]:ml-0.5",
      medium:
        "h-[calc(2.5rem+2px)] min-w-[calc(2.5rem+2px)] py-2 px-4 gap-2 text-base [&>i]:-mx-2 [&>i+span]:ml-1.5",
    },
    preset: {
      primary:
        "bg-primary text-white border-primary hover:bg-primary-dark hover:border-primary-dark focus-visible:bg-primary-dark focus-visible:border-primary-darkest",
      secondary:
        "bg-white text-primary border-primary hover:bg-primary-lightest focus-visible:bg-primary-lightest focus-visible:border-primary-darkest",
      danger:
        "bg-rose-600 text-white border-rose-600 hover:bg-rose-700 hover:border-rose-700 focus-visible:bg-rose-700 focus-visible:border-rose-900",
      "danger-outline":
        "bg-white text-rose-700 border-rose-600 hover:bg-rose-50 focus-visible:bg-rose-50 focus-visible:border-rose-800",
      success:
        "bg-teal-600 text-white border-teal-600 hover:bg-teal-700 hover:border-teal-700 focus-visible:bg-teal-700 focus-visible:border-teal-900",
      "success-outline":
        "bg-white text-teal-700 border-teal-600 hover:bg-teal-50 focus-visible:bg-teal-50 focus-visible:border-teal-800",
      default:
        "bg-white text-neutral-700 border-neutral-300 hover:bg-neutral-100 focus-visible:bg-neutral-100 focus-visible:border-neutral-500",
      "no-border":
        "bg-white text-neutral-700 border-transparent hover:bg-neutral-100 focus-visible:bg-neutral-100 focus-visible:border-neutral-500",
      transparent:
        "shadow-none text-neutral-700 border-transparent hover:bg-neutral-100 focus-visible:bg-neutral-100 focus-visible:border-neutral-500",
    },
    iconOnly: {
      small:
        "w-[calc(2rem+2px)] [&>i]:transition-transform [&>i]:duration-75 [&:hover>i]:scale-90 [&:focus-visible>i]:button:scale-90",
      medium:
        "w-[calc(2.5rem+2px)] [&>i]:transition-transform [&>i]:duration-75 [&:hover>i]:scale-90 [&:focus-visible>i]:button:scale-90",
    },
    fluid: {
      true: "w-full",
      false: "",
    },
    mobileLabelHidden: {
      true: "[&>span]:hidden [&>span]:sm:!inline",
    },
  };

  const buttonClassName = classNames(
    buttonClasses.base,
    buttonClasses.size[size],
    buttonClasses.preset[preset],
    buttonClasses.fluid[fluid],
    buttonClasses.mobileLabelHidden[mobileLabelHidden],
    {
      [buttonClasses.iconOnly[size]]: iconOnly,
    }
  );

  return popoverContent ? (
    <OutsideClick hidePopover={hidePopover}>
      <button
        ref={buttonRef}
        type={type}
        className={className ? className : buttonClassName}
        onClick={togglePopover}
        title={title}
        aria-expanded={ariaExpanded}
        aria-controls={ariaControls}
      >
        {children && <i>{children}</i>}
        {label && (
          <span className="relative truncate after:transition-all after:opacity-0 after:absolute after:left-0 after:right-0 after:bottom-px after:h-px after:bg-current after:w-0 group-hover/button:after:w-full group-focus-visible/button:after:w-full group-hover/button:after:opacity-100 group-focus-visible/button:after:opacity-100">
            {label}
          </span>
        )}
      </button>
      {popupIsVisible && (
        <div
          className={`min-w-[8rem]
            ${
              popoverWidth
                ? popoverWidth
                : `w-[${buttonRef.current.clientWidth}px]`
            }
            ${popoverPlacementClass}
            ${
              popoverPlacement === "top-left"
                ? `top-[${buttonPosition.top}px] left-[${buttonPosition.left}px]`
                : " "
            }
            ${
              popoverPlacement === "top-right"
                ? `top-[${buttonPosition.top}px] left-[${buttonPosition.right}px]`
                : " "
            }
            ${
              popoverPlacement === "bottom-right"
                ? `top-[calc(${buttonPosition.top}px+${buttonRef.current.clientHeight}px)] left-[${buttonPosition.right}px]`
                : " "
            }
            ${
              popoverPlacement === "bottom-left"
                ? `top-[calc(${buttonPosition.top}px+${buttonRef.current.clientHeight}px)] left-[${buttonPosition.left}px]`
                : " "
            }
          `}
        >
          <div
            className={
              popoverOriginClass +
              " animate-popover py-2 max-w-[calc(100vw-2rem)] bg-white shadow-lg shadow-neutral-800/10 ring-1 ring-black/5 focus:outline-none"
            }
            onClick={(e) => e.stopPropagation()}
          >
            <div
              onClick={popoverHideOnClick ? hidePopover : null}
              className="block px-4 py-2 text-sm"
            >
              {popoverContent}
            </div>
          </div>
        </div>
      )}
    </OutsideClick>
  ) : (
    <button
      ref={buttonRef}
      type={type}
      className={className ? className : buttonClassName}
      onClick={onClick}
      title={title}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
    >
      {children && <i>{children}</i>}
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
  preset: PropTypes.oneOf([
    "primary",
    "secondary",
    "danger",
    "danger-outline",
    "success",
    "success-outline",
    "default",
    "no-border",
    "transparent",
  ]),
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  iconOnly: PropTypes.bool,
  onClick: PropTypes.func,
  fluid: PropTypes.oneOf(["false", "true"]),
  ariaExpanded: PropTypes.bool,
  ariaControls: PropTypes.string,
  className: PropTypes.string,
  popoverContent: PropTypes.node,
  popoverPlacement: PropTypes.oneOf([
    "top-left",
    "top-right",
    "bottom-right",
    "bottom-left",
  ]),
  popoverWidth: PropTypes.string,
  popoverHideOnClick: PropTypes.bool,
};

Button.defaultProps = {
  size: "medium",
  preset: "default",
  type: "button",
  fluid: "false",
  popoverPlacement: "bottom-left",
  popoverHideOnClick: true,
};

export { Button };
