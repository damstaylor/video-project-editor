import './VideoProjectItem.css';
import {ListGroup, Badge} from "react-bootstrap";

export default function VideoProjectItem({item}) {
  return (
    <>
      <ListGroup.Item as="li" className="VideoProjectItem">
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
      </ListGroup.Item>
    </>
  );
}
