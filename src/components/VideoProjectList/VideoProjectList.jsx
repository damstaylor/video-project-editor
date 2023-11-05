import "./VideoProjectList.css";
import VideoProjectItem from "../VideoProjectItem/VideoProjectItem";
import {Badge, ListGroup} from "react-bootstrap";
import {useState} from "react";

export default function VideoProjectList({list}) {
  const [filterStr, setFilterStr] = useState("");
  const [showArchivedOnly, setShowArchivedOnly] = useState(false);
  const sanitizedFilterStr = filterStr.trim().toLowerCase();
  const filteredList = list.filter(project => {
    const sanitizedName = project.name.trim().toLowerCase();
    const sanitizedDesc = project.description.trim().toLowerCase();
    return sanitizedName.includes(sanitizedFilterStr) || sanitizedDesc.includes(sanitizedFilterStr);
  });
  const archivedProjectList = filteredList.filter(project => project.isArchived);
  const filteredListAfterArchivedPill = showArchivedOnly ? archivedProjectList : filteredList;
  const handleFilterInput = (event) => {
    setFilterStr(event.target.value);
  };
  const handleClearFilter = () => {
    if (filterStr.length === 0) {
      return;
    }
    setFilterStr("");
  };
  const toggleShowArchivedOnly = () => {
    setShowArchivedOnly(!showArchivedOnly);
  };
  const archivedPillClass = `VideoProjectList--pill-${showArchivedOnly ? "on" : "off"}`;
  return (
    <>
      <div className="VideoProjectList--search-bar">
        <input type="text" value={filterStr} onInput={handleFilterInput}/>
        {filterStr.length > 0 ?
          <div className="VideoProjectList--close-icon" onClick={handleClearFilter}>×</div> :
          <span className="VideoProjectList--search-icon">🔍</span>}
      </div>
      <div className="VideoProjectList--badge-row">
        <Badge pill bg="secondary" className={archivedPillClass} onClick={toggleShowArchivedOnly}>Archived</Badge>
      </div>
      <ListGroup as="ul" className="VideoProjectList">
        <span className="VideoProjectList--header">
          {filterStr.length > 0 ? `${filteredList.length} results` : "All video projects"}
        </span>
        {list.length === 0 ? <span>No project found :(</span> : <ul>
          {filteredListAfterArchivedPill.map(project => (<VideoProjectItem key={project.id} item={project} />))}
        </ul>}
      </ListGroup>
    </>
  );
}
