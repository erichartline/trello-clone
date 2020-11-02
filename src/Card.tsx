import React from "react"
import { CardContainer } from "./styles"

interface CardProps {
  text: string
}

const Card = ({ text }: CardProps) => {
  return <CardContainer>{text}</CardContainer>
}

export default Card
