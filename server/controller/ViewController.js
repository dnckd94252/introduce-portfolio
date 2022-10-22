const mysql = require("../mysql");

class ViewController {
  async get(req, res) {
    const { id } = req.body;

    const sql = {
      work: "SELECT * FROM works WHERE id=?",
      work_stack: "SELECT * FROM work_stacks WHERE work_id=?",
      work_role: "SELECT * FROM work_roles WHERE work_id=?",
      work_image: "SELECT * FROM work_images WHERE work_id=?",
    };
    
    const [work] = await mysql.query(sql.work , [id]);
    const [work_stack] = await mysql.query(sql.work_stack, [id]);
    const [work_role] = await mysql.query(sql.work_role, [id]);
    const [work_image] = await mysql.query(sql.work_image, [id]);
    
    return res.send({work , work_stack , work_role , work_image});
}
}

module.exports = new ViewController();
