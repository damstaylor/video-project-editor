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
            {list.map(project => (
              <VideoProjectItem key={project.id} item={project}/>
            ))}
          </ul>
        }
      </ListGroup>
    </>
  );
}
