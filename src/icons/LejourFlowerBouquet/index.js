import React from 'react';

// Material components
import { SvgIcon } from '@material-ui/core';

export default function LejourFlowerBouquet(props) {
  return (
    <SvgIcon {...props}>
      <path d="M64.1336 34.9658C63.493 34.2252 62.7678 33.5758 61.9796 33.0269C62.4909 32.3244 62.7932 31.4616 62.7932 30.5287C62.7932 28.8158 61.7757 27.3367 60.3138 26.6619C60.5216 25.636 60.5945 24.5776 60.5172 23.5119C60.489 23.1123 60.3171 22.7359 60.033 22.4518C59.75 22.1683 59.3741 21.9964 58.9745 21.9676C58.6943 21.9472 58.4102 21.9367 58.13 21.9367C57.8166 21.9367 57.506 21.9527 57.197 21.977C57.1611 21.8726 57.1202 21.7698 57.0737 21.6686C57.1434 21.6228 57.213 21.5774 57.281 21.5293L61.9951 18.2003C62.6396 17.7438 62.7938 16.8467 62.3378 16.1995C62.1897 15.99 62.036 15.7922 61.8779 15.6037C62.4201 14.8719 62.8557 14.0622 63.1497 13.2254C63.3791 12.5732 63.1906 11.8574 62.6656 11.3992C62.5611 11.3091 62.4472 11.2328 62.3317 11.1742C62.067 11.0383 61.7934 10.9167 61.5126 10.8089C61.9376 9.3558 61.9608 7.8386 61.5353 6.44631C61.4435 6.14729 61.2705 5.88033 61.0339 5.67362C60.7957 5.4658 60.5055 5.32928 60.1982 5.28119C59.8301 5.2215 59.4515 5.1911 59.0729 5.1911C57.9741 5.1911 56.8836 5.4365 55.8627 5.89526C55.7141 5.62332 55.5516 5.35968 55.3747 5.10598C55.2968 4.99433 55.2045 4.89153 55.1 4.79978C54.7938 4.53337 54.4019 4.38634 53.9957 4.38634C53.7309 4.38634 53.4662 4.45046 53.2291 4.5715C52.3519 5.02141 51.5289 5.6388 50.8292 6.37004C50.5661 6.21307 50.2897 6.06605 49.9968 5.93063C49.8061 5.84275 49.6038 5.79798 49.3943 5.79798C48.835 5.79798 48.3226 6.12629 48.0905 6.63202L46.9287 9.15019C46.7485 9.03468 46.56 8.92469 46.3621 8.82409C47.037 6.91446 46.7463 5.03302 45.5275 3.82423C44.7543 3.05651 43.7052 2.65082 42.4948 2.65082C41.8934 2.65082 41.2689 2.75418 40.6493 2.95316C39.7671 1.12809 38.2228 0 36.5028 0C34.8408 0 33.3263 1.07116 32.4315 2.80779C31.7611 2.57399 31.0829 2.45295 30.4296 2.45295C29.2186 2.45295 28.1695 2.85864 27.3952 3.62691C26.2184 4.79425 25.9084 6.61379 26.5097 8.4698C25.9703 8.72681 25.4933 9.04186 25.0859 9.40002C24.8521 9.25134 24.5763 9.16677 24.29 9.16677C24.0711 9.16677 23.8512 9.21652 23.6538 9.31048C23.3233 9.468 23.0121 9.63879 22.717 9.82064C22.6838 9.78305 22.6518 9.74436 22.618 9.70733C21.768 8.75556 20.7289 7.95799 19.6129 7.4014C19.3708 7.28091 19.1006 7.21735 18.8303 7.21735C18.3981 7.21735 17.9824 7.37598 17.6608 7.66339C17.5541 7.75901 17.459 7.86734 17.3794 7.98397C17.1274 8.35373 16.9024 8.74174 16.7051 9.14577C15.6931 8.74948 14.6297 8.53944 13.5607 8.53944C13.1108 8.53944 12.6614 8.57758 12.2303 8.65275C11.9064 8.70802 11.6047 8.85339 11.3559 9.07502C11.1127 9.29335 10.9353 9.57413 10.8425 9.88917C10.4202 11.3307 10.4318 12.8888 10.8336 14.3932C10.408 14.5441 9.9957 14.7232 9.60106 14.9316C9.47449 14.9979 9.35621 15.0797 9.24733 15.1764C8.70898 15.6579 8.52106 16.4079 8.76812 17.0872C9.1716 18.1932 9.79894 19.2538 10.5843 20.1713C10.3754 20.4184 10.1731 20.6804 9.98023 20.9606C9.51871 21.6322 9.68839 22.5557 10.3605 23.0206L12.6565 24.6019C12.6946 25.2314 12.7819 25.8543 12.9196 26.464C11.1896 27.0056 9.93048 28.6223 9.93048 30.5287C9.93048 31.4611 10.2328 32.3244 10.7441 33.0264C9.95535 33.5758 9.23074 34.2252 8.5896 34.9658C8.32761 35.2693 8.18335 35.6562 8.18335 36.0569C8.18335 36.4582 8.32816 36.8456 8.5896 37.1474C9.33852 38.013 10.2079 38.7619 11.1735 39.3732C11.6693 39.6866 12.3243 39.539 12.6377 39.0438C12.9511 38.5485 12.804 37.893 12.3088 37.5796C11.6317 37.1513 11.0127 36.64 10.4633 36.0564C12.2635 34.1434 14.7761 33.054 17.4192 33.054C19.5251 33.054 21.5463 33.7471 23.1918 34.9951L16.1961 34.9957C15.6102 34.9957 15.1348 35.4705 15.1348 36.0569C15.1348 36.6428 15.6102 37.1181 16.1961 37.1181L23.1918 37.1176C21.5458 38.3661 19.5245 39.0592 17.4192 39.0592C17.16 39.0592 16.8975 39.0487 16.6382 39.0277C16.054 38.9791 15.5422 39.4152 15.4947 39.9994C15.4471 40.5831 15.8821 41.0955 16.4663 41.143C16.7825 41.1684 17.1031 41.1817 17.4192 41.1817H17.4198C18.2411 41.1817 19.0514 41.0927 19.8407 40.9252L28.0838 51.3312C27.0503 51.3782 26.3085 52.2061 26.3085 53.3375V60.7903C26.3085 61.9555 27.0934 62.8011 28.175 62.8011C28.4807 62.8011 28.7902 62.7315 29.0948 62.595L31.5361 61.5L31.0088 63.0465C30.8198 63.6014 31.116 64.2045 31.6704 64.394C32.2259 64.5831 32.8284 64.2868 33.0179 63.7319L33.8393 61.3232L32.6167 70.323H30.7706L31.3775 68.5433C31.5665 67.9883 31.2702 67.3853 30.7153 67.1963C30.1604 67.0067 29.5574 67.3035 29.3684 67.8579L28.5111 70.3722C28.3392 70.8757 28.4077 71.398 28.699 71.8048C28.9903 72.2122 29.4623 72.4454 29.9946 72.4454H42.875C43.4073 72.4454 43.8793 72.2122 44.1706 71.8048C44.4619 71.398 44.5304 70.8757 44.3585 70.3722L41.3595 61.5774L43.6284 62.595C43.9335 62.732 44.243 62.8011 44.5481 62.8011C45.0909 62.8011 45.5811 62.5817 45.9277 62.1837C46.2466 61.8184 46.4146 61.3364 46.4146 60.7909V53.3381C46.4146 52.2404 45.7182 51.4273 44.7327 51.3362L52.8974 40.9313C53.6817 41.096 54.4876 41.1822 55.3039 41.1822H55.3045C58.6982 41.1822 61.9161 39.7115 64.1325 37.1491C64.3955 36.8462 64.5398 36.4582 64.5398 36.0569C64.5404 35.6567 64.3961 35.2693 64.1336 34.9658ZM59.6914 28.7384C60.2795 29.1187 60.6708 29.7775 60.6708 30.5287C60.6708 31.0825 60.4575 31.586 60.1104 31.9652C59.5096 31.6943 58.8861 31.4749 58.2455 31.3085C58.8375 30.5121 59.3222 29.6476 59.6914 28.7384ZM58.4207 24.0635C58.4986 26.6154 57.5485 29.0899 55.7804 30.9421C55.6218 30.936 55.4631 30.9316 55.3039 30.9316C54.4439 30.9316 53.5961 31.0289 52.7725 31.2118L55.1177 28.8672C55.5322 28.4527 55.5322 27.7811 55.1177 27.3666C54.7031 26.952 54.031 26.952 53.6171 27.366L51.7682 29.2148C51.6875 28.5096 51.441 27.8353 51.0414 27.2157C51.1508 27.0941 51.2619 26.9747 51.378 26.8586C53.2523 24.9849 55.7583 23.9834 58.4207 24.0635ZM56.0567 19.7955C55.9374 19.8795 55.8158 19.958 55.6914 20.0315C55.5444 19.9254 55.3891 19.8259 55.2266 19.7325C55.7141 18.2097 55.4582 16.7113 54.4848 15.7203C54.4483 15.6833 54.4113 15.6479 54.3732 15.6125C55.3482 15.2903 56.2557 15.1637 57.0848 15.2395C58.3013 15.3505 59.32 15.89 60.1817 16.8827L56.0567 19.7955ZM59.5803 7.3395C59.8102 8.2852 59.7572 9.30661 59.4526 10.296C58.8673 10.2219 58.2715 10.2037 57.6762 10.244C57.4319 10.2606 57.1887 10.2866 56.9466 10.3225C56.9494 10.0788 56.9427 9.83445 56.9256 9.59015C56.8858 9.00649 56.7913 8.43443 56.647 7.88116C57.5905 7.43899 58.6048 7.23946 59.5803 7.3395ZM53.8503 6.65192C54.4025 7.55948 54.7324 8.61682 54.8082 9.73441C54.8485 10.328 54.8148 10.9222 54.7076 11.4987C54.6396 11.8673 54.7706 12.2448 55.053 12.4919C55.3354 12.7384 55.7273 12.818 56.0833 12.7003C56.6432 12.5157 57.2274 12.4018 57.8199 12.3615C58.9281 12.2863 60.0302 12.4704 61.0035 12.8932C60.8162 13.3381 60.5757 13.7687 60.2939 14.1733C59.3946 13.5791 58.387 13.227 57.2771 13.1259C56.2994 13.0369 55.263 13.1496 54.177 13.4564C54.282 12.3333 54.2029 11.2947 53.9376 10.3474C53.6535 9.33701 53.1683 8.45654 52.489 7.70871C52.9013 7.2997 53.3617 6.94155 53.8503 6.65192ZM49.7154 8.1752C50.8485 8.84233 51.5643 9.74547 51.8942 10.9205C52.1695 11.9038 52.1701 13.0524 51.8998 14.3518C51.6455 14.4784 51.3891 14.616 51.1304 14.7614C50.9596 14.7895 50.7888 14.8244 50.6175 14.8708C50.2494 14.1523 49.7525 13.5708 49.1743 13.1679C49.1821 13.0689 49.187 12.9695 49.187 12.8694C49.187 12.1083 48.956 11.3798 48.5382 10.7265L49.7154 8.1752ZM47.2327 14.658C47.9683 14.6679 48.678 15.4191 48.9997 16.5278C49.087 16.8307 49.3048 17.0783 49.5938 17.2049C49.8824 17.3309 50.2123 17.3226 50.4942 17.1811C50.9696 16.9429 51.4537 16.8169 51.8942 16.8169C52.2098 16.8169 52.6537 16.8849 52.9704 17.2077C53.4872 17.7339 53.4634 18.7597 52.9107 19.7601C52.7587 20.0359 52.7371 20.3653 52.8515 20.6594C52.966 20.9529 53.2053 21.18 53.5043 21.2801C54.2051 21.5133 54.7501 21.9069 55.0364 22.3534C53.1052 22.8818 51.3332 23.9022 49.8779 25.3575C49.774 25.4614 49.6729 25.5675 49.5734 25.6747C49.5281 25.641 49.4839 25.6062 49.4374 25.573C49.0815 25.3199 48.6962 25.0966 48.2894 24.9026C48.6073 24.0652 48.778 23.2074 48.778 22.3673C48.778 20.9567 48.3005 19.7374 47.3974 18.8415C46.4959 17.9478 45.2711 17.4752 43.8545 17.4752C43.0652 17.4752 42.2604 17.6222 41.4706 17.898C41.3744 17.6874 41.2733 17.4813 41.1611 17.2828C41.2224 17.1325 41.307 17.0004 41.4164 16.8932C41.7177 16.598 42.1328 16.5356 42.4279 16.5356C42.9038 16.5356 43.4493 16.6942 43.9644 16.9811C44.2414 17.1353 44.573 17.1579 44.8681 17.0424C45.1638 16.9263 45.3916 16.6848 45.4899 16.383C45.8265 15.3511 46.5208 14.658 47.2172 14.658H47.2327ZM36.3624 36.0674C32.7383 36.0674 29.7901 33.1474 29.7901 29.5575C29.7901 25.9682 32.7383 23.0482 36.3624 23.0482C39.9855 23.0482 42.9336 25.9682 42.9336 29.5575C42.9336 33.1474 39.9855 36.0674 36.3624 36.0674ZM39.158 40.4068C38.4948 41.8156 37.4004 42.7569 36.19 42.7569C34.9414 42.7569 33.8166 41.7554 33.1605 40.2725C33.7243 39.906 34.2643 39.4732 34.7656 38.9758C35.0309 38.7127 35.2791 38.4358 35.5112 38.1478C35.7915 38.1755 36.075 38.1898 36.3624 38.1898C36.5105 38.1898 36.6587 38.186 36.8051 38.1788C37.082 38.5425 37.3855 38.8907 37.7149 39.2168C38.1676 39.6667 38.6529 40.0641 39.158 40.4068ZM28.1469 32.3786C28.9754 34.7503 30.817 36.6538 33.1556 37.5791C31.8804 38.7945 30.2892 39.518 28.8698 39.518C28.2806 39.518 27.4471 39.3876 26.8214 38.7674C26.1991 38.15 26.0681 37.3281 26.0681 36.7483C26.0681 35.3024 26.8391 33.6753 28.1303 32.3946C28.1358 32.3891 28.1413 32.3836 28.1469 32.3786ZM26.3118 22.1263C26.3118 21.5459 26.4423 20.7246 27.0646 20.1072C27.6903 19.4865 28.5244 19.3566 29.1136 19.3566C30.5755 19.3566 32.2204 20.1221 33.5132 21.4044C31.1254 22.2291 29.2092 24.0591 28.2801 26.3827C27.0464 25.1176 26.3118 23.5357 26.3118 22.1263ZM36.5343 16.3587C37.7823 16.3587 38.9071 17.3602 39.5632 18.8432C38.9994 19.2096 38.4594 19.6424 37.9581 20.1398C37.6928 20.4029 37.4446 20.6798 37.2125 20.9672C36.9328 20.9402 36.6493 20.9258 36.3624 20.9258C36.2137 20.9258 36.0656 20.9291 35.9186 20.9368C35.6422 20.5732 35.3382 20.2249 35.0094 19.8983C34.5561 19.4489 34.0709 19.0521 33.5657 18.7088C34.2289 17.3 35.3239 16.3587 36.5343 16.3587ZM33.7635 12.7301C33.7635 11.3141 34.9292 10.1617 36.3619 10.1617C37.7945 10.1617 38.9596 11.3141 38.9596 12.7301C38.9596 13.4404 38.6661 14.0843 38.193 14.5497C37.6635 14.3446 37.1064 14.2363 36.5338 14.2363C35.876 14.2363 35.2387 14.3789 34.6401 14.648C34.104 14.1771 33.7635 13.4929 33.7635 12.7301ZM39.5687 21.5365C40.8433 20.3211 42.4345 19.5982 43.8539 19.5982C44.4431 19.5982 45.2766 19.7286 45.9023 20.3487C46.5246 20.9661 46.6551 21.7875 46.6551 22.3678C46.6551 23.8132 45.8846 25.4409 44.5929 26.7215C44.5879 26.7271 44.5818 26.7321 44.5769 26.737C43.7483 24.3653 41.9072 22.4618 39.5687 21.5365ZM44.4442 32.7329C45.6773 33.998 46.4119 35.5799 46.4119 36.9893C46.4119 37.5697 46.2814 38.391 45.6585 39.0084C45.0334 39.6285 44.1999 39.759 43.6113 39.759H43.6107C42.1488 39.759 40.5039 38.9935 39.2111 37.7117C41.5983 36.8871 43.5145 35.0565 44.4442 32.7329ZM45.8448 31.1289C45.5806 30.8669 45.3031 30.6221 45.0146 30.3932C45.0411 30.118 45.0561 29.8394 45.0561 29.5575C45.0561 29.4133 45.0522 29.2696 45.045 29.127C45.4104 28.8539 45.7602 28.5532 46.088 28.2277C46.544 27.7756 46.9463 27.2914 47.294 26.7862C48.7228 27.4423 49.6773 28.5278 49.6773 29.7283C49.6773 30.967 48.6614 32.0818 47.1586 32.7307C46.7877 32.168 46.3489 31.6291 45.8448 31.1289ZM28.2082 10.0876C28.5128 9.99806 28.7615 9.77752 28.8858 9.48569C29.0102 9.19386 28.9975 8.86168 28.851 8.58034C28.1408 7.21403 28.1563 5.86154 28.8897 5.13362C29.3551 4.6721 29.9835 4.57537 30.4296 4.57537C31.0834 4.57537 31.7964 4.77325 32.4917 5.14799C32.7692 5.29722 33.0981 5.31546 33.391 5.19773C33.6834 5.08 33.9084 4.83847 34.0045 4.53889C34.4777 3.07088 35.4582 2.12242 36.5028 2.12242C37.5662 2.12242 38.5838 3.13831 39.0353 4.64999C39.1254 4.95232 39.3454 5.19828 39.635 5.32264C39.9247 5.44645 40.2552 5.43484 40.5354 5.29114C41.1976 4.95288 41.8746 4.77324 42.4942 4.77324C42.9397 4.77324 43.5681 4.87052 44.0324 5.33093C44.7797 6.07212 44.7736 7.49868 44.017 8.88047C43.8644 9.15848 43.8445 9.49067 43.9628 9.78526C44.0805 10.0799 44.3248 10.3059 44.6272 10.4015C45.9498 10.8211 46.8524 11.6391 47.0304 12.5428C45.7845 12.6152 44.6548 13.405 43.9385 14.663C43.4322 14.4983 42.9226 14.4137 42.4279 14.4137C41.7204 14.4137 41.0798 14.5867 40.5365 14.9134C40.8836 14.2606 41.082 13.5183 41.082 12.7301C41.082 10.1434 38.964 8.03924 36.3619 8.03924C33.7591 8.03924 31.6411 10.1434 31.6411 12.7301C31.6411 13.9594 32.1209 15.0786 32.9024 15.9154C32.7117 16.1194 32.5288 16.3388 32.3563 16.5765C32.0999 16.9319 31.8738 17.3166 31.677 17.7228C30.8297 17.4044 29.9625 17.2336 29.113 17.2336C28.8654 17.2336 28.6238 17.2491 28.3884 17.2779C28.473 17.0463 28.5791 16.8119 28.7068 16.5792C28.8588 16.3007 28.8787 15.969 28.7604 15.6744C28.6426 15.3798 28.3983 15.1538 28.096 15.0582C26.6153 14.5889 25.6585 13.62 25.6585 12.5903C25.6585 11.5412 26.6833 10.5358 28.2082 10.0876ZM21.4048 14.7879C21.7459 13.5166 22.4788 12.5168 23.6317 11.7529C23.5704 12.026 23.5361 12.3056 23.5361 12.5903C23.5361 14.2429 24.6139 15.7474 26.3616 16.6362C26.1742 17.1668 26.0637 17.6952 26.025 18.2075C25.8658 18.328 25.7138 18.4579 25.5707 18.6C25.0345 19.1317 24.6504 19.7772 24.4249 20.5085C24.1358 20.3078 23.8296 20.1044 23.5063 19.9005C22.8093 19.4622 22.1256 19.0841 21.4557 18.763C21.1174 17.2613 21.0992 15.9303 21.4048 14.7879ZM12.819 10.71C13.0622 10.6779 13.3109 10.6619 13.5607 10.6619C14.3715 10.6619 15.1956 10.8343 15.9855 11.1532C15.8429 11.7452 15.7517 12.3548 15.7169 12.9761C15.6986 13.2989 15.6958 13.6211 15.708 13.9428C15.3896 13.8947 15.0685 13.861 14.7457 13.8433C14.1256 13.8085 13.5071 13.8311 12.9002 13.9074C12.6018 12.834 12.5647 11.7336 12.819 10.71ZM14.6263 15.9619C15.3034 16 15.9717 16.1221 16.6123 16.325C16.9699 16.4388 17.3606 16.3548 17.6403 16.1045C17.92 15.8546 18.0465 15.4755 17.9736 15.1079C17.8437 14.4507 17.7973 13.7737 17.836 13.0955C17.91 11.7745 18.2958 10.5226 18.9558 9.45308C19.7229 9.87922 20.437 10.4507 21.0351 11.1212C21.045 11.1317 21.0539 11.1427 21.0633 11.1532C20.2469 12.0199 19.6737 13.0496 19.3548 14.2385C19.0591 15.3434 18.9928 16.5588 19.152 17.8753C17.8769 17.5095 16.6648 17.3807 15.5289 17.4973C14.2787 17.6261 13.1495 18.0417 12.1485 18.7359C11.6207 18.1091 11.1874 17.4022 10.8806 16.6644C12.0126 16.1326 13.3098 15.8872 14.6263 15.9619ZM12.1126 21.6504C13.108 20.4267 14.3019 19.7573 15.7461 19.6087C17.6309 19.4152 19.8705 20.1216 22.376 21.6968C23.1022 22.1539 23.7378 22.6143 24.2508 23.0123C24.3154 23.4876 24.4326 23.9641 24.5957 24.4361C24.5542 24.4731 24.5128 24.5101 24.4702 24.5461C24.1259 24.708 23.7964 24.8904 23.4875 25.0949C23.4256 25.0302 23.367 24.9634 23.3034 24.8998C21.097 22.6939 18.1665 21.4796 15.0514 21.4796C14.7712 21.4796 14.4871 21.4896 14.2057 21.51C13.8067 21.5393 13.4308 21.7112 13.1484 21.9936C13.0754 22.066 13.0102 22.1456 12.9527 22.2291L12.1126 21.6504ZM12.6134 31.9652C12.2663 31.586 12.0529 31.0825 12.0529 30.5287C12.0529 29.5647 12.6952 28.7484 13.574 28.4836C13.9813 29.4337 14.5147 30.3319 15.1658 31.151C14.2837 31.3246 13.4275 31.5982 12.6134 31.9652ZM18.0637 28.4095L21.2235 31.5694C20.1507 31.2002 19.021 30.9863 17.8658 30.9426C17.7602 30.8465 17.6563 30.7486 17.5552 30.6469C15.6865 28.7793 14.6805 26.233 14.7601 23.6064C17.4231 23.5274 19.9291 24.5278 21.8028 26.401C21.8448 26.443 21.8857 26.4861 21.9266 26.5292C21.49 27.1002 21.1909 27.7253 21.0395 28.3841L19.5643 26.9089C19.1498 26.4944 18.4777 26.4944 18.0631 26.9089C17.6491 27.3235 17.6491 27.9956 18.0637 28.4095ZM23.0464 29.3873C23.0464 28.1487 24.0623 27.0333 25.5657 26.3849C25.9365 26.9476 26.3754 27.4865 26.8795 27.9867C27.1431 28.2481 27.4211 28.4936 27.7091 28.7224C27.6826 28.9971 27.6677 29.2756 27.6677 29.5575C27.6677 29.7018 27.6721 29.8455 27.6787 29.9881C27.3139 30.2617 26.964 30.5618 26.6357 30.8874C26.1775 31.3417 25.7741 31.8286 25.4253 32.3355C25.1003 32.1857 24.7957 32.011 24.5166 31.8132C23.5687 31.1388 23.0464 30.2772 23.0464 29.3873ZM22.0067 40.2421C22.8441 39.8845 23.6389 39.4307 24.374 38.8851C24.6034 39.4053 24.9218 39.8723 25.3269 40.2741C26.2278 41.1679 27.4526 41.6399 28.8693 41.6399C29.0533 41.6399 29.2385 41.6316 29.4236 41.6156L33.1241 53.3403L31.9739 52.8246L22.0067 40.2421ZM33.1334 58.4584L28.431 60.567V53.5619L33.1334 55.67C32.9461 56.0978 32.8411 56.5693 32.8411 57.0645C32.8411 57.5597 32.9461 58.0312 33.1334 58.4584ZM34.7584 70.323L36.0855 60.5527C36.1772 60.5599 36.269 60.5643 36.3619 60.5643C36.4741 60.5643 36.5857 60.5588 36.6957 60.5482L38.0233 70.323H34.7584ZM34.9635 57.0645C34.9635 56.3045 35.5908 55.6866 36.3619 55.6866C37.1329 55.6866 37.7597 56.3045 37.7597 57.0645C37.7597 57.8239 37.1329 58.4419 36.3619 58.4419C35.5908 58.4419 34.9635 57.8239 34.9635 57.0645ZM42.0996 70.323H40.1651L38.8844 60.8942L42.0996 70.323ZM44.2928 60.567L39.5903 58.4584C39.7776 58.0312 39.8821 57.5597 39.8821 57.0645C39.8821 56.5687 39.7776 56.0978 39.5903 55.67L44.2928 53.5619V60.567ZM40.9317 52.7428L39.6522 53.3165L40.3409 51.1134C40.5161 50.5535 40.2043 49.9588 39.6444 49.7836C39.0856 49.6089 38.4898 49.9206 38.3151 50.48L37.3103 53.694C37.008 53.61 36.6902 53.5641 36.3613 53.5641C36.049 53.5641 35.7461 53.605 35.4576 53.6813L31.8799 42.3451C31.9236 42.4098 31.9667 42.4756 32.012 42.5386C33.103 44.0481 34.5865 44.8788 36.1894 44.8788C37.7923 44.8788 39.2758 44.0481 40.3668 42.5386C40.6238 42.1837 40.8499 41.7991 41.0467 41.3923C41.0793 41.4044 41.1119 41.4155 41.1451 41.4271L39.8191 45.6692C39.6439 46.2285 39.9556 46.8238 40.515 46.9984C41.0749 47.1737 41.6696 46.8619 41.8448 46.3026L43.2304 41.8693C43.3576 41.8764 43.4841 41.8814 43.6102 41.8814H43.6107C45.0273 41.8814 46.2521 41.4088 47.1531 40.5157C47.6411 40.0309 48.0037 39.4522 48.2353 38.8C49.0069 39.387 49.847 39.8728 50.7341 40.2504L40.9317 52.7428ZM55.3045 39.0598H55.3039C53.1992 39.0598 51.1785 38.3667 49.5319 37.1181H56.5271C57.1135 37.1181 57.5883 36.6433 57.5883 36.0569C57.5883 35.471 57.1135 34.9957 56.5271 34.9957H49.5314C51.1774 33.7477 53.1987 33.054 55.3039 33.054C57.947 33.054 60.4602 34.144 62.2599 36.0569C60.4597 37.9698 57.947 39.0598 55.3045 39.0598Z" fill="#84B8E2"/>
      <path d="M36.3619 25.4C34.0554 25.4 32.179 27.2649 32.179 29.5575C32.179 31.8508 34.0554 33.7156 36.3619 33.7156C38.6684 33.7156 40.5454 31.8508 40.5454 29.5575C40.5454 27.2649 38.6684 25.4 36.3619 25.4ZM36.3619 31.5932C35.2255 31.5932 34.3014 30.6801 34.3014 29.5575C34.3014 28.4355 35.2255 27.5224 36.3619 27.5224C37.4983 27.5224 38.423 28.4355 38.423 29.5575C38.423 30.6801 37.4983 31.5932 36.3619 31.5932Z" fill="#84B8E2"/>
    </SvgIcon>
  );
}
