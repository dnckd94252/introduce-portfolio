import BreifStyle from "../../styles/view/BreifStyle";

const Breif = (props: any) => {
  const { data } = props;
  const { work, work_stack, work_role } = data;
  const [workData] = work;

  const monthToDateFormat = (month : any) => {
    const monthDate = new Date(month);
    const monthVal = monthDate.getMonth() + 1;
    const yearVal = monthDate.getFullYear();
    const dateVal = monthDate.getDate();
    return `${yearVal}-${monthVal}`;
  };

  const workStart = monthToDateFormat(workData.start_date); 
  const workEnd = monthToDateFormat(workData.end_date); 
  
  return (
    <div className="breif col-6">
      <div className="item name">
        <div className="title">
          <span>NAME</span>
          <h3 className="mt-1">{workData.name}</h3>
        </div>
      </div>
      <div className="item">
        <div className="title">
          <span>SUB TITLE</span>
          <h3 className="mt-1">{workData.sub_title}</h3>
        </div>
      </div>
      <div className="item">
        <div className="title">
          <span>MY ROLE</span>
        </div>
        <div className="element">
          <div className="role mt-1">
            {work_role.map((ele: any, idx: number) => (
              <p className="m-0" key={idx}>
                -{ele.role}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="item">
        <div className="title">
          <span>PERIOD</span>
        </div>
        <div className="element mt-1 d-flex align-items-center">
          <p className="m-0">{workStart}</p> ~ <p className="m-0">{workEnd}</p>
        </div>
      </div>
      <style jsx>{BreifStyle}</style>
    </div>
  );
};

export default Breif;
