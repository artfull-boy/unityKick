import React from 'react'
import './Stadium.css'
import countryData from '../../../data/hostCountries.json'
import { useParams } from 'react-router-dom';

function Stadium() {
  const [mainImage, setMainImage] = React.useState('');
  const handleClick = (src) => setMainImage(src)
  const {country,stadium} = useParams()
  const selectedStadium = countryData.countries.find(item => item.name == country).stadiums.find(item => item.name == stadium)
  React.useEffect(()=> {
    handleClick(selectedStadium.images[0])
  },[])
  return (
    <div className='stadiumPage'>
      <div className='heroSection'>
        <p className='tixto'>{selectedStadium.name}</p>
        <img className='background' src={mainImage}></img>
        <div className='images'>
          <img className={mainImage == selectedStadium.images[0] ? 'first' : 'first inactive'} src={selectedStadium.images[0]} onClick={() => handleClick(selectedStadium.images[0])}></img>
          <img className={mainImage == selectedStadium.images[1] ? '' : 'inactive'} src={selectedStadium.images[1]} onClick={() => handleClick(selectedStadium.images[1])}></img>
          <img className={mainImage == selectedStadium.images[2] ? '' : 'inactive'} src={selectedStadium.images[2]} onClick={() => handleClick(selectedStadium.images[2])}></img>
          <img className={mainImage == selectedStadium.images[3] ? '' : 'inactive'} src={selectedStadium.images[3]} onClick={() => handleClick(selectedStadium.images[3])}></img>
          <img className={mainImage == selectedStadium.images[4] ? 'last' : 'last inactive'} src={selectedStadium.images[4]} onClick={() => handleClick(selectedStadium.images[4])}></img>
        </div>
        <div className='information'>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
              <g clip-path="url(#clip0_318_9242)">
                <path d="M14.2755 2.31105C13.979 2.30891 13.7373 2.54744 13.7351 2.84332C13.733 3.13921 13.971 3.38095 14.2674 3.3831C14.5633 3.38524 14.805 3.14725 14.8072 2.85136C14.8093 2.55548 14.5713 2.31373 14.2755 2.31105ZM14.2511 5.52714C12.1814 5.51245 10.4865 7.18212 10.4708 9.25112C10.4552 11.32 12.1258 13.0158 14.1948 13.0314L14.2235 13.0315C16.2793 13.0315 17.9595 11.3668 17.975 9.3074C17.9906 7.23861 16.3201 5.54274 14.2511 5.52714ZM14.2234 11.9595L14.2028 11.9594C12.725 11.9482 11.5317 10.7369 11.5428 9.25916C11.5539 7.78804 12.754 6.59903 14.2224 6.59903L14.243 6.59914C15.7209 6.61029 16.9142 7.82159 16.903 9.29936C16.8919 10.7705 15.6919 11.9595 14.2234 11.9595ZM16.5617 2.71757C16.2828 2.61862 15.9763 2.76469 15.8773 3.04374C15.7784 3.3228 15.9245 3.62913 16.2035 3.72808C18.5645 4.56487 20.138 6.81355 20.1191 9.32359C20.1169 9.61958 20.3551 9.86138 20.6511 9.86363H20.6553C20.9493 9.86363 21.1889 9.62628 21.1912 9.33163C21.2135 6.36489 19.353 3.70691 16.5617 2.71757Z" fill="#5742A9" />
                <path d="M17.5128 20.3448C21.0781 15.7557 23.3062 13.3626 23.3362 9.34754C23.374 4.29589 19.2744 0.166626 14.2231 0.166626C9.23077 0.166626 5.14959 4.20975 5.11163 9.21086C5.08097 13.3348 7.35045 15.7246 10.9403 20.3441C7.36905 20.8777 5.11163 22.2187 5.11163 23.8589C5.11163 24.9576 6.12719 25.9435 7.97127 26.635C9.64972 27.2644 11.8703 27.611 14.2239 27.611C16.5776 27.611 18.7982 27.2644 20.4766 26.635C22.3207 25.9434 23.3362 24.9575 23.3362 23.8588C23.3362 22.2196 21.0809 20.8789 17.5128 20.3448ZM6.18363 9.21895C6.21708 4.80592 9.81782 1.23867 14.2232 1.23867C18.6807 1.23867 22.2975 4.883 22.2642 9.33956C22.2357 13.1525 19.8728 15.5023 16.1005 20.4199C15.4276 21.2966 14.8097 22.1256 14.2247 22.9364C13.6416 22.1251 13.0359 21.311 12.353 20.4196C8.42469 15.2961 6.15458 13.1239 6.18363 9.21895ZM14.2239 26.539C9.62212 26.539 6.18363 25.1241 6.18363 23.8589C6.18363 22.9206 8.23918 21.7354 11.6954 21.325C12.4593 22.3274 13.1292 23.2381 13.7861 24.1682C13.8356 24.2382 13.9011 24.2953 13.9772 24.3348C14.0533 24.3742 14.1377 24.3949 14.2235 24.3949H14.2239C14.3096 24.3949 14.394 24.3744 14.4701 24.3351C14.5461 24.2957 14.6117 24.2388 14.6612 24.1689C15.312 23.2509 16.0001 22.3177 16.7576 21.3255C20.2105 21.7364 22.2642 22.9213 22.2642 23.859C22.2642 25.1241 18.8258 26.539 14.2239 26.539Z" fill="#5742A9" />
              </g>
              <defs>
                <clipPath id="clip0_318_9242">
                  <rect width="27.4444" height="27.4444" fill="white" transform="translate(0.501953 0.166626)" />
                </clipPath>
              </defs>
            </svg>
            <p>{selectedStadium.country}</p>
          </div>
          <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
  <g clip-path="url(#clip0_318_9248)">
    <path d="M17.9792 13.9974C18.4353 13.6548 18.7721 13.1775 18.942 12.6329C19.1118 12.0883 19.106 11.5041 18.9254 10.963C18.7448 10.4218 18.3986 9.95123 17.9358 9.61776C17.4729 9.28429 16.9169 9.10486 16.3465 9.10486C15.776 9.10486 15.22 9.28429 14.7572 9.61776C14.2944 9.95123 13.9482 10.4218 13.7676 10.963C13.587 11.5041 13.5812 12.0883 13.751 12.6329C13.9208 13.1775 14.2576 13.6548 14.7137 13.9974C14.2623 14.1699 13.8411 14.4131 13.4659 14.7178C13.2863 14.5858 13.0938 14.4723 12.8913 14.3791C13.1886 14.1011 13.3954 13.7402 13.4849 13.3432C13.5743 12.9461 13.5423 12.5314 13.3929 12.1528C13.2435 11.7742 12.9837 11.4493 12.6472 11.2204C12.3107 10.9914 11.9132 10.869 11.5062 10.869C11.0992 10.869 10.7016 10.9914 10.3651 11.2204C10.0287 11.4493 9.76883 11.7742 9.61945 12.1528C9.47006 12.5314 9.43801 12.9461 9.52748 13.3432C9.61694 13.7402 9.82378 14.1011 10.1211 14.3791C9.54698 14.6437 9.06037 15.0668 8.71852 15.5985C8.37667 16.1303 8.1938 16.7486 8.19141 17.3808C8.19141 17.4945 8.23659 17.6036 8.31701 17.684C8.39742 17.7644 8.5065 17.8096 8.62023 17.8096C8.73396 17.8096 8.84303 17.7644 8.92345 17.684C9.00387 17.6036 9.04905 17.4945 9.04905 17.3808C9.04863 16.938 9.16789 16.5033 9.39421 16.1226C9.62054 15.742 9.94552 15.4296 10.3348 15.2185C10.7241 15.0074 11.1631 14.9054 11.6056 14.9234C12.0481 14.9413 12.4775 15.0784 12.8484 15.3203C12.1579 16.1377 11.7782 17.1727 11.7763 18.2427C11.7763 18.3565 11.8215 18.4655 11.9019 18.546C11.9824 18.6264 12.0914 18.6715 12.2052 18.6715C12.3189 18.6715 12.428 18.6264 12.5084 18.546C12.5888 18.4655 12.634 18.3565 12.634 18.2427C12.634 17.2598 13.0244 16.3172 13.7195 15.6221C14.4145 14.9271 15.3571 14.5367 16.34 14.5367C17.323 14.5367 18.2656 14.9271 18.9606 15.6221C19.6557 16.3172 20.0461 17.2598 20.0461 18.2427C20.0461 18.3565 20.0913 18.4655 20.1717 18.546C20.2521 18.6264 20.3612 18.6715 20.4749 18.6715C20.5887 18.6715 20.6977 18.6264 20.7782 18.546C20.8586 18.4655 20.9038 18.3565 20.9038 18.2427C20.9005 17.3229 20.6196 16.4255 20.0978 15.668C19.5759 14.9105 18.8375 14.3282 17.9792 13.9974ZM10.3355 12.9039C10.3355 12.6724 10.4042 12.4461 10.5328 12.2535C10.6614 12.061 10.8443 11.911 11.0582 11.8224C11.2721 11.7338 11.5075 11.7106 11.7346 11.7557C11.9617 11.8009 12.1703 11.9124 12.334 12.0761C12.4977 12.2399 12.6092 12.4485 12.6544 12.6755C12.6995 12.9026 12.6764 13.138 12.5877 13.3519C12.4991 13.5658 12.3491 13.7487 12.1566 13.8773C11.9641 14.0059 11.7377 14.0746 11.5062 14.0746C11.1957 14.0746 10.8979 13.9513 10.6784 13.7317C10.4588 13.5122 10.3355 13.2144 10.3355 12.9039ZM14.4865 11.8319C14.4844 11.4633 14.5918 11.1023 14.795 10.7948C14.9983 10.4873 15.2884 10.2471 15.6284 10.1046C15.9684 9.9622 16.343 9.92393 16.7048 9.9947C17.0666 10.0655 17.3992 10.2421 17.6605 10.5021C17.9217 10.7622 18.0999 11.094 18.1723 11.4554C18.2448 11.8169 18.2082 12.1917 18.0673 12.5324C17.9265 12.873 17.6876 13.1642 17.3811 13.3689C17.0745 13.5736 16.714 13.6827 16.3454 13.6822C15.8538 13.6811 15.3826 13.4858 15.0345 13.1388C14.6863 12.7918 14.4893 12.3213 14.4865 11.8297V11.8319Z" fill="#5742A9"/>
    <path d="M27.627 13.6822H25.4721C25.3611 10.8773 24.1971 8.2173 22.2122 6.23239C20.2273 4.24748 17.5673 3.08349 14.7624 2.97243V0.817613C14.7624 0.703883 14.7172 0.594812 14.6368 0.514392C14.5564 0.433973 14.4473 0.388794 14.3336 0.388794C14.2198 0.388794 14.1107 0.433973 14.0303 0.514392C13.9499 0.594812 13.9047 0.703883 13.9047 0.817613V2.97243C11.0998 3.08349 8.43983 4.24748 6.45492 6.23239C4.47002 8.2173 3.30602 10.8773 3.19497 13.6822H1.04015C0.926418 13.6822 0.817346 13.7274 0.736926 13.8078C0.656507 13.8882 0.611328 13.9973 0.611328 14.111C0.611328 14.2247 0.656507 14.3338 0.736926 14.4142C0.817346 14.4947 0.926418 14.5398 1.04015 14.5398H3.19497C3.30602 17.3447 4.47002 20.0047 6.45492 21.9896C8.43983 23.9746 11.0998 25.1385 13.9047 25.2496V27.4044C13.9047 27.5182 13.9499 27.6272 14.0303 27.7076C14.1107 27.7881 14.2198 27.8332 14.3336 27.8332C14.4473 27.8332 14.5564 27.7881 14.6368 27.7076C14.7172 27.6272 14.7624 27.5182 14.7624 27.4044V25.2496C17.5673 25.1385 20.2273 23.9746 22.2122 21.9896C24.1971 20.0047 25.3611 17.3447 25.4721 14.5398H27.627C27.7407 14.5398 27.8498 14.4947 27.9302 14.4142C28.0106 14.3338 28.0558 14.2247 28.0558 14.111C28.0558 13.9973 28.0106 13.8882 27.9302 13.8078C27.8498 13.7274 27.7407 13.6822 27.627 13.6822ZM14.7624 24.392V22.2586C14.7624 22.1449 14.7172 22.0358 14.6368 21.9554C14.5564 21.8749 14.4473 21.8298 14.3336 21.8298C14.2198 21.8298 14.1107 21.8749 14.0303 21.9554C13.9499 22.0358 13.9047 22.1449 13.9047 22.2586V24.392C11.3272 24.2816 8.88492 23.2082 7.06067 21.3839C5.23642 19.5596 4.16299 17.1174 4.0526 14.5398H6.18598C6.29971 14.5398 6.40878 14.4947 6.4892 14.4142C6.56962 14.3338 6.6148 14.2247 6.6148 14.111C6.6148 13.9973 6.56962 13.8882 6.4892 13.8078C6.40878 13.7274 6.29971 13.6822 6.18598 13.6822H4.0526C4.16299 11.1047 5.23642 8.66238 7.06067 6.83813C8.88492 5.01388 11.3272 3.94046 13.9047 3.83007V5.74904C13.9047 5.86277 13.9499 5.97184 14.0303 6.05226C14.1107 6.13268 14.2198 6.17786 14.3336 6.17786C14.4473 6.17786 14.5564 6.13268 14.6368 6.05226C14.7172 5.97184 14.7624 5.86277 14.7624 5.74904V3.83007C17.3399 3.94046 19.7822 5.01388 21.6064 6.83813C23.4307 8.66238 24.5041 11.1047 24.6145 13.6822H22.4811C22.3674 13.6822 22.2583 13.7274 22.1779 13.8078C22.0975 13.8882 22.0523 13.9973 22.0523 14.111C22.0523 14.2247 22.0975 14.3338 22.1779 14.4142C22.2583 14.4947 22.3674 14.5398 22.4811 14.5398H24.6145C24.5041 17.1174 23.4307 19.5596 21.6064 21.3839C19.7822 23.2082 17.3399 24.2816 14.7624 24.392Z" fill="#5742A9"/>
  </g>
  <defs>
    <clipPath id="clip0_318_9248">
      <rect width="27.4444" height="27.4444" fill="white" transform="translate(0.611328 0.388794)"/>
    </clipPath>
  </defs>
</svg>
            <p>{selectedStadium.capacity}</p>
          </div>
          <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
  <g clip-path="url(#clip0_318_9255)">
    <path d="M27.4426 22.1679C26.8602 21.9178 26.2706 21.6847 25.6746 21.4689L25.8251 21.0401C25.9195 20.7751 25.8989 20.4813 25.7664 20.2125C25.6043 19.884 25.293 19.6258 24.9117 19.5036C24.8311 19.4779 24.7488 19.4565 24.6677 19.4307C25.519 17.6777 25.9032 15.6292 25.9032 13.1498V5.94135C25.9032 5.56828 25.796 5.20807 25.603 4.89932C25.41 4.59486 25.1356 4.34186 24.8011 4.18319C22.0395 2.8753 17.8328 1.99622 14.3336 1.99622C10.8345 1.99622 6.62774 2.8753 3.86614 4.18319C3.19718 4.50052 2.76408 5.19092 2.76408 5.94135V13.1498C2.76408 15.6292 3.1483 17.6777 3.99908 19.4312C3.91846 19.456 3.83655 19.4779 3.75594 19.5041C3.37514 19.6258 3.06339 19.8836 2.9013 20.2116C2.76836 20.4805 2.74735 20.7751 2.84126 21.0388L2.99307 21.4693C2.39723 21.6858 1.80752 21.9187 1.22461 22.1679C0.85583 22.3265 0.615691 22.6653 0.611403 23.0255C0.607115 23.3471 0.787219 23.6344 1.0831 23.776C1.46904 23.9603 1.85069 24.1576 2.22376 24.3549C2.10798 24.7751 1.99649 25.1911 1.89357 25.6113C1.82067 25.9329 1.92359 26.2502 2.17659 26.4604C2.30773 26.5696 2.46704 26.6396 2.6362 26.6624C2.80536 26.6852 2.97751 26.6597 3.13286 26.589C4.26495 26.1002 5.44849 25.6799 6.6406 25.3454C7.27526 25.1653 7.65691 24.5393 7.50253 23.9218L7.39447 23.4891C7.41462 23.4844 7.43478 23.4784 7.45536 23.4736C8.95194 24.586 10.8465 25.5586 13.2015 26.4604C13.566 26.6019 13.952 26.6705 14.3336 26.6705C14.7153 26.6705 15.1012 26.6019 15.4657 26.4604C17.8208 25.5586 19.7153 24.5864 21.2119 23.4736C21.2325 23.4784 21.2526 23.4844 21.2728 23.4891L21.1647 23.9218C21.0103 24.5393 21.392 25.1653 22.0266 25.3454C23.2188 25.6799 24.4023 26.1002 25.5344 26.589C25.6545 26.6448 25.7831 26.6705 25.9118 26.6705C26.1219 26.6705 26.3277 26.5976 26.4907 26.4604C26.7437 26.2502 26.8466 25.9286 26.7694 25.607C26.6708 25.1911 26.5593 24.7751 26.4435 24.3549C26.8166 24.1576 27.1939 23.9603 27.5841 23.776C27.88 23.6344 28.0601 23.3471 28.0558 23.0255C28.0516 22.6653 27.8114 22.3265 27.4426 22.1679ZM3.52738 13.1498V5.94135C3.52738 5.48252 3.78896 5.06227 4.19205 4.87359C6.82071 3.62573 10.9888 2.75951 14.3336 2.75951C16.006 2.75951 17.8843 2.97821 19.6724 3.347C21.4606 3.72007 23.1587 4.24752 24.4752 4.87359C24.8783 5.06227 25.1399 5.48252 25.1399 5.94135V13.1498C25.1399 15.5705 24.7689 17.5401 23.9306 19.2107C23.4635 19.076 22.9935 18.9512 22.5211 18.8364C23.3594 17.3081 23.7076 15.4796 23.7076 13.1498V6.34444C23.7076 6.19007 23.6176 6.05285 23.4761 5.99281C20.9932 4.91648 17.3182 4.19177 14.3336 4.19177C11.349 4.19177 7.67406 4.91648 5.1912 5.99281C5.04968 6.05285 4.95963 6.19007 4.95963 6.34444V13.1498C4.95963 15.4762 5.30783 17.3081 6.14317 18.8372C5.67174 18.9518 5.2028 19.0763 4.73665 19.2107C3.8983 17.5401 3.52738 15.5705 3.52738 13.1498ZM19.6724 17.0006H17.434C17.3324 17.0006 17.2346 17.0169 17.1407 17.0426L16.187 15.7322C16.2414 15.6498 16.2882 15.5606 16.3199 15.4629L16.9014 13.6738C16.9323 13.5782 16.9469 13.4809 16.9511 13.3839L18.7037 12.8136C18.7646 12.8899 18.8341 12.9607 18.916 13.0199L20.6197 14.2562C20.5241 15.2327 20.1996 16.173 19.6724 17.0006ZM13.0712 15.2274L12.4897 13.438C12.4676 13.3702 12.4675 13.2972 12.4894 13.2294C12.5114 13.1616 12.5543 13.1025 12.6119 13.0606L14.1338 11.9547C14.2526 11.8689 14.4125 11.8689 14.5313 11.9547L16.0528 13.0602C16.1105 13.1021 16.1536 13.1612 16.1757 13.2291C16.1978 13.297 16.1979 13.3701 16.1758 13.438L15.5944 15.2274C15.5723 15.2953 15.5293 15.3544 15.4715 15.3962C15.4137 15.4381 15.3441 15.4605 15.2727 15.4603H13.3919C13.3206 15.4605 13.251 15.4381 13.1932 15.3962C13.1354 15.3544 13.0924 15.2953 13.0703 15.2274H13.0712ZM14.3336 7.31358C14.8585 7.31358 15.3658 7.38519 15.8534 7.50655L14.5335 8.46667C14.4759 8.5089 14.4063 8.53166 14.3349 8.53166C14.2635 8.53166 14.194 8.5089 14.1364 8.46667L12.8083 7.50097C13.3073 7.3773 13.8195 7.31438 14.3336 7.31358ZM19.241 12.025L19.7633 10.4195C20.2874 11.3019 20.5867 12.2996 20.6347 13.3248L19.3641 12.4028C19.3063 12.3611 19.2632 12.302 19.241 12.2342C19.2189 12.1664 19.2189 12.0928 19.241 12.025ZM18.5163 11.7887C18.4837 11.8882 18.4687 11.9899 18.4649 12.0906L16.72 12.6584C16.6575 12.5771 16.5838 12.5049 16.5013 12.444L14.9799 11.3376C14.897 11.2787 14.8064 11.2315 14.7106 11.1974V9.22483C14.8053 9.19052 14.8971 9.14464 14.982 9.08331L16.75 7.79643C17.7104 8.19653 18.5577 8.8265 19.2175 9.63092L18.5163 11.7887ZM11.9194 7.79771L13.6874 9.08331C13.7689 9.14249 13.8572 9.18623 13.9481 9.22054V11.2C13.8564 11.2343 13.768 11.2784 13.6857 11.338L12.1638 12.444C12.0806 12.5044 12.0094 12.5769 11.9481 12.6541L10.2007 12.0893C10.1978 11.9868 10.1806 11.8852 10.1496 11.7875L9.44937 9.63864C10.1061 8.82839 10.9552 8.1955 11.9194 7.79771ZM8.02441 13.3286C8.07329 12.2887 8.37175 11.2986 8.90048 10.4148L9.4245 12.0229C9.44676 12.0908 9.44688 12.1641 9.42484 12.2322C9.40281 12.3002 9.35974 12.3595 9.30186 12.4015L8.02441 13.3286ZM9.74955 13.0186C9.83024 12.959 9.90239 12.8886 9.96396 12.8093L11.7135 13.3784C11.7178 13.477 11.7328 13.5765 11.7646 13.6738L12.3456 15.4629C12.3774 15.5606 12.4241 15.6503 12.479 15.733L11.5253 17.0431C11.4302 17.0158 11.3318 17.0015 11.2328 17.0006H8.9974C8.47069 16.1708 8.14704 15.2285 8.05271 14.2502L9.74955 13.0186ZM9.92536 18.1438C9.79857 18.0209 9.67697 17.8927 9.56087 17.7596H11.2328C11.3701 17.7596 11.4901 17.8454 11.5394 17.9736C11 18.0165 10.4622 18.0757 9.92536 18.1438ZM12.328 17.9239L12.2749 17.7596C12.2436 17.6648 12.1994 17.5748 12.1436 17.492L13.0982 16.1803C13.1925 16.206 13.2903 16.2232 13.3919 16.2232H15.2727C15.3769 16.2232 15.4773 16.206 15.5738 16.1786L16.5232 17.4847C16.4651 17.5695 16.4194 17.662 16.3872 17.7596L16.3341 17.9234C14.9998 17.847 13.6623 17.8474 12.328 17.9239ZM17.4336 17.7596H19.1055C19.0399 17.8347 18.9726 17.9088 18.904 17.9813C18.8624 18.0251 18.8234 18.0714 18.7809 18.1134C18.7698 18.1241 18.7573 18.1335 18.7462 18.1447C18.2067 18.0749 17.6657 18.0177 17.1235 17.9732C17.1481 17.9108 17.1907 17.8571 17.246 17.8191C17.3012 17.781 17.3665 17.7603 17.4336 17.7596ZM21.413 13.6301C21.413 9.72783 18.2355 6.55028 14.3332 6.55028C12.1119 6.55028 10.0664 7.56229 8.71995 9.32045C7.7594 10.564 7.25339 12.0563 7.25339 13.6301C7.25339 13.7888 7.25768 13.9431 7.26625 14.0975C7.36769 15.6408 7.97629 17.1074 8.9974 18.2691C8.30029 18.3789 7.60671 18.51 6.91762 18.6623C6.06513 17.2034 5.7225 15.4406 5.7225 13.1498V6.59745C8.11531 5.61116 11.533 4.95507 14.3332 4.95507C17.1334 4.95507 20.5511 5.61116 22.9439 6.59745V13.1498C22.9439 15.4406 22.6013 17.2034 21.7488 18.6623C21.0605 18.5102 20.3678 18.3793 19.6716 18.2695C20.7916 16.9817 21.413 15.3552 21.413 13.6301ZM3.58441 20.5495C3.65473 20.408 3.80568 20.2884 3.98793 20.2305C10.6814 18.0864 17.9846 18.0864 24.6798 20.2305C24.862 20.2884 25.0129 20.4084 25.0828 20.5504C25.1111 20.6087 25.1386 20.6957 25.1069 20.7858L24.2767 23.1447C24.2029 23.3489 23.9328 23.4479 23.6763 23.3651C20.6519 22.3982 17.5086 21.9076 14.3336 21.9076C11.1586 21.9076 8.0154 22.3982 4.99179 23.3656C4.73322 23.4488 4.46349 23.3489 4.39145 23.1464L3.55997 20.7841C3.52823 20.6957 3.55568 20.6078 3.58441 20.5495ZM21.9023 24.1173C21.9027 24.1139 21.9014 24.11 21.9023 24.1061L22.0125 23.6786C22.088 23.6983 22.1639 23.7159 22.2393 23.7365L22.4752 23.803C22.5236 23.8167 22.5712 23.8321 22.6193 23.8459C22.3774 23.9308 22.1399 24.0242 21.9023 24.1173ZM16.6137 22.7639C15.889 23.0996 15.1528 23.41 14.4065 23.6945C14.3838 23.7022 14.3658 23.7116 14.3336 23.7116C14.3015 23.7116 14.265 23.6988 14.265 23.6988C13.5134 23.4146 12.7725 23.1029 12.0437 22.7644C13.5648 22.6487 15.0925 22.6486 16.6137 22.7639ZM6.19635 23.8017L6.42577 23.7374C6.50167 23.7164 6.57843 23.6988 6.65476 23.6786L6.76496 24.1061C6.76582 24.11 6.76453 24.1139 6.76496 24.1173C6.52778 24.0225 6.28889 23.932 6.04841 23.8459C6.09772 23.8317 6.14703 23.8158 6.19635 23.8017ZM2.8284 25.89C2.75979 25.9201 2.69975 25.9029 2.66545 25.8729C2.62685 25.8429 2.63114 25.8128 2.63543 25.7871C2.75979 25.2854 2.89272 24.7794 3.04281 24.2777C3.06742 24.1945 3.06299 24.1055 3.03026 24.0252C2.99752 23.945 2.93843 23.8782 2.86271 23.836C2.391 23.5744 1.90644 23.3257 1.3747 23.0384C1.3747 22.9869 1.42187 22.914 1.52479 22.8669C2.09135 22.6229 2.66539 22.3966 3.24607 22.1885L3.67275 23.402C3.80697 23.7768 4.12601 24.035 4.5068 24.1242C5.05655 24.2948 5.60072 24.4917 6.1406 24.7001C5.0134 25.0291 3.90728 25.4265 2.8284 25.89ZM15.1913 25.7485C14.6381 25.9586 14.0292 25.9586 13.476 25.7485C11.4597 24.9724 9.80529 24.1602 8.4588 23.2579C9.18152 23.1144 9.90929 22.9975 10.6406 22.9076C11.6085 23.4243 12.7135 23.9175 13.9906 24.4063C14.0978 24.4535 14.2136 24.4749 14.3336 24.4749C14.4494 24.4749 14.5652 24.4535 14.6767 24.4106C15.9541 23.9218 17.0592 23.4256 18.0275 22.9076C18.7582 22.9976 19.4855 23.1134 20.2089 23.2579C18.8624 24.1602 17.2071 24.9724 15.1913 25.7485ZM27.254 23.0898C26.7608 23.3257 26.2762 23.5744 25.8045 23.836C25.7288 23.8782 25.6697 23.945 25.637 24.0252C25.6043 24.1055 25.5998 24.1945 25.6244 24.2777C25.7745 24.7794 25.9075 25.2854 26.0318 25.7828C26.0361 25.8128 26.0361 25.8472 26.0018 25.8729C25.9675 25.9029 25.9075 25.9201 25.8346 25.89C24.7578 25.4261 23.6537 25.0284 22.5284 24.6992C23.0706 24.4874 23.6198 24.2939 24.175 24.119V24.1177C24.5498 24.0255 24.8624 23.7704 24.9954 23.3995L25.4212 22.1885C26.0014 22.3986 26.5764 22.6216 27.1382 22.8669C27.2454 22.914 27.2926 22.9869 27.254 23.0898Z" fill="#5742A9"/>
  </g>
  <defs>
    <clipPath id="clip0_318_9255">
      <rect width="27.4444" height="27.4444" fill="white" transform="translate(0.611328 0.611084)"/>
    </clipPath>
  </defs>
</svg>
            <p>{selectedStadium.club}</p>
          </div>
        </div>
      </div>
      <div className='location'>
        <div className='infos'>
          <p>About Stadium</p>
          <p>{selectedStadium.description}</p>
        </div>
        <div className='geolocation'>
        <iframe src={selectedStadium.location}></iframe>
        </div>
      </div>
    </div>
  )
}

export default Stadium