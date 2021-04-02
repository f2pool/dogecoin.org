import { keyframes } from "styled-components"

export const shake = keyframes`
  0% { transform: translate(0, 0) rotate(0deg); }
  5% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(0, 0) rotate(0deg); }
`

export const float = keyframes`
  0% { transform: translatey(0px); }
  50% { transform: translatey(-10px); }
  100% { transform: translatey(0px); }
`

export const fadeIn = keyframes`
  0% { opacity: 0;}
  100% { opacity: 1 }
`

export const rotateIn = keyframes`
  0% { transform: scale(3) translate(-100%, 100%) rotate(20deg); opacity: 0 }
  100% {  transform: scale(1) translate(0, 0) rotate(0deg);  opacity: 1 }
`

export const popUp = keyframes`
  0% { transform: scale(0.9); opacity: 0 }
  100% {  transform: scale(1); opacity: 1 }
`
