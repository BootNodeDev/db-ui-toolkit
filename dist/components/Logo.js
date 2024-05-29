var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { styled } from 'styled-components';
const Wrapper = styled.svg `
  display: block;
  flex-shrink: 0;

  .themedColor {
    [data-theme='light'] & {
      fill: #2e3048;
    }

    [data-theme='dark'] & {
      fill: #fff;
    }
  }
`;
/**
 * Default Logo component
 */
const Logo = (_a) => {
    var { style, className } = _a, restProps = __rest(_a, ["style", "className"]);
    return (React.createElement(Wrapper, Object.assign({ className: `dbuitkLogo ${className ? className : ''}`.trim(), fill: "none", height: "44", style: style, viewBox: "0 0 172 44", width: "172", xmlns: "http://www.w3.org/2000/svg" }, restProps),
        React.createElement("path", { d: "M52.3553 18.6802C51.1288 16.5699 49.3132 14.8585 47.1286 13.7535C44.8642 12.6286 42.3619 12.0593 39.831 12.0931C37.5 12.0686 35.2002 12.6268 33.1428 13.7165C31.1946 14.7474 29.5288 16.2357 28.2901 18.052C27.0651 16.4875 25.5435 15.1769 23.8115 14.1944C21.3495 12.8125 18.563 12.1044 15.7361 12.1424C13.1865 12.1084 10.6689 12.7105 8.41377 13.8939C7.53117 14.3632 6.70087 14.9238 5.93666 15.5665V3.45907C5.95501 3.06604 5.89068 2.67352 5.74779 2.30662C5.6049 1.93971 5.38658 1.6065 5.10681 1.32828C4.82704 1.05007 4.49197 0.832966 4.12302 0.690867C3.75407 0.548768 3.35935 0.484797 2.96412 0.503042C2.1959 0.491043 1.45284 0.775316 0.890783 1.29624C0.597927 1.57428 0.36735 1.91062 0.214113 2.28331C0.0608763 2.656 -0.0115723 3.05664 0.00150094 3.45907V28.1321C0.0386426 30.8837 0.786742 33.5795 2.17393 35.9606C3.52861 38.2594 5.47017 40.1613 7.80192 41.4736C10.2268 42.8334 12.9699 43.5319 15.7535 43.4985C18.5804 43.5368 21.3669 42.8288 23.8288 41.4465C26.1871 40.1093 28.1404 38.166 29.4841 35.8202C30.8748 33.3722 31.5877 30.6011 31.55 27.7897C31.55 27.5433 31.55 27.2847 31.5277 27.0088V24.6267C31.5073 23.4417 31.8636 22.2804 32.5458 21.3086C33.2892 20.2611 34.2999 19.4295 35.4737 18.8994C36.8399 18.2776 38.3287 17.9679 39.831 17.9929C41.3548 17.9671 42.864 18.2926 44.2402 18.9438C45.4746 19.5436 46.4997 20.4978 47.1831 21.683C47.9262 22.9147 48.2903 24.5405 48.2903 26.5137V40.237C48.2903 41.021 48.6035 41.7729 49.161 42.3273C49.7184 42.8816 50.4745 43.1931 51.2629 43.1931C52.0512 43.1931 52.8073 42.8816 53.3648 42.3273C53.9222 41.7729 54.2354 41.021 54.2354 40.237V26.5137C54.2428 23.4492 53.6062 20.8159 52.3553 18.6802ZM10.7398 19.1482C12.2755 18.2922 14.0066 17.8427 15.7671 17.8427C17.5276 17.8427 19.2586 18.2922 20.7944 19.1482C22.2587 20.0052 23.4721 21.228 24.3144 22.6955C25.0838 24.0443 25.5202 25.5555 25.5876 27.1049V27.9128C25.5833 27.9949 25.5833 28.0771 25.5876 28.1592C25.5656 29.8314 25.1237 31.4716 24.302 32.9307C23.4613 34.4037 22.2489 35.6331 20.7845 36.4977C19.2487 37.3536 17.5177 37.8031 15.7572 37.8031C13.9967 37.8031 12.2656 37.3536 10.7299 36.4977C9.26059 35.6498 8.04942 34.4224 7.22476 32.9455C6.3572 31.3713 5.91749 29.5993 5.94905 27.8045C5.91625 26.02 6.35531 24.2582 7.22228 22.6955C8.04973 21.2219 9.26036 19.9967 10.7274 19.1482H10.7398Z", fill: "#2e3048" }),
        React.createElement("path", { d: "M52.3553 18.6802C51.1288 16.5699 49.3132 14.8585 47.1286 13.7535C44.8642 12.6286 42.3619 12.0593 39.831 12.0931C37.5 12.0686 35.2002 12.6268 33.1428 13.7165C31.1946 14.7474 29.5288 16.2357 28.2901 18.052C27.0651 16.4875 25.5435 15.1769 23.8115 14.1944C21.3495 12.8125 18.563 12.1044 15.7361 12.1424C13.1865 12.1084 10.6689 12.7105 8.41377 13.8939C7.53117 14.3632 6.70087 14.9238 5.93666 15.5665V3.45907C5.95501 3.06604 5.89068 2.67352 5.74779 2.30662C5.6049 1.93971 5.38658 1.6065 5.10681 1.32828C4.82704 1.05007 4.49197 0.832966 4.12302 0.690867C3.75407 0.548768 3.35935 0.484797 2.96412 0.503042C2.1959 0.491043 1.45284 0.775316 0.890783 1.29624C0.597927 1.57428 0.36735 1.91062 0.214113 2.28331C0.0608763 2.656 -0.0115723 3.05664 0.00150094 3.45907V28.1321C0.0386426 30.8837 0.786742 33.5795 2.17393 35.9606C3.52861 38.2594 5.47017 40.1613 7.80192 41.4736C10.2268 42.8334 12.9699 43.5319 15.7535 43.4985C18.5804 43.5368 21.3669 42.8288 23.8288 41.4465C26.1871 40.1093 28.1404 38.166 29.4841 35.8202C30.8748 33.3722 31.5877 30.6011 31.55 27.7897C31.55 27.5433 31.55 27.2847 31.5277 27.0088V24.6267C31.5073 23.4417 31.8636 22.2804 32.5458 21.3086C33.2892 20.2611 34.2999 19.4295 35.4737 18.8994C36.8399 18.2776 38.3287 17.9679 39.831 17.9929C41.3548 17.9671 42.864 18.2926 44.2402 18.9438C45.4746 19.5436 46.4997 20.4978 47.1831 21.683C47.9262 22.9147 48.2903 24.5405 48.2903 26.5137V40.237C48.2903 41.021 48.6035 41.7729 49.161 42.3273C49.7184 42.8816 50.4745 43.1931 51.2629 43.1931C52.0512 43.1931 52.8073 42.8816 53.3648 42.3273C53.9222 41.7729 54.2354 41.021 54.2354 40.237V26.5137C54.2428 23.4492 53.6062 20.8159 52.3553 18.6802ZM10.7398 19.1482C12.2755 18.2922 14.0066 17.8427 15.7671 17.8427C17.5276 17.8427 19.2586 18.2922 20.7944 19.1482C22.2587 20.0052 23.4721 21.228 24.3144 22.6955C25.0838 24.0443 25.5202 25.5555 25.5876 27.1049V27.9128C25.5833 27.9949 25.5833 28.0771 25.5876 28.1592C25.5656 29.8314 25.1237 31.4716 24.302 32.9307C23.4613 34.4037 22.2489 35.6331 20.7845 36.4977C19.2487 37.3536 17.5177 37.8031 15.7572 37.8031C13.9967 37.8031 12.2656 37.3536 10.7299 36.4977C9.26059 35.6498 8.04942 34.4224 7.22476 32.9455C6.3572 31.3713 5.91749 29.5993 5.94905 27.8045C5.91625 26.02 6.35531 24.2582 7.22228 22.6955C8.04973 21.2219 9.26036 19.9967 10.7274 19.1482H10.7398Z", fill: "url(#paint0_linear_486_278)" }),
        React.createElement("path", { className: "themedColor", fill: "#2e3048", d: "M81.5701 32.668C81.4464 32.67 81.3235 32.6471 81.2088 32.6008C81.0941 32.5544 80.9899 32.4856 80.9024 32.3983C80.8149 32.3109 80.7459 32.207 80.6995 32.0926C80.653 31.9781 80.6301 31.8555 80.6321 31.7321V19.54C80.6274 19.4149 80.649 19.2903 80.6956 19.1741C80.7421 19.058 80.8126 18.9528 80.9025 18.8655C80.9906 18.7797 81.0951 18.7124 81.2098 18.6675C81.3245 18.6226 81.447 18.601 81.5701 18.6041H85.8838C86.6307 18.5886 87.3703 18.7523 88.0406 19.0814C88.638 19.3818 89.1415 19.8397 89.4965 20.4054C89.8574 20.9891 90.0422 21.6642 90.029 22.3499C90.0356 22.9173 89.8687 23.4733 89.5506 23.9437C89.2213 24.4269 88.7701 24.8149 88.2424 25.0685C88.9861 25.2314 89.6572 25.6295 90.1559 26.2036C90.637 26.7681 90.8776 27.5062 90.8776 28.4179C90.8976 29.1812 90.6996 29.9344 90.3067 30.5896C89.9137 31.2448 89.342 31.775 88.6584 32.1181C87.9158 32.4955 87.0914 32.6844 86.2582 32.668H81.5701ZM82.5081 24.3836H85.8838C86.4857 24.4104 87.0794 24.2359 87.5706 23.8876C88.0087 23.5542 88.2285 23.0444 88.2299 22.3582C88.2313 21.672 88.0115 21.1649 87.5706 20.837C87.0786 20.4905 86.4855 20.3161 85.8838 20.341H82.5081V24.3836ZM82.5081 30.9393H86.2519C86.7524 30.9489 87.249 30.8505 87.7078 30.6509C88.1144 30.4715 88.4593 30.1771 88.6999 29.8042C88.9541 29.3874 89.0799 28.9054 89.0618 28.4179C89.0802 27.9643 88.9535 27.5166 88.6999 27.1396C88.4527 26.7996 88.1147 26.5357 87.7245 26.3779C87.261 26.1964 86.7664 26.1076 86.2686 26.1165H82.5248L82.5081 30.9393Z" }),
        React.createElement("path", { className: "themedColor", fill: "#2e3048", d: "M97.3679 32.6224C96.4667 32.6404 95.5768 32.4198 94.7888 31.9832C94.0516 31.5659 93.4431 30.9551 93.0292 30.2172C92.6068 29.4174 92.386 28.5271 92.386 27.6231C92.386 26.7191 92.6068 25.8287 93.0292 25.029C93.4431 24.2916 94.0517 23.6815 94.7888 23.2651C95.5808 22.8454 96.4638 22.6259 97.3606 22.6259C98.2573 22.6259 99.1404 22.8454 99.9324 23.2651C100.669 23.6827 101.277 24.2925 101.692 25.029C102.109 25.8304 102.327 26.7201 102.327 27.6231C102.327 28.5261 102.109 29.4158 101.692 30.2172C101.282 30.9556 100.676 31.5667 99.9407 31.9832C99.1544 32.4184 98.2669 32.6389 97.3679 32.6224ZM97.3679 31.0016C97.952 31.0128 98.5278 30.8627 99.0318 30.5679C99.5102 30.2837 99.9004 29.8728 100.159 29.3808C100.438 28.8411 100.577 28.2405 100.565 27.6335C100.576 27.0238 100.437 26.4207 100.159 25.8778C99.9019 25.3821 99.5116 24.9675 99.0318 24.6804C98.5234 24.3963 97.9505 24.2471 97.3679 24.2471C96.7852 24.2471 96.2123 24.3963 95.704 24.6804C95.2226 24.9688 94.8292 25.3828 94.5663 25.8778C94.2818 26.4188 94.1387 27.0227 94.1503 27.6335C94.138 28.2417 94.2811 28.8431 94.5663 29.3808C94.8307 29.872 95.224 30.2823 95.704 30.5679C96.2077 30.8633 96.7837 31.0134 97.3679 31.0016Z" }),
        React.createElement("path", { className: "themedColor", fill: "#2e3048", d: "M109.47 32.6225C108.569 32.6405 107.679 32.4199 106.891 31.9833C106.153 31.5656 105.544 30.9549 105.129 30.2173C104.71 29.4166 104.491 28.5266 104.491 27.6232C104.491 26.7199 104.71 25.8299 105.129 25.0292C105.544 24.2921 106.153 23.6822 106.891 23.2652C107.682 22.8455 108.565 22.626 109.461 22.626C110.358 22.626 111.241 22.8455 112.032 23.2652C112.769 23.6817 113.378 24.2918 113.792 25.0292C114.212 25.829 114.433 26.7186 114.435 27.6219C114.437 28.5253 114.22 29.4157 113.802 30.2173C113.393 30.9557 112.787 31.5669 112.051 31.9833C111.262 32.4202 110.372 32.6408 109.47 32.6225ZM109.47 31.0017C110.054 31.0129 110.63 30.8628 111.134 30.568C111.612 30.2838 112.002 29.8729 112.261 29.381C112.543 28.8422 112.686 28.2415 112.677 27.6336C112.686 27.0231 112.543 26.4199 112.261 25.8779C112.004 25.3822 111.613 24.9676 111.134 24.6805C110.625 24.3964 110.052 24.2472 109.47 24.2472C108.887 24.2472 108.314 24.3964 107.806 24.6805C107.324 24.9689 106.931 25.3829 106.668 25.8779C106.384 26.4189 106.241 27.0228 106.252 27.6336C106.24 28.2418 106.383 28.8432 106.668 29.381C106.933 29.8722 107.326 30.2825 107.806 30.568C108.31 30.8632 108.886 31.0133 109.47 31.0017Z" }),
        React.createElement("path", { className: "themedColor", fill: "#2e3048", d: "M116.155 24.6412C115.932 24.6544 115.712 24.5799 115.542 24.4337C115.466 24.366 115.406 24.2827 115.365 24.1896C115.325 24.0965 115.305 23.9957 115.307 23.8941C115.302 23.7868 115.321 23.6797 115.362 23.5802C115.402 23.4807 115.464 23.391 115.542 23.3172C115.712 23.1717 115.932 23.0974 116.155 23.1097H120.315C120.542 23.0947 120.766 23.1692 120.939 23.3172C121.017 23.391 121.079 23.4807 121.119 23.5802C121.16 23.6797 121.179 23.7868 121.174 23.8941C121.176 23.9957 121.157 24.0965 121.116 24.1896C121.075 24.2827 121.015 24.366 120.939 24.4337C120.767 24.5825 120.543 24.6571 120.315 24.6412H116.155ZM120.161 32.5832C119.587 32.5903 119.023 32.431 118.537 32.1246C118.055 31.8166 117.663 31.3871 117.401 30.8794C117.118 30.3283 116.975 29.7161 116.985 29.0968V20.5094C116.985 20.2705 117.08 20.0414 117.25 19.8725C117.419 19.7036 117.649 19.6087 117.888 19.6087C118.127 19.6087 118.357 19.7036 118.526 19.8725C118.696 20.0414 118.791 20.2705 118.791 20.5094V29.0989C118.775 29.5351 118.916 29.9624 119.188 30.3046C119.301 30.4557 119.448 30.5783 119.617 30.6627C119.786 30.747 119.972 30.7907 120.161 30.7902H120.785C120.89 30.7894 120.994 30.8116 121.089 30.8554C121.184 30.8991 121.269 30.9633 121.336 31.0434C121.49 31.2232 121.571 31.4545 121.561 31.6908C121.564 31.8143 121.539 31.9368 121.488 32.0491C121.436 32.1613 121.36 32.2603 121.264 32.3383C121.048 32.5129 120.776 32.603 120.498 32.5915L120.161 32.5832Z" }),
        React.createElement("path", { className: "themedColor", fill: "#2e3048", d: "M124.828 32.6678C124.705 32.6714 124.583 32.6492 124.47 32.6028C124.357 32.5563 124.255 32.4865 124.17 32.398C124.084 32.31 124.017 32.2057 123.972 32.0913C123.927 31.9769 123.905 31.8547 123.908 31.7318V19.5397C123.903 19.4154 123.924 19.2914 123.969 19.1754C124.014 19.0594 124.083 18.9539 124.17 18.8653C124.256 18.7791 124.359 18.7114 124.472 18.6664C124.585 18.6214 124.706 18.6001 124.828 18.6038C124.966 18.6018 125.103 18.6316 125.228 18.691C125.354 18.7504 125.463 18.8377 125.549 18.9462L133.42 29.3909V19.5397C133.415 19.4147 133.436 19.2901 133.483 19.1739C133.53 19.0577 133.6 18.9526 133.69 18.8653C133.778 18.7794 133.883 18.712 133.997 18.6671C134.112 18.6222 134.234 18.6006 134.358 18.6038C134.481 18.5985 134.604 18.6191 134.719 18.6641C134.834 18.7092 134.938 18.7777 135.025 18.8653C135.11 18.9554 135.176 19.0614 135.219 19.1772C135.262 19.293 135.282 19.4163 135.277 19.5397V31.7318C135.284 31.9782 135.193 32.2174 135.025 32.398C134.94 32.4879 134.836 32.5586 134.721 32.6051C134.606 32.6516 134.482 32.673 134.358 32.6678C134.224 32.6651 134.092 32.6376 133.969 32.5868C133.837 32.5379 133.722 32.4539 133.636 32.344L125.766 21.8993V31.7318C125.768 31.8545 125.747 31.9765 125.702 32.0908C125.658 32.2052 125.591 32.3096 125.506 32.398C125.418 32.4877 125.312 32.558 125.195 32.6045C125.078 32.651 124.953 32.6725 124.828 32.6678Z" }),
        React.createElement("path", { className: "themedColor", fill: "#2e3048", d: "M142.576 32.6224C141.674 32.6403 140.784 32.4198 139.995 31.9832C139.258 31.5659 138.649 30.9551 138.235 30.2172C137.814 29.4171 137.594 28.5268 137.594 27.6231C137.594 26.7193 137.814 25.8291 138.235 25.029C138.649 24.2916 139.258 23.6815 139.995 23.2651C140.787 22.8454 141.67 22.6259 142.567 22.6259C143.464 22.6259 144.347 22.8454 145.139 23.2651C145.876 23.6815 146.484 24.2916 146.898 25.029C147.317 25.8298 147.536 26.7197 147.536 27.6231C147.536 28.5265 147.317 29.4164 146.898 30.2172C146.49 30.9558 145.884 31.567 145.149 31.9832C144.363 32.4184 143.475 32.6389 142.576 32.6224ZM142.576 31.0016C143.16 31.0134 143.736 30.8633 144.24 30.5679C144.719 30.2831 145.109 29.8725 145.369 29.3808C145.648 28.8411 145.788 28.2405 145.775 27.6335C145.787 27.0238 145.648 26.4207 145.369 25.8778C145.111 25.3824 144.72 24.9679 144.24 24.6804C143.732 24.3959 143.159 24.2465 142.576 24.2465C141.993 24.2465 141.421 24.3959 140.912 24.6804C140.43 24.9682 140.037 25.3824 139.775 25.8778C139.49 26.4188 139.347 27.0227 139.359 27.6335C139.346 28.2417 139.489 28.8431 139.775 29.3808C140.038 29.8725 140.432 30.2829 140.912 30.5679C141.416 30.8633 141.992 31.0134 142.576 31.0016Z" }),
        React.createElement("path", { className: "themedColor", fill: "#2e3048", d: "M154.415 32.7675C153.526 32.7801 152.65 32.5528 151.879 32.1096C151.135 31.6802 150.519 31.0615 150.093 30.3166C149.648 29.5386 149.42 28.6556 149.434 27.7599C149.416 26.8747 149.621 25.9992 150.03 25.2136C150.414 24.4839 150.984 23.8683 151.682 23.4288C152.391 22.9879 153.212 22.7602 154.047 22.7731C154.713 22.7674 155.372 22.9117 155.975 23.1952C156.578 23.4786 157.109 23.894 157.528 24.4104V19.5564C157.523 19.433 157.544 19.3099 157.589 19.1948C157.634 19.0798 157.703 18.9753 157.791 18.8882C157.919 18.7531 158.085 18.6603 158.268 18.6223C158.451 18.5843 158.641 18.6029 158.812 18.6756C158.984 18.7483 159.129 18.8716 159.229 19.029C159.328 19.1865 159.377 19.3705 159.369 19.5564V27.7661C159.383 28.6619 159.155 29.5448 158.71 30.3228C158.28 31.0796 157.653 31.7066 156.896 32.1379C156.138 32.5692 155.278 32.7889 154.407 32.7737L154.415 32.7675ZM154.415 31.1467C154.993 31.1561 155.563 31.0029 156.058 30.7047C156.54 30.4091 156.932 29.9888 157.194 29.4886C157.475 28.9561 157.618 28.3618 157.61 27.7599C157.62 27.1578 157.477 26.5628 157.194 26.0312C156.928 25.5388 156.536 25.1256 156.058 24.8338C155.56 24.5457 154.995 24.394 154.42 24.394C153.845 24.394 153.28 24.5457 152.782 24.8338C152.298 25.1247 151.899 25.5377 151.626 26.0312C151.339 26.5618 151.196 27.1574 151.21 27.7599C151.198 28.3621 151.341 28.9572 151.626 29.4886C151.895 29.99 152.294 30.41 152.782 30.7047C153.275 31.0009 153.84 31.154 154.415 31.1467Z" }),
        React.createElement("path", { className: "themedColor", fill: "#2e3048", d: "M166.921 32.6219C165.994 32.6389 165.077 32.4188 164.259 31.9827C163.5 31.5725 162.87 30.9614 162.437 30.2167C161.988 29.4304 161.76 28.5377 161.778 27.633C161.759 26.7265 161.974 25.8305 162.402 25.0306C162.801 24.2953 163.398 23.6847 164.124 23.2667C164.894 22.8317 165.766 22.6109 166.651 22.6275C167.5 22.6049 168.338 22.8206 169.07 23.2501C169.738 23.66 170.274 24.2537 170.613 24.9601C170.98 25.7464 171.162 26.606 171.145 27.4732C171.148 27.5788 171.129 27.6838 171.088 27.7814C171.048 27.879 170.987 27.967 170.91 28.0397C170.831 28.1148 170.737 28.1734 170.635 28.2123C170.532 28.2511 170.423 28.2693 170.314 28.2659H163.034V26.8257H170.251L169.513 27.33C169.51 26.7727 169.387 26.2226 169.151 25.7175C168.934 25.2431 168.58 24.8438 168.135 24.5706C167.69 24.2975 167.173 24.1629 166.651 24.1839C166.034 24.1655 165.424 24.3216 164.891 24.6343C164.41 24.9296 164.024 25.3577 163.781 25.867C163.522 26.4222 163.392 27.0289 163.402 27.6413C163.391 28.2591 163.547 28.8685 163.853 29.4053C164.151 29.9185 164.582 30.3417 165.101 30.6297C165.658 30.9372 166.287 31.0926 166.923 31.08C167.314 31.0761 167.702 31.0059 168.069 30.8725C168.407 30.7603 168.727 30.5995 169.018 30.3951C169.187 30.2663 169.392 30.1937 169.604 30.1876C169.805 30.1777 170.002 30.2453 170.153 30.3765C170.246 30.4479 170.322 30.5374 170.378 30.6395C170.434 30.7416 170.469 30.8541 170.48 30.97C170.484 31.0799 170.459 31.189 170.408 31.2867C170.358 31.3845 170.283 31.4676 170.191 31.5282C169.732 31.8785 169.217 32.1467 168.666 32.321C168.105 32.5147 167.515 32.6163 166.921 32.6219Z" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { gradientUnits: "userSpaceOnUse", id: "paint0_linear_486_278", x1: "0.000703224", x2: "54.2295", y1: "22.0005", y2: "22.0005" },
                React.createElement("stop", { stopColor: "#662681" }),
                React.createElement("stop", { offset: "0.15", stopColor: "#692581" }),
                React.createElement("stop", { offset: "0.26", stopColor: "#722381" }),
                React.createElement("stop", { offset: "0.36", stopColor: "#822080" }),
                React.createElement("stop", { offset: "0.43", stopColor: "#931C80" }),
                React.createElement("stop", { offset: "0.62", stopColor: "#B51C7B" }),
                React.createElement("stop", { offset: "0.87", stopColor: "#D91D75" }),
                React.createElement("stop", { offset: "1", stopColor: "#E71D73" })))));
};
export default Logo;