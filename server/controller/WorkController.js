const mysql = require("../mysql");

class WorkController {
  async create(req, res) {
    const { files, body } = req;
    const {
      url,
      name,
      startMonth,
      endMonth,
      type,
      content,
      stack,
      role,
      subTitle,
    } = body;

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
      subTitle,
    };

    const sql = {
      workInsert:
        " INSERT INTO works(name , start_date , end_date , type , mockup , content , url , sub_title) VALUES (?,?,?,?,?,?,?,?)",
      workStackInsert: "INSERT INTO work_stacks(work_id , stack) VALUES (?,?)",
      workRoleInsert: "INSERT INTO work_roles(work_id , role) VALUES (?,?)",
      workImageInsert: "INSERT INTO work_images(work_id , name) VALUES (?,?)",
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
        data.subTitle,
      ],
    };

    const workInsert = await mysql.execute(sql.workInsert, sqlData.workInsert);
    const workInsertId = workInsert[0].insertId;

    for (const element of data.stack) {
      if (!element || element.length <= 0) continue;
      const workStackData = [workInsertId, element];
      mysql.execute(sql.workStackInsert, workStackData);
    }

    for (const element of data.role) {
      if (!element || element.length <= 0) continue;
      const workRoleData = [workInsertId, element];
      mysql.execute(sql.workRoleInsert, workRoleData);
    }

    for (const element of data.image) {
      if (!element || element.length <= 0) continue;
      const workImageData = [workInsertId, element];
      mysql.execute(sql.workImageInsert, workImageData);
    }

    return res.send(true);
  }
  async get(req , res) {
    const sql = {
      select : ''
    }
  }
}

module.exports = new WorkController();
