import { useEffect, useState } from "react";
import BasicButtons from "../muiComponents/Button";
import axios from "axios";
import CreatePost from "./CreatePost";
import Post from "./Post";
import SiteLogo from "../images/SiteLogo.jpg";
import { useSelector } from "react-redux";

const FeedPage = () => {
  const [isPost, setIsPost] = useState(false);
  const [postTextContent, setPostTextContent] = useState("");
  const [allPosts, setAllPosts] = useState([]);
  const [renderPosts, setRenderPosts] = useState(true);

  // const user_name = useSelector((store) => store.user.name);
  // const user_name_upperCase = user_name.toUpperCase();
  // const user_emailId = useSelector((store) => store.user.emailId);

  const handlePostButtonClick = async () => {
    if (postTextContent != "") {
      await axios.post("http://localhost:3000/api/posts/createPost", { textContent: postTextContent });
      setIsPost(!isPost);
      setPostTextContent("");
      setRenderPosts(!renderPosts);
    }
  };

  useEffect(() => {
    async function postsFunc() {
      const getAllPosts = await axios.get("http://localhost:3000/api/posts/allPosts");
      setAllPosts(getAllPosts.data);
    }

    postsFunc();
  }, [renderPosts]);

  return (
    <div className="text-white w-[100%] ">
      {isPost && (
        <div className="sticky top-10 z-30">
          <CreatePost
            textValue={postTextContent}
            onChangeHandle={(e) => setPostTextContent(e.target.value)}
            onClickHandle={handlePostButtonClick}
            onClickCrossHandle={() => {
              if (isPost) setIsPost(false);
            }}
          />
        </div>
      )}

      <div className="z-20 shadow-lg h-[4rem] bg-[#3d3d3d] sticky top-0 flex">
        <img className="ml-[10.7rem] my-1" src={SiteLogo} alt="" />
        <div className="my-auto ml-36 text-black ">
          <input className="py-1 px-3 w-[300px] rounded-full" placeholder="⌕  Search..." type="text" />
        </div>
        <div className="flex flex-row-reverse w-full my-auto mx-24">
          <div className="h-[3rem] w-[3rem] rounded-full bg-green-500 border cursor-pointer">
            <div className="text-4xl flex justify-center">S</div>
          </div>
        </div>
      </div>

      <div className={`grid grid-cols-12 ${isPost ? "brightness-50" : "brightness-100"}`}>
        <div className="h-screen border-r sticky top-16"></div>
        <div className="col-span-11">
          <div className="grid grid-cols-10 gap-4 mx-4 mt-4">
            <div className="col-span-2 w-[100%] h-auto mx-auto">
              <div className="flex justify-center py-1 text-black sticky top-16">
                <BasicButtons
                  label={"Create a new Post"}
                  width={200}
                  onClick={() => {
                    setIsPost(!isPost);
                  }}
                />
              </div>
            </div>
            <div className="col-span-5 w-[100%] h-auto">{allPosts.length > 0 && allPosts.map((post) => <Post key={post._id} post={post} />)}</div>
            <div className="col-span-3 w-[100%] h-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedPage;
