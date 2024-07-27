import React, { type SVGProps } from 'react'
import { styled } from 'styled-components'

const Wrapper = styled.svg`
  display: block;
  flex-shrink: 0;

  .themedColor {
    fill: #2e3048;

    [data-theme='dark'] & {
      fill: #c5c2cb;
    }
  }
`

/**
 * @name LogoMini
 *
 * @description dAppBooster mini logo component
 */
const LogoMini: React.FC<SVGProps<SVGSVGElement>> = ({ ...restProps }) => (
  <Wrapper
    fill="none"
    height="17"
    viewBox="0 0 76 17"
    width="76"
    xmlns="http://www.w3.org/2000/svg"
    {...restProps}
  >
    <path
      className="themedColor"
      d="M0.232955 13.8857V3.70392H3.79261C4.50189 3.70392 5.08688 3.82656 5.54759 4.07182C6.00829 4.31377 6.35133 4.64024 6.5767 5.05123C6.80208 5.4589 6.91477 5.91131 6.91477 6.40847C6.91477 6.84597 6.83688 7.20724 6.68111 7.49228C6.52865 7.77731 6.32647 8.00269 6.07457 8.16841C5.82599 8.33413 5.55587 8.45676 5.2642 8.53631V8.63574C5.57576 8.65563 5.88897 8.765 6.20384 8.96387C6.5187 9.16273 6.7822 9.44777 6.99432 9.81898C7.20644 10.1902 7.3125 10.6443 7.3125 11.1812C7.3125 11.6916 7.1965 12.1507 6.96449 12.5583C6.73248 12.966 6.36624 13.2892 5.86577 13.5278C5.36529 13.7664 4.71402 13.8857 3.91193 13.8857H0.232955ZM1.46591 12.792H3.91193C4.71733 12.792 5.28906 12.6362 5.62713 12.3247C5.96851 12.0098 6.1392 11.6286 6.1392 11.1812C6.1392 10.8365 6.05137 10.5183 5.87571 10.2267C5.70005 9.93167 5.44981 9.69635 5.125 9.52069C4.80019 9.34171 4.41572 9.25222 3.97159 9.25222H1.46591V12.792ZM1.46591 8.17836H3.75284C4.12405 8.17836 4.45881 8.10544 4.7571 7.95961C5.05871 7.81377 5.29735 7.60828 5.47301 7.34313C5.65199 7.07798 5.74148 6.76642 5.74148 6.40847C5.74148 5.96103 5.5857 5.58153 5.27415 5.26998C4.9626 4.95511 4.46875 4.79767 3.79261 4.79767H1.46591V8.17836ZM13.9918 10.7636V6.24938H15.1651V13.8857H13.9918V12.5931H13.9123C13.7333 12.9809 13.4549 13.3107 13.0771 13.5825C12.6992 13.8509 12.2219 13.9852 11.6452 13.9852C11.168 13.9852 10.7437 13.8808 10.3725 13.672C10.0013 13.4598 9.70964 13.1417 9.49751 12.7174C9.28539 12.2899 9.17933 11.7513 9.17933 11.1017V6.24938H10.3526V11.0221C10.3526 11.5789 10.5084 12.0231 10.82 12.3545C11.1348 12.6859 11.5359 12.8517 12.0231 12.8517C12.3147 12.8517 12.6114 12.7771 12.913 12.6279C13.2179 12.4788 13.4731 12.2501 13.6786 11.9419C13.8874 11.6336 13.9918 11.2409 13.9918 10.7636ZM17.3141 13.8857V6.24938H18.4874V13.8857H17.3141ZM17.9107 4.97665C17.682 4.97665 17.4848 4.89876 17.3191 4.74299C17.1567 4.58721 17.0755 4.39995 17.0755 4.1812C17.0755 3.96245 17.1567 3.77518 17.3191 3.61941C17.4848 3.46363 17.682 3.38574 17.9107 3.38574C18.1394 3.38574 18.3349 3.46363 18.4973 3.61941C18.6631 3.77518 18.7459 3.96245 18.7459 4.1812C18.7459 4.39995 18.6631 4.58721 18.4973 4.74299C18.3349 4.89876 18.1394 4.97665 17.9107 4.97665ZM21.8097 3.70392V13.8857H20.6364V3.70392H21.8097ZM27.2797 6.24938V7.2437H23.3223V6.24938H27.2797ZM24.4757 4.41983H25.649V11.6982C25.649 12.0297 25.697 12.2783 25.7931 12.444C25.8926 12.6064 26.0185 12.7158 26.171 12.7721C26.3268 12.8251 26.4908 12.8517 26.6632 12.8517C26.7924 12.8517 26.8985 12.845 26.9814 12.8318C27.0642 12.8152 27.1305 12.8019 27.1802 12.792L27.4189 13.846C27.3393 13.8758 27.2283 13.9056 27.0858 13.9355C26.9432 13.9686 26.7626 13.9852 26.5439 13.9852C26.2124 13.9852 25.8876 13.9139 25.5694 13.7714C25.2546 13.6289 24.9927 13.4118 24.7839 13.1201C24.5784 12.8285 24.4757 12.4606 24.4757 12.0164V4.41983ZM33.1412 13.8857V3.70392H34.3145V7.46245H34.4139C34.5001 7.32987 34.6194 7.16084 34.7718 6.95534C34.9276 6.74654 35.1497 6.56093 35.438 6.39853C35.7297 6.23281 36.1241 6.14995 36.6213 6.14995C37.2643 6.14995 37.831 6.31069 38.3216 6.63219C38.8121 6.95369 39.1949 7.40942 39.47 7.99938C39.7451 8.58934 39.8826 9.28536 39.8826 10.0874C39.8826 10.8962 39.7451 11.5972 39.47 12.1904C39.1949 12.7804 38.8137 13.2378 38.3265 13.5626C37.8393 13.8841 37.2775 14.0448 36.6412 14.0448C36.1506 14.0448 35.7579 13.9636 35.4629 13.8012C35.1679 13.6355 34.9409 13.4482 34.7818 13.2394C34.6227 13.0273 34.5001 12.8517 34.4139 12.7124H34.2747V13.8857H33.1412ZM34.2946 10.0676C34.2946 10.6443 34.3791 11.153 34.5481 11.5938C34.7172 12.0313 34.9641 12.3744 35.2889 12.623C35.6137 12.8682 36.0114 12.9909 36.4821 12.9909C36.9726 12.9909 37.3819 12.8616 37.71 12.6031C38.0415 12.3412 38.2901 11.9899 38.4558 11.5491C38.6248 11.105 38.7093 10.6111 38.7093 10.0676C38.7093 9.53063 38.6265 9.04673 38.4608 8.61586C38.2984 8.18167 38.0514 7.83863 37.72 7.58674C37.3919 7.33153 36.9792 7.20392 36.4821 7.20392C36.0048 7.20392 35.6038 7.3249 35.2789 7.56685C34.9541 7.80549 34.7089 8.14024 34.5431 8.57111C34.3774 8.99867 34.2946 9.49748 34.2946 10.0676ZM42.1596 16.7494C41.9608 16.7494 41.7834 16.7328 41.6277 16.6997C41.4719 16.6698 41.3642 16.64 41.3045 16.6102L41.6028 15.5761C41.8878 15.649 42.1397 15.6755 42.3585 15.6556C42.5772 15.6357 42.7711 15.538 42.9402 15.3623C43.1125 15.19 43.2699 14.9099 43.4125 14.5221L43.6312 13.9255L40.8074 6.24938H42.0801L44.188 12.3346H44.2676L46.3755 6.24938H47.6483L44.4068 14.9994C44.2609 15.3938 44.0803 15.7203 43.8649 15.9788C43.6494 16.2406 43.3992 16.4345 43.1142 16.5605C42.8324 16.6864 42.5143 16.7494 42.1596 16.7494Z"
    />
    <g clipPath="url(#clip0_1034_1759)">
      <path
        className="themedColor"
        d="M75.332 7.27398C74.9045 6.53868 74.2692 5.94457 73.5033 5.56221C72.7106 5.17104 71.8348 4.97398 70.9502 4.98574C70.1367 4.97692 69.3322 5.17104 68.6138 5.54751C67.9309 5.90633 67.3491 6.42104 66.9156 7.05339C66.4881 6.51221 65.9538 6.05633 65.3481 5.71515C64.4872 5.23574 63.5105 4.99162 62.5219 5.00339C61.6283 4.99457 60.7466 5.20633 59.9598 5.62104C59.6511 5.7828 59.3602 5.97692 59.093 6.20045V1.91515C59.0989 1.77692 59.0781 1.64162 59.0277 1.51221C58.9772 1.3828 58.9 1.26809 58.802 1.17104C58.7041 1.07398 58.5853 0.997507 58.4547 0.950448C58.3211 0.900448 58.1816 0.87986 58.042 0.885742C57.7719 0.882801 57.5106 0.97986 57.3147 1.16221C57.2108 1.25927 57.1306 1.37398 57.0772 1.50339C57.0208 1.6328 56.997 1.77398 57 1.91221V10.5593C57.0119 11.5152 57.2731 12.4504 57.76 13.274C58.232 14.071 58.9119 14.7299 59.7283 15.1828C60.5773 15.6534 61.5363 15.8946 62.51 15.8857C63.4986 15.9004 64.4753 15.6534 65.3363 15.1769C66.1616 14.7122 66.8444 14.0387 67.3134 13.2269C67.8003 12.3769 68.0497 11.4181 68.0378 10.4416V9.34751C68.0319 8.93574 68.1566 8.5328 68.3941 8.19751C68.6553 7.83574 69.0086 7.54457 69.4213 7.36221C69.8992 7.14751 70.4217 7.04162 70.9472 7.05045C71.4816 7.04162 72.01 7.15339 72.4939 7.37986C72.9244 7.58868 73.2836 7.9181 73.5241 8.32986C73.8031 8.84457 73.9367 9.42398 73.91 10.0063V14.8534C73.91 15.1269 74.0198 15.3887 74.2158 15.5799C74.4117 15.774 74.6759 15.8828 74.955 15.8828C75.2341 15.8828 75.4983 15.774 75.6942 15.5799C75.8902 15.3857 76 15.124 76 14.8534V9.98868C76.0267 9.04162 75.7981 8.10339 75.335 7.27398H75.332ZM60.7644 7.43574C61.1563 7.20633 61.5927 7.05633 62.0469 6.99457C62.4981 6.9328 62.9613 6.95927 63.4006 7.07398C63.843 7.18868 64.2556 7.38868 64.6178 7.66221C64.98 7.93574 65.2828 8.27986 65.5114 8.66809C65.7816 9.13574 65.9359 9.65927 65.9597 10.1975V10.4769C65.9597 10.5063 65.9597 10.5328 65.9597 10.5622C65.9508 11.1387 65.7964 11.7063 65.5084 12.2093C65.2145 12.7181 64.79 13.1446 64.2764 13.4446C63.7391 13.7416 63.1334 13.8975 62.5159 13.8975C61.8984 13.8975 61.2928 13.7416 60.7555 13.4446C60.2389 13.1504 59.8144 12.724 59.5264 12.2093C59.2236 11.6622 59.0692 11.0504 59.0781 10.4269C59.0663 9.80633 59.2206 9.19751 59.5264 8.65339C59.8203 8.14457 60.2448 7.72398 60.7584 7.4328L60.7644 7.43574Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_1034_1759">
        <rect fill="white" height="15" transform="translate(57 0.885742)" width="19" />
      </clipPath>
    </defs>
  </Wrapper>
)

export default LogoMini
