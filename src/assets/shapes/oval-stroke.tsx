import React from "react"

interface Props {
  $strokeWidth?: number | string
  $color?: string
  $type?: number | string
  $rotate?: number | string
}

const OvalStroke: React.FC<Props> = ({ $strokeWidth = 3, $color = "#FFD203", $type = 1, $rotate = 0 }: Props) => {
  if ($type === 2) {
    return (
      <svg viewBox="0 0 180 180" version="1.1" style={{ transform: `rotate(${$rotate}deg)` }}>
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g stroke={$color} strokeWidth={$strokeWidth}>
            <path d="M84.9104652,1.64581676 C103.608185,0.412890251 124.222469,7.06905701 141.155754,18.1116461 C157.842537,28.9934853 170.99696,44.1506314 175.085302,60.3343176 C178.889276,75.3923317 174.758828,91.3206923 165.946683,106.335693 C155.645324,123.888163 138.934751,140.200195 120.665222,152.499585 C103.063898,164.349127 83.9247283,172.476867 66.3779476,175.352745 C50.1920979,178.00557 35.3583415,176.201357 24.459173,168.554249 C13.3369038,160.878165 6.25427594,147.242459 3.21036005,131.057541 C0.00759681834,114.028011 1.28556203,94.1604469 7.16741475,75.2141365 C13.3346393,55.5324991 24.3422321,36.8254914 38.8171409,23.1668407 C51.7396042,10.9730912 67.4314787,2.80322281 84.9104652,1.64581676 Z"></path>
          </g>
        </g>
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 42 45" version="1.1" style={{ transform: `rotate(${$rotate}deg)` }}>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g stroke={$color} strokeWidth={$strokeWidth} transform="translate(-894.000000, -25.000000)">
          <g transform="translate(895.907201, 27.189159)">
            <path
              d="M37.325056,16.8329685 C39.4945091,25.1992485 36.2403295,33.6624351 30.3381412,37.8940285 C24.4678565,42.0933195 15.8857555,42.0610173 9.37739646,37.6356105 C2.86903738,33.2102038 -1.59748356,24.3916925 0.540065747,16.0254125 C2.67761505,7.69143485 11.4192346,-0.190311507 19.5227797,0.00350192814 C27.6582286,0.197315363 35.1875067,8.46668859 37.325056,16.8329685 Z"
              id="Path"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  )
}

export default OvalStroke
