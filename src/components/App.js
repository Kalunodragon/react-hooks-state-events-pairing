import video from "../data/video.js";
import ComButton from "./ComButton.js";
import VideoInfo from "./VideoInfo"
import Votes from "./Votes.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <VideoInfo props={video}/>
      <Votes upvotes={video.upvotes} downvotes={video.downvotes}/>
      <ComButton props={video.comments}/>
    </div>
  );
}

export default App;

/*

App
|_video (details, name, views, upload date) ***DONE
|_votes - buttons(upvote, downvote) {vote, setVote state} [Bonus: react forms abstraction]
|_hide comments button / show comments button {comment, setComment state}
  |_comments [conditinally render]

BONUS:
Add upvote/downvote buttons to each comment
Add a search bar to search comments by username
Add a "Remove Comment" button to delete comments from the page
Add a sorting feature to sort the comments
*/