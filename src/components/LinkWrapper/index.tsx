import * as S from './styles'
import Link from 'next/link'

type CustomLinkProps = {
  title: string
  href: string
}

export const LinkWrapper = ({ title, href }: CustomLinkProps) => {
  return (
    <S.Wrapper>
      <Link href={href}>
        <S.Title>{title}</S.Title>
      </Link>
    </S.Wrapper>
  )
}
