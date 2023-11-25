
import { monomaniacFont } from "../utils/font"

type propType = {
    title?: string
    onClick?: () => void
}

const ButtonNav = ({title, onClick} : propType) => {
  return (
    <button className="bg-theme-green rounded-2xl w-[250px] h-[60px] border border-black text-white" onClick={onClick}>
        <p className={monomaniacFont.className}>{title}</p>
    </button>
  )
}

export default ButtonNav
