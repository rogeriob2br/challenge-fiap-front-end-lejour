import React from 'react';

// Material components
import { SvgIcon } from '@material-ui/core';

export default function Vendor(props) {
  return (
    <SvgIcon {...props}>
      <path id="Shape" fill-rule="evenodd" clip-rule="evenodd" d="M65.9641 66.9058H65.6951V31.704C68.1166 29.9552 69.6861 27.13 69.6861 23.9462C69.6861 23.7668 69.6412 23.5874 69.5964 23.4081C69.5964 23.0942 69.5516 22.7354 69.3722 22.3318L61.704 2.37668C61.1659 0.941704 59.8206 0 58.2959 0H11.1659C9.64125 0 8.29596 0.941704 7.75785 2.37668L0.224215 21.9283C0 22.5112 0 22.9596 0.044843 23.3632C0 23.4529 0 23.5874 0 23.6771C0 26.861 1.56951 29.7309 3.99103 31.435V66.861H3.72197C2.86995 66.861 2.15247 67.5785 2.15247 68.4305C2.15247 69.2825 2.86995 70 3.72197 70H65.9641C66.8161 70 67.5336 69.2825 67.5336 68.4305C67.5336 67.6233 66.861 66.9058 65.9641 66.9058ZM10.6723 3.49701C10.762 3.2728 10.9414 3.13827 11.1656 3.13827H58.2956C58.5198 3.13827 58.6992 3.2728 58.7889 3.49701L66.0535 22.4208C65.7844 22.4208 65.5154 22.4208 65.2463 22.4208H4.21491C4.03553 22.4208 3.72163 22.4208 3.40773 22.4208L10.6723 3.49701ZM49.4172 25.5177C48.7446 28.298 46.2334 30.3608 43.2289 30.3608C40.2693 30.3608 37.758 28.298 37.0406 25.5626H49.4172V25.5177ZM32.6462 25.5177C31.9287 28.298 29.4175 30.3608 26.4579 30.3608C23.4983 30.3608 20.987 28.298 20.2696 25.5626H32.6462V25.5177ZM3.40773 25.5177C3.67679 25.5177 3.99069 25.5177 4.21491 25.5177H15.6499C14.8427 28.2083 12.4212 30.0917 9.55123 30.0917C6.63643 30.0917 4.17006 28.1635 3.40773 25.5177ZM62.5557 66.9068H7.12974V32.9157C7.89207 33.0951 8.69924 33.2296 9.50642 33.2296C13.1387 33.2296 16.3226 31.2117 17.8921 28.2072C19.4616 31.3462 22.6903 33.4987 26.4122 33.4987C30.0894 33.4987 33.2284 31.4359 34.8427 28.4314C36.4571 31.4359 39.5961 33.4539 43.2284 33.4539C46.9055 33.4539 50.1342 31.3462 51.7037 28.2969C53.2732 31.3911 56.4571 33.4539 60.1791 33.4539C60.9862 33.4539 61.7934 33.3642 62.5557 33.14V66.9068ZM60.1794 30.3575C57.2198 30.3575 54.7086 28.2947 53.9911 25.5593H65.2467C65.4709 25.5593 65.6951 25.5593 65.9193 25.5593C66.0538 25.5593 66.1884 25.5593 66.3229 25.5593C65.6503 28.2947 63.139 30.3575 60.1794 30.3575Z" fill="#84B8E2"/>
      <path id="Path" fill-rule="evenodd" clip-rule="evenodd" d="M51.6591 45.8313C51.6591 46.6833 50.9416 47.356 50.0896 47.356H50.0447C49.1927 47.356 48.4752 46.6385 48.5201 45.7416C48.5649 43.4546 47.8026 41.4367 46.4573 40.3156C44.4842 38.6116 41.8833 38.2977 39.5515 39.4636C37.4887 40.495 36.2779 42.5578 36.2331 42.5578C35.9192 43.0959 35.3362 43.4098 34.7533 43.3201C34.1703 43.365 33.5873 43.0959 33.2734 42.5578C33.2734 42.5578 32.0178 40.495 29.955 39.4636C27.6232 38.2977 25.0223 38.6116 23.0492 40.3156C21.39 41.7058 20.0447 44.9793 21.7488 49.5981C23.0941 53.2304 25.7398 55.5623 28.4304 57.5802C29.8205 58.6116 31.973 60.0017 34.7533 61.6161C37.4887 59.9569 39.686 58.5667 41.0761 57.5802C43.4528 55.8313 45.0223 54.3067 46.1882 52.6475C46.6815 51.93 47.6681 51.7506 48.3855 52.2439C49.103 52.7371 49.2824 53.7237 48.7891 54.4412C47.4438 56.3694 45.6501 58.1183 42.9595 60.0914C40.9864 61.5712 37.9371 63.4098 35.695 64.7102C35.4707 64.8448 35.2017 64.9345 34.8878 64.9345H34.6187C34.3497 64.9345 34.0806 64.8448 33.8115 64.7102C31.6142 63.4098 28.5649 61.5264 26.547 60.0914C23.6322 57.9389 20.4035 55.1138 18.7891 50.6744C16.547 44.5309 18.5649 39.9569 20.9864 37.8941C23.9012 35.4277 27.8923 34.9345 31.3003 36.6385C32.7802 37.356 33.9012 38.4322 34.7084 39.3291C35.4707 38.4322 36.6367 37.356 38.1165 36.6385C41.5694 34.9345 45.5156 35.3829 48.4304 37.8941C50.5828 39.643 51.7488 42.6026 51.6591 45.8313Z" fill="#84B8E2"/>
    </SvgIcon>
  );
}
