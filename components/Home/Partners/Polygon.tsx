import { SVGProps } from "react";

export const Polygon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width="99" height="25" viewBox="0 0 99 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M26.6587 20C26.5239 20 26.4565 19.9326 26.4565 19.7977V6.04228C26.4565 5.90743 26.5239 5.84 26.6587 5.84H31.8575C33.3814 5.84 34.5614 6.20411 35.3975 6.93234C36.2336 7.66057 36.6517 8.65177 36.6517 9.90594C36.6517 11.1601 36.2336 12.1513 35.3975 12.8795C34.5614 13.6078 33.3814 13.9719 31.8575 13.9719H29.0053V19.7977C29.0053 19.9326 28.9378 20 28.803 20H26.6587ZM31.9586 11.6254C32.5925 11.6254 33.0982 11.477 33.4758 11.1803C33.8669 10.8837 34.0624 10.4589 34.0624 9.90594C34.0624 9.35303 33.8669 8.92823 33.4758 8.63154C33.0982 8.33486 32.5925 8.18651 31.9586 8.18651H29.0053V11.6254H31.9586ZM42.4081 20.2023C41.3832 20.2023 40.4594 19.9798 39.6368 19.5347C38.8142 19.0762 38.1669 18.4491 37.6949 17.6535C37.2229 16.8443 36.9869 15.9341 36.9869 14.9226C36.9869 13.9112 37.2229 13.0077 37.6949 12.212C38.1669 11.4029 38.8142 10.7758 39.6368 10.3307C40.4594 9.87223 41.3832 9.64297 42.4081 9.64297C43.433 9.64297 44.3568 9.87223 45.1794 10.3307C46.0021 10.7758 46.6494 11.4029 47.1214 12.212C47.5934 13.0077 47.8294 13.9112 47.8294 14.9226C47.8294 15.9341 47.5934 16.8443 47.1214 17.6535C46.6494 18.4491 46.0021 19.0762 45.1794 19.5347C44.3568 19.9798 43.433 20.2023 42.4081 20.2023ZM42.4081 18.0176C43.2442 18.0176 43.9253 17.7344 44.4512 17.168C44.9771 16.6016 45.2401 15.8531 45.2401 14.9226C45.2401 13.9921 44.9771 13.2437 44.4512 12.6773C43.9253 12.1109 43.2442 11.8277 42.4081 11.8277C41.572 11.8277 40.891 12.1109 40.365 12.6773C39.8391 13.2437 39.5761 13.9921 39.5761 14.9226C39.5761 15.8531 39.8391 16.6016 40.365 17.168C40.891 17.7344 41.572 18.0176 42.4081 18.0176ZM49.8838 20C49.749 20 49.6815 19.9326 49.6815 19.7977V6.04228C49.6815 5.90743 49.749 5.84 49.8838 5.84H51.9067C52.0415 5.84 52.109 5.90743 52.109 6.04228V19.7977C52.109 19.9326 52.0415 20 51.9067 20H49.8838ZM55.594 24.2075C54.7579 24.2075 54.1038 24.0997 53.6318 23.8839C53.4969 23.803 53.4295 23.6951 53.4295 23.5602V21.7801C53.4295 21.6453 53.4835 21.5778 53.5913 21.5778C53.6588 21.5778 53.8273 21.6318 54.0971 21.7397C54.3398 21.8341 54.5353 21.9015 54.6837 21.9419C54.8455 21.9959 55.0208 22.0229 55.2096 22.0229C55.7221 22.0229 56.1267 21.8475 56.4233 21.4969C56.7335 21.1598 57.0032 20.5866 57.2325 19.7775L53.1665 10.2094C53.1261 10.1015 53.1059 10.0341 53.1059 10.0071C53.1059 9.8992 53.1598 9.84526 53.2677 9.84526H55.6142C55.6951 9.84526 55.7491 9.85874 55.776 9.88571C55.8165 9.91268 55.8502 9.96663 55.8772 10.0475L58.3046 16.4195L60.2668 10.0475C60.2938 9.96663 60.3207 9.91268 60.3477 9.88571C60.3882 9.85874 60.4488 9.84526 60.5298 9.84526H62.7549C62.8628 9.84526 62.9167 9.89246 62.9167 9.98686C62.9167 10.0138 62.8965 10.088 62.856 10.2094L59.1542 20.9912C58.7361 22.1914 58.2237 23.0275 57.6168 23.4995C57.0235 23.9715 56.3492 24.2075 55.594 24.2075ZM68.4726 24.2075C67.2859 24.2075 66.2812 23.8974 65.4586 23.277C64.6359 22.6567 64.1707 21.8138 64.0628 20.7485V20.708C64.0628 20.5866 64.1302 20.5259 64.2651 20.5259H66.2879C66.3554 20.5259 66.4026 20.5394 66.4295 20.5664C66.4565 20.6069 66.4767 20.6608 66.4902 20.7282C66.5846 21.1867 66.8206 21.5171 67.1982 21.7194C67.5758 21.9217 68.0411 22.0229 68.594 22.0229C69.4031 22.0229 70.0033 21.7869 70.3943 21.3149C70.7989 20.8429 71.0012 20.1888 71.0012 19.3527V18.9886C70.5831 19.3392 70.1651 19.5887 69.747 19.737C69.329 19.8854 68.83 19.9595 68.2501 19.9595C67.3196 19.9595 66.497 19.7438 65.7822 19.3122C65.0675 18.8807 64.5146 18.2738 64.1235 17.4917C63.7324 16.7095 63.5369 15.8127 63.5369 14.8013C63.5369 13.7898 63.7324 12.893 64.1235 12.1109C64.5146 11.3287 65.0607 10.7218 65.762 10.2903C66.4633 9.85874 67.2657 9.64297 68.1692 9.64297C69.2885 9.64297 70.2325 9.98011 71.0012 10.6544V10.0475C71.0012 9.91268 71.0686 9.84526 71.2035 9.84526H73.2263C73.3612 9.84526 73.4286 9.91268 73.4286 10.0475V18.9886C73.4286 20.7282 73.0038 22.0296 72.1542 22.8927C71.3046 23.7693 70.0774 24.2075 68.4726 24.2075ZM68.6547 17.7749C69.4234 17.7749 70.0302 17.4984 70.4753 16.9455C70.9338 16.3926 71.163 15.6778 71.163 14.8013C71.163 13.9247 70.9338 13.2099 70.4753 12.657C70.0302 12.1041 69.4234 11.8277 68.6547 11.8277C67.886 11.8277 67.2724 12.1109 66.8139 12.6773C66.3554 13.2302 66.1261 13.9382 66.1261 14.8013C66.1261 15.6643 66.3554 16.3791 66.8139 16.9455C67.2724 17.4984 67.886 17.7749 68.6547 17.7749ZM80.7515 20.2023C79.7266 20.2023 78.8028 19.9798 77.9802 19.5347C77.1576 19.0762 76.5103 18.4491 76.0383 17.6535C75.5663 16.8443 75.3303 15.9341 75.3303 14.9226C75.3303 13.9112 75.5663 13.0077 76.0383 12.212C76.5103 11.4029 77.1576 10.7758 77.9802 10.3307C78.8028 9.87223 79.7266 9.64297 80.7515 9.64297C81.7764 9.64297 82.7002 9.87223 83.5228 10.3307C84.3455 10.7758 84.9928 11.4029 85.4648 12.212C85.9368 13.0077 86.1728 13.9112 86.1728 14.9226C86.1728 15.9341 85.9368 16.8443 85.4648 17.6535C84.9928 18.4491 84.3455 19.0762 83.5228 19.5347C82.7002 19.9798 81.7764 20.2023 80.7515 20.2023ZM80.7515 18.0176C81.5876 18.0176 82.2687 17.7344 82.7946 17.168C83.3206 16.6016 83.5835 15.8531 83.5835 14.9226C83.5835 13.9921 83.3206 13.2437 82.7946 12.6773C82.2687 12.1109 81.5876 11.8277 80.7515 11.8277C79.9154 11.8277 79.2344 12.1109 78.7084 12.6773C78.1825 13.2437 77.9195 13.9921 77.9195 14.9226C77.9195 15.8531 78.1825 16.6016 78.7084 17.168C79.2344 17.7344 79.9154 18.0176 80.7515 18.0176ZM88.2677 20C88.1328 20 88.0654 19.9326 88.0654 19.7977V10.0475C88.0654 9.91268 88.1328 9.84526 88.2677 9.84526H90.2906C90.4254 9.84526 90.4928 9.91268 90.4928 10.0475V10.7758C90.9379 10.4117 91.4031 10.1352 91.8886 9.9464C92.3741 9.74411 92.927 9.64297 93.5474 9.64297C94.6532 9.64297 95.5163 9.95314 96.1366 10.5735C96.7705 11.1803 97.0874 12.0097 97.0874 13.0616V19.7977C97.0874 19.9326 97.0199 20 96.8851 20H94.8622C94.7274 20 94.6599 19.9326 94.6599 19.7977V13.9314C94.6599 13.1897 94.5116 12.657 94.2149 12.3334C93.9317 11.9962 93.5002 11.8277 92.9203 11.8277C92.219 11.8277 91.6391 12.1109 91.1806 12.6773C90.7221 13.2302 90.4928 14.073 90.4928 15.2058V19.7977C90.4928 19.9326 90.4254 20 90.2906 20H88.2677Z"
        fill="#C3C2D4"
      />
      <circle cx="10.5" cy="13.5" r="10.5" fill="#D9D9D9" />
      <path
        d="M3.43163 9.86743C3.57272 9.43161 3.94457 9.24149 4.30566 9.03345C5.06372 8.59643 5.8158 8.14805 6.57266 7.70864C6.95647 7.48565 7.34208 7.48625 7.72828 7.71462C8.56764 8.21023 9.40581 8.70822 10.2512 9.19247C10.6003 9.39275 10.7091 9.69286 10.7671 10.0719C10.8831 10.8311 10.6529 11.3548 9.89305 11.6006C9.77408 11.6388 9.67005 11.7231 9.49668 11.8212C9.49668 11.4571 9.48712 11.145 9.49907 10.8335C9.51402 10.4354 9.3526 10.146 9.01243 9.94395C8.5509 9.66955 8.09356 9.38796 7.63322 9.11057C7.28827 8.90252 6.94511 8.89056 6.59239 9.10339C6.14102 9.37541 5.68189 9.63487 5.22693 9.90151C4.88078 10.1048 4.70442 10.3959 4.71578 10.8096C4.73073 11.3471 4.72295 11.8851 4.71817 12.4232C4.71458 12.7837 4.85986 13.0569 5.16535 13.2446C5.64004 13.5358 6.11472 13.8281 6.59359 14.1121C6.93913 14.3165 7.28588 14.3135 7.63741 14.1073C9.25874 13.1567 10.889 12.2211 12.5032 11.258C12.9671 10.9812 13.3707 10.9674 13.834 11.2544C14.6375 11.7512 15.4631 12.2121 16.2821 12.6826C16.6331 12.8841 16.8058 13.1633 16.7999 13.5818C16.7843 14.6172 16.7897 15.6539 16.7975 16.6893C16.8005 17.0666 16.6486 17.3326 16.324 17.5191C15.4529 18.0195 14.5891 18.5319 13.7168 19.0311C13.3539 19.2391 12.9797 19.2373 12.6132 19.0245C11.7445 18.5199 10.8765 18.0142 10.0066 17.5114C9.70592 17.3374 9.53614 17.0941 9.55348 16.7342C9.57141 16.3689 9.46739 15.9379 9.6282 15.6557C9.78245 15.3849 10.2075 15.2683 10.5148 15.0859C10.5806 15.0471 10.6499 15.0136 10.7581 14.9562C10.7581 15.2779 10.7581 15.563 10.7581 15.8482C10.7587 16.2715 10.9333 16.5913 11.3081 16.8029C11.7499 17.0522 12.1858 17.3123 12.6246 17.5664C12.9904 17.7786 13.3521 17.7912 13.7216 17.5616C14.152 17.2938 14.5926 17.0409 15.0267 16.7778C15.368 16.571 15.5444 16.2738 15.5366 15.8643C15.5271 15.3364 15.5336 14.8085 15.5342 14.2807C15.5348 13.9124 15.3818 13.623 15.0685 13.4335C14.6004 13.1507 14.1257 12.8787 13.6505 12.6079C13.2917 12.4041 12.9384 12.4172 12.5779 12.6276C10.9984 13.5519 9.40581 14.454 7.83709 15.3962C7.32295 15.7053 6.89011 15.7304 6.38135 15.3962C5.75064 14.9819 5.08166 14.625 4.42404 14.252C4.0193 14.0224 3.605 13.809 3.43103 13.3331C3.43163 12.1787 3.43163 11.023 3.43163 9.86743Z"
        fill="black"
        stroke="black"
        stroke-width="0.3"
      />
    </svg>
  );
};