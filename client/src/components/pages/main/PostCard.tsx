import React, { FC } from "react";
import { Link } from "react-router-dom";
import { faEye, faReplyAll } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useWindowDimensions } from "../../../hooks/useDimensions";
import "./PostCard.css";
type Props = {};

interface PostCardProps {
  //thread: Thread;
}

const PostCard: FC<PostCardProps> = ({}: Props) => {
  //const history = useHistory();
  const { width } = useWindowDimensions();
  /* 
  const onClickShowThread = (e: React.MouseEvent<HTMLDivElement>) => {
    //history.push("/thread/" + thread.id);
  }; */

  const getResponses = (thread: any) => {
    if (width <= 768) {
      return (
        <label
          style={{
            marginRight: ".5em",
          }}
        >
          {/* thread && thread.threadItems && thread.threadItems.length */}
          <FontAwesomeIcon
            icon={faReplyAll}
            className="points-icon"
            style={{
              marginLeft: ".25em",
              marginTop: "-.25em",
            }}
          />
        </label>
      );
    }
    return null;
  };

  return (
    <section className="panel PostCard-container">
      <div className="PostCard-txt-container">
        <div className="content-header">
          {/* <Link to={`/categorythreads/`} className="link-txt">
            <strong>category name</strong>
          </Link> */}
          <span className="username-header" style={{ marginLeft: ".5em" }}>
            username
          </span>
        </div>
        <div className="question">
          <div
            // onClick={onClickShowThread}
            data-thread-id="id"
            style={{ marginBottom: ".4em" }}
          >
            <strong>title</strong>
          </div>
          <div
            className="PostCard-body"
            // onClick={onClickShowThread}
            data-thread-id="id"
          >
            <div>body</div>
          </div>
          <div className="PostCard-footer">
            <span
              style={{
                marginRight: ".5em",
              }}
            >
              <label>
                views
                <FontAwesomeIcon icon={faEye} className="icon-lg" />
              </label>
            </span>
            <span>{getResponses("thread")}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostCard;
