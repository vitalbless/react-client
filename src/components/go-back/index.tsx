import { FaRegArrowAltCircleLeft } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

export const GoBack = () => {
  const navigate = useNavigate()
  const handleGoBack = () => {
    //-1 значит возвращение на предыдущую страницу
    navigate(-1)
  }
  return (
    <div
      onClick={handleGoBack}
      className="text-default-500 flex items-center gap-2 mb-10 cursor-pointer"
    >
      <FaRegArrowAltCircleLeft />
      Назад
    </div>
  )
}
