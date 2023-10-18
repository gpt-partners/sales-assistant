import { useEffect } from 'react'
import { Link, scrollSpy } from 'react-scroll'

type ScrollProps = {
  children: React.ReactElement
  LinkName: string
}
export default function Scroll({ children, LinkName }: ScrollProps) {
  useEffect(() => {
    scrollSpy.update()
  }, [])
  return (
    <Link
      activeClass="active"
      to={LinkName}
      spy={true}
      smooth={true}
      offset={50}
      duration={500}
    >
      {children}
    </Link>
  )
}
