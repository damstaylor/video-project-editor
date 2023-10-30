import './VideoProjectItem.css';
import {ListGroup, Badge} from "react-bootstrap";

export default function VideoProjectItem({item}) {
  return (
    <>
      <ListGroup.Item as="a" className="VideoProjectItem" href={`/projects/${item.id}`}>
        <li>
          <div className="VideoProjectItem--title-container">
            <div className="VideoProjectItem--title font-bold">
              <span>{item.name}</span>
            </div>
            <div className="VideoProjectItem--dates small font-secondary">
              created on {new Date(item.creationDate).toLocaleDateString()}
            </div>
          </div>
          <div className="VideoProjectItem--author small">
            <Badge>{item.author}</Badge>
            &nbsp;<span className="font-secondary">{item.type}</span>
          </div>
          <div className="VideoProjectItem--description">
            {item.description}
          </div>
        </li>
      </ListGroup.Item>
    </>
  );
}
