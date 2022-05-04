import { ExperienceCard } from 'components/ExperienceCard'
import { Header } from 'components/Header'
import * as S from './styles'

export default function AboutTemplate() {
  return (
    <S.Wrapper>
      <Header />
      <S.Content>
        <span>About me</span>
        <p>
          I'am currently in the third semester of my Computer Engineering degree
          and working as an Intern in a Frontend Developer role.
          <br />
          <br /> I started to have contact with the Tech world around 2 years
          ago, when I was giving my first steps in basic Programming Logic.
          Around that time I decided that my favorite part of web/mobile
          development was the Client side in Front end, and here I'am :D.
        </p>
        <span>Experience</span>
        <ExperienceCard
          title="Frontend Developer - Dataside"
          description="I work at Dataside building the Frontend of web and mobile solutions,
          using: React, React Native, Typescript and Styled-Components. At
          Dataside I was able to contribute in Xeguei mobile App and Xeguei
          Backoffice that was a administration part of the App."
        />
      </S.Content>
    </S.Wrapper>
  )
}
