import WorkStyle from "../../styles/admin/WorkStyle";
import { AiOutlinePlus } from "react-icons/ai";
import { useState, useEffect, useRef } from "react";
import { pickPicture } from "../../fnc/work";
import Image from "next/image";
import axios from "axios";

const Work = () => {
  const [role, setRole] = useState([0]);
  const [stack, setStack] = useState([0]);
  const [mockup, setMockup] = useState([]);
  const [images, setImages] = useState([]);

  const rolePlus = () => setRole([...role, role.length]);
  const stackPlus = () => setStack([...stack, stack.length]);

  const base64ReadPush = async ([state, setState]: any) => {
    const picture = await pickPicture();
    if (!picture) return alert("오류 혹은 이미지형식 파일이 아닙니다.");
    setState([...state, picture]);
    return true;
  };

  const _bufferProduce = async (base64: string) => {
    const data = base64.replace(/^data:image\/\w+;base64,/, "");
    const buf: Buffer = Buffer.from(data, "base64");
    return buf;
  };

  const submitAction = async () => {
    const inputTag: any = document.getElementsByTagName("input");
    const nameVal = inputTag["name"].value;
    const startMonthVal = inputTag["startMonth"].value;
    const endMonthVal = inputTag["endMonth"].value;
    const roleVal: any = [];
    const typeVal: any = document.getElementsByTagName("select").type.value;
    const contentVal: any =
      document.getElementsByTagName("textarea").content.value;
    const stackVal = [];

    const roleInput: any = document.getElementsByName("role");
    roleInput.forEach((item: any) => {
      roleVal.push(item.value);
    });

    const stackInput = document.getElementsByName("stack");
    stackInput.forEach((item: any) => {
      stackVal.push(item.value);
    });

    const imagesInput = images.map(
      async (item: string) => await _bufferProduce(item)
    );

    const mockupInput = mockup.map(
      async (item: string) => await _bufferProduce(item)
    );

    const postVal = {
      nameVal,
      startMonthVal,
      endMonthVal,
      roleVal,
      typeVal,
      contentVal,
      imagesInput,
      mockupInput,
    };
    
    axios.post("/api/work", postVal).then(res => {
      console.log(res);
    });
  };

  const mockupUpload = async () => {
    if (mockup.length > 0) return alert("목업파일은 한개만 가능합니다.");
    await base64ReadPush([mockup, setMockup]);
  };

  const imageUpload = async () => {
    await base64ReadPush([images, setImages]);
  };

  return (
    <section id="work" className="pb-5 d-flex  justify-content-center">
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
              onClick={mockupUpload}
            >
              MOCKUP FILE UPLOAD
            </button>
            <div className="d-flex align-items-center">
              {mockup.length > 0
                ? mockup.map((item, key) => (
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
              onClick={imageUpload}
            >
              IMAGE FILE UPLOAD
            </button>
            <div className="d-flex align-items-center mt-3">
              {images.length > 0
                ? images.map((item, key) => (
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
