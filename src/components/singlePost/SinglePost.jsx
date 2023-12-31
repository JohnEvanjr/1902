import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.unsplash.com/photo-1468581264429-2548ef9eb732?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-regular fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>John Evan</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ipsam, dignissimos sed sit ut eveniet corrupti accusantium quis temporibus reprehenderit veritatis similique eius aperiam voluptatem neque provident sunt eaque laudantium culpa molestias, enim exercitationem quidem consequatur ipsa! Cupiditate in deserunt minus delectus doloremque dolore pariatur nostrum recusandae accusantium neque esse, fugit voluptatem harum illo tenetur placeat quisquam corporis odio dignissimos consequuntur id atque ullam soluta autem. Nulla dolorem provident ipsam eaque labore. Expedita eaque reprehenderit vel consequatur nihil, cupiditate neque, maiores maxime modi vero distinctio quaerat animi. Laborum quidem laudantium vitae in quos soluta inventore, exercitationem natus corporis consequuntur cupiditate illo sint reprehenderit? Velit odit a dolore? Sit ad perferendis hic quod eos aut cupiditate ut a cumque praesentium, ipsum, corporis officiis tempora dignissimos quisquam necessitatibus esse ab? Eaque officiis nemo rem suscipit voluptatem dolorum delectus incidunt ab iure aliquam quos, dolorem consequuntur repellat tenetur dicta, cumque ipsum soluta corporis!
          </p>
      </div>
    </div>
  );
}
