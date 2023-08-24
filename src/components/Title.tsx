export default function Title({title}:{title:string}) {
  return (
    <div>
        <div className="border-[.3rem] border-secondColor w-40 my-4"></div>
        <h1 className='text-white text-headerFontPhone md:text-headerFontWeb'>{title}</h1>
    </div>
  )
}
