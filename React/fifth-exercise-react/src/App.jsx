import Comment from "./Components/Comment"
import CommentSection from "./Components/CommentSection"
import useCommentCollection from "./hooks/useCommentCollection"

export default function App() {
  const { comments, addComment } = useCommentCollection()

  return (
    <>
      <CommentSection
        addComment={addComment}
      />

      <div className="comments">
        {comments.length > 0
          ? comments.map((comment) => (
            <Comment
              key={comment.id}
              date={comment.date}
              email={comment.email}
              comment={comment.comment} />
          ))
          : (
            <h2>Seja o primeiro a comentar!</h2>
          )}
      </div>
    </>
  )
}