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

const PathLine: React.FC<Props> = ({
  $strokeWidth = 8,
  $color = "#E9DFD9",
  $opacity = "0.32",
  $rotate = 0,
  $type = 1,
}: Props) => {
  if ($type === 2) {
    return (
      <svg
        viewBox="0 0 1366 1484"
        version="1.1"
        preserveAspectRatio="none"
        style={{ transform: `rotate(${$rotate}deg)` }}
      >
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity={$opacity}>
          <path
            d="M707.885658,12.3777288 C953.163076,-36.3932686 1007.11799,76.2815564 953.163076,127.606731 C900.663076,177.547908 893.90829,30.6067314 1063.16308,46.8182608 C1232.41786,63.0297902 1404.07735,288.5498 1186.70414,744.5 C1073.88523,981.142788 909.856648,1081.22309 770.251895,1132.60967 C498.629416,1232.59014 487,1512.31133 681,1482"
            stroke={$color}
            strokeWidth={$strokeWidth}
          ></path>
        </g>
      </svg>
    )
  }
  if ($type === 3) {
    return (
      <svg
        viewBox="0 0 1366 1137"
        version="1.1"
        preserveAspectRatio="none"
        style={{ transform: `rotate(${$rotate}deg)` }}
      >
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity={$opacity}>
          <path
            d="M703,52.6778987 C835.809863,-67.9879137 1037,28.5967475 1000,256.485922 C963,484.375097 598,816.966822 677.519762,1137.32874"
            stroke={$color}
            strokeWidth={$strokeWidth}
          ></path>
        </g>
      </svg>
    )
  }
  if ($type === 4) {
    return (
      <svg
        viewBox="0 0 1366 1453"
        version="1.1"
        preserveAspectRatio="none"
        style={{ transform: `rotate(${$rotate}deg)` }}
      >
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity={$opacity}>
          <path
            d="M678.666502,-3.41060513e-13 C651.5,161.944012 849.123478,309.175716 790,511 C719.673713,751.066265 407.437047,927.96839 347.293346,877 C236.586692,783.182362 829.950403,674.763141 975.294508,847.88157 C1120.63861,1021 879.992818,1173.22473 836.308821,1173.22473 C792.624824,1173.22473 803.033269,1107 883.493107,1142 C963.952944,1177 971.45847,1414.07901 721.234512,1452.50502"
            stroke={$color}
            strokeWidth={$strokeWidth}
          ></path>
        </g>
      </svg>
    )
  }
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
