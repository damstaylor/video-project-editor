import './VideoProjectItem.css';
import {ListGroup, Badge} from "react-bootstrap";
import sanitizeISODateString from "../../utils/utils";

export default function VideoProjectItem({item}) {
  return (
    <>
      <ListGroup.Item as="a" className="VideoProjectItem" href={`/projects/${item.id}`}>
        <li>
          <div className="VideoProjectItem--title-container">
            <div className="VideoProjectItem--title font-bold">
              <span>{item.name}&nbsp;</span>
              {item.isArchived ? <Badge pill bg="secondary">Archived</Badge> : null}
            </div>
            <div className="VideoProjectItem--dates small font-secondary">
              created on {sanitizeISODateString(item.creationDate)}
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
