// Import Modules
import { useState } from "react";
import { AiFillFileImage, AiOutlineFormatPainter } from "react-icons/ai";

// Import Components
import ImagePicker from "./components/ImagePicker/ImagePicker";
import OutputImagePicker from "./components/ImagePicker/OutputImagePicker";

// Import Styles
import "./App.css";

function App() {
  const [task, setTask] = useState("repose");
  const [body, setBody] = useState("upper_body");
  const [output, setOutput] = useState(null);
  const [file1, setFile1] = useState(null);
  const [preview1, setPreview1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [preview2, setPreview2] = useState(null);

  return (
    <div className="flex bg-slate-900 w-full h-screen px-8 py-4">
      <div className="flex flex-col gap-4">
        <ImagePicker
          key="input1"
          file={file1}
          setFile={setFile1}
          preview={preview1}
          setPreview={setPreview1}
        />
        <ImagePicker
          key="input2"
          file={file2}
          setFile={setFile2}
          preview={preview2}
          setPreview={setPreview2}
        />
      </div>
      <div className="flex flex-col w-1/3 justify-center items-center">
        <h1 className="text-white font-extrabold text-3xl flex mb-8">
          <AiOutlineFormatPainter /> EcTo
        </h1>
        <div className="bg-slate-700 text-white p-4 flex flex-col gap-4 rounded">
          <h3 className="font-bold text-center text-lg">Options</h3>
          <div className="flex gap-4 justify-between">
            <p>Task</p>
            <select
              name="task"
              id="task"
              value={task}
              defaultValue={task}
              onChange={(e) => setTask(e.target.value)}
              className="bg-gray-400 rounded"
            >
              <option>repose</option>
              <option>garment tracker</option>
            </select>
          </div>
          <div className="flex gap-4 justify-between">
            <p>Body part to focus on</p>
            <select
              name="body"
              id="body"
              value={body}
              defaultValue={body}
              onChange={(e) => setBody(e.target.value)}
              className="bg-gray-400 rounded"
            >
              <option value={"upper_body"}>Upper Body</option>
              <option value={"lower_body"}>Lower Body</option>
            </select>
          </div>
          <button className="bg-green-600 font-bold py-2 flex justify-center items-center">
            <AiFillFileImage /> Generate
          </button>
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <OutputImagePicker output={output} setOutput={setOutput} />
      </div>
    </div>
  );
}

export default App;
