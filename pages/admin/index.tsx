import AdminStyle from "../../styles/admin/AdminStyle";
import Link from "next/link";
const admin = () => {
  
  return (
    <section id="admin" className="vh-100">
      <div className="container">
        <div className="work">
          <div className="d-flex align-items-center justify-content-between">
            <div className="title">
              <span>WORK LIST</span>
              <h2>Case Studies</h2>
            </div>
            <Link href="/admin/work">
              <a>
                <button className="workPlusBtn">WORK PLUS</button>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{AdminStyle}</style>
    </section>
  );
};

export default admin;
