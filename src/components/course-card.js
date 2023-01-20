import { Button } from "./button";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { MoreVertical, Edit2, Share, Link2, Copy, Trash } from "react-feather";
import { PopoverMenu } from "./popover-menu/popover-menu";
import { PopoverMenuItem } from "./popover-menu/popover-menu-item";
import { PopoverMenuSeperator } from "./popover-menu/popover-menu-seperator";

const CourseCard = ({
  link,
  title,
  image,
  code,
  academicYear,
  startDate,
  EndDate,
  courseLeader,
}) => {
  return (
    <div className="relative">
      <Link
        to={link}
        className="relative border border-neutral-200 bg-white p-3 flex group cursor-pointer"
      >
        <div className="shrink-0 -m-3 mr-0 relative">
          <img
            className="m-px aspect-square w-[6.75rem] object-cover"
            src={image}
            alt={title}
          />
          {code ||
            (academicYear && (
              <div className="px-2 py-1.5 text-white text-sm absolute top-px left-px right-px bg-primary/90">
                {code && <div className="truncate">{code}</div>}
                {academicYear && (
                  <div className="truncate text-primary-light">
                    {academicYear}
                  </div>
                )}
              </div>
            ))}
        </div>
        <div className="flex-grow pl-3 min-w-0 flex flex-col justify-between">
          {title && (
            <div className="line-clamp group-hover:underline">{title}</div>
          )}
          <div className="text-sm text-neutral-600 pr-8">
            {courseLeader && <div className="truncate">{courseLeader}</div>}
            {startDate ||
              (EndDate && (
                <div className="truncate">
                  <span className="">{startDate}</span>
                  <span className="">{EndDate}</span>
                </div>
              ))}
          </div>
        </div>
      </Link>
      <div className="absolute bottom-2 right-2">
        <Button
          preset="transparent"
          size="small"
          iconOnly={true}
          popover={true}
          popoverWidth="w-40"
          popoverContent={
            <PopoverMenu>
              <PopoverMenuItem title="Edit" button={true} icon={<Edit2 />} />
              <PopoverMenuSeperator />
              <PopoverMenuItem title="Share" button={true} icon={<Share />} />
              <PopoverMenuItem title="Link" button={true} icon={<Link2 />} />
              <PopoverMenuItem
                title="Copy to..."
                button={true}
                icon={<Copy />}
              />
              <PopoverMenuSeperator />
              <PopoverMenuItem
                title="Delete"
                preset="danger"
                button={true}
                icon={<Trash />}
              />
            </PopoverMenu>
          }
          popoverPlacement="bottom-right"
        >
          <MoreVertical className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

CourseCard.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  code: PropTypes.string,
  academicYear: PropTypes.string,
  startDate: PropTypes.instanceOf(Date),
  EndDate: PropTypes.instanceOf(Date),
  courseLeader: PropTypes.string,
};

CourseCard.defaultProps = {
  title: "Course Title",
  image: "https://i.ibb.co/6gT1WVt/Course-image-16x9-01.png",
};

export { CourseCard };
