import { AiOutlineLike } from "react-icons/ai";
import { GrUploadOption } from "react-icons/gr";
import { FaRegComment } from "react-icons/fa";
import { CiShare1 } from "react-icons/ci";


const Post = ({ post }) => {
  return (
    <div className="border h-auto bg-[#3d3d3d] border-[#3d3d3d] rounded-lg mb-4">
      <div className="flex justify-between">
        <div className="flex w-[100%]">
          <div className="w-[10%] h-[4rem] border m-4 bg-green-600"></div>
          <div>
            <div className="mt-4 ml-3 flex">
              <div>Sameer Kant</div>
              <div className="ml-2 content-center">.</div>
            </div>
            <div className="text-xs flex">
              <div className="ml-3">Gold Influencer</div>
              <div className="ml-2">|</div>
              <div className="ml-2">997K+ Reach</div>
            </div>
          </div>
        </div>
        <div className=""></div>
      </div>
      <div className="mx-4 mb-4 mt-1 whitespace-pre-wrap">
        {post.textContent}
      </div>
      <div className="mx-4 mb-4 mt-8 flex flex-row-reverse">
        <div className="mr-2 ml-1 cursor-pointer">
          <CiShare1 className="mx-auto" size={30} />
          <div className="text-xs flex justify-center">
            <div>Share</div>
          </div>
        </div>
        <div className="mx-2 cursor-pointer">
          <FaRegComment className="mx-auto" size={30} />
          <div className="text-xs flex justify-center">
            <div>Comment</div>
          </div>
        </div>
        <div className="mx-2 cursor-pointer">
          <GrUploadOption className="mx-auto" size={30} />
          <div className="text-xs flex justify-center">
            <div>Reach</div>
          </div>
        </div>
        <div className="mx-2 cursor-pointer">
          <AiOutlineLike className="mx-auto" size={30} />
          <div className="text-xs flex justify-center">
            <div>Like</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post