import Posts from "./Post"
import React from "./post.css"

export default function Post() {
  return (
    <div className="post">
      <img className="postImg"
      src="https://www.pixground.com/wp-content/uploads/2023/04/Clouds-Meet-The-Sea-AI-Generated-4K-Wallpaper-jpg.webp"
      alt=""
      />
      <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
            Lorem ipsum dolor sit amet.
        </span>
        <hr/>
        <span className="postDate">1 hour ago</span>
      </div>
      <div className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, vitae. Ex excepturi voluptates vero hic, fuga nesciunt. Voluptatum, recusandae iste ducimus labore natus, earum exercitationem pariatur libero sint adipisci asperiores.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ipsa dicta error adipisci distinctio, ullam neque numquam cumque deleniti illo facilis in molestiae minus quibusdam iure excepturi suscipit temporibus vero maiores ducimus delectus, quae inventore. Architecto explicabo eius nobis ipsum natus odit nesciunt qui. In distinctio saepe repellat dolor! Placeat!
      </div>
    </div>
  )
}
