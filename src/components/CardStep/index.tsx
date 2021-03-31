import React from "react"

import Oval from "../../assets/shapes/oval"
import { useFormatMessages } from "../../utils/hooks"
import { IconCart, IconWallet, IconDownload, IconKey } from "../../icons"

import * as S from "./styled"

interface CardStepProps {
  step: number
}

const OvalShape: React.FC<{ step: number }> = ({ step }) => {
  switch (step) {
    case 1:
      return <Oval $type={2} />
    case 2:
      return <Oval $type={2} $rotate={90} />
    case 3:
      return <Oval $rotate={145} />
    case 4:
      return <Oval $type={3} $rotate={330} />
    default:
      return <Oval $type={2} />
  }
}
const Icon: React.FC<{ step: number }> = ({ step }) => {
  switch (step) {
    case 1:
      return <IconKey />
    case 2:
      return <IconWallet />
    case 3:
      return <IconCart />
    case 4:
      return <IconDownload />
    default:
      return <IconKey />
  }
}

const CardStep: React.FC<CardStepProps> = ({ step }) => {
  const [
    stepOneSubtitle,
    stepOneTitle,
    stepTwoSubtitle,
    stepTwoTitle,
    stepThreeSubtitle,
    stepThreeTitle,
    stepFourSubtitle,
    stepFourTitle,
  ] = useFormatMessages([
    { id: "GUIDE_STEP_1_SUBTITLE" },
    { id: "GUIDE_STEP_1_TITLE" },
    { id: "GUIDE_STEP_2_SUBTITLE" },
    { id: "GUIDE_STEP_2_TITLE" },
    { id: "GUIDE_STEP_3_SUBTITLE" },
    { id: "GUIDE_STEP_3_TITLE" },
    { id: "GUIDE_STEP_4_SUBTITLE" },
    { id: "GUIDE_STEP_4_TITLE" },
  ])
  const stepsData = [
    {
      subtitle: stepOneSubtitle,
      title: stepOneTitle,
    },
    {
      subtitle: stepTwoSubtitle,
      title: stepTwoTitle,
    },
    {
      subtitle: stepThreeSubtitle,
      title: stepThreeTitle,
    },
    {
      subtitle: stepFourSubtitle,
      title: stepFourTitle,
    },
  ]

  return (
    <S.Card>
      <S.ShapeWrapper>
        <OvalShape step={step} />
        <S.Icon>
          <Icon step={step} />
        </S.Icon>
      </S.ShapeWrapper>
      <S.TextWrapper>
        <p>{stepsData[step - 1].subtitle}</p>
        <h3>{stepsData[step - 1].title}</h3>
      </S.TextWrapper>
    </S.Card>
  )
}

export default CardStep
