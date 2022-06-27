import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./SideBarMenus.css";

interface SideBarMenusProps {
  showMenu?: boolean;
  setShowMenu?: (showMenu: boolean) => void;
}

const SideBarMenus = ({ showMenu, setShowMenu }: SideBarMenusProps) => {
  const handleOnclick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (setShowMenu) {
      setShowMenu(!showMenu);
    }
  };

  return (
    <div className="mainMenus">
      <ul>
        <li className="mainMenus_list">
          <Link to="Post/New">
            <button onClick={handleOnclick}>
              <FontAwesomeIcon icon={faPlusCircle} />
              Add Post
            </button>
          </Link>
        </li>
        <li className="mainMenus_list">
          <Link to="Question/New">
            <button onClick={handleOnclick}>
              <FontAwesomeIcon icon={faQuestionCircle} />
              Ask Question
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default SideBarMenus;
