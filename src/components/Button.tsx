import { Link } from "react-router-dom";

export default function Button({ btnLabel , linkTo}:{btnLabel:string,linkTo:string}) {
  return (
    <div className="">
      {/* <a href={`/${linkTo}`} >
        {btnLabel}
    </a> */}
    <Link to={`${linkTo}`} className="btn btn--white btn--animated">
      {btnLabel}
    </Link>
    </div>
  )
}
