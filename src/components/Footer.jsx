import { Link } from "react-router-dom"

export default function Footer() {
    const year = new Date().getFullYear()
  return (
    <div className="h-20 bg-blue-900 text-white flex flex-col items-center justify-center">
        <p>&copy; {year} </p>
        <p>Built with &#x1F496; by <Link to={'https://www.linkedin.com/in/kudakwashe-mukucha-998b3b178/'} target={'_blank'}>kuda mukucha</Link></p>
    </div>
  )
}
