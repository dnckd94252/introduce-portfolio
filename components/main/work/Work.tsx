import WorkStyle from "../../../styles/work/WorkStyle";
import Item from "./Item";
import { useEffect, useState } from "react";
import axios from "axios";

const Work = () => {
  const [workItem, setWorkItem]: any[] = useState([]);

  useEffect(() => {
    axios.get('/api/work').then(res => {
      setWorkItem(res.data);
    });
  }, []);

  return (
    <section id="work" className="pt-5 pb-5">
      <div className="container">
        <div className="title pt-5 pb-5">
          <span>SELECTED PROJECTS</span>
          <h1>Case studies</h1>
        </div>
        <div className="contents d-flex align-items-center justify-content-between flex-column">
          {workItem.length <= 0 ? null : workItem.map((information:any , key : number) => <Item key={key} information={information} />)}
        </div>
      </div>
      <style jsx>{WorkStyle}</style>
    </section>
  );
};
export default Work;
