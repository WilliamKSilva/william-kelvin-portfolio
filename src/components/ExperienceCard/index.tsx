import { Content, Wrapper } from './styles'

type ExperienceCardProps = {
  title: string
  description: string
}

export const ExperienceCard = ({ title, description }: ExperienceCardProps) => {
  return (
    <Wrapper>
      <Content>
        <strong>{title}</strong>
        <p>{description}</p>
      </Content>
    </Wrapper>
  )
}
