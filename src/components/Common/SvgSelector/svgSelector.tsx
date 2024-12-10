import { SVGAttributes } from 'react';

export interface ISvgGenComponentsProps extends SVGAttributes<SVGElement> {
    iconName: string;
}

function SvgSelector({ iconName, ...props }: ISvgGenComponentsProps) {
    switch (iconName) {
        case 'location':
            return (
                <svg
                    {...props}
                    width="18"
                    height="20"
                    viewBox="0 0 18 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M12.6 8.8C12.6 9.75478 12.2207 10.6705 11.5456 11.3456C10.8705 12.0207 9.95479 12.4 9.00001 12.4C8.04523 12.4 7.12956 12.0207 6.45442 11.3456C5.77929 10.6705 5.40001 9.75478 5.40001 8.8C5.40001 7.84522 5.77929 6.92955 6.45442 6.25441C7.12956 5.57928 8.04523 5.2 9.00001 5.2C9.95479 5.2 10.8705 5.57928 11.5456 6.25441C12.2207 6.92955 12.6 7.84522 12.6 8.8ZM11.4 8.8C11.4 8.16348 11.1472 7.55303 10.6971 7.10294C10.247 6.65286 9.63653 6.4 9.00001 6.4C8.36349 6.4 7.75304 6.65286 7.30295 7.10294C6.85287 7.55303 6.60001 8.16348 6.60001 8.8C6.60001 9.43652 6.85287 10.047 7.30295 10.4971C7.75304 10.9471 8.36349 11.2 9.00001 11.2C9.63653 11.2 10.247 10.9471 10.6971 10.4971C11.1472 10.047 11.4 9.43652 11.4 8.8ZM14.94 14.746C16.5155 13.1697 17.4005 11.0323 17.4005 8.8036C17.4005 6.57494 16.5155 4.4375 14.94 2.8612C14.16 2.0811 13.2339 1.46228 12.2147 1.04009C11.1956 0.617894 10.1032 0.400593 9.00001 0.400593C7.89683 0.400593 6.80446 0.617894 5.78527 1.04009C4.76608 1.46228 3.84003 2.0811 3.06001 2.8612C1.48452 4.4375 0.599487 6.57494 0.599487 8.8036C0.599487 11.0323 1.48452 13.1697 3.06001 14.746L4.88521 16.5448L7.33681 18.9268L7.49641 19.0684C8.42641 19.822 9.78841 19.774 10.6644 18.9268L13.5864 16.0828L14.94 14.746ZM3.90601 3.7072C4.5747 3.03777 5.36877 2.5067 6.24284 2.14437C7.1169 1.78203 8.05382 1.59553 9.00001 1.59553C9.9462 1.59553 10.8831 1.78203 11.7572 2.14437C12.6312 2.5067 13.4253 3.03777 14.094 3.7072C15.4071 5.02203 16.1621 6.79298 16.2014 8.6508C16.2407 10.5086 15.5615 12.3099 14.3052 13.6792L14.094 13.9L12.5088 15.4648L9.83281 18.0676L9.72001 18.1636C9.51216 18.3192 9.25945 18.4032 8.99981 18.403C8.74016 18.4028 8.48759 18.3184 8.28001 18.1624L8.16841 18.0664L4.59241 14.5804L3.90601 13.9L3.69481 13.6804C2.43854 12.3111 1.75927 10.5098 1.79862 8.652C1.83796 6.79418 2.59289 5.02203 3.90601 3.7072Z"
                        fill="black"
                    />
                </svg>
            );
        case 'clearDay':
            return (
                <svg
                    width="110"
                    height="110"
                    viewBox="0 0 110 110"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g filter="url(#filter0_ddi_1_365)">
                        <circle cx="55" cy="55" r="32" fill="url(#paint0_linear_1_365)" />
                    </g>
                    <defs>
                        <filter
                            id="filter0_ddi_1_365"
                            x="7"
                            y="7"
                            width="96"
                            height="96"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset />
                            <feGaussianBlur stdDeviation="8" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.992157 0 0 0 0 0.773882 0 0 0 0 0 0 0 0 1 0"
                            />
                            <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_1_365"
                            />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset />
                            <feGaussianBlur stdDeviation="5.5" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.992157 0 0 0 0 0.772549 0 0 0 0 0 0 0 0 0.45 0"
                            />
                            <feBlend
                                mode="normal"
                                in2="effect1_dropShadow_1_365"
                                result="effect2_dropShadow_1_365"
                            />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect2_dropShadow_1_365"
                                result="shape"
                            />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset dx="-1" dy="3" />
                            <feGaussianBlur stdDeviation="2.5" />
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 1 0 0 0 0 0.9 0 0 0 0 0 0 0 0 0.35 0"
                            />
                            <feBlend mode="normal" in2="shape" result="effect3_innerShadow_1_365" />
                        </filter>
                        <linearGradient
                            id="paint0_linear_1_365"
                            x1="55"
                            y1="23"
                            x2="55"
                            y2="87"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#FDC500" />
                            <stop offset="1" stopColor="#FD8900" />
                        </linearGradient>
                    </defs>
                </svg>
            );
        case 'clearNight':
            return (
                <svg
                    width="110"
                    height="110"
                    viewBox="0 0 110 110"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M72.9356 71.4888C69.85 71.6668 66.7604 71.2152 63.8563 70.1618C60.9522 69.1084 58.2949 67.4754 56.0471 65.363C53.7993 63.2505 52.0086 60.7031 50.7846 57.877C49.5607 55.0509 48.9293 52.0056 48.9293 48.9278C48.9293 45.8501 49.5607 42.8048 50.7846 39.9786C52.0086 37.1525 53.7993 34.6051 56.0471 32.4926C58.2949 30.3802 60.9522 28.7472 63.8563 27.6938C66.7604 26.6404 69.85 26.1889 72.9356 26.3668C74.8843 26.3523 76.8255 26.6066 78.7041 27.1226C73.077 23.0893 66.3063 20.9452 59.3733 21.0011C52.4403 21.0569 45.7053 23.3099 40.1445 27.4334C34.5837 31.5568 30.4861 37.3366 28.4456 43.9348C26.405 50.533 26.5276 57.6069 28.7955 64.1311C31.0634 70.6553 35.3589 76.2908 41.0592 80.2208C46.7596 84.1508 53.5686 86.171 60.4994 85.9887C67.4302 85.8063 74.1226 83.4309 79.6066 79.2067C85.0906 74.9825 89.0812 69.129 91 62.4947C88.9029 65.2938 86.1768 67.5652 83.0399 69.127C79.9031 70.6889 76.4427 71.4977 72.9356 71.4888Z"
                        fill="url(#paint0_linear_1_366)"
                    />
                    <path
                        d="M96 56C96 52.5522 94.8411 49.2456 92.7782 46.8076C90.7153 44.3696 87.9174 43 85 43C87.9174 43 90.7153 41.6304 92.7782 39.1924C94.8411 36.7544 96 33.4478 96 30C96 31.7072 96.2845 33.3976 96.8373 34.9749C97.3901 36.5521 98.2004 37.9852 99.2218 39.1924C100.243 40.3996 101.456 41.3571 102.79 42.0104C104.125 42.6637 105.555 43 107 43C105.555 43 104.125 43.3363 102.79 43.9896C101.456 44.6429 100.243 45.6005 99.2218 46.8076C98.2004 48.0148 97.3901 49.4479 96.8373 51.0251C96.2845 52.6024 96 54.2928 96 56Z"
                        fill="url(#paint1_linear_1_366)"
                    />
                    <path
                        d="M14 89C14 85.5522 12.8411 82.2456 10.7782 79.8076C8.71527 77.3696 5.91738 76 3 76C5.91738 76 8.71527 74.6304 10.7782 72.1924C12.8411 69.7544 14 66.4478 14 63C14 64.7072 14.2845 66.3976 14.8373 67.9749C15.3901 69.5521 16.2004 70.9852 17.2218 72.1924C18.2433 73.3996 19.4559 74.3571 20.7905 75.0104C22.1251 75.6637 23.5555 76 25 76C23.5555 76 22.1251 76.3363 20.7905 76.9896C19.4559 77.6429 18.2433 78.6005 17.2218 79.8076C16.2004 81.0148 15.3901 82.4479 14.8373 84.0251C14.2845 85.6024 14 87.2928 14 89Z"
                        fill="url(#paint2_linear_1_366)"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_1_366"
                            x1="59"
                            y1="21"
                            x2="59"
                            y2="86"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#FDC500" />
                            <stop offset="1" stopColor="#FD8900" />
                        </linearGradient>
                        <linearGradient
                            id="paint1_linear_1_366"
                            x1="96"
                            y1="30"
                            x2="96"
                            y2="56"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#FDC500" />
                            <stop offset="1" stopColor="#FD8900" />
                        </linearGradient>
                        <linearGradient
                            id="paint2_linear_1_366"
                            x1="14"
                            y1="63"
                            x2="14"
                            y2="89"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#FDC500" />
                            <stop offset="1" stopColor="#FD8900" />
                        </linearGradient>
                    </defs>
                </svg>
            );
        case 'fewCloudsDay':
            return (
                <svg
                    width="126"
                    height="120"
                    viewBox="0 0 126 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g filter="url(#filter0_f_19_810)">
                        <ellipse
                            cx="53.5"
                            cy="88.5"
                            rx="31.5"
                            ry="9.5"
                            fill="#004E67"
                            fillOpacity="0.7"
                        />
                    </g>
                    <g filter="url(#filter1_ddi_19_810)">
                        <circle cx="84" cy="42" r="26" fill="url(#paint0_linear_19_810)" />
                    </g>
                    <g filter="url(#filter2_bi_19_810)">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M77 51C77 51.7882 76.9696 52.5693 76.9099 53.3422C80.1949 50.6296 84.4071 49 89 49C99.4934 49 108 57.5066 108 68C108 78.158 100.029 86.4541 90 86.9741V87H89H19H17V86.896C7.44667 85.8966 0 77.8179 0 68C0 58.1618 7.47752 50.07 17.0593 49.0979C18.0405 33.4156 31.0704 21 47 21C63.5685 21 77 34.4315 77 51Z"
                            fill="url(#paint1_linear_19_810)"
                        />
                    </g>
                    <defs>
                        <filter
                            id="filter0_f_19_810"
                            x="0"
                            y="57"
                            width="107"
                            height="63"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="BackgroundImageFix"
                                result="shape"
                            />
                            <feGaussianBlur
                                stdDeviation="11"
                                result="effect1_foregroundBlur_19_810"
                            />
                        </filter>
                        <filter
                            id="filter1_ddi_19_810"
                            x="42"
                            y="0"
                            width="84"
                            height="84"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset />
                            <feGaussianBlur stdDeviation="8" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.992157 0 0 0 0 0.773882 0 0 0 0 0 0 0 0 1 0"
                            />
                            <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_19_810"
                            />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset />
                            <feGaussianBlur stdDeviation="5.5" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.992157 0 0 0 0 0.772549 0 0 0 0 0 0 0 0 0.45 0"
                            />
                            <feBlend
                                mode="normal"
                                in2="effect1_dropShadow_19_810"
                                result="effect2_dropShadow_19_810"
                            />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect2_dropShadow_19_810"
                                result="shape"
                            />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset dx="-1" dy="3" />
                            <feGaussianBlur stdDeviation="2.5" />
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 1 0 0 0 0 0.9 0 0 0 0 0 0 0 0 0.35 0"
                            />
                            <feBlend
                                mode="normal"
                                in2="shape"
                                result="effect3_innerShadow_19_810"
                            />
                        </filter>
                        <filter
                            id="filter2_bi_19_810"
                            x="-7"
                            y="14"
                            width="122"
                            height="80"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="3.5" />
                            <feComposite
                                in2="SourceAlpha"
                                operator="in"
                                result="effect1_backgroundBlur_19_810"
                            />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_backgroundBlur_19_810"
                                result="shape"
                            />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset dy="2" />
                            <feGaussianBlur stdDeviation="4" />
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0.82 0 0 0 0 1 0 0 0 0.25 0"
                            />
                            <feBlend
                                mode="normal"
                                in2="shape"
                                result="effect2_innerShadow_19_810"
                            />
                        </filter>
                        <linearGradient
                            id="paint0_linear_19_810"
                            x1="84"
                            y1="16"
                            x2="84"
                            y2="68"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#FDC500" />
                            <stop offset="1" stopColor="#FD8900" />
                        </linearGradient>
                        <linearGradient
                            id="paint1_linear_19_810"
                            x1="56"
                            y1="110.5"
                            x2="96.5"
                            y2="21"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#0082DF" />
                            <stop offset="0.299998" stopColor="#48B2FF" stopOpacity="0.75" />
                            <stop offset="1" stopColor="#3BADFF" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            );
        case 'fewCloudsNight':
            return (
                <svg
                    width="129"
                    height="111"
                    viewBox="0 0 129 111"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M106.323 41.1678C103.816 41.3129 101.305 40.9447 98.9458 40.0858C96.5862 39.2269 94.4271 37.8954 92.6008 36.1729C90.7744 34.4504 89.3195 32.3733 88.325 30.0689C87.3305 27.7645 86.8175 25.2815 86.8175 22.7719C86.8175 20.2624 87.3305 17.7793 88.325 15.4749C89.3195 13.1705 90.7744 11.0934 92.6008 9.37091C94.4271 7.64845 96.5862 6.31694 98.9458 5.45802C101.305 4.59911 103.816 4.23091 106.323 4.37598C107.906 4.36414 109.483 4.57154 111.01 4.99226C106.438 1.70358 100.936 -0.044696 95.3033 0.000868545C89.6703 0.0464331 84.1981 1.88346 79.6799 5.24567C75.1618 8.60788 71.8325 13.3206 70.1745 18.7007C68.5166 24.0808 68.6162 29.8487 70.4589 35.1684C72.3015 40.4882 75.7916 45.0833 80.4231 48.2877C85.0547 51.4922 90.587 53.1394 96.2183 52.9908C101.85 52.8421 107.287 50.9052 111.743 47.4608C116.199 44.0165 119.441 39.2436 121 33.8341C119.296 36.1165 117.081 37.9686 114.532 39.242C111.984 40.5155 109.172 41.175 106.323 41.1678Z"
                        fill="url(#paint0_linear_19_830)"
                    />
                    <g filter="url(#filter0_f_19_830)">
                        <ellipse
                            cx="53.5"
                            cy="79.5"
                            rx="31.5"
                            ry="9.5"
                            fill="#004E67"
                            fillOpacity="0.7"
                        />
                    </g>
                    <g filter="url(#filter1_bi_19_830)">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M77 42C77 42.7882 76.9696 43.5693 76.9099 44.3422C80.1949 41.6296 84.4071 40 89 40C99.4934 40 108 48.5066 108 59C108 69.158 100.029 77.4541 90 77.9741V78H89H19H17V77.896C7.44667 76.8966 0 68.8179 0 59C0 49.1618 7.47752 41.07 17.0593 40.0979C18.0405 24.4156 31.0704 12 47 12C63.5685 12 77 25.4315 77 42Z"
                            fill="url(#paint1_linear_19_830)"
                        />
                    </g>
                    <path
                        d="M121.5 30C121.5 27.6131 120.71 25.3239 119.303 23.636C117.897 21.9482 115.989 21 114 21C115.989 21 117.897 20.0518 119.303 18.364C120.71 16.6761 121.5 14.3869 121.5 12C121.5 13.1819 121.694 14.3522 122.071 15.4441C122.448 16.5361 123 17.5282 123.697 18.364C124.393 19.1997 125.22 19.8626 126.13 20.3149C127.04 20.7672 128.015 21 129 21C128.015 21 127.04 21.2328 126.13 21.6851C125.22 22.1374 124.393 22.8003 123.697 23.636C123 24.4718 122.448 25.4639 122.071 26.5559C121.694 27.6478 121.5 28.8181 121.5 30Z"
                        fill="url(#paint2_linear_19_830)"
                    />
                    <path
                        d="M53.5 21C53.5 18.6131 52.7098 16.3239 51.3033 14.636C49.8968 12.9482 47.9891 12 46 12C47.9891 12 49.8968 11.0518 51.3033 9.36397C52.7098 7.67614 53.5 5.38695 53.5 3C53.5 4.1819 53.694 5.35222 54.0709 6.44415C54.4478 7.53608 55.0003 8.52824 55.6967 9.36397C56.3931 10.1997 57.2199 10.8626 58.1299 11.3149C59.0398 11.7672 60.0151 12 61 12C60.0151 12 59.0398 12.2328 58.1299 12.6851C57.2199 13.1374 56.3931 13.8003 55.6967 14.636C55.0003 15.4718 54.4478 16.4639 54.0709 17.5559C53.694 18.6478 53.5 19.8181 53.5 21Z"
                        fill="url(#paint3_linear_19_830)"
                    />
                    <defs>
                        <filter
                            id="filter0_f_19_830"
                            x="0"
                            y="48"
                            width="107"
                            height="63"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="BackgroundImageFix"
                                result="shape"
                            />
                            <feGaussianBlur
                                stdDeviation="11"
                                result="effect1_foregroundBlur_19_830"
                            />
                        </filter>
                        <filter
                            id="filter1_bi_19_830"
                            x="-7"
                            y="5"
                            width="122"
                            height="80"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="3.5" />
                            <feComposite
                                in2="SourceAlpha"
                                operator="in"
                                result="effect1_backgroundBlur_19_830"
                            />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_backgroundBlur_19_830"
                                result="shape"
                            />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset dy="2" />
                            <feGaussianBlur stdDeviation="4" />
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0.82 0 0 0 0 1 0 0 0 0.25 0"
                            />
                            <feBlend
                                mode="normal"
                                in2="shape"
                                result="effect2_innerShadow_19_830"
                            />
                        </filter>
                        <linearGradient
                            id="paint0_linear_19_830"
                            x1="95"
                            y1="0"
                            x2="95"
                            y2="53"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#FDC500" />
                            <stop offset="1" stopColor="#FD8900" />
                        </linearGradient>
                        <linearGradient
                            id="paint1_linear_19_830"
                            x1="56"
                            y1="101.5"
                            x2="96.5"
                            y2="12"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#0082DF" />
                            <stop offset="0.299998" stopColor="#48B2FF" stopOpacity="0.75" />
                            <stop offset="1" stopColor="#3BADFF" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient
                            id="paint2_linear_19_830"
                            x1="121.5"
                            y1="12"
                            x2="121.5"
                            y2="30"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#FDC500" />
                            <stop offset="1" stopColor="#FD8900" />
                        </linearGradient>
                        <linearGradient
                            id="paint3_linear_19_830"
                            x1="53.5"
                            y1="3"
                            x2="53.5"
                            y2="21"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#FDC500" />
                            <stop offset="1" stopColor="#FD8900" />
                        </linearGradient>
                    </defs>
                </svg>
            );
        case 'scatteredClouds':
            return (
                <svg
                    width="108"
                    height="99"
                    viewBox="0 0 108 99"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g filter="url(#filter0_f_1_542)">
                        <ellipse cx="53.5" cy="67.5" rx="31.5" ry="9.5" fill="#4DB4FF" />
                    </g>
                    <g filter="url(#filter1_bi_1_542)">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M77 30C77 30.7882 76.9696 31.5693 76.9099 32.3422C80.1949 29.6296 84.4071 28 89 28C99.4934 28 108 36.5066 108 47C108 57.158 100.029 65.4541 90 65.9741V66H89H19H17V65.896C7.44667 64.8966 0 56.8179 0 47C0 37.1618 7.47752 29.07 17.0593 28.0979C18.0405 12.4156 31.0704 0 47 0C63.5685 0 77 13.4315 77 30Z"
                            fill="url(#paint0_linear_1_542)"
                        />
                    </g>
                    <defs>
                        <filter
                            id="filter0_f_1_542"
                            x="0"
                            y="36"
                            width="107"
                            height="63"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="BackgroundImageFix"
                                result="shape"
                            />
                            <feGaussianBlur
                                stdDeviation="11"
                                result="effect1_foregroundBlur_1_542"
                            />
                        </filter>
                        <filter
                            id="filter1_bi_1_542"
                            x="-7"
                            y="-7"
                            width="122"
                            height="80"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="3.5" />
                            <feComposite
                                in2="SourceAlpha"
                                operator="in"
                                result="effect1_backgroundBlur_1_542"
                            />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_backgroundBlur_1_542"
                                result="shape"
                            />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset dy="2" />
                            <feGaussianBlur stdDeviation="4" />
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0.82 0 0 0 0 1 0 0 0 0.25 0"
                            />
                            <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1_542" />
                        </filter>
                        <linearGradient
                            id="paint0_linear_1_542"
                            x1="56"
                            y1="89.5"
                            x2="96.5"
                            y2="1.95655e-07"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#0082DF" />
                            <stop offset="0.299998" stopColor="#48B2FF" stopOpacity="0.75" />
                            <stop offset="1" stopColor="#3BADFF" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            );
        case 'brokenClouds':
            return (
                <svg
                    width="134"
                    height="104"
                    viewBox="0 0 134 104"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g filter="url(#filter0_bi_19_796)">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M113.046 20.2778C113.046 20.8106 113.025 21.3387 112.985 21.8612C115.206 20.0275 118.053 18.9259 121.157 18.9259C128.25 18.9259 134 24.6758 134 31.7685C134 38.6346 128.612 44.2423 121.833 44.5936V44.6111H72.4905V44.5408C66.0333 43.8651 61 38.4046 61 31.7685C61 25.1187 66.0541 19.6493 72.5306 18.9921C73.1938 8.39202 82.001 0 92.7683 0C103.967 0 113.046 9.07867 113.046 20.2778Z"
                            fill="url(#paint0_linear_19_796)"
                        />
                    </g>
                    <g filter="url(#filter1_f_19_796)">
                        <ellipse
                            cx="53.5"
                            cy="72.5"
                            rx="31.5"
                            ry="9.5"
                            fill="#004E67"
                            fillOpacity="0.7"
                        />
                    </g>
                    <g filter="url(#filter2_bi_19_796)">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M77 35C77 35.7882 76.9696 36.5693 76.9099 37.3422C80.1949 34.6296 84.4071 33 89 33C99.4934 33 108 41.5066 108 52C108 62.158 100.029 70.4541 90 70.9741V71H89H19H17V70.896C7.44667 69.8966 0 61.8179 0 52C0 42.1618 7.47752 34.07 17.0593 33.0979C18.0405 17.4156 31.0704 5 47 5C63.5685 5 77 18.4315 77 35Z"
                            fill="url(#paint1_linear_19_796)"
                        />
                    </g>
                    <defs>
                        <filter
                            id="filter0_bi_19_796"
                            x="54"
                            y="-7"
                            width="87"
                            height="58.6111"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="3.5" />
                            <feComposite
                                in2="SourceAlpha"
                                operator="in"
                                result="effect1_backgroundBlur_19_796"
                            />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_backgroundBlur_19_796"
                                result="shape"
                            />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset dy="2" />
                            <feGaussianBlur stdDeviation="4" />
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0.82 0 0 0 0 1 0 0 0 0.25 0"
                            />
                            <feBlend
                                mode="normal"
                                in2="shape"
                                result="effect2_innerShadow_19_796"
                            />
                        </filter>
                        <filter
                            id="filter1_f_19_796"
                            x="0"
                            y="41"
                            width="107"
                            height="63"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="BackgroundImageFix"
                                result="shape"
                            />
                            <feGaussianBlur
                                stdDeviation="11"
                                result="effect1_foregroundBlur_19_796"
                            />
                        </filter>
                        <filter
                            id="filter2_bi_19_796"
                            x="-7"
                            y="-2"
                            width="122"
                            height="80"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="3.5" />
                            <feComposite
                                in2="SourceAlpha"
                                operator="in"
                                result="effect1_backgroundBlur_19_796"
                            />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_backgroundBlur_19_796"
                                result="shape"
                            />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset dy="2" />
                            <feGaussianBlur stdDeviation="4" />
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0.82 0 0 0 0 1 0 0 0 0.25 0"
                            />
                            <feBlend
                                mode="normal"
                                in2="shape"
                                result="effect2_innerShadow_19_796"
                            />
                        </filter>
                        <linearGradient
                            id="paint0_linear_19_796"
                            x1="79.5"
                            y1="54.5"
                            x2="126.227"
                            y2="-7.27901e-06"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0.170077" stopColor="#0082DF" />
                            <stop offset="0.538523" stopColor="#48B2FF" stopOpacity="0.9" />
                            <stop offset="1" stopColor="#3BADFF" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient
                            id="paint1_linear_19_796"
                            x1="56"
                            y1="94.5"
                            x2="96.5"
                            y2="5"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#0082DF" />
                            <stop offset="0.299998" stopColor="#48B2FF" stopOpacity="0.75" />
                            <stop offset="1" stopColor="#3BADFF" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            );
        case 'showerRain':
            return (
                <svg
                    width="108"
                    height="99"
                    viewBox="0 0 108 99"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g filter="url(#filter0_f_16_321)">
                        <ellipse cx="53.5" cy="67.5" rx="31.5" ry="9.5" fill="#4DB4FF" />
                    </g>
                    <g filter="url(#filter1_bi_16_321)">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M77 30C77 30.7882 76.9696 31.5693 76.9099 32.3422C80.1949 29.6296 84.4071 28 89 28C99.4934 28 108 36.5066 108 47C108 57.158 100.029 65.4541 90 65.9741V66H89H19H17V65.896C7.44667 64.8966 0 56.8179 0 47C0 37.1618 7.47752 29.07 17.0593 28.0979C18.0405 12.4156 31.0704 0 47 0C63.5685 0 77 13.4315 77 30Z"
                            fill="url(#paint0_linear_16_321)"
                        />
                    </g>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M41 41C42.3807 41 43.5 42.1193 43.5 43.5L43.5 58.5C43.5 59.8807 42.3807 61 41 61C39.6193 61 38.5 59.8807 38.5 58.5L38.5 43.5C38.5 42.1193 39.6193 41 41 41ZM67 46C68.3807 46 69.5 47.1193 69.5 48.5V76.5C69.5 77.8807 68.3807 79 67 79C65.6193 79 64.5 77.8807 64.5 76.5V48.5C64.5 47.1193 65.6193 46 67 46ZM54 53C55.3807 53 56.5 54.1193 56.5 55.5V64.5C56.5 65.8807 55.3807 67 54 67C52.6193 67 51.5 65.8807 51.5 64.5V55.5C51.5 54.1193 52.6193 53 54 53ZM54 73C55.3807 73 56.5 74.1193 56.5 75.5V93.5C56.5 94.8807 55.3807 96 54 96C52.6193 96 51.5 94.8807 51.5 93.5V75.5C51.5 74.1193 52.6193 73 54 73ZM69.5 86.5C69.5 85.1193 68.3807 84 67 84C65.6193 84 64.5 85.1193 64.5 86.5V93.5C64.5 94.8807 65.6193 96 67 96C68.3807 96 69.5 94.8807 69.5 93.5V86.5ZM82.5 60.5C82.5 59.1193 81.3807 58 80 58C78.6193 58 77.5 59.1193 77.5 60.5V67.5C77.5 68.8807 78.6193 70 80 70C81.3807 70 82.5 68.8807 82.5 67.5V60.5ZM80 76C81.3807 76 82.5 77.1193 82.5 78.5V93.5C82.5 94.8807 81.3807 96 80 96C78.6193 96 77.5 94.8807 77.5 93.5V78.5C77.5 77.1193 78.6193 76 80 76ZM43.5 68.5C43.5 67.1193 42.3807 66 41 66C39.6193 66 38.5 67.1193 38.5 68.5V75.5C38.5 76.8807 39.6193 78 41 78C42.3807 78 43.5 76.8807 43.5 75.5V68.5ZM43.5 86.5C43.5 85.1193 42.3807 84 41 84C39.6193 84 38.5 85.1193 38.5 86.5V93.5C38.5 94.8807 39.6193 96 41 96C42.3807 96 43.5 94.8807 43.5 93.5V86.5ZM27 51C28.3807 51 29.5 52.1193 29.5 53.5L29.5 61.5C29.5 62.8807 28.3807 64 27 64C25.6193 64 24.5 62.8807 24.5 61.5V53.5C24.5 52.1193 25.6193 51 27 51ZM29.5 73.5C29.5 72.1193 28.3807 71 27 71C25.6193 71 24.5 72.1193 24.5 73.5V93.5C24.5 94.8807 25.6193 96 27 96C28.3807 96 29.5 94.8807 29.5 93.5L29.5 73.5Z"
                        fill="url(#paint1_linear_16_321)"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M56.0002 66H51.9998C51.686 65.5822 51.5 65.0628 51.5 64.5V55.5C51.5 54.1193 52.6193 53 54 53C55.3807 53 56.5 54.1193 56.5 55.5V64.5C56.5 65.0628 56.314 65.5822 56.0002 66ZM69.5 66H64.5V48.5C64.5 47.1193 65.6193 46 67 46C68.3807 46 69.5 47.1193 69.5 48.5V66ZM82.5 66H77.5V60.5C77.5 59.1193 78.6193 58 80 58C81.3807 58 82.5 59.1193 82.5 60.5V66ZM43.5 43.5C43.5 42.1193 42.3807 41 41 41C39.6193 41 38.5 42.1193 38.5 43.5L38.5 58.5C38.5 59.8807 39.6193 61 41 61C42.3807 61 43.5 59.8807 43.5 58.5L43.5 43.5ZM29.5 53.5C29.5 52.1193 28.3807 51 27 51C25.6193 51 24.5 52.1193 24.5 53.5V61.5C24.5 62.8807 25.6193 64 27 64C28.3807 64 29.5 62.8807 29.5 61.5L29.5 53.5Z"
                        fill="#E0F3FE"
                    />
                    <defs>
                        <filter
                            id="filter0_f_16_321"
                            x="0"
                            y="36"
                            width="107"
                            height="63"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="BackgroundImageFix"
                                result="shape"
                            />
                            <feGaussianBlur
                                stdDeviation="11"
                                result="effect1_foregroundBlur_16_321"
                            />
                        </filter>
                        <filter
                            id="filter1_bi_16_321"
                            x="-7"
                            y="-7"
                            width="122"
                            height="80"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="3.5" />
                            <feComposite
                                in2="SourceAlpha"
                                operator="in"
                                result="effect1_backgroundBlur_16_321"
                            />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_backgroundBlur_16_321"
                                result="shape"
                            />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset dy="2" />
                            <feGaussianBlur stdDeviation="4" />
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0.82 0 0 0 0 1 0 0 0 0.25 0"
                            />
                            <feBlend
                                mode="normal"
                                in2="shape"
                                result="effect2_innerShadow_16_321"
                            />
                        </filter>
                        <linearGradient
                            id="paint0_linear_16_321"
                            x1="56"
                            y1="89.5"
                            x2="96.5"
                            y2="1.95655e-07"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#0082DF" />
                            <stop offset="0.299998" stopColor="#48B2FF" stopOpacity="0.75" />
                            <stop offset="1" stopColor="#3BADFF" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient
                            id="paint1_linear_16_321"
                            x1="53.5"
                            y1="41"
                            x2="53.5"
                            y2="96"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0.168182" stopColor="#D7F0FF" />
                            <stop offset="1" stopColor="#0072DC" />
                        </linearGradient>
                    </defs>
                </svg>
            );
        case 'rain':
            return (
                <svg
                    width="108"
                    height="99"
                    viewBox="0 0 108 99"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g filter="url(#filter0_f_19_1036)">
                        <ellipse
                            cx="53.5"
                            cy="67.5"
                            rx="31.5"
                            ry="9.5"
                            fill="#004E67"
                            fillOpacity="0.7"
                        />
                    </g>
                    <g filter="url(#filter1_bi_19_1036)">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M77 30C77 30.7882 76.9696 31.5693 76.9099 32.3422C80.1949 29.6296 84.4071 28 89 28C99.4934 28 108 36.5066 108 47C108 57.158 100.029 65.4541 90 65.9741V66H89H19H17V65.896C7.44667 64.8966 0 56.8179 0 47C0 37.1618 7.47752 29.07 17.0593 28.0979C18.0405 12.4156 31.0704 0 47 0C63.5685 0 77 13.4315 77 30Z"
                            fill="url(#paint0_linear_19_1036)"
                        />
                    </g>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M27.3256 78.5778C27.732 78.8544 28.2092 79.0013 28.6969 78.9999C29.1384 79.003 29.573 78.8878 29.9578 78.6657C30.3426 78.4435 30.6643 78.1222 30.891 77.7334L58.9342 31.0117C59.293 30.4132 59.4079 29.6938 59.254 29.009C59.1 28.3243 58.6895 27.7293 58.1114 27.3528C57.5157 27.0087 56.8144 26.9118 56.1513 27.0819C55.4882 27.2521 54.9138 27.6763 54.546 28.2675L26.5028 74.9188C26.3159 75.2124 26.1887 75.5417 26.1289 75.887C26.0691 76.2323 26.0778 76.5865 26.1547 76.9282C26.2315 77.2699 26.3748 77.5921 26.5761 77.8756C26.7773 78.1591 27.0322 78.3979 27.3256 78.5778ZM8.60718 78.9999C8.11947 79.0013 7.64229 78.8544 7.23587 78.5778C6.9425 78.3979 6.68756 78.1591 6.48636 77.8756C6.28515 77.5921 6.14182 77.2699 6.06498 76.9282C5.98814 76.5864 5.97934 76.2323 6.03916 75.887C6.09898 75.5417 6.22618 75.2124 6.41308 74.9188L26.5027 41.9885C26.678 41.6874 26.9107 41.4258 27.1869 41.2193C27.4631 41.0128 27.7771 40.8657 28.1101 40.7869C28.4431 40.708 28.7882 40.699 29.1247 40.7604C29.4611 40.8218 29.782 40.9523 30.0681 41.1441C30.6463 41.5207 31.0567 42.1157 31.2107 42.8004C31.3646 43.4851 31.2498 44.2045 30.8909 44.803L10.8012 77.7334C10.5745 78.1222 10.2529 78.4435 9.86808 78.6657C9.48328 78.8878 9.04867 79.003 8.60718 78.9999ZM50.2263 79C49.7386 79.0014 49.2614 78.8544 48.855 78.5778C48.5616 78.3979 48.3067 78.1591 48.1055 77.8756C47.9043 77.5922 47.761 77.2699 47.6841 76.9282C47.6073 76.5865 47.5985 76.2323 47.6583 75.887C47.7181 75.5418 47.8453 75.2125 48.0322 74.9189L62.2252 51.558C62.5921 50.9647 63.172 50.5435 63.8392 50.3854C64.5064 50.2274 65.2074 50.3453 65.7906 50.7136C66.3688 51.0902 66.7792 51.6852 66.9332 52.3699C67.0872 53.0547 66.9723 53.7741 66.6134 54.3726L52.4204 77.7334C52.1887 78.1176 51.866 78.4352 51.4823 78.6567C51.0986 78.8781 50.6665 78.9963 50.2263 79Z"
                        fill="url(#paint1_linear_19_1036)"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.9594 66H17.0001V65.896C15.4508 65.7339 13.9569 65.3857 12.5411 64.874L26.5028 41.9885C26.678 41.6874 26.9107 41.4258 27.1869 41.2193C27.4632 41.0128 27.7772 40.8657 28.1102 40.7869C28.4432 40.708 28.7883 40.699 29.1247 40.7604C29.4612 40.8218 29.7821 40.9523 30.0682 41.1441C30.6463 41.5207 31.0567 42.1157 31.2107 42.8004C31.3647 43.4851 31.2498 44.2045 30.891 44.803L17.9594 66ZM31.8642 66L54.5461 28.2675C54.9138 27.6763 55.4883 27.2521 56.1513 27.0819C56.8144 26.9118 57.5158 27.0087 58.1114 27.3528C58.6896 27.7293 59.1 28.3243 59.254 29.009C59.408 29.6938 59.2931 30.4132 58.9342 31.0117L37.9336 66H31.8642ZM59.5491 66H53.451L62.2253 51.558C62.5922 50.9647 63.172 50.5435 63.8392 50.3854C64.5065 50.2274 65.2075 50.3453 65.7907 50.7136C66.3688 51.0902 66.7793 51.6852 66.9333 52.3699C67.0872 53.0547 66.9723 53.7741 66.6135 54.3726L59.5491 66Z"
                        fill="#A9DDFA"
                    />
                    <defs>
                        <filter
                            id="filter0_f_19_1036"
                            x="0"
                            y="36"
                            width="107"
                            height="63"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="BackgroundImageFix"
                                result="shape"
                            />
                            <feGaussianBlur
                                stdDeviation="11"
                                result="effect1_foregroundBlur_19_1036"
                            />
                        </filter>
                        <filter
                            id="filter1_bi_19_1036"
                            x="-7"
                            y="-7"
                            width="122"
                            height="80"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="3.5" />
                            <feComposite
                                in2="SourceAlpha"
                                operator="in"
                                result="effect1_backgroundBlur_19_1036"
                            />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_backgroundBlur_19_1036"
                                result="shape"
                            />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset dy="2" />
                            <feGaussianBlur stdDeviation="4" />
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0.82 0 0 0 0 1 0 0 0 0.25 0"
                            />
                            <feBlend
                                mode="normal"
                                in2="shape"
                                result="effect2_innerShadow_19_1036"
                            />
                        </filter>
                        <linearGradient
                            id="paint0_linear_19_1036"
                            x1="56"
                            y1="89.5"
                            x2="96.5"
                            y2="1.95655e-07"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#0082DF" />
                            <stop offset="0.299998" stopColor="#48B2FF" stopOpacity="0.75" />
                            <stop offset="1" stopColor="#3BADFF" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient
                            id="paint1_linear_19_1036"
                            x1="36.5"
                            y1="27"
                            x2="36.5"
                            y2="79"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#D7F0FF" />
                            <stop offset="1" stopColor="#0072DC" />
                        </linearGradient>
                    </defs>
                </svg>
            );
        case 'thunderstorm':
            return (
                <svg
                    width="108"
                    height="100"
                    viewBox="0 0 108 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g filter="url(#filter0_f_19_1117)">
                        <ellipse
                            cx="53.5"
                            cy="67.5"
                            rx="31.5"
                            ry="9.5"
                            fill="#004E67"
                            fillOpacity="0.7"
                        />
                    </g>
                    <path
                        d="M49.8069 75.2814L62.9076 51.2315C62.9853 51.0888 63.1348 51 63.2973 51H80.2814C80.6114 51 80.826 51.3474 80.6782 51.6426L73.8724 65.2324C73.7246 65.5276 73.9391 65.875 74.2692 65.875H81L43.8784 98.3564C43.5053 98.6829 42.959 98.2447 43.1967 97.8096L54.7873 76.5941C54.9489 76.2983 54.7349 75.9375 54.3979 75.9375H50.1966C49.8598 75.9375 49.6458 75.5771 49.8069 75.2814Z"
                        fill="url(#paint0_linear_19_1117)"
                    />
                    <g filter="url(#filter1_bi_19_1117)">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M77 30C77 30.7882 76.9696 31.5693 76.9099 32.3422C80.1949 29.6296 84.4071 28 89 28C99.4934 28 108 36.5066 108 47C108 57.158 100.029 65.4541 90 65.9741V66H89H19H17V65.896C7.44667 64.8966 0 56.8179 0 47C0 37.1618 7.47752 29.07 17.0593 28.0979C18.0405 12.4156 31.0704 0 47 0C63.5685 0 77 13.4315 77 30Z"
                            fill="url(#paint1_linear_19_1117)"
                        />
                    </g>
                    <path
                        d="M12.7772 76.9555C12.2898 76.9718 11.8084 76.8395 11.3937 76.5754C11.0949 76.4046 10.8328 76.1737 10.623 75.8966C10.4132 75.6194 10.2601 75.3017 10.1728 74.9624C10.0856 74.6232 10.066 74.2695 10.1152 73.9226C10.1644 73.5756 10.2815 73.2426 10.4593 72.9434L29.5319 39.4138C29.6979 39.1075 29.9225 38.8389 30.1923 38.624C30.462 38.4092 30.7714 38.2526 31.1018 38.1636C31.4323 38.0745 31.7769 38.055 32.1151 38.106C32.4533 38.1571 32.778 38.2777 33.0698 38.4607C33.6592 38.8194 34.0877 39.4016 34.2625 40.0813C34.4374 40.761 34.3446 41.4836 34.0042 42.0927L14.9315 75.6224C14.7168 76.0179 14.4052 76.349 14.0273 76.5828C13.6495 76.8166 13.2186 76.945 12.7772 76.9555Z"
                        fill="url(#paint2_linear_19_1117)"
                    />
                    <path
                        d="M40.4836 75.1828C39.9961 75.1991 39.5147 75.0669 39.1 74.8028C38.8012 74.632 38.5391 74.4011 38.3293 74.1239C38.1195 73.8467 37.9665 73.529 37.8792 73.1898C37.7919 72.8506 37.7723 72.4969 37.8215 72.1499C37.8708 71.803 37.9878 71.4699 38.1657 71.1708L51.6372 47.3866C51.9858 46.7823 52.5525 46.3435 53.2146 46.1652C53.8767 45.9868 54.5809 46.0832 55.1751 46.4335C55.7645 46.7922 56.193 47.3743 56.3679 48.054C56.5427 48.7338 56.4499 49.4563 56.1095 50.0655L42.6379 73.8497C42.4181 74.2408 42.1052 74.5681 41.7285 74.8012C41.3518 75.0344 40.9234 75.1656 40.4836 75.1828Z"
                        fill="url(#paint3_linear_19_1117)"
                    />
                    <path
                        d="M21.4836 85.1828C20.9961 85.1991 20.5147 85.0669 20.1 84.8028C19.8012 84.632 19.5391 84.4011 19.3293 84.1239C19.1195 83.8467 18.9665 83.529 18.8792 83.1898C18.7919 82.8506 18.7723 82.4969 18.8215 82.1499C18.8708 81.803 18.9878 81.4699 19.1657 81.1708L32.6372 57.3866C32.9858 56.7823 33.5525 56.3435 34.2146 56.1652C34.8767 55.9868 35.5809 56.0832 36.1751 56.4335C36.7645 56.7922 37.193 57.3743 37.3679 58.054C37.5427 58.7338 37.4499 59.4563 37.1095 60.0655L23.6379 83.8497C23.4181 84.2408 23.1052 84.5681 22.7285 84.8012C22.3518 85.0344 21.9234 85.1656 21.4836 85.1828Z"
                        fill="url(#paint4_linear_19_1117)"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20.405 66H18.9999H16.9999V65.896C16.2142 65.8138 15.4427 65.6837 14.6884 65.5087L29.5319 39.4138C29.6979 39.1075 29.9225 38.8389 30.1923 38.624C30.462 38.4092 30.7714 38.2526 31.1018 38.1636C31.4323 38.0746 31.7769 38.055 32.1151 38.1061C32.4533 38.1571 32.778 38.2778 33.0698 38.4607C33.6593 38.8194 34.0877 39.4016 34.2626 40.0813C34.4374 40.761 34.3446 41.4836 34.0042 42.0928L20.405 66ZM33.7481 66H27.7585L32.6372 57.3866C32.9858 56.7823 33.5525 56.3435 34.2146 56.1652C34.8767 55.9868 35.5809 56.0832 36.1751 56.4335C36.7645 56.7922 37.193 57.3744 37.3679 58.0541C37.5427 58.7338 37.4499 59.4564 37.1095 60.0655L33.7481 66ZM47.084 66H41.0944L51.6372 47.3866C51.9858 46.7823 52.5525 46.3435 53.2146 46.1652C53.8767 45.9868 54.5809 46.0832 55.1751 46.4335C55.7645 46.7922 56.193 47.3744 56.3679 48.0541C56.5427 48.7338 56.4499 49.4564 56.1095 50.0655L47.084 66Z"
                        fill="#A9DDFA"
                    />
                    <defs>
                        <filter
                            id="filter0_f_19_1117"
                            x="0"
                            y="36"
                            width="107"
                            height="63"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="BackgroundImageFix"
                                result="shape"
                            />
                            <feGaussianBlur
                                stdDeviation="11"
                                result="effect1_foregroundBlur_19_1117"
                            />
                        </filter>
                        <filter
                            id="filter1_bi_19_1117"
                            x="-7"
                            y="-7"
                            width="122"
                            height="80"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="3.5" />
                            <feComposite
                                in2="SourceAlpha"
                                operator="in"
                                result="effect1_backgroundBlur_19_1117"
                            />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_backgroundBlur_19_1117"
                                result="shape"
                            />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset dy="2" />
                            <feGaussianBlur stdDeviation="4" />
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0.82 0 0 0 0 1 0 0 0 0.25 0"
                            />
                            <feBlend
                                mode="normal"
                                in2="shape"
                                result="effect2_innerShadow_19_1117"
                            />
                        </filter>
                        <linearGradient
                            id="paint0_linear_19_1117"
                            x1="61.5"
                            y1="51"
                            x2="61.5"
                            y2="100"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#F8FD00" />
                            <stop offset="1" stopColor="#FD9800" />
                        </linearGradient>
                        <linearGradient
                            id="paint1_linear_19_1117"
                            x1="60"
                            y1="97"
                            x2="15.5"
                            y2="21.5"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#FFEC45" stopOpacity="0.5" />
                            <stop offset="0.419808" stopColor="#48B2FF" stopOpacity="0.65" />
                            <stop offset="1" stopColor="#0082DF" />
                        </linearGradient>
                        <linearGradient
                            id="paint2_linear_19_1117"
                            x1="29.5493"
                            y1="25.1793"
                            x2="1.60643"
                            y2="67.1028"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#D7F0FF" />
                            <stop offset="1" stopColor="#0072DC" />
                        </linearGradient>
                        <linearGradient
                            id="paint3_linear_19_1117"
                            x1="52.7626"
                            y1="36.3958"
                            x2="32.0087"
                            y2="68.2754"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#D7F0FF" />
                            <stop offset="1" stopColor="#0072DC" />
                        </linearGradient>
                        <linearGradient
                            id="paint4_linear_19_1117"
                            x1="33.7626"
                            y1="46.3958"
                            x2="13.0087"
                            y2="78.2754"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#D7F0FF" />
                            <stop offset="1" stopColor="#0072DC" />
                        </linearGradient>
                    </defs>
                </svg>
            );
        case 'snow':
            return (
                <svg
                    width="100"
                    height="100"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M57.2565 65.1476C57.2565 63.9615 56.295 63 55.109 63C53.9229 63 52.9614 63.9615 52.9614 65.1476V68.816L50.3674 66.222C49.5287 65.3834 48.169 65.3834 47.3303 66.222C46.4916 67.0607 46.4916 68.4205 47.3303 69.2592L49.9243 71.8532H46.2559C45.0699 71.8532 44.1084 72.8147 44.1084 74.0007C44.1084 75.1868 45.0699 76.1483 46.2559 76.1483L49.9242 76.1483L47.3302 78.7423C46.4915 79.581 46.4915 80.9407 47.3302 81.7794C48.1689 82.6181 49.5286 82.6181 50.3673 81.7794L52.9614 79.1853V82.8539C52.9614 84.0399 53.9229 85.0014 55.109 85.0014C56.295 85.0014 57.2565 84.0399 57.2565 82.8539V79.1854L59.8505 81.7794C60.6892 82.6181 62.049 82.6181 62.8877 81.7794C63.7263 80.9407 63.7263 79.581 62.8877 78.7423L60.2937 76.1483L63.9622 76.1483C65.1483 76.1483 66.1098 75.1868 66.1098 74.0007C66.1098 72.8147 65.1483 71.8532 63.9622 71.8532H60.2936L62.8876 69.2592C63.7262 68.4205 63.7262 67.0607 62.8876 66.222C62.0489 65.3834 60.6891 65.3834 59.8504 66.222L57.2565 68.8159V65.1476Z"
                        fill="url(#paint0_linear_19_852)"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M67.4839 17.0244C67.4839 15.3541 66.1298 14 64.4595 14C62.7892 14 61.4351 15.3541 61.4351 17.0244V21.6996L58.1292 18.3937C56.9481 17.2126 55.0332 17.2126 53.8521 18.3937C52.671 19.5748 52.671 21.4897 53.8521 22.6708L57.1578 25.9766L52.4829 25.9766C50.8126 25.9766 49.4585 27.3307 49.4585 29.001C49.4585 30.6713 50.8126 32.0254 52.4829 32.0254H57.1579L53.8521 35.3312C52.671 36.5123 52.671 38.4272 53.8521 39.6083C55.0332 40.7894 56.9482 40.7894 58.1293 39.6083L61.4351 36.3025V40.9776C61.4351 42.6479 62.7892 44.002 64.4595 44.002C66.1298 44.002 67.4839 42.6479 67.4839 40.9776V36.3026L70.7895 39.6083C71.9706 40.7894 73.8856 40.7894 75.0667 39.6083C76.2478 38.4272 76.2478 36.5123 75.0667 35.3312L71.7609 32.0254H76.4361C78.1064 32.0254 79.4605 30.6713 79.4605 29.001C79.4605 27.3307 78.1064 25.9766 76.4361 25.9766L71.761 25.9766L75.0667 22.6708C76.2478 21.4897 76.2478 19.5748 75.0667 18.3937C73.8856 17.2126 71.9707 17.2126 70.7896 18.3937L67.4839 21.6994V17.0244Z"
                        fill="url(#paint1_linear_19_852)"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M36.6186 37.4084C36.6186 35.9627 35.4466 34.7906 34.0009 34.7906C32.5551 34.7906 31.3831 35.9627 31.3831 37.4084V41.4717L28.5099 38.5985C27.4877 37.5762 25.8302 37.5762 24.8079 38.5985C23.7856 39.6208 23.7856 41.2783 24.8079 42.3006L27.6811 45.1737L23.6178 45.1737C22.172 45.1737 21 46.3457 21 47.7915C21 49.2372 22.172 50.4092 23.6177 50.4092L27.6811 50.4092L24.8079 53.2824C23.7856 54.3047 23.7856 55.9621 24.8079 56.9844C25.8302 58.0067 27.4877 58.0067 28.5099 56.9844L31.3831 54.1113V58.1745C31.3831 59.6203 32.5551 60.7923 34.0009 60.7923C35.4466 60.7923 36.6186 59.6203 36.6186 58.1745V54.1113L39.4918 56.9844C40.5141 58.0067 42.1715 58.0067 43.1938 56.9844C44.2161 55.9621 44.2161 54.3047 43.1938 53.2824L40.3207 50.4092L44.3839 50.4092C45.8296 50.4092 47.0016 49.2372 47.0016 47.7915C47.0016 46.3457 45.8296 45.1737 44.3839 45.1737L40.3207 45.1737L43.1938 42.3006C44.2161 41.2783 44.2161 39.6208 43.1938 38.5985C42.1715 37.5762 40.5141 37.5762 39.4918 38.5985L36.6186 41.4716V37.4084Z"
                        fill="url(#paint2_linear_19_852)"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_19_852"
                            x1="47.2491"
                            y1="80.5488"
                            x2="68.145"
                            y2="62.9119"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#0056D6" />
                            <stop offset="1" stopColor="#ADD8FF" />
                        </linearGradient>
                        <linearGradient
                            id="paint1_linear_19_852"
                            x1="53.7414"
                            y1="37.9302"
                            x2="82.2358"
                            y2="13.8798"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#0056D6" />
                            <stop offset="1" stopColor="#ADD8FF" />
                        </linearGradient>
                        <linearGradient
                            id="paint2_linear_19_852"
                            x1="24.7118"
                            y1="55.5301"
                            x2="49.4069"
                            y2="34.6865"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#0056D6" />
                            <stop offset="1" stopColor="#ADD8FF" />
                        </linearGradient>
                    </defs>
                </svg>
            );
        case 'mist':
            return (
                <svg
                    width="129"
                    height="99"
                    viewBox="0 0 129 99"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g filter="url(#filter0_f_19_1092)">
                        <ellipse
                            cx="53.5"
                            cy="67.5"
                            rx="31.5"
                            ry="9.5"
                            fill="#004E67"
                            fillOpacity="0.7"
                        />
                    </g>
                    <g filter="url(#filter1_bi_19_1092)">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M77 30C77 30.7882 76.9696 31.5693 76.9099 32.3422C80.1949 29.6296 84.4071 28 89 28C99.4934 28 108 36.5066 108 47C108 57.158 100.029 65.4541 90 65.9741V66H89H19H17V65.896C7.44667 64.8966 0 56.8179 0 47C0 37.1618 7.47752 29.07 17.0593 28.0979C18.0405 12.4156 31.0704 0 47 0C63.5685 0 77 13.4315 77 30Z"
                            fill="url(#paint0_linear_19_1092)"
                        />
                    </g>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M125.432 47.9113H113.072C112.494 47.8165 111.968 47.5191 111.588 47.0723C111.208 46.6254 111 46.0582 111 45.4719C111 44.8856 111.208 44.3184 111.588 43.8715C111.968 43.4247 112.494 43.1273 113.072 43.0325H125.432C125.786 42.9746 126.148 42.9942 126.493 43.0901C126.838 43.1861 127.159 43.3559 127.432 43.588C127.705 43.82 127.924 44.1087 128.075 44.434C128.225 44.7593 128.303 45.1135 128.303 45.4719C128.303 45.8303 128.225 46.1845 128.075 46.5098C127.924 46.8351 127.705 47.1238 127.432 47.3558C127.159 47.5879 126.838 47.7578 126.493 47.8537C126.148 47.9496 125.786 47.9693 125.432 47.9113ZM98.1033 47.9113H40.0134C39.6597 47.9693 39.2976 47.9496 38.9523 47.8537C38.6069 47.7578 38.2865 47.5879 38.0134 47.3559C37.7402 47.1238 37.5208 46.8351 37.3703 46.5098C37.2198 46.1845 37.1418 45.8303 37.1418 45.4719C37.1418 45.1135 37.2198 44.7593 37.3703 44.434C37.5208 44.1087 37.7402 43.82 38.0134 43.588C38.2865 43.3559 38.6069 43.1861 38.9523 43.0901C39.2976 42.9942 39.6597 42.9746 40.0134 43.0325H98.1033C98.457 42.9746 98.8191 42.9942 99.1645 43.0901C99.5099 43.1861 99.8302 43.3559 100.103 43.588C100.377 43.82 100.596 44.1087 100.746 44.434C100.897 44.7593 100.975 45.1135 100.975 45.4719C100.975 45.8303 100.897 46.1845 100.746 46.5098C100.596 46.8351 100.377 47.1238 100.103 47.3559C99.8302 47.5879 99.5099 47.7578 99.1645 47.8537C98.8191 47.9496 98.457 47.9693 98.1033 47.9113ZM29.8655 74.6139H120.806C121.461 74.6138 122.09 74.3534 122.554 73.8898C123.017 73.4262 123.278 72.7975 123.278 72.1419C123.278 71.4863 123.017 70.8576 122.554 70.394C122.09 69.9304 121.461 69.67 120.806 69.67H29.8655C29.2099 69.67 28.5811 69.9304 28.1175 70.394C27.654 70.8576 27.3936 71.4863 27.3936 72.1419C27.3936 72.7975 27.654 73.4262 28.1175 73.8898C28.5811 74.3534 29.2099 74.6138 29.8655 74.6139ZM81.6456 59.23H13.4078C13.0893 59.239 12.7723 59.1829 12.4762 59.0651C12.1802 58.9473 11.9112 58.7704 11.6859 58.5451C11.4606 58.3198 11.2836 58.0508 11.1659 57.7547C11.0481 57.4587 10.992 57.1416 11.0009 56.8231C10.9922 56.5016 11.0481 56.1816 11.1651 55.8821C11.2822 55.5825 11.4581 55.3095 11.6825 55.079C11.9068 54.8486 12.1751 54.6655 12.4715 54.5405C12.7678 54.4155 13.0862 54.3511 13.4078 54.3513H81.6456C82.2898 54.3682 82.902 54.6361 83.3515 55.0978C83.8011 55.5596 84.0526 56.1786 84.0524 56.8231C84.0524 57.4615 83.7988 58.0737 83.3475 58.5251C82.8961 58.9764 82.2839 59.23 81.6456 59.23ZM95.5661 59.23H115.537C115.855 59.239 116.172 59.1829 116.468 59.0651C116.764 58.9473 117.033 58.7704 117.258 58.5451C117.484 58.3198 117.661 58.0508 117.779 57.7547C117.896 57.4587 117.952 57.1416 117.943 56.8231C117.952 56.5016 117.896 56.1816 117.779 55.8821C117.662 55.5825 117.486 55.3095 117.262 55.079C117.038 54.8486 116.769 54.6655 116.473 54.5405C116.177 54.4155 115.858 54.3511 115.537 54.3513H95.5661C94.9106 54.3513 94.2818 54.6116 93.8182 55.0752C93.3547 55.5388 93.0942 56.1675 93.0942 56.8231C93.0941 57.1447 93.1585 57.4632 93.2835 57.7595C93.4085 58.0558 93.5916 58.3241 93.822 58.5485C94.0525 58.7728 94.3255 58.9488 94.6251 59.0658C94.9247 59.1829 95.2446 59.2387 95.5661 59.23Z"
                        fill="url(#paint1_linear_19_1092)"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M106.526 54.3513C105.778 56.1317 104.767 57.7742 103.541 59.23H95.566C95.2445 59.2387 94.9245 59.1829 94.625 59.0658C94.3254 58.9488 94.0524 58.7728 93.8219 58.5485C93.5915 58.3241 93.4083 58.0558 93.2833 57.7595C93.1583 57.4632 93.094 57.1447 93.0941 56.8231C93.0941 56.1675 93.3545 55.5388 93.8181 55.0752C94.2817 54.6116 94.9104 54.3513 95.566 54.3513H106.526ZM40.0133 47.9113H98.1032C98.4569 47.9693 98.819 47.9496 99.1644 47.8537C99.5097 47.7578 99.8301 47.5879 100.103 47.3558C100.376 47.1238 100.596 46.8351 100.746 46.5098C100.897 46.1845 100.975 45.8303 100.975 45.4719C100.975 45.1135 100.897 44.7593 100.746 44.434C100.596 44.1087 100.376 43.82 100.103 43.588C99.8301 43.3559 99.5097 43.1861 99.1644 43.0901C98.819 42.9942 98.4569 42.9746 98.1032 43.0325H40.0133C39.6596 42.9746 39.2975 42.9942 38.9522 43.0901C38.6068 43.1861 38.2864 43.3559 38.0133 43.588C37.7401 43.82 37.5207 44.1087 37.3702 44.434C37.2197 44.7593 37.1417 45.1135 37.1417 45.4719C37.1417 45.8303 37.2197 46.1845 37.3702 46.5098C37.5207 46.8351 37.7401 47.1238 38.0133 47.3558C38.2864 47.5879 38.6068 47.7578 38.9522 47.8537C39.2975 47.9496 39.6596 47.9693 40.0133 47.9113ZM13.4077 59.23H81.6454C82.2838 59.23 82.896 58.9764 83.3473 58.5251C83.7987 58.0737 84.0523 57.4615 84.0523 56.8231C84.0525 56.1786 83.801 55.5596 83.3514 55.0978C82.9018 54.6361 82.2897 54.3682 81.6454 54.3513H13.4077C13.0861 54.3511 12.7677 54.4155 12.4713 54.5405C12.175 54.6655 11.9067 54.8486 11.6824 55.079C11.458 55.3095 11.2821 55.5825 11.165 55.8821C11.048 56.1816 10.9921 56.5016 11.0008 56.8231C10.9918 57.1416 11.048 57.4587 11.1657 57.7547C11.2835 58.0508 11.4605 58.3198 11.6858 58.5451C11.9111 58.7704 12.18 58.9473 12.4761 59.0651C12.7722 59.1829 13.0892 59.239 13.4077 59.23Z"
                        fill="#A9DDFA"
                    />
                    <defs>
                        <filter
                            id="filter0_f_19_1092"
                            x="0"
                            y="36"
                            width="107"
                            height="63"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="BackgroundImageFix"
                                result="shape"
                            />
                            <feGaussianBlur
                                stdDeviation="11"
                                result="effect1_foregroundBlur_19_1092"
                            />
                        </filter>
                        <filter
                            id="filter1_bi_19_1092"
                            x="-7"
                            y="-7"
                            width="122"
                            height="80"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="3.5" />
                            <feComposite
                                in2="SourceAlpha"
                                operator="in"
                                result="effect1_backgroundBlur_19_1092"
                            />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_backgroundBlur_19_1092"
                                result="shape"
                            />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset dy="2" />
                            <feGaussianBlur stdDeviation="4" />
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0.82 0 0 0 0 1 0 0 0 0.25 0"
                            />
                            <feBlend
                                mode="normal"
                                in2="shape"
                                result="effect2_innerShadow_19_1092"
                            />
                        </filter>
                        <linearGradient
                            id="paint0_linear_19_1092"
                            x1="56"
                            y1="89.5"
                            x2="96.5"
                            y2="1.95655e-07"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#0082DF" />
                            <stop offset="0.299998" stopColor="#48B2FF" stopOpacity="0.75" />
                            <stop offset="1" stopColor="#3BADFF" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient
                            id="paint1_linear_19_1092"
                            x1="69.6517"
                            y1="-38.5"
                            x2="69.6517"
                            y2="77.5"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#D7F0FF" />
                            <stop offset="1" stopColor="#0072DC" />
                        </linearGradient>
                    </defs>
                </svg>
            );
        case 'search':
            return (
                <svg
                    {...props}
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M28 28L23.3333 23.3333M22.6667 13.3333C22.6667 14.559 22.4253 15.7727 21.9562 16.905C21.4872 18.0374 20.7997 19.0663 19.933 19.933C19.0663 20.7997 18.0374 21.4872 16.905 21.9562C15.7727 22.4253 14.559 22.6667 13.3333 22.6667C12.1077 22.6667 10.894 22.4253 9.76162 21.9562C8.62925 21.4872 7.60035 20.7997 6.73367 19.933C5.86699 19.0663 5.1795 18.0374 4.71046 16.905C4.24141 15.7727 4 14.559 4 13.3333C4 10.858 4.98333 8.48401 6.73367 6.73367C8.48401 4.98333 10.858 4 13.3333 4C15.8087 4 18.1827 4.98333 19.933 6.73367C21.6833 8.48401 22.6667 10.858 22.6667 13.3333Z"
                        stroke="#5E5E5E"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </svg>
            );
        case 'humidity':
            return (
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M17.607 10.4947L12.6353 2.57775C12.5631 2.4765 12.4678 2.39397 12.3573 2.33702C12.2468 2.28007 12.1243 2.25036 12 2.25036C11.8757 2.25036 11.7532 2.28007 11.6427 2.33702C11.5322 2.39397 11.4369 2.4765 11.3647 2.57775L6.3705 10.533C5.67724 11.6522 5.2908 12.9341 5.25 14.25C5.25 16.0402 5.96116 17.7571 7.22703 19.023C8.4929 20.2888 10.2098 21 12 21C13.7902 21 15.5071 20.2888 16.773 19.023C18.0388 17.7571 18.75 16.0402 18.75 14.25C18.707 12.9193 18.3126 11.6237 17.607 10.4947ZM12 19.5C10.6082 19.498 9.27402 18.9443 8.28988 17.9601C7.30574 16.976 6.75198 15.6418 6.75 14.25C6.79063 13.2013 7.10561 12.1816 7.6635 11.2927L8.36475 10.1752L15.9202 17.7307C15.4294 18.2866 14.8261 18.7318 14.1503 19.037C13.4745 19.3421 12.7415 19.4994 12 19.5Z"
                        fill="white"
                    />
                </svg>
            );
        case 'visibility':
            return (
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M12 3C17.392 3 21.878 6.88 22.819 12C21.879 17.12 17.392 21 12 21C6.60801 21 2.12201 17.12 1.18201 12C2.12201 6.88 6.60801 3 12 3ZM12 19C14.0396 18.9998 16.0188 18.3071 17.6135 17.0355C19.2081 15.7638 20.3239 13.9884 20.778 12C20.3226 10.0128 19.2065 8.23896 17.612 6.96854C16.0176 5.69813 14.0392 5.00635 12.0005 5.00635C9.96182 5.00635 7.98346 5.69813 6.38901 6.96854C4.79455 8.23896 3.67837 10.0128 3.22301 12C3.6771 13.9883 4.79268 15.7635 6.38715 17.0352C7.98162 18.3068 9.96054 18.9996 12 19ZM12 16.5C10.8065 16.5 9.66194 16.0259 8.81803 15.182C7.97411 14.3381 7.50001 13.1935 7.50001 12C7.50001 10.8065 7.97411 9.66193 8.81803 8.81802C9.66194 7.97411 10.8065 7.5 12 7.5C13.1935 7.5 14.3381 7.97411 15.182 8.81802C16.0259 9.66193 16.5 10.8065 16.5 12C16.5 13.1935 16.0259 14.3381 15.182 15.182C14.3381 16.0259 13.1935 16.5 12 16.5ZM12 14.5C12.663 14.5 13.2989 14.2366 13.7678 13.7678C14.2366 13.2989 14.5 12.663 14.5 12C14.5 11.337 14.2366 10.7011 13.7678 10.2322C13.2989 9.76339 12.663 9.5 12 9.5C11.337 9.5 10.7011 9.76339 10.2322 10.2322C9.7634 10.7011 9.50001 11.337 9.50001 12C9.50001 12.663 9.7634 13.2989 10.2322 13.7678C10.7011 14.2366 11.337 14.5 12 14.5Z"
                        fill="white"
                    />
                </svg>
            );
        case 'wind':
            return (
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M3 8H9.5C9.99445 8 10.4778 7.85338 10.8889 7.57867C11.3 7.30397 11.6205 6.91352 11.8097 6.45671C11.9989 5.99989 12.0484 5.49723 11.952 5.01228C11.8555 4.52732 11.6174 4.08187 11.2678 3.73223C10.9181 3.3826 10.4727 3.1445 9.98773 3.04804C9.50277 2.95157 9.00011 3.00108 8.54329 3.1903C8.08648 3.37952 7.69603 3.69995 7.42133 4.11108C7.14662 4.5222 7 5.00555 7 5.5V5.857M4 14H18.5C19.1922 14 19.8689 14.2053 20.4445 14.5899C21.0201 14.9744 21.4687 15.5211 21.7336 16.1606C21.9985 16.8002 22.0678 17.5039 21.9327 18.1828C21.7977 18.8618 21.4644 19.4854 20.9749 19.9749C20.4854 20.4644 19.8617 20.7977 19.1828 20.9328C18.5039 21.0678 17.8001 20.9985 17.1606 20.7336C16.5211 20.4687 15.9744 20.0201 15.5899 19.4445C15.2053 18.8689 15 18.1922 15 17.5V17"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />
                    <path
                        d="M2 11H18.5C19.1922 11 19.8689 10.7947 20.4445 10.4101C21.0201 10.0256 21.4687 9.47893 21.7336 8.83939C21.9985 8.19985 22.0678 7.49612 21.9327 6.81719C21.7977 6.13825 21.4644 5.51461 20.9749 5.02513C20.4854 4.53564 19.8617 4.2023 19.1828 4.06725C18.5039 3.9322 17.8001 4.00152 17.1606 4.26642C16.5211 4.53133 15.9744 4.97993 15.5899 5.55551C15.2053 6.13108 15 6.80777 15 7.5V8"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />
                </svg>
            );
        case 'sunrise':
            return (
                <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                    <rect width="64" height="64" fill="url(#pattern0_1_301)" />
                    <defs>
                        <pattern
                            id="pattern0_1_301"
                            patternContentUnits="objectBoundingBox"
                            width="1"
                            height="1"
                        >
                            <use xlinkHref="#image0_1_301" transform="scale(0.00195312)" />
                        </pattern>
                        <image
                            id="image0_1_301"
                            width="512"
                            height="512"
                            xlinkHref="data:image/png;base64,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"
                        />
                    </defs>
                </svg>
            );
        case 'sunset':
            return (
                <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                    <rect width="64" height="64" fill="url(#pattern0_1_320)" />
                    <defs>
                        <pattern
                            id="pattern0_1_320"
                            patternContentUnits="objectBoundingBox"
                            width="1"
                            height="1"
                        >
                            <use xlinkHref="#image0_1_320" transform="scale(0.00195312)" />
                        </pattern>
                        <image
                            id="image0_1_320"
                            width="512"
                            height="512"
                            xlinkHref="data:image/png;base64,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"
                        />
                    </defs>
                </svg>
            );
        case 'loactionTarget':
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                >
                    <path d="M440-42v-80q-125-14-214.5-103.5T122-440H42v-80h80q14-125 103.5-214.5T440-838v-80h80v80q125 14 214.5 103.5T838-520h80v80h-80q-14 125-103.5 214.5T520-122v80h-80Zm40-158q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-120q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400Zm0-80Z" />
                </svg>
            );
        default:
            return <svg></svg>;
    }
}

export { SvgSelector };
