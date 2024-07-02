import { useEffect, useState } from "react";
import BasicButtons from "../muiComponents/Button";
import axios from "axios"
import CreatePost from "./CreatePost";
import Post from "./Post";

const FeedPage = () => {
  const [isPost, setIsPost] = useState(false);
  const [postTextContent, setPostTextContent] = useState("")
  const [allPosts, setAllPosts] = useState([])
  const [renderPosts, setRenderPosts] = useState(true);

  const handlePostButtonClick = async () => {
    if (postTextContent != "") {
      await axios.post("http://localhost:3000/api/posts/createPost", { textContent: postTextContent })
      setIsPost(!isPost)
      setPostTextContent("")
      setRenderPosts(!renderPosts)
    }
  }

  useEffect(() => {
    async function postsFunc() {
      const getAllPosts = await axios.get("http://localhost:3000/api/posts/allPosts")
      setAllPosts(getAllPosts.data)
    }

    postsFunc()
  }, [renderPosts])

  return (
    <div className="text-white w-[100%]">
      {isPost && (
        <CreatePost textValue={postTextContent} onChangeHandle={(e) => setPostTextContent(e.target.value)} onClickHandle={handlePostButtonClick} />
      )}
      <div
        className={`grid grid-cols-12 ${isPost ? "brightness-50" : "brightness-100"}`}
        onClick={() => {
          if (isPost) setIsPost(false);
        }}
      >
        <div className="h-screen border-r"></div>
        <div className="col-span-11">
          <div className="grid grid-cols-10 gap-4 mx-4 mt-4">
            <div className="col-span-2 w-[100%] h-auto mx-auto">
              <div className="flex justify-center py-2 text-black">
                <BasicButtons label={"Create a new Post"} width={200} onClick={() => {
                  setIsPost(!isPost);
                }} />
              </div>
            </div>
            <div className="col-span-5 w-[100%] h-auto">
              {
                allPosts.length > 0 && allPosts.map((post) => (
                  <Post key={post._id} post={post} />
                ))
              }


            </div>
            <div className="col-span-3 w-[100%] h-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedPage;
