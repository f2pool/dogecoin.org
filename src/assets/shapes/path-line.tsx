import React from "react"

interface Props {
  $strokeWidth?: number | string
  $color?: string
  $y?: number | string
  $x?: number | string
  $type?: number | string
  $opacity?: number | string
  $rotate?: number | string
}

const PathLine: React.FC<Props> = ({ $strokeWidth = 8, $color = "#E9DFD9", $opacity = "0.32", $rotate = 0 }: Props) => {
  return (
    <svg viewBox="0 0 507 533" version="1.1" style={{ transform: `rotate(${$rotate}deg)` }}>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" opacity={$opacity}>
        <g transform="translate(-346.000000, -143.000000)" stroke={$color} strokeWidth={$strokeWidth}>
          <path
            d="M341.289733,187.06433 C586.567151,138.293332 640.522061,250.968157 586.567151,302.293332 C534.067151,352.234509 527.312365,205.293332 696.567151,221.504862 C865.821937,237.716391 967.427293,497.073967 818.339971,642.490712"
            transform="translate(615.976541, 408.791988) rotate(909.000000) translate(-615.976541, -408.791988) "
          ></path>
        </g>
      </g>
    </svg>
  )
}

export default PathLine
