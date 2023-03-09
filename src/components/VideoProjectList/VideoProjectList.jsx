import './VideoProjectList.css';
import VideoProjectItem from "../VideoProjectItem/VideoProjectItem";
import {ListGroup} from "react-bootstrap";

export default function VideoProjectList({list}) {
  return (
    <>
      <ListGroup as="ul" className="VideoProjectList">
        <span className="VideoProjectList--header">All video projects</span>
        {list.length === 0 ?
          <span>No project found :(</span> :
          <ul>
            {list.map((item, idx) => (
              <VideoProjectItem key={idx} item={item}/>
            ))}
          </ul>
        }
      </ListGroup>
    </>
  );
}
