import mysql from "../../server/mysql";

const fs = require("fs");

const _bufferProduce = async (base64: string) => {
  const data = base64.replace(/^data:image\/\w+;base64,/, "");
  const buf: Buffer = Buffer.from(data, "base64");
  return buf;
};

const insertFile = async (src: string, bufferFile: Buffer) => {
  await fs.writeFile(src, bufferFile, (err: any) => {
    if (err) throw err;
  });
};

const inputAction = async (data: any) => {
  const {
    nameVal,
    startMonthVal,
    endMonthVal,
    roleVal,
    typeVal,
    contentVal,
    imageVal
  } = data;
  console.log(imageVal.getAll('image'));
  const imagesName: string[] = [];
  //   목업파일 저장
  const mockupName : string = `${Date.now()}` + nameVal + ".png";
  // const mockupBuffer : Buffer = await _bufferProduce(mockup[0]);
  // const inputSrc = "./public/contents/";
  // await insertFile(inputSrc + mockupName, mockup[0]);

  // 이미지파일 저장
  // imagesVal.forEach(async (item: string, idx: number) => {
  //   const itemName = `${Date.now()}` + nameVal + `_images${idx}` + ".png";
  //   const itemBuffer: Buffer = await _bufferProduce(item);
  //   await insertFile(inputSrc + itemName, itemBuffer);
  // });
  // console.log(imagesInput);
  // const sql = {
  //   insertWorks:
  //     "INSERT INTO works (start_date , end_date , type , mockup , content , name) VALUES (?,?,?,?,?,?)",
  //   insertStacks: "INSERT INTO work_stack (work_id , stack) VALUES (?,?)",
  //   insertRoles: "INSERT INTO work_roles (work_id , role) VALUES (?,?)",
  //   insertImages: "INSERT INTO work_images (src , work_id , name)",
  // };

  // const sqlItem = {
  //   insertWorks: [
  //     startMonthVal,
  //     endMonthVal,
  //     typeVal,
  //     mockupName,
  //     contentVal,
  //     nameVal,
  //   ],
  // };
  
  // const insertWork = await mysql.query(sql.insertWorks , sqlItem.insertWorks);
  
  // console.log(insertWork);
};

const works = async (req: any, res: any) => {
  const { method } = req;
  if (method === "POST") await inputAction(req.body);

  // const sql = {
  //     select : 'SELECT * from works',
  // }
  // const [item] = await mysql.query(sql.select);
};

export default works;
