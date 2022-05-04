import { LinkWrapper } from 'components/LinkWrapper'
import * as S from './styles'

export const Header = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <S.Title>William Kelvin!</S.Title>
        <div>
          <LinkWrapper title="Posts" href="teste" />
          <LinkWrapper title="Contact" href="teste" />
        </div>
      </S.Content>
    </S.Wrapper>
  )
}
