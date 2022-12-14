import WorkStyle from "../../styles/admin/WorkStyle";
import { AiOutlinePlus } from "react-icons/ai";
import { useState, useEffect, useRef } from "react";
import { pickPicture, readFile, filesBase64Incode } from "../../fnc/work";
import Image from "next/image";
import axios from "axios";

const Work = () => {
  const [role, setRole] = useState([0]);
  const [stack, setStack] = useState([0]);
  const mockupFileInput = useRef();
  const imageFileInput = useRef();

  // 목업 , 이미지 파일 배열 안 form data로 post하기 위함
  const [mockupVal, setMockupVal] = useState([]);
  const [imageVal, setImageVal]: FormData | any = useState();

  // 이미지 Preview 띄우기 위함
  const [mockupSrc, setMockupSrc]: any = useState([]);
  const [imagesSrc, setImagesSrc]: any = useState([]);

  const rolePlus = () => setRole([...role, role.length]);
  const stackPlus = () => setStack([...stack, stack.length]);

  const submitAction = async (e : any) => {
    e.preventDefault();
    const inputFormData = new FormData();

    const inputTag: any = document.getElementsByTagName("input");
    const nameVal = inputTag["name"].value;
    const startMonthVal = inputTag["startMonth"].value;
    const endMonthVal = inputTag["endMonth"].value;
    const urlVal = inputTag["url"].value;
    const subTitleVal = inputTag["subTitle"].value;
    const roleVal: any = [];
    const typeVal: any = document.getElementsByTagName("select").type.value;
    const contentVal: any =
      document.getElementsByTagName("textarea").content.value;
    const stackVal: string[] = [];

    const roleInput: any = document.getElementsByName("role");
    const stackInput = document.getElementsByName("stack");

    roleInput.forEach((item: any) => {
      roleVal.push(item.value);
    });

    stackInput.forEach((item: any) => {
      stackVal.push(item.value);
    });

    const formVal: any = {
      name: nameVal,
      startMonth: startMonthVal,
      endMonth: endMonthVal,
      role: roleVal,
      type: typeVal,
      content: contentVal,
      stack: stackVal,
      mockup: mockupVal,
      image: imageVal,
      url : urlVal,
      subTitle : subTitleVal,
    };

    for (let idx in formVal) {
      if (
        idx === "mockup" ||
        idx === "image" ||
        idx === "stack" ||
        idx === "role"
      )
        continue;
      inputFormData.append(idx, formVal[idx]);
    }

    inputFormData.append("image", formVal.image);

    await appendFormData(inputFormData, formVal.image, "image");
    await appendFormData(inputFormData, formVal.mockup, "mockup");

    appendTextData(inputFormData, formVal.stack, "stack");
    appendTextData(inputFormData, formVal.role, "role");

    await axios
      .post("/api/work", inputFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(res => {
        const {data} = res;
        if(data) return alert('성공적으로 저장하였습니다.');
      })
      .catch(err => {
        return alert('에러');
      });
  };

  const appendTextData = (body: FormData, data: string[], name: string) => {
    data.forEach(item => {
      body.append(name, item);
    });
    return body;
  };

  const mockupFileInputChange = async (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const { files } = event.target;

      // 이미지 preview 띄우기
      const imageSrcs: any = await filesBase64Incode(files);
      setMockupSrc([...imageSrcs]);

      setMockupVal(files);
    }
  };

  const imageFileInputChange = async (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const { files } = event.target;

      // 이미지 preview 띄우기
      const imageSrcs: any = await filesBase64Incode(files);
      setImagesSrc([...imageSrcs]);

      setImageVal(files);
    }
  };

  const appendFormData = async (body: FormData, files: any, name: string) => {
    const filesForMapArray: File[] = [...files];
    Promise.all(
      filesForMapArray.map(async (item: any) => {
        await body.append(name, item);
      })
    );
    return body;
  };

  const mockupInputClick = (event: any) => {
    mockupFileInput.current.click();
  };

  const imageInputClick = (event: any) => {
    imageFileInput.current.click();
  };

  return (
    <section id="work" className="pb-5 d-flex  justify-content-center">
      <input
        type="file"
        ref={mockupFileInput}
        onChange={mockupFileInputChange}
        accept="image/*"
        style={{ display: "none" }}
      />
      <input
        type="file"
        ref={imageFileInput}
        onChange={imageFileInputChange}
        accept="image/*"
        multiple
        style={{ display: "none" }}
      />
      <div className="container contents">
        <div className="title mb-5 border-bottom">
          <span>작업물 업로드</span>
          <h2>WORK LIST UPLOAD</h2>
        </div>
        <form action="" className="work-plus">
          <div className="item d-flex flex-column mt-3">
            <span>NAME</span>
            <input
              type="text"
              className="pt-4 pb-4 pl-3 pr-3 mt-4"
              placeholder="작업물 이름"
              name="name"
            />
          </div>
          <div className="item d-flex flex-column mt-3">
            <span>URL</span>
            <input
              type="text"
              className="pt-4 pb-4 pl-3 pr-3 mt-4"
              placeholder="작업물 URL"
              name="url"
            />
          </div>
          <div className="item d-flex flex-column mt-3">
            <span>SUB TITLE</span>
            <input
              type="text"
              className="pt-4 pb-4 pl-3 pr-3 mt-4"
              placeholder="서브 타이틀"
              name="subTitle"
            />
          </div>
          <div className="item d-flex flex-column mt-3">
            <span>YEAR / MONTH</span>
            <div className="d-flex align-items-center date">
              <input
                type="month"
                className="pt-4 pb-4 pl-3 pr-3 mt-4"
                name="startMonth"
              />
              <span className="ml-4 mr-4 mt-3">~</span>
              <input
                type="month"
                className="pt-4 pb-4 pl-3 pr-3 mt-4"
                name="endMonth"
              />
            </div>
          </div>
          <div className="item d-flex flex-column mt-3">
            <div className="d-flex align-items-center">
              <span>ROLE</span>
              <button
                type="button"
                className="d-flex align-items-center justify-content-center plusBtn ml-3"
                onClick={rolePlus}
              >
                <AiOutlinePlus />
              </button>
            </div>
            {role.map((ele, idx) => (
              <input
                key={idx}
                type="text"
                className="pt-4 pb-4 pl-3 pr-3 mt-4"
                placeholder="역할"
                name="role"
              />
            ))}
          </div>
          <div className="item d-flex flex-column mt-3">
            <span>TYPE</span>
            <select name="type" className="pt-4 pb-4 pl-3 pr-3 mt-4">
              <option value="solo">SOLO</option>
              <option value="team">TEAM</option>
            </select>
          </div>
          <div className="item d-flex flex-column mt-3">
            <span>MOCK-UP</span>
            <button
              type="button"
              className="mockup-btn pt-4 pb-4 pl-3 pr-3 mt-4 mb-3"
              onClick={mockupInputClick}
            >
              MOCKUP FILE UPLOAD
            </button>
            <div className="d-flex align-items-center">
              {mockupSrc.length > 0
                ? mockupSrc.map((item, key) => (
                    <Image
                      key={key}
                      src={item}
                      width={200}
                      height={100}
                      objectFit="cover"
                      className="mr-3"
                    />
                  ))
                : null}
            </div>
          </div>
          <div className="item d-flex flex-column mt-3">
            <span>CONTENT</span>
            <textarea
              name="content"
              className="pt-4 pb-4 pl-3 pr-3 mt-4"
              placeholder="작업물에 관한 내용"
              rows={10}
            ></textarea>
          </div>
          <div className="item d-flex flex-column mt-3">
            <div className="d-flex align-items-center">
              <span>STACK</span>
              <button
                type="button"
                className="d-flex align-items-center justify-content-center plusBtn ml-3"
                onClick={stackPlus}
              >
                <AiOutlinePlus />
              </button>
            </div>
            {stack.map((ele, idx) => (
              <input
                key={idx}
                type="text"
                className="pt-4 pb-4 pl-3 pr-3 mt-4"
                placeholder="사용스택"
                name="stack"
              />
            ))}
          </div>
          <div className="item d-flex flex-column mt-3">
            <span>IMAGES</span>
            <button
              type="button"
              className="mockup-btn pt-4 pb-4 pl-3 pr-3 mt-4"
              onClick={imageInputClick}
            >
              IMAGE FILE UPLOAD
            </button>
            <div className="d-flex align-items-center mt-3">
              {imagesSrc.length > 0
                ? imagesSrc.map((item, key) => (
                    <Image
                      key={key}
                      src={item}
                      width={200}
                      height={100}
                      objectFit="cover"
                      className="mr-3"
                    />
                  ))
                : null}
            </div>
          </div>
          <button
            type="button"
            onClick={submitAction}
            className="mt-5 successBtn pt-4 pb-4 pl-3 pr-3"
          >
            SUBMIT
          </button>
        </form>
      </div>
      <style jsx>{WorkStyle}</style>
    </section>
  );
};
export default Work;
