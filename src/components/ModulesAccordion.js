import { Accordion } from "react-bootstrap";
const ModulesAccordion = ({ title, eventName, children, active, onClick }) => {
  return (
    <div className="card">
      <Accordion.Toggle
        className={`card-header ${active !== eventName ? "collapsed" : ""}`}
        eventKey={eventName}
        onClick={() => onClick()}
      >
        {title} <span className="toggle-btn" />
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={eventName}>
        <div className="card-body">{children}</div>
      </Accordion.Collapse>
    </div>
  );
};
export default ModulesAccordion;
