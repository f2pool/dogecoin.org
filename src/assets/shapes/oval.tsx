import React from "react"

interface Props {
  $color?: string
  $strokeColor?: string
  $type?: number | string
  $rotate?: number | string
}

const OvalStroke: React.FC<Props> = ({ $color = "#FFD203", $strokeColor = "none", $type = 1, $rotate = 0 }: Props) => {
  if ($type === 2) {
    return (
      <svg viewBox="0 0 67 71" version="1.1" style={{ transform: `rotate(${$rotate}deg)` }}>
        <g fill={$color}>
          <path d="M65.2335749,24.0347813 C69.205219,36.5243336 66.6835402,50.8967329 55.5881535,60.499253 C44.5558088,70.1017731 25.0127981,74.9971755 13.0978659,66.9636947 C1.1198916,58.9302138 -3.23000432,37.9050881 2.50681493,22.9678346 C8.30667615,8.03058117 24.2562945,-0.818800094 37.4320662,0.0598618754 C50.6708798,0.875762275 61.2619308,11.545229 65.2335749,24.0347813 Z"></path>
        </g>
      </svg>
    )
  }

  if ($type === 3) {
    return (
      <svg viewBox="0 0 191 177" version="1.1" style={{ transform: `rotate(${$rotate}deg)` }}>
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g transform="translate(-251.000000, -560.000000)" fill={$color}>
            <path d="M434.882381,679.566247 C419.65756,716.062179 377.675561,738.851133 337.839687,736.488992 C298.003812,734.12685 260.40058,706.506774 252.925828,674.449353 C245.557917,642.47845 268.191323,605.790327 302.16434,583.061174 C336.223874,560.22518 381.32282,551.281962 409.885251,571.934744 C438.361164,592.694367 450.000362,642.983796 434.882381,679.566247 Z"></path>
          </g>
        </g>
      </svg>
    )
  }

  // button bubble
  if ($type === 4) {
    return (
      <svg width="90" height="100" viewBox="0 0 90 100" version="1.1" style={{ transform: `rotate(${$rotate}deg)` }}>
        <g fill="none" fillRule="evenodd" opacity=".08">
          <g stroke={$strokeColor} strokeWidth="3">
            <g>
              <g>
                <path
                  d="M82.652 40.884c5.772 19.634 4.54 39.118-7.312 48.557-11.775 9.44-34.247 8.76-51.101-2.492C7.307 75.622-4.083 53.646 1.38 34.389 6.845 15.133 29.241-1.48 46.788.105c17.47 1.51 30.169 21.22 35.864 40.779z"
                  transform="translate(-370 -4433) translate(167 4140) translate(205 295)"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 133 118" version="1.1" style={{ transform: `rotate(${$rotate}deg)` }}>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g fill={$color}>
          <path d="M129,39.4 C138.1,63.9 126.8,98.5 106.2,111.4 C85.6,124.2 55.7,115.4 33.1,98.5 C10.6,81.7 -4.5,56.7 1.4,36.7 C7.3,16.6 34.1,1.5 62.3,1 C90.5,0.6 119.9,14.9 129,39.4 Z"></path>
        </g>
      </g>
    </svg>
  )
}

export default OvalStroke
