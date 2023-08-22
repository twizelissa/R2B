export default function Button({btnLabel,linkTo}:{btnLabel:string,linkTo:string}) {
  return (
    <a href={`/${linkTo}`} className="btn btn--white btn--animated">
        {btnLabel}
    </a>
  )
}
