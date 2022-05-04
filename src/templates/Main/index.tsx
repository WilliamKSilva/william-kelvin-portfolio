import { Header } from 'components/Header'
import * as S from './styles'

export default function MainTemplate() {
  return (
    <S.Wrapper>
      <Header />
      <S.Content>
        <span>Hello, my name is William and I'am a Software Engineer!</span>
        <section>
          <a href="/about">About me</a>
          <a>Side projects</a>
          <a>Contact</a>
          <a>Posts</a>
        </section>
      </S.Content>
    </S.Wrapper>
  )
}
