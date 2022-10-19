const mysql = require("../mysql");

class WorkController {
  async create(req, res) {
    const { files, body } = req;
    const { url, name, startMonth, endMonth, type, content, stack, role } =
      body;

    const mockup = req.files
      .filter(item => item.fieldname === "mockup")
      .map(item => item.filename);

    const image = req.files
      .filter(item => item.fieldname === "image")
      .map(item => item.filename);

    const monthToDateFormat = month => {
      const monthDate = new Date(month);
      const monthVal = monthDate.getMonth() + 1;
      const yearVal = monthDate.getFullYear();
      const dateVal = monthDate.getDate();
      return `${yearVal}-${monthVal}-${dateVal}`;
    };

    const data = {
      name,
      startMonth: monthToDateFormat(startMonth),
      endMonth: monthToDateFormat(endMonth),
      type,
      content,
      stack: stack.length > 1 ? stack : [stack],
      role: role.length > 1 ? role : [role],
      mockup,
      image,
      url,
    };

    console.log(data.endMonth);

    const sql = {
      workInsert:
        " INSERT INTO works(name , start_date , end_date , type , mockup , content , url) VALUES (?,?,?,?,?,?,?)",
      workStackInsert: "INSERT INTO work_stacks(work_id , stack) VALUES (?,?)",
      workRoleInsert: "INSERT INTO work_roles(work_id , role) VALUES (?,?)",
      workImageInsert:
        "INSERT INTO work_images(src , work_id , name) VALUES (?,?,?)",
    };

    const sqlData = {
      workInsert: [
        data.name,
        data.startMonth,
        data.endMonth,
        data.type,
        ...data.mockup,
        data.content,
        data.url,
      ],
    };

    await mysql.query(sql.workInsert , sqlData.workInsert);
    for (const element of data.stack) {
      if (!element || element.length <= 0) continue;
    }
  }
}

module.exports = new WorkController();
