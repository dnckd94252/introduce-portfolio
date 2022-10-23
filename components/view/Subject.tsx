import SubjectStyle from "../../styles/view/SubjectStyle";

const Subject = (props: any) => {
  const { data } = props;
  const { work , work_stack } = data;
  const { content } = work[0];
  const divide = content.split("\n");

  return (
    <div className="subject">
      <div className="item">
        <div className="title mb-3">
          <span>CONTENT</span>
        </div>
        {divide.map((item: string, idx: number) => (
          <p key={idx} className="mb-2">{item}</p>
        ))}
      </div>
      <div className="item">
        <div className="title">
          <span>STACK</span>
        </div>
        <div className="element mt-3">
          <div className="stack mt-1 d-flex align-items-center flex-wrap">
            {work_stack.map((ele: any, idx: number) => (
              <div className=" stackItem d-flex align-items-center justify-content-center" key={idx}>
                {ele.stack}
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{SubjectStyle}</style>
    </div>
  );
};

export default Subject;
