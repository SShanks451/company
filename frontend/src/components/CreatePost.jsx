import { CiImageOn } from "react-icons/ci";
import BasicButtons from "../muiComponents/Button";
import { RxCross1 } from "react-icons/rx";

const CreatePost = ({ textValue, onChangeHandle, onClickHandle, onClickCrossHandle }) => {
  return (
    <div className="absolute w-[100%] flex flex-col justify-center h-screen">
      <div className="flex justify-center h-[30rem]">
        <textarea
          name="post_area"
          placeholder="Write something...."
          className="text-white bg-[#181818] w-[50%] p-4 border-l border-r border-t rounded-t-lg resize-none outline-none shadow-lg"
          autoFocus={false}
          value={textValue}
          onChange={onChangeHandle}
        ></textarea>
      </div>
      <div className="flex w-[100%] justify-center text-black">
        <div className="w-[50%] flex justify-between bg-[#181818] border-r border-l border-b rounded-b-lg">
          <CiImageOn className="text-white mx-6 cursor-pointer mt-2" size={30} />
          <div className="mx-4 mb-1">
            <BasicButtons label={"Post"} width={100} paddingY={0.75} onClick={onClickHandle} />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-3">
        <RxCross1 className="text-white cursor-pointer" size={30} onClick={onClickCrossHandle} />
      </div>
    </div>
  );
};

export default CreatePost;
