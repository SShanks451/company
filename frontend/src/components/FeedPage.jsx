import { useEffect, useState } from "react";
import BasicButtons from "../muiComponents/Button";
import axios from "axios";
import CreatePost from "./CreatePost";
import Post from "./Post";
import SiteLogo from "../images/SiteLogo.jpg";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOutUser } from "../redux/userSlice";
import Loader from "./Loader";

axios.defaults.withCredentials = true;

const FeedPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isPost, setIsPost] = useState(false);
  const [postTextContent, setPostTextContent] = useState("");
  const [allPosts, setAllPosts] = useState([]);
  const [renderPosts, setRenderPosts] = useState(false);
  const [isProfileButton, setIsProfileButton] = useState(false);

  const handlePostButtonClick = async () => {
    if (postTextContent != "") {
      await axios.post("https://company-xkua.onrender.com/api/posts/createpost", { textContent: postTextContent });
      setIsPost(!isPost);
      setPostTextContent("");
      setRenderPosts(!renderPosts);
    }
  };

  const handleSignOutClick = async () => {
    await axios.post("https://company-xkua.onrender.com/api/users/logout");
    dispatch(signOutUser());
    navigate("/signin");
  };

  const user_info = useSelector((store) => store.user.userInfo);

  useEffect(() => {
    if (!user_info) {
      navigate("/signin");
    }

    async function postsFunc() {
      const getAllPosts = await axios.get("https://company-xkua.onrender.com/api/posts/allposts");
      setAllPosts(getAllPosts.data);
    }

    postsFunc();
  }, [renderPosts]);

  if (allPosts.length === 0) {
    return <Loader />;
  }

  const user_name_upperCase = user_info.name.toUpperCase();

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
          <div className="h-[3rem] w-[3rem] rounded-full bg-green-500 border cursor-pointer" onClick={() => setIsProfileButton(!isProfileButton)}>
            <div className="text-4xl flex justify-center">{user_name_upperCase[0]}</div>
          </div>
          {isProfileButton && (
            <div className="border w-[10rem] h-[10rem] absolute mr-5 top-[4rem]">
              <div
                className="w-[100%] border-b flex justify-center py-1 cursor-pointer"
                onClick={() => {
                  navigate("/profile");
                }}
              >
                Profile
              </div>
              <div className="w-[100%] border-b flex justify-center py-1 cursor-pointer" onClick={handleSignOutClick}>
                Sign Out
              </div>
            </div>
          )}
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
