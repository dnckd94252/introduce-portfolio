const mysql = require("../mysql");

class WorkController {
  async create(req, res) {
    const { files, body } = req;
    const { name, startMonth, endMonth, type, content, stack, role } = body;

    const mockup = req.files
      .filter(item => item.fieldname === "mockup")
      .map(item => item.filename);

    const image = req.files
      .filter(item => item.fieldname === "image")
      .map(item => item.filename);
    
    const data = {
      name,
      startMonth,
      endMonth,
      type,
      content,
      stack: stack.length > 1 ? stack : [stack],
      role: role.length > 1 ? role : [role],
      mockup,
      image
    };

    
}
}

module.exports = new WorkController();
