import Logo from '../../images/Unity kick 1.png';
import Morocco from '../../images/Morocco (MA).svg';
import Spain from '../../images/Spain (ES).svg';
import Portugal from '../../images/Portugal (PT).svg';
import Palestine from '../../images/State of Palestine (PS).svg';
import './Navbar.css';
import {Link,NavLink} from 'react-router-dom';
import React from "react"
export default function Navbar({isSmallScreen,removeFav,isNavOpen,setNavOpen,Fav_teams}){
    return<>
        <div className={`navbar-content ${(isNavOpen==false && isSmallScreen)?`hide-nav`:``} ${isSmallScreen?`mobile`:``}`}>
            <div className="logo">
                <img src={Logo} alt='Logo'/>
                <h2>Unity Kick</h2>
                {isSmallScreen && (<svg xmlns="http://www.w3.org/2000/svg" height="20" width="15" viewBox="0 0 384 512" onClick={()=>{setNavOpen(!isNavOpen)}}><path fill="#636363" d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>)}
            </div>
            <div className='nav-routes'>
                <div className='menu'>
                    <h4>MENU</h4>
                    <div className='menu-list'>
                            <NavLink to={'/'}>
                                <div className='menu-item active-item'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <g clip-path="url(#clip0_1_698)">
                                            <path d="M13 21V11H21V21H13ZM3 13V3H11V13H3ZM9 11V5H5V11H9ZM3 21V15H11V21H3ZM5 19H9V17H5V19ZM15 19H19V13H15V19ZM13 3H21V9H13V3ZM15 5V7H19V5H15Z" fill="#636363"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_698">
                                            <rect width="24" height="24" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <h4>Dashboard</h4>
                                </div>
                            </NavLink>
                            <NavLink to={'/Teams'}>
                                <div className='menu-item'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <g clip-path="url(#clip0_1_703)">
                                        <path d="M12 0C5.37265 0 0 5.37265 0 12C0 18.6273 5.37265 24 12 24C18.6273 24 24 18.6273 24 12C23.9926 5.3758 18.6242 0.0074 12 0ZM12.4283 3.45955L16.6 1.792C17.0735 2.00626 17.5315 2.25313 17.9707 2.53085L17.9816 2.5377C18.4133 2.81118 18.8258 3.11371 19.2164 3.4432L19.25 3.47245C19.425 3.62161 19.5955 3.77605 19.7612 3.93555C19.782 3.95605 19.8039 3.97555 19.8248 3.9965C19.9984 4.16597 20.1666 4.34079 20.3293 4.5207C20.3428 4.53595 20.3556 4.55195 20.3692 4.5672C20.5119 4.72715 20.6492 4.89275 20.7824 5.06115C20.8145 5.10115 20.8465 5.1412 20.8776 5.18125C21.0221 5.36835 21.1619 5.55875 21.294 5.75525L20.4623 9.29045L16.3707 10.6545L12.4293 7.5008L12.4283 3.45955ZM3.12205 5.18355C3.1531 5.14355 3.18475 5.10355 3.2168 5.06365C3.34829 4.89688 3.48448 4.73386 3.6252 4.5748C3.64045 4.558 3.6545 4.5408 3.66955 4.524C3.83115 4.34379 3.99873 4.16903 4.172 4C4.19195 3.9805 4.21185 3.96 4.23275 3.942C4.39706 3.78352 4.56609 3.63 4.7396 3.48165L4.7796 3.44805C5.16667 3.12098 5.57529 2.8203 6.0027 2.54805L6.0183 2.53805C6.45496 2.26097 6.91022 2.01437 7.38085 1.8L11.5717 3.45955V7.4996L7.6301 10.6528L3.5385 9.29125L2.70685 5.75605C2.83944 5.56107 2.97791 5.37015 3.12205 5.18355ZM2.64005 18.1381C2.52236 17.9587 2.40988 17.7759 2.30275 17.59L2.27675 17.5451C2.17012 17.36 2.06916 17.1717 1.974 16.9805L1.9707 16.9745C1.77027 16.5721 1.59436 16.158 1.44395 15.7344V15.7305C1.37285 15.5305 1.308 15.3256 1.24805 15.1195L1.22635 15.0436C1.17125 14.8493 1.1215 14.6535 1.07715 14.4565C1.07325 14.4371 1.06835 14.4188 1.06445 14.3996C0.966228 13.9528 0.895644 13.5003 0.8531 13.0447L3.2951 10.1145L7.3584 11.4688L8.5377 16.1856L6.6 18.7637L2.64005 18.1381ZM14.6637 22.8771C14.4637 22.9268 14.2584 22.9696 14.0531 23.008C14.0244 23.0137 13.9952 23.0184 13.9664 23.0236C13.7916 23.0549 13.6149 23.0816 13.4377 23.1035C13.3905 23.1096 13.3435 23.116 13.2965 23.1217C13.132 23.1408 12.966 23.1553 12.7996 23.1672C12.7473 23.1707 12.6955 23.176 12.6432 23.1793C12.4305 23.1924 12.216 23.2 12 23.2C11.8021 23.2 11.6055 23.1948 11.41 23.1844C11.3863 23.1844 11.3637 23.1805 11.34 23.1787C11.166 23.1688 10.9928 23.1557 10.8199 23.1389L10.8 23.1352C10.4212 23.0941 10.0448 23.034 9.67205 22.9553L7.30605 19.2508L9.2133 16.7076H14.7867L16.7252 19.2676L14.6637 22.8771ZM22.9385 14.4C22.9344 14.4192 22.9297 14.4377 22.9256 14.4569C22.881 14.6538 22.8312 14.8496 22.7764 15.044L22.7549 15.1199C22.6953 15.3254 22.6299 15.5291 22.5588 15.7309V15.7348C22.4085 16.1584 22.2326 16.5725 22.032 16.9748L22.0287 16.9809C21.9333 17.1719 21.8323 17.3602 21.726 17.5455L21.7 17.5905C21.5937 17.7765 21.4814 17.959 21.3633 18.1377L17.4168 18.76L15.4656 16.184L16.6444 11.4684L20.7076 10.1141L23.1496 13.0443C23.1072 13.5002 23.0367 13.9529 22.9385 14.4Z" fill="#636363"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_703">
                                        <rect width="24" height="24" fill="white"/>
                                        </clipPath>
                                    </defs>
                                    </svg>
                                    <h4>Teams</h4>
                                </div>
                            </NavLink>
                            <NavLink to={'/Standings'}>
                                <div className='menu-item'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <g clip-path="url(#clip0_1_708)">
                                        <path d="M19 3L23 8H20V20H18V8H15L19 3ZM14 18V20H3V18H14ZM14 11V13H3V11H14ZM12 4V6H3V4H12Z" fill="#636363"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_708">
                                        <rect width="24" height="24" fill="white"/>
                                        </clipPath>
                                    </defs>
                                    </svg>
                                    <h4> Standings</h4>
                                </div>
                            </NavLink>
                            <Link to={'/#shop'}>
                        <div className='menu-item'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_1_713)">
                                <path d="M20.998 13.242V20H21.9979V22H1.9999V20H2.9998V13.242C2.38423 12.8311 1.87962 12.2745 1.53077 11.6218C1.18191 10.969 0.999592 10.2402 1 9.5C1 8.673 1.22398 7.876 1.63294 7.197L4.34466 2.5C4.43242 2.34798 4.55864 2.22175 4.71064 2.13398C4.86264 2.04621 5.03506 2 5.21057 2H18.7882C18.9637 2 19.1361 2.04621 19.2881 2.13398C19.4401 2.22175 19.5664 2.34798 19.6541 2.5L22.3558 7.182C22.9523 8.17287 23.1441 9.35553 22.8912 10.4841C22.6383 11.6127 21.9602 12.6005 20.998 13.242ZM18.9982 13.972C18.3107 14.0491 17.6147 13.9665 16.9643 13.7307C16.3139 13.4948 15.7268 13.1119 15.2486 12.612C14.8288 13.0511 14.3244 13.4005 13.7659 13.6393C13.2074 13.878 12.6063 14.001 11.9989 14.001C11.3916 14.0013 10.7906 13.8786 10.2321 13.6402C9.67357 13.4018 9.16913 13.0527 8.74922 12.614C8.27089 13.1138 7.6837 13.4964 7.03334 13.7321C6.38299 13.9678 5.68701 14.0503 4.9996 13.973V20H18.9982V13.973V13.972ZM5.78852 4L3.35576 8.213C3.11936 8.79714 3.11227 9.44903 3.3359 10.0382C3.55952 10.6273 3.99738 11.1103 4.56182 11.3904C5.12627 11.6705 5.77566 11.7271 6.38004 11.5488C6.98441 11.3706 7.49918 10.9706 7.82131 10.429C8.15628 9.592 9.34116 9.592 9.67712 10.429C9.8624 10.8934 10.1827 11.2916 10.5966 11.5721C11.0104 11.8526 11.4989 12.0025 11.9989 12.0025C12.4989 12.0025 12.9873 11.8526 13.4012 11.5721C13.8151 11.2916 14.1354 10.8934 14.3207 10.429C14.6556 9.592 15.8405 9.592 16.1765 10.429C16.3062 10.7484 16.5007 11.0376 16.7475 11.2783C16.9944 11.519 17.2884 11.706 17.611 11.8275C17.9337 11.9491 18.278 12.0026 18.6223 11.9847C18.9666 11.9668 19.3034 11.8778 19.6117 11.7234C19.92 11.569 20.193 11.3525 20.4136 11.0875C20.6342 10.8225 20.7975 10.5148 20.8935 10.1836C20.9894 9.85238 21.0157 9.50493 20.9709 9.16305C20.9261 8.82118 20.8111 8.49227 20.633 8.197L18.2083 4H5.78952H5.78852Z" fill="#636363"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_1_713">
                                <rect width="24" height="24" fill="white"/>
                                </clipPath>
                            </defs>
                            </svg>
                            <h4>Shop</h4>
                        </div></Link>
                    </div>
                </div>
                <div className='menu'>
                    <h4>Host countries</h4>
                    <div className='menu-list'>
                        <NavLink to={'/host/Morocco'}><div className='menu-item'>
                            <img src={Morocco} alt='Morocco'></img>
                            <h4>Morocco</h4>
                        </div></NavLink>
                        <NavLink to={'/host/Spain'}><div className='menu-item'>
                            <img src={Spain} alt='Spain'></img>
                            <h4>Spain</h4>
                        </div></NavLink>
                        <NavLink to={'/host/Portugal'}><div className='menu-item'>
                            <img src={Portugal} alt='Portugal'></img>
                            <h4>Portugal</h4>
                        </div></NavLink>
                    </div>
                </div>
                <div className='menu Favoris'>
                    <h4>Favourite Team</h4>
                    <div className='menu-list'>
                        <div className='menu-item'>
                            <img src={Palestine} alt='Palestine'></img>
                            <h4>Palestine</h4>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <g clip-path="url(#clip0_1_1427)">
                            <path d="M7.5 11.4538L2.86515 14L3.90016 8.88705L0 5.34771L5.27491 4.73374L7.5 0L9.72509 4.73374L15 5.34771L11.0998 8.88705L12.1348 14L7.5 11.4538Z" fill="#FF0000"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_1_1427">
                            <rect width="16" height="16" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </div>
                        {Fav_teams.map((team,index)=>(
                            <div className='menu-item' key={index}>
                                <div className='fav-country-details'>
                                    <img src={`https://media.api-sports.io/flags/${team.code}.svg`} alt={team.name}></img>
                                    <Link to={`/NationalTeam/${team.code}`}><h4>{team.name}</h4></Link>
                                </div>
                                <i class="fa-regular fa-trash-can" onClick={()=>{removeFav(team.code)}}></i>                            
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>

}