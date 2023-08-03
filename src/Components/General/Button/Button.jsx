import { Link } from "react-router-dom"
import ArrowIcon from '../../../assets/Icons/arrow.png'

const Button = ({arrow, text, bg, textColor, link, borderColor}) => {
  return (
    <Link to={link} className={`px-5 py-3 text-lg text-center ${bg} ${textColor} rounded-md inline-flex items-center gap-3 font-semibold border ${borderColor}`}>
        {text}
        {arrow ? <img src={ArrowIcon} alt="arrow-icon" /> : ''}
    </Link>
  )
}

export default Button