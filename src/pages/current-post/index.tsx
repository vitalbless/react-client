import { useParams } from "react-router-dom"
import { useGetPostByIdQuery } from "../../app/services/postsApi"
import { Card } from "../../components/card"
import { GoBack } from "../../components/go-back"

const CurrentPost = () => {
  const params = useParams<{ id: string }>()
  const { data } = useGetPostByIdQuery(params?.id ?? "")

  if (!data) {
    return <h2>Пост не найден</h2>
  }

  const {
    content,
    id,
    author,
    likes,
    authorId,
    likedByUser,
    createdAt,
    comments,
  } = data
  return (
    <>
      <GoBack />
      <Card
        avatarUrl={author.avatarUrl ?? ""}
        content={content}
        name={author.name ?? ""}
        likesCount={likes.length}
        likedByUser={likedByUser}
        commentCount={comments.length}
        authorId={authorId}
        id={id}
        createdAt={createdAt}
        cardFor="current-post"
      />
    </>
  )
}

export default CurrentPost
//если мне div нужен без classname то пишу просто <></>
