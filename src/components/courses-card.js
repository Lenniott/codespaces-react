import { Button } from "./button";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  MoreVertical,
  Globe,
  Edit2,
  Share,
  Link2,
  Copy,
  Trash
} from "react-feather";

const CoursesCard = ({ link, title, image }) => {
  return (
    <li className="relative cursor-pointer group bg-white aspect-[5/6] sm:aspect-[4/6]">
      <Link to={link} className="inset-0 absolute"></Link>
      <div className="border border-white">
        <img
          className="block aspect-[2/1] object-cover"
          src={image}
          alt="Course"
        />
      </div>
      <div className="p-4">
        <div className="line-clamp-3 text-base sm:text-xl mb-2 sm:mb-3 group-hover:underline">
          {title}
        </div>
        <div
          title="Online"
          className="text-sm sm:text-base text-neutral-600 flex items-center gap-2"
        >
          <Globe className="h-4 w-4" />
          <span>Online</span>
        </div>
      </div>
      <div className="absolute top-3 right-3">
        <Button
          preset="white"
          size="small"
          iconOnly={true}
          popover={true}
          popoverWidth="w-40"
          popoverContent={
            <ul className="-m-4 p-1">
              <li>
                <button className="text-left w-full flex gap-3 items-center py-2 px-2 hover:underline">
                  <Edit2 className="text-neutral-400 w-4 h-4" />
                  <span>Edit</span>
                </button>
              </li>
              <li class="my-1 -mx-1 border-b border-neutral-200"></li>
              <li>
                <button className="text-left w-full flex gap-3 items-center py-2 px-2 hover:underline">
                  <Share className="text-neutral-400 w-4 h-4" />
                  <span>Share</span>
                </button>
              </li>
              <li>
                <button className="text-left w-full flex gap-3 items-center py-2 px-2 hover:underline">
                  <Link2 className="text-neutral-400 w-4 h-4" />
                  <span>Link</span>
                </button>
              </li>
              <li>
                <button className="text-left w-full flex gap-3 items-center py-2 px-2 hover:underline">
                  <Copy className="text-neutral-400 w-4 h-4" />
                  <span>Copy to...</span>
                </button>
              </li>
              <li class="my-1 -mx-1 border-b border-neutral-200"></li>
              <li>
                <button className="text-red-600 text-left w-full flex gap-3 items-center py-2 px-2 hover:underline">
                  <Trash className="text-red-600/50 w-4 h-4" />
                  <span>Delete</span>
                </button>
              </li>
            </ul>
          }
          popoverPlacement="bottom-right"
        >
          <MoreVertical className="w-5 h-5" />
        </Button>
      </div>
    </li>
  );
};

CoursesCard.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string
};

CoursesCard.defaultProps = {
  title: "Course Title",
  image: "https://i.ibb.co/6gT1WVt/Course-image-16x9-01.png"
};

export { CoursesCard };
