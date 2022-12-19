import React from "react";
import IMAGE_1 from "../../assets/1_4.png";
import IMAGE_2 from "../../assets/2.png";
import IMAGE_3 from "../../assets/3.png";
import IMAGE_4 from "../../assets/1_4.png";
import { nanoid } from "nanoid";

const prop1 = {
  input: IMAGE_1,
  target: IMAGE_2,
  task: "repose",
  body: "upper_body",
};

const prop2 = {
  input: IMAGE_3,
  target: IMAGE_4,
  task: "garment_transfer",
  body: "upper_body",
};

const Row = ({ title, body, border = true }) => {
  return (
    <div
      className={`flex grow flex-col border-gray-400 ${
        border ? "border-r" : ""
      }`}
    >
      <div className="border-gray-400 border-b rounded-tl flex p-2">
        <h6 className="text-white font-bold">{title}</h6>
      </div>
      {body}
    </div>
  );
};
const ImageRow = ({ imgSrc, border = true, onClick = () => null }) => {
  return (
    <>
      <div
        className={`flex p-8 min-w-[200px] h-[120px] ${
          border ? "border-gray-400 border-b" : ""
        }`}
        onClick={onClick}
      >
        <img
          src={imgSrc}
          className="rounded h-[60px] object-contain"
          alt="thumbnail"
        />
      </div>
    </>
  );
};

const TextRow = ({ text, border = true, onClick = () => null }) => {
  return (
    <div
      className={`flex p-8 min-w-[200px] h-[120px] ${
        border ? "border-gray-400 border-b" : ""
      }`}
      onClick={onClick}
    >
      <h2 className="text-white font-bold">{text}</h2>
    </div>
  );
};

const ExampleContainer = ({
  file1,
  setFile1,
  preview1,
  setPreview1,
  file2,
  setFile2,
  preview2,
  setPreview2,
  setTask,
  setBody,
}) => {
  const urlToObject = async (path) => {
    let response = await fetch(path);
    let data = await response.blob();
    let name = nanoid();
    let metadata = {
      type: "image/png",
    };
    return new File([data], name, metadata);
  };
  const setProperties = async (options) => {
    const [imageBlob1, imageBlob2] = await Promise.all([
      urlToObject(options.input),
      urlToObject(options.target),
    ]);
    setFile1(imageBlob1);
    setFile2(imageBlob2);
    console.log(options);
    setPreview1(options.input);
    setPreview2(options.target);
    setTask(options.task);
    setBody(options.body);
  };

  return (
    <div className="bg-slate-700 rounded flex">
      <Row
        title={"Input"}
        body={
          <>
            <ImageRow imgSrc={IMAGE_1} onClick={() => setProperties(prop1)} />
            <ImageRow
              imgSrc={IMAGE_3}
              border={false}
              onClick={() => setProperties(prop2)}
            />
          </>
        }
      />
      <Row
        title={"Target"}
        body={
          <>
            <ImageRow imgSrc={IMAGE_2} onClick={() => setProperties(prop1)} />
            <ImageRow
              imgSrc={IMAGE_4}
              border={false}
              onClick={() => setProperties(prop2)}
            />
          </>
        }
      />
      <Row
        title={"Task"}
        body={
          <>
            <TextRow text={"repose"} onClick={() => setProperties(prop1)} />
            <TextRow
              text={"garment_transfer"}
              border={false}
              onClick={() => setProperties(prop2)}
            />
          </>
        }
      />
      <Row
        title={"Body Part to focus on"}
        body={
          <>
            <TextRow text={"upper_body"} onClick={() => setProperties(prop1)} />
            <TextRow
              text={"upper_body"}
              border={false}
              onClick={() => setProperties(prop2)}
            />
          </>
        }
        border={false}
      />
    </div>
  );
};

export default ExampleContainer;
