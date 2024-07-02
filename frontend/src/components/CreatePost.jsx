import { CiImageOn } from "react-icons/ci";
import BasicButtons from "../muiComponents/Button";

const CreatePost = ({ textValue, onChangeHandle, onClickHandle }) => {
  return (
    <div className="absolute w-[100%] flex flex-col justify-center">
      <div className="flex justify-center h-[30rem]">
        <textarea
          name="post_area"
          placeholder="Write something...."
          className="z-10 text-white bg-[#181818] w-[50%] mt-4 p-4 border-l border-r border-t rounded-t-lg resize-none outline-none"
          autoFocus={false}
          value={textValue}
          onChange={onChangeHandle}
        ></textarea>
      </div>
      <div className="z-10 flex w-[100%] justify-center text-black">
        <div className="w-[50%] flex justify-between bg-[#181818] border-r border-l border-b rounded-b-lg">
          <CiImageOn className="text-white mx-6 cursor-pointer mt-2" size={30} />
          <div className="mx-4 mb-1">
            <BasicButtons label={"Post"} width={100} paddingY={0.75} onClick={onClickHandle} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatePost