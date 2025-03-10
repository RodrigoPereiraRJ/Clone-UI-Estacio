import { useState } from "react";
import { AnimatePresence, motion } from 'framer-motion'
import logoestacio from './assets/download.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './slideConfig.css'

function App() {

  const variações = {
    hidden: { x: '100%' },
    visible: { x: '0' },
    exit: { x: '100%' }
  }

  const [isactive, setisactive] = useState(false)

  const [isvisible, setisvisible] = useState(false)
  const [isvisible2, setisvisible2] = useState(false)
  return (
    <div className="w-full h-auto relative flex flex-row-reverse lg:flex-row ">
      <div className="hidden lg:block lg:w-[64px] lg:h-screen lg:flex lg:justify-center lg:items-center">
        <div className="w-[75%] h-[100%]">
          <nav className="relative">
            <header className="w-[100%] h-[109px] relative">
              <ul className="relative top-[25px]">
                <li>
                  <svg className="relative" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="home" width="24.000em" height="24.000em" aria-hidden="true" focusable="false" role="img" alt=""><path fill-rule="evenodd" clip-rule="evenodd" d="M11.5395 1.40799C11.8104 1.19734 12.1896 1.19734 12.4605 1.40799L21.4605 8.40799C21.6431 8.55008 21.75 8.76856 21.75 9V20C21.75 20.7293 21.4603 21.4288 20.9445 21.9445C20.4288 22.4603 19.7293 22.75 19 22.75H5C4.27065 22.75 3.57118 22.4603 3.05546 21.9445C2.53973 21.4288 2.25 20.7293 2.25 20V9C2.25 8.76856 2.35685 8.55008 2.53954 8.40799L11.5395 1.40799ZM9.75 21.25H14.25V12.75H9.75V21.25ZM15.75 21.25V12C15.75 11.5858 15.4142 11.25 15 11.25H9C8.58579 11.25 8.25 11.5858 8.25 12V21.25H5C4.66848 21.25 4.35054 21.1183 4.11612 20.8839C3.8817 20.6495 3.75 20.3315 3.75 20V9.36681L12 2.95015L20.25 9.36681V20C20.25 20.3315 20.1183 20.6495 19.8839 20.8839C19.6495 21.1183 19.3315 21.25 19 21.25H15.75Z" fill="currentColor"></path></svg>
                </li>
              </ul>
            </header>
            <ul className="relative w-full flex flex-col gap-[20px]">
              <li className="group">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25" class="grid" width="24.000em" height="25.000em" aria-hidden="true" focusable="false" role="img" alt=""><path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 3.51758C2.25 3.10336 2.58579 2.76758 3 2.76758H10C10.4142 2.76758 10.75 3.10336 10.75 3.51758V10.5176C10.75 10.9318 10.4142 11.2676 10 11.2676H3C2.58579 11.2676 2.25 10.9318 2.25 10.5176V3.51758ZM3.75 4.26758V9.76758H9.25V4.26758H3.75ZM13.25 3.51758C13.25 3.10336 13.5858 2.76758 14 2.76758H21C21.4142 2.76758 21.75 3.10336 21.75 3.51758V10.5176C21.75 10.9318 21.4142 11.2676 21 11.2676H14C13.5858 11.2676 13.25 10.9318 13.25 10.5176V3.51758ZM14.75 4.26758V9.76758H20.25V4.26758H14.75ZM2.25 14.5176C2.25 14.1034 2.58579 13.7676 3 13.7676H10C10.4142 13.7676 10.75 14.1034 10.75 14.5176V21.5176C10.75 21.9318 10.4142 22.2676 10 22.2676H3C2.58579 22.2676 2.25 21.9318 2.25 21.5176V14.5176ZM3.75 15.2676V20.7676H9.25V15.2676H3.75ZM13.25 14.5176C13.25 14.1034 13.5858 13.7676 14 13.7676H21C21.4142 13.7676 21.75 14.1034 21.75 14.5176V21.5176C21.75 21.9318 21.4142 22.2676 21 22.2676H14C13.5858 22.2676 13.25 21.9318 13.25 21.5176V14.5176ZM14.75 15.2676V20.7676H20.25V15.2676H14.75Z" fill="currentColor"></path></svg>
                <div className="absolute w-[250px] h-[220px] top-0 right-[-250px]  hidden group-hover:block z-1"></div>
              </li>
              <li className="group">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="columns" width="24.000em" height="24.000em" aria-hidden="true" focusable="false" role="img" alt=""><path fill-rule="evenodd" clip-rule="evenodd" d="M3.05546 3.05546C3.57118 2.53973 4.27065 2.25 5 2.25H19C19.7293 2.25 20.4288 2.53973 20.9445 3.05546C21.4603 3.57118 21.75 4.27065 21.75 5V19C21.75 19.7293 21.4603 20.4288 20.9445 20.9445C20.4288 21.4603 19.7293 21.75 19 21.75H5C4.27065 21.75 3.57118 21.4603 3.05546 20.9445C2.53973 20.4288 2.25 19.7293 2.25 19V5C2.25 4.27065 2.53973 3.57118 3.05546 3.05546ZM5 3.75C4.66848 3.75 4.35054 3.8817 4.11612 4.11612C3.8817 4.35054 3.75 4.66848 3.75 5V19C3.75 19.3315 3.8817 19.6495 4.11612 19.8839C4.35054 20.1183 4.66848 20.25 5 20.25H11.25V3.75H5ZM12.75 3.75V20.25H19C19.3315 20.25 19.6495 20.1183 19.8839 19.8839C20.1183 19.6495 20.25 19.3315 20.25 19V5C20.25 4.66848 20.1183 4.35054 19.8839 4.11612C19.6495 3.8817 19.3315 3.75 19 3.75H12.75Z" fill="currentColor"></path></svg>
                <div className="absolute w-[250px] h-[40px] top-0 right-[-250px] hidden group-hover:block z-1"></div>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="clipboard" width="24.000em" height="24.000em" aria-hidden="true" focusable="false" role="img" alt=""><path fill-rule="evenodd" clip-rule="evenodd" d="M9 2.75C8.86193 2.75 8.75 2.86193 8.75 3V5C8.75 5.13807 8.86193 5.25 9 5.25H15C15.1381 5.25 15.25 5.13807 15.25 5V3C15.25 2.86193 15.1381 2.75 15 2.75H9ZM16.75 3.25V3C16.75 2.0335 15.9665 1.25 15 1.25H9C8.0335 1.25 7.25 2.0335 7.25 3V3.25H6C5.27065 3.25 4.57118 3.53973 4.05546 4.05546C3.53973 4.57118 3.25 5.27065 3.25 6V20C3.25 20.7293 3.53973 21.4288 4.05546 21.9445C4.57118 22.4603 5.27065 22.75 6 22.75H18C18.7293 22.75 19.4288 22.4603 19.9445 21.9445C20.4603 21.4288 20.75 20.7293 20.75 20V6C20.75 5.27065 20.4603 4.57118 19.9445 4.05546C19.4288 3.53973 18.7293 3.25 18 3.25H16.75ZM16.75 4.75V5C16.75 5.9665 15.9665 6.75 15 6.75H9C8.0335 6.75 7.25 5.9665 7.25 5V4.75H6C5.66848 4.75 5.35054 4.8817 5.11612 5.11612C4.8817 5.35054 4.75 5.66848 4.75 6V20C4.75 20.3315 4.8817 20.6495 5.11612 20.8839C5.35054 21.1183 5.66848 21.25 6 21.25H18C18.3315 21.25 18.6495 21.1183 18.8839 20.8839C19.1183 20.6495 19.25 20.3315 19.25 20V6C19.25 5.66848 19.1183 5.35054 18.8839 5.11612C18.6495 4.8817 18.3315 4.75 18 4.75H16.75Z" fill="currentColor"></path></svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="check_square" width="24.000em" height="24.000em" aria-hidden="true" focusable="false" role="img" alt=""><path fill-rule="evenodd" clip-rule="evenodd" d="M5 3.75C4.66848 3.75 4.35054 3.8817 4.11612 4.11612C3.8817 4.35054 3.75 4.66848 3.75 5V19C3.75 19.3315 3.8817 19.6495 4.11612 19.8839C4.35054 20.1183 4.66848 20.25 5 20.25H19C19.3315 20.25 19.6495 20.1183 19.8839 19.8839C20.1183 19.6495 20.25 19.3315 20.25 19V12C20.25 11.5858 20.5858 11.25 21 11.25C21.4142 11.25 21.75 11.5858 21.75 12V19C21.75 19.7293 21.4603 20.4288 20.9445 20.9445C20.4288 21.4603 19.7293 21.75 19 21.75H5C4.27065 21.75 3.57118 21.4603 3.05546 20.9445C2.53973 20.4288 2.25 19.7293 2.25 19V5C2.25 4.27065 2.53973 3.57118 3.05546 3.05546C3.57118 2.53973 4.27065 2.25 5 2.25H16C16.4142 2.25 16.75 2.58579 16.75 3C16.75 3.41421 16.4142 3.75 16 3.75H5ZM22.5303 3.46967C22.8232 3.76256 22.8232 4.23744 22.5303 4.53033L12.5303 14.5303C12.2374 14.8232 11.7626 14.8232 11.4697 14.5303L8.46967 11.5303C8.17678 11.2374 8.17678 10.7626 8.46967 10.4697C8.76256 10.1768 9.23744 10.1768 9.53033 10.4697L12 12.9393L21.4697 3.46967C21.7626 3.17678 22.2374 3.17678 22.5303 3.46967Z" fill="currentColor"></path></svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="calendar" width="24.000em" height="24.000em" aria-hidden="true" focusable="false" role="img" alt=""><path fill-rule="evenodd" clip-rule="evenodd" d="M8 1.25C8.41421 1.25 8.75 1.58579 8.75 2V3.25H15.25V2C15.25 1.58579 15.5858 1.25 16 1.25C16.4142 1.25 16.75 1.58579 16.75 2V3.25H19C20.5188 3.25 21.75 4.48122 21.75 6V20C21.75 21.5188 20.5188 22.75 19 22.75H5C3.48122 22.75 2.25 21.5188 2.25 20V6C2.25 4.48122 3.48122 3.25 5 3.25H7.25V2C7.25 1.58579 7.58579 1.25 8 1.25ZM7.25 4.75H5C4.30964 4.75 3.75 5.30964 3.75 6V9.25H20.25V6C20.25 5.30964 19.6904 4.75 19 4.75H16.75V6C16.75 6.41421 16.4142 6.75 16 6.75C15.5858 6.75 15.25 6.41421 15.25 6V4.75H8.75V6C8.75 6.41421 8.41421 6.75 8 6.75C7.58579 6.75 7.25 6.41421 7.25 6V4.75ZM20.25 10.75H3.75V20C3.75 20.6904 4.30964 21.25 5 21.25H19C19.6904 21.25 20.25 20.6904 20.25 20V10.75Z" fill="currentColor"></path></svg>
              </li>
              <li>
                <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" width="24px" height="24px" stroke="#121212" fill="none"><path d="M14.6663 1H9.33301V22.9986H14.6663V1Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.33328 7.41406H4V22.9964H9.33328V7.41406Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19.9998 2.83594H14.6665V23.0013H19.9998V2.83594Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><line x1="9.33301" y1="4.58203" x2="14.6663" y2="4.58203" stroke-width="2"></line><line x1="4" y1="10.9961" x2="9.33328" y2="10.9961" stroke-width="2"></line><line x1="4" y1="19.2461" x2="9.33328" y2="19.2461" stroke-width="2"></line><line x1="9.33301" y1="19.2461" x2="14.6663" y2="19.2461" stroke-width="2"></line><line x1="14.6665" y1="6.41406" x2="19.9998" y2="6.41406" stroke-width="2"></line><line x1="14.6665" y1="19.2461" x2="19.9998" y2="19.2461" stroke-width="2"></line></svg>
              </li>
              <li>
                <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" width="24" height="24" stroke="#121212" fill="none"><path d="M13.8,18.4L13.8,18.4c0,0,3.1-4,2.9-9.1S12,1.5,12,1.5S7.5,4.2,7.3,9.3c-0.2,5.1,2.9,9.1,2.9,9.1l0,0
		  C11.3,17.6,12.7,17.6,13.8,18.4z" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.7,13.1l-3.1,3.1c-0.5,0.5-0.7,1.4-0.5,2.1l1.4,4.2l4.3-4.3" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.2,18.2l4.3,4.3l1.4-4.2c0.3-0.7,0.1-1.6-0.5-2.1l-3.1-3.1" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13.7,8.7C13.7,7.7,12.9,7,12,7s-1.7,0.8-1.7,1.7s0.8,1.7,1.7,1.7S13.7,9.6,13.7,8.7z" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="award" width="24.000em" height="24.000em" aria-hidden="true" focusable="false" role="img" alt=""><path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.75C8.54822 1.75 5.75 4.54822 5.75 8C5.75 11.4518 8.54822 14.25 12 14.25C13.2178 14.25 14.3543 13.9017 15.3153 13.2992C15.3585 13.2639 15.4058 13.2331 15.4566 13.2079C17.1404 12.0882 18.25 10.1737 18.25 8C18.25 4.54822 15.4518 1.75 12 1.75ZM16.5946 14.2418C18.5085 12.8307 19.75 10.5603 19.75 8C19.75 3.71979 16.2802 0.25 12 0.25C7.71979 0.25 4.25 3.71979 4.25 8C4.25 10.5608 5.49204 12.8316 7.40657 14.2427L6.25653 22.9013C6.21861 23.1867 6.34752 23.4687 6.58822 23.6268C6.82893 23.785 7.13892 23.7913 7.38587 23.6431L12 20.8746L16.6141 23.6431C16.8611 23.7913 17.171 23.785 17.4117 23.6269C17.6524 23.4688 17.7814 23.1868 17.7435 22.9014L16.5946 14.2418ZM15.1906 15.0648C14.2176 15.505 13.1374 15.75 12 15.75C10.863 15.75 9.78324 15.5052 8.81048 15.0653L7.94833 21.5564L11.6141 19.3569C11.8516 19.2144 12.1484 19.2144 12.3859 19.3569L16.0519 21.5565L15.1906 15.0648Z" fill="currentColor"></path></svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="archive" width="24.000em" height="24.000em" aria-hidden="true" focusable="false" role="img" alt=""><path fill-rule="evenodd" clip-rule="evenodd" d="M0.25 3C0.25 2.58579 0.585786 2.25 1 2.25H23C23.4142 2.25 23.75 2.58579 23.75 3V8C23.75 8.41421 23.4142 8.75 23 8.75H21.75V21C21.75 21.4142 21.4142 21.75 21 21.75H3C2.58579 21.75 2.25 21.4142 2.25 21V8.75H1C0.585786 8.75 0.25 8.41421 0.25 8V3ZM3.75 8.75V20.25H20.25V8.75H3.75ZM1.75 7.25V3.75H22.25V7.25H1.75ZM9.25 12C9.25 11.5858 9.58579 11.25 10 11.25H14C14.4142 11.25 14.75 11.5858 14.75 12C14.75 12.4142 14.4142 12.75 14 12.75H10C9.58579 12.75 9.25 12.4142 9.25 12Z" fill="currentColor"></path></svg>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <AnimatePresence>
        {isvisible && (
          <motion.div className="w-[90%] h-screen absolute z-1 block lg:hidden bg-blue-500" initial='hidden' animate='visible' exit='exit' variants={variações} transition={{ duration: '0.5' }}>
            <div onClick={() => setisvisible(false)} className="w-[70px] h-[70px] absolute  bg-black right-0"></div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="w-full h-screen relative flex justify-center overflow-y-auto" onClick={() => isvisible && setisvisible(false) || isactive && setisactive(false)}>
        <div className="w-full h-[75px] relative flex justify-center">
          <div className="w-[100%] h-full relative flex items-center justify-center">
            <div onClick={() => setisvisible(true)} className="w-[30px] h-[30px] absolute block right-5 lg:hidden lg:hidden">
              <img className="w-full h-full object-cover" src="https://www.svgrepo.com/show/506800/burger-menu.svg" alt="" srcset="" />
            </div>
            <div className="w-[232px] h-[100%] absolute left-0">
              <img src={logoestacio} alt="" className="w-[80%] h-full" />
            </div>
            <div className="hidden lg:block lg:w-[38%] lg:h-full">
              <div className="w-full h-full flex flex-col justify-center" >
                <p className="text-[11px]">Cursando</p>
                <p className="text-[20px] font-gustavin">Análise e Desenvolvimento de Sistemas</p>
              </div>
            </div>
            <div className="hidden lg:block lg:w-[28%] lg:h-full absolute lg:right-0">
              <div className="w-full h-full">
                <div className="w-full h-full flex justify-center items-center">

                  <button className="w-[270px] h-[80%] absolute right-[4%] cursor-pointer group flex justify-center">
                    <div className="absolute left-0 w-[10%] h-[30px] top-[10px]">
                      <i>
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.4961 25.0001C5.61442 25.0073 -0.0456994 19.3969 0.000278146 12.418C0.0451535 5.60511 5.55742 -0.0469456 12.5981 0.000293989C19.4576 0.0462738 25.0239 5.59535 24.9999 12.5533C24.9761 19.4715 19.3722 25.0018 12.4961 25.0001ZM12.529 24.4853C15.7202 24.4702 18.7427 23.2371 21.0122 20.9252C23.2978 18.5969 24.4776 15.7829 24.4817 12.5243C24.486 9.1887 23.2814 6.30882 20.9001 3.96968C18.5864 1.69698 15.7821 0.551737 12.5258 0.526385C5.98397 0.475524 0.523981 5.83328 0.515951 12.4788C0.507763 19.1167 5.89044 24.4934 12.529 24.4852V24.4853Z" fill="#144BC8"></path><path d="M23.7936 13.4228C23.7418 15.7096 22.6292 18.398 20.401 20.5818C18.2322 22.7072 15.5885 23.7992 12.5541 23.8079C6.1642 23.8262 1.18823 18.6369 1.19973 12.4721C1.21106 6.32061 6.2541 1.1663 12.5595 1.19544C18.7395 1.22409 23.8553 6.28077 23.7937 13.4228H23.7936ZM15.1981 20.7402C15.3835 20.7542 15.5646 20.7029 15.7204 20.5846C16.0513 20.3334 16.2004 19.9903 16.0546 19.509C15.8491 18.8311 15.6176 18.161 15.3951 17.4885C15.121 16.6595 14.8447 15.8312 14.5693 15.0025C14.5326 14.8921 14.5009 14.7803 14.4882 14.6645C14.4235 14.0762 14.3547 13.4883 14.2972 12.8992C14.235 12.2618 14.158 11.6256 14.1443 10.9836C14.1402 10.7877 14.1421 10.5939 14.1589 10.3999C14.1728 10.2401 14.2156 10.2021 14.3734 10.1802C14.8388 10.1155 15.3044 10.0516 15.7699 9.98624C16.628 9.86547 17.4868 9.74816 18.344 9.62124C18.985 9.52629 19.2624 9.03279 19.1626 8.4941C19.0725 8.00832 18.5885 7.69733 18.0839 7.78504C17.9757 7.80378 17.8689 7.82834 17.7592 7.84047C17.5106 7.86818 17.2627 7.90267 17.015 7.93841C16.5016 8.01242 15.9887 8.09084 15.4751 8.16374C14.9736 8.23492 14.472 8.30609 13.9694 8.36861L12.4893 8.5415C12.4893 8.5415 11.8498 8.48576 11.7284 8.46655C11.228 8.38766 10.7248 8.33034 10.2241 8.2524C9.60306 8.15571 8.97874 8.08107 8.35632 7.994C7.8608 7.92471 7.36607 7.84881 6.87039 7.78031C6.29835 7.70127 5.77984 8.17067 5.80535 8.74006C5.82503 9.18049 6.18844 9.56266 6.6446 9.62344C7.23742 9.70249 7.83057 9.77918 8.42276 9.86263C9.154 9.96562 9.88444 10.0744 10.6154 10.1804C10.7709 10.2029 10.8142 10.2398 10.8435 10.3942C10.856 10.4597 10.8561 10.5276 10.8596 10.5947C10.8797 10.9861 10.8404 11.3762 10.8123 11.7653C10.7971 11.9775 10.7897 12.1914 10.7597 12.4037C10.7213 12.6753 10.7031 12.9499 10.675 13.2229C10.6451 13.5143 10.6069 13.8049 10.585 14.0969C10.547 14.6038 10.3604 15.0706 10.2079 15.5467C10.0235 16.1223 9.83342 16.6962 9.64652 17.2711C9.43128 17.933 9.21509 18.5947 9.00315 19.2578C8.94568 19.4376 8.86301 19.6143 8.85215 19.8036C8.82349 20.3016 9.23508 20.897 9.9712 20.7583C10.3475 20.6873 10.5598 20.4328 10.6755 20.0854C10.801 19.7089 10.9218 19.3309 11.0451 18.9536C11.2616 18.2919 11.479 17.6305 11.695 16.9687C11.8334 16.545 11.9696 16.1206 12.1076 15.6967C12.1586 15.54 12.2101 15.3834 12.2635 15.2275C12.2978 15.127 12.3612 15.0595 12.4754 15.0557C12.59 15.0517 12.6488 15.0941 12.7043 15.2264C12.7256 15.2769 12.7435 15.329 12.7607 15.3812C13.0188 16.1704 13.2756 16.9602 13.5345 17.7491C13.7914 18.5324 14.053 19.314 14.3073 20.0982C14.4047 20.3989 14.7179 20.7736 15.198 20.7403L15.1981 20.7402ZM10.744 5.92301C10.6827 6.85348 11.542 7.70016 12.4957 7.70095C13.4605 7.70158 14.2732 6.87599 14.2756 5.93781C14.2778 5.07065 13.5787 4.14869 12.5006 4.14901C11.4061 4.14932 10.6835 5.10278 10.744 5.92301Z" fill="#144BC8"></path></svg>
                      </i>
                    </div>
                    <div className="absolute right-[70px] z-1 w-[5%] h-[20px] top-[18px]">
                      <i>
                        <svg className="group-hover:rotate-[-180deg]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="chevron_down" width="24.000em" height="24.000em" aria-hidden="true" focusable="false" role="img" alt=""><path fill-rule="evenodd" clip-rule="evenodd" d="M5.46967 8.46967C5.76256 8.17678 6.23744 8.17678 6.53033 8.46967L12 13.9393L17.4697 8.46967C17.7626 8.17678 18.2374 8.17678 18.5303 8.46967C18.8232 8.76256 18.8232 9.23744 18.5303 9.53033L12.5303 15.5303C12.2374 15.8232 11.7626 15.8232 11.4697 15.5303L5.46967 9.53033C5.17678 9.23744 5.17678 8.76256 5.46967 8.46967Z" fill="currentColor"></path></svg>
                      </i>
                    </div>
                    <div className="w-[10%] rounded-[50%] bg-black h-[26px] absolute left-[13%] text-white text-[11px] top-[12px] flex justify-center items-center">
                      <p>R</p>
                    </div>
                    <div className="w-[50%] h-[50px] relative top-[8px] flex flex-col text-[13px] text-justify text-gray-500 font-gustavin ">
                      <p>Olá</p>
                      <p>RODRIGO SOUZA</p>
                    </div>
                    <div className="absolute w-full h-[130px] top-[60px] z-1 hidden group-hover:block "></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:absolute lg:w-[95%] lg:h-[315px] z-0 lg:top-[96px]">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 8500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="w-full h-full"
          >
            <SwiperSlide>
              <img src="https://estudante.estacio.br/aura-repo/marcas/estacio/banners-comunicacao/RITM0264318.png" alt="" className="w-full h-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://estudante.estacio.br/aura-repo/marcas/estacio/banners-comunicacao/RITM0253567.png" alt="" className="w-full h-full object-cover" />
            </SwiperSlide>
          </Swiper>

        </div>
        <section className="w-[95%] h-auto absolute top-[170px] lg:top-[440px]">
          <article className="relative w-full h-auto">
            <div className="relative w-full h-auto flex flex-col md:flex-row">
              <div className="relative w-full md:w-[320px] h-[70px] flex justify-start md:items-center md:justify-start">
                <div className="relative w-[80%] :h-[80%] font-gustavin text-[22px]">
                  <p>Minhas Disciplinas</p>
                </div>
              </div>
              <div style={{ marginLeft: 'auto' }} className="relative w-full md:w-[220px] h-[70px]  flex md:items-center md:justify-center">
                <div onClick={() => setisvisible2((prev) => !prev)} className="w-[80%] h-[80%] flex justify-start  md:items-center md:justify-center font-gustavin text-[12px] flex flex-col">
                  <div className="w-[90%] h-[80%] ">
                    <span>Periodo</span> <br />
                    <span>2025.1 - Em andamento</span>
                  </div>
                  {isvisible2 && (
                    <div className="w-[66%] h-[200px] absolute z-1 top-[50px]"></div>
                  )}
                </div>
              </div>
            </div>
            <div className="relative w-[100%] h-[120px] flex items-center justify-center gap-[10px]">
              <button onClick={() => setisactive((prev) => !prev)} className="relative lg:hidden  w-[95%] lg:w-[18%] h-[70%] ">
                <div className="absolute block lg:hidden w-full h-[80%] top-0 text-start flex items-center text-[19px]">
                  <p>Progresso no periodo</p>
                </div>
                {isactive && (
                  <div className="absolute w-full h-[400px] z-1 top-[60px]" ></div>
                )}
              </button>
              <div className="relative hidden lg:block lg:w-[230px] lg:h-[70%] lg:flex lg:items-center lg:justify-center">
                <div className="relative w-full h-[80%] ">
                  <div>
                    <p>Progresso no período
                      <div className="absolute right-0 top-0">
                        <i>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="info" width="24.000em" height="24.000em" aria-hidden="true" focusable="false" role="img" alt=""><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM11.25 8C11.25 7.58579 11.5858 7.25 12 7.25H12.01C12.4242 7.25 12.76 7.58579 12.76 8C12.76 8.41421 12.4242 8.75 12.01 8.75H12C11.5858 8.75 11.25 8.41421 11.25 8ZM12 11.25C12.4142 11.25 12.75 11.5858 12.75 12V16C12.75 16.4142 12.4142 16.75 12 16.75C11.5858 16.75 11.25 16.4142 11.25 16V12C11.25 11.5858 11.5858 11.25 12 11.25Z" fill="currentColor"></path></svg>
                        </i>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative hidden lg:block lg:w-[20%] lg:h-[70%] lg:flex lg:items-center lg:justify-center">
                <div className="relative w-full h-[80%]">
                  <div className="absolute w-full h-full flex items-center">
                    <div className="absolute h-full left-[35px] top-2">
                      <p>4/42</p>
                      <p>Conteudos</p>
                    </div>
                    <i className="absolute w-[30px] h-[25px]">
                      <svg style={{ height: '100%' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25" class="summary" width="24.000em" height="25.000em" aria-hidden="true" focusable="false" role="img" alt=""><path fill-rule="evenodd" clip-rule="evenodd" d="M5 4.5C4.30964 4.5 3.75 5.05964 3.75 5.75V19.75C3.75 20.4404 4.30964 21 5 21H19C19.6904 21 20.25 20.4404 20.25 19.75V5.75C20.25 5.05964 19.6904 4.5 19 4.5H5ZM2.25 5.75C2.25 4.23122 3.48122 3 5 3H19C20.5188 3 21.75 4.23122 21.75 5.75V19.75C21.75 21.2688 20.5188 22.5 19 22.5H5C3.48122 22.5 2.25 21.2688 2.25 19.75V5.75ZM7 7.75L17 7.75V9.25L7 9.25V7.75ZM7 11.8437L17 11.8438V13.3438L7 13.3437V11.8437ZM12 15.9375L17 15.9375V17.4375L12 17.4375V15.9375Z" fill="currentColor"></path></svg>
                    </i>
                  </div>

                </div>
              </div>
              <div className="relative hidden lg:block lg:w-[20%] lg:h-[70%] lg:flex lg:items-center lg:justify-center">
                <div className="relative w-full h-[80%] ">
                  <div className="absolute w-full h-full flex items-center">
                    <div className="absolute h-full left-[35px] top-2">
                      <p>0/27</p>
                      <p>Lista de Exercicios </p>
                    </div>
                    <i className="absolute w-[30px] h-[25px]">
                      <svg style={{ height: '100%' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="list-check" width="24.000em" height="24.000em" aria-hidden="true" focusable="false" role="img" alt=""><path d="M9.53033 3.53033C9.82322 3.23744 9.82322 2.76256 9.53033 2.46967C9.23744 2.17678 8.76256 2.17678 8.46967 2.46967L5 5.93934L3.53033 4.46967C3.23744 4.17678 2.76256 4.17678 2.46967 4.46967C2.17678 4.76256 2.17678 5.23744 2.46967 5.53033L4.46967 7.53033C4.76256 7.82322 5.23744 7.82322 5.53033 7.53033L9.53033 3.53033Z" fill="currentColor"></path><path d="M12 5.75001L21 5.75C21.4142 5.75 21.75 5.41421 21.75 5C21.75 4.58579 21.4142 4.25 21 4.25L12 4.25001C11.5858 4.25001 11.25 4.58579 11.25 5.00001C11.25 5.41422 11.5858 5.75001 12 5.75001Z" fill="currentColor"></path><path d="M9.53033 10.4697C9.82322 10.7626 9.82322 11.2374 9.53033 11.5303L5.53033 15.5303C5.23744 15.8232 4.76256 15.8232 4.46967 15.5303L2.46967 13.5303C2.17678 13.2374 2.17678 12.7626 2.46967 12.4697C2.76256 12.1768 3.23744 12.1768 3.53033 12.4697L5 13.9393L8.46967 10.4697C8.76256 10.1768 9.23744 10.1768 9.53033 10.4697Z" fill="currentColor"></path><path d="M12 13.75L21 13.75C21.4142 13.75 21.75 13.4142 21.75 13C21.75 12.5858 21.4142 12.25 21 12.25L12 12.25C11.5858 12.25 11.25 12.5858 11.25 13C11.25 13.4142 11.5858 13.75 12 13.75Z" fill="currentColor"></path><path d="M21 21.25L12 21.25C11.5858 21.25 11.25 20.9142 11.25 20.5C11.25 20.0858 11.5858 19.75 12 19.75L21 19.75C21.4142 19.75 21.75 20.0858 21.75 20.5C21.75 20.9142 21.4142 21.25 21 21.25Z" fill="currentColor"></path><path d="M5.5 22C6.32843 22 7 21.3284 7 20.5C7 19.6716 6.32843 19 5.5 19C4.67157 19 4 19.6716 4 20.5C4 21.3284 4.67157 22 5.5 22Z" fill="currentColor"></path></svg>
                    </i>
                  </div>
                </div>
              </div>
              <div className="relative hidden lg:block lg:w-[20%] lg:h-[70%] lg:flex lg:items-center lg:justify-center">
                <div className="relative w-full h-[80%] ">
                  <div className="absolute w-full h-full flex items-center">
                    <div className="absolute h-full left-[35px] top-2">
                      <p>0/10</p>
                      <p>Simulados</p>
                    </div>
                    <i className="absolute w-[30px] h-[25px]">
                      <svg style={{ height: '100%' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="rule" width="24.000em" height="24.000em" aria-hidden="true" focusable="false" role="img" alt=""><g clip-path="url(#clip0_4814_170)"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.44444 0.25C2.59723 0.25 1.78471 0.586556 1.18563 1.18563C0.586556 1.78471 0.25 2.59723 0.25 3.44444V20.5556C0.25 21.4028 0.586557 22.2153 1.18563 22.8144C1.78471 23.4134 2.59722 23.75 3.44444 23.75H20.5556C21.4028 23.75 22.2153 23.4134 22.8144 22.8144C23.4134 22.2153 23.75 21.4028 23.75 20.5556V3.44444C23.75 2.59722 23.4134 1.78471 22.8144 1.18563C22.2153 0.586557 21.4028 0.25 20.5556 0.25H3.44444ZM2.24629 2.24629C2.56406 1.92852 2.99505 1.75 3.44444 1.75H20.5556C21.0049 1.75 21.4359 1.92852 21.7537 2.24629C22.0715 2.56406 22.25 2.99505 22.25 3.44444V20.5556C22.25 21.0049 22.0715 21.4359 21.7537 21.7537C21.4359 22.0715 21.0049 22.25 20.5556 22.25H3.44444C2.99505 22.25 2.56406 22.0715 2.24629 21.7537C1.92852 21.4359 1.75 21.0049 1.75 20.5556V3.44444C1.75 2.99505 1.92852 2.56406 2.24629 2.24629ZM14 6.75C13.5858 6.75 13.25 7.08579 13.25 7.5C13.25 7.91421 13.5858 8.25 14 8.25L19 8.25C19.4142 8.25 19.75 7.91421 19.75 7.5C19.75 7.08579 19.4142 6.75 19 6.75L14 6.75ZM11.5303 4.96967C11.8232 5.26256 11.8232 5.73744 11.5303 6.03033L7.53033 10.0303C7.23744 10.3232 6.76256 10.3232 6.46967 10.0303L4.46967 8.03033C4.17678 7.73744 4.17678 7.26256 4.46967 6.96967C4.76256 6.67678 5.23744 6.67678 5.53033 6.96967L7 8.43934L10.4697 4.96967C10.7626 4.67678 11.2374 4.67678 11.5303 4.96967ZM14 15.75C13.5858 15.75 13.25 16.0858 13.25 16.5C13.25 16.9142 13.5858 17.25 14 17.25H19C19.4142 17.25 19.75 16.9142 19.75 16.5C19.75 16.0858 19.4142 15.75 19 15.75L14 15.75ZM10.5303 13.9697C10.8232 14.2626 10.8232 14.7374 10.5303 15.0303L9.06066 16.5L10.5303 17.9697C10.8232 18.2626 10.8232 18.7374 10.5303 19.0303C10.2374 19.3232 9.76256 19.3232 9.46967 19.0303L8 17.5607L6.53033 19.0303C6.23744 19.3232 5.76256 19.3232 5.46967 19.0303C5.17678 18.7374 5.17678 18.2626 5.46967 17.9697L6.93934 16.5L5.46967 15.0303C5.17678 14.7374 5.17678 14.2626 5.46967 13.9697C5.76256 13.6768 6.23744 13.6768 6.53033 13.9697L8 15.4393L9.46967 13.9697C9.76256 13.6768 10.2374 13.6768 10.5303 13.9697Z" fill="currentColor"></path></g><defs><clipPath id="clip0_4814_170"><rect width="24" height="24" fill="currentColor"></rect></clipPath></defs></svg>
                    </i>
                  </div>
                </div>
              </div>
              <div className="relative hidden lg:block lg:w-[20%] lg:h-[70%] lg:flex lg:items-center lg:justify-center">
               <div className="relative w-full h-[80%] ">
                  <div className="absolute w-full h-full flex items-center">
                    <div className="absolute h-full left-[35px] top-2">
                      <p>0/10</p>
                      <p>Labolatorios e Pratica</p>
                    </div>
                    <i className="absolute w-[30px] h-[25px]">
                     <svg style={{height: '100%'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="flask" width="24.000em" height="24.000em" aria-hidden="true" focusable="false" role="img" alt=""><path fill-rule="evenodd" clip-rule="evenodd" d="M8.75002 8.99947V2.75H7.00002C6.5858 2.75 6.25002 2.41421 6.25002 2C6.25002 1.58579 6.5858 1.25 7.00002 1.25H17C17.4142 1.25 17.75 1.58579 17.75 2C17.75 2.41421 17.4142 2.75 17 2.75H15.25V8.99947C15.25 9.22686 15.312 9.44994 15.4294 9.6447L20.8148 18.5805C21.9195 20.4133 20.5995 22.75 18.4595 22.75H5.54052C3.40054 22.75 2.08059 20.4133 3.1852 18.5805L8.57062 9.6447C8.68799 9.44994 8.75002 9.22686 8.75002 8.99947ZM13.75 2.75H10.25V8.99947C10.25 9.49973 10.1136 9.99051 9.85534 10.419L6.94378 15.25H17.0563L14.1447 10.419C13.8865 9.99051 13.75 9.49973 13.75 8.99947V2.75ZM4.46992 19.3548L6.03976 16.75H17.9603L19.5301 19.3548C20.0322 20.1879 19.4322 21.25 18.4595 21.25H5.54052C4.5678 21.25 3.96782 20.1879 4.46992 19.3548Z" fill="currentColor"></path></svg>
                    </i>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ marginTop: '30px' }} className="relative w-full flex h-auto items-center justify-center xl:justify-start flex-wrap gap-[10px] mt-[50px]">
              <div className="relative w-full md:w-[45%] h-[250px] xl:w-[25%] xl:h-[200px] flex items-center justify-center">
                <div className="relative w-full lg:w-[100%] h-[90%] flex flex-col items-center justify-center gap-[30px] bg-[#001F66] text-[white] rounded-[10px]">
                  <div className="relative w-[90%] h-auto ">
                    <div style={{margin: '5px'}} className="relative w-full left-[-6px]">
                      <i className="absolute">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="navigation" width="24.000em" height="24.000em" aria-hidden="true" focusable="false" role="img" alt=""><path fill-rule="evenodd" clip-rule="evenodd" d="M22.5303 1.46966C22.7545 1.69379 22.8135 2.03461 22.6778 2.32106L13.6778 21.3211C13.5422 21.6073 13.2414 21.7776 12.9261 21.7463C12.6109 21.7151 12.3492 21.4892 12.2724 21.1819L10.3816 13.6185L2.81812 11.7276C2.51079 11.6508 2.28488 11.3891 2.25367 11.0739C2.22245 10.7587 2.39267 10.4578 2.67895 10.3222L21.679 1.32219C21.9654 1.1865 22.3062 1.24554 22.5303 1.46966ZM5.21503 10.7807L11.1819 12.2724C11.4506 12.3396 11.6604 12.5494 11.7276 12.8181L13.2193 18.785L20.4232 3.57677L5.21503 10.7807Z" fill="currentColor"></path></svg>
                      </i>
                      <p className="relative left-[25px] text-[12px]">Continue onde parou</p>
                    </div>
                    <div className="relative w-full h-[65px] font-gustavin">
                      <p className="relative line-clamp-2 w-[85%]">3. Projeto de Banco de Dados: Modelagem Conceitual</p>
                      <button className="absolute right-0 top-0 rounded-[50%] w-[40px] h-[40px] bg-white">
                        <i>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="arrow_right" width="24.000em" height="24.000em" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.4697 4.46967C11.7626 4.17678 12.2374 4.17678 12.5303 4.46967L19.5303 11.4697C19.8232 11.7626 19.8232 12.2374 19.5303 12.5303L12.5303 19.5303C12.2374 19.8232 11.7626 19.8232 11.4697 19.5303C11.1768 19.2374 11.1768 18.7626 11.4697 18.4697L17.1893 12.75H5C4.58579 12.75 4.25 12.4142 4.25 12C4.25 11.5858 4.58579 11.25 5 11.25H17.1893L11.4697 5.53033C11.1768 5.23744 11.1768 4.76256 11.4697 4.46967Z" fill="black"></path></svg>
                        </i>
                      </button>
                    </div>
                  </div>
                  <div className="relative w-[90%] h-auto top-[-20px]">
                    <div className="relative w-full h-auto">
                      <div className="w-full h-auto">
                        <i className="absolute left-0">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="columns" width="24.000em" height="24.000em" aria-hidden="true" focusable="false" role="img" alt=""><path fill-rule="evenodd" clip-rule="evenodd" d="M3.05546 3.05546C3.57118 2.53973 4.27065 2.25 5 2.25H19C19.7293 2.25 20.4288 2.53973 20.9445 3.05546C21.4603 3.57118 21.75 4.27065 21.75 5V19C21.75 19.7293 21.4603 20.4288 20.9445 20.9445C20.4288 21.4603 19.7293 21.75 19 21.75H5C4.27065 21.75 3.57118 21.4603 3.05546 20.9445C2.53973 20.4288 2.25 19.7293 2.25 19V5C2.25 4.27065 2.53973 3.57118 3.05546 3.05546ZM5 3.75C4.66848 3.75 4.35054 3.8817 4.11612 4.11612C3.8817 4.35054 3.75 4.66848 3.75 5V19C3.75 19.3315 3.8817 19.6495 4.11612 19.8839C4.35054 20.1183 4.66848 20.25 5 20.25H11.25V3.75H5ZM12.75 3.75V20.25H19C19.3315 20.25 19.6495 20.1183 19.8839 19.8839C20.1183 19.6495 20.25 19.3315 20.25 19V5C20.25 4.66848 20.1183 4.35054 19.8839 4.11612C19.6495 3.8817 19.3315 3.75 19 3.75H12.75Z" fill="currentColor"></path></svg>
                        </i>
                        <p className="relative left-[25px]">Banco de Dados</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative w-full md:w-[45%] h-[250px] xl:w-[25%] xl:h-[200px] flex items-center justify-center">
              <div className="relative w-full lg:w-[100%] h-[90%] flex flex-col items-center justify-center gap-[50px]">
                  <div className="relative w-[90%] h-auto ">
                    <div className="relative w-full h-[60px] font-gustavin text-[20px]">
                      <p className="relative line-clamp-2 w-[72%]">Desenvolvimento Rápido de Aplicações em Python</p>
                      <button className="absolute right-0 top-0 rounded-[50%] w-[40px] h-[40px]">
                        <i>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="info" width="24.000em" height="24.000em" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM11.25 8C11.25 7.58579 11.5858 7.25 12 7.25H12.01C12.4242 7.25 12.76 7.58579 12.76 8C12.76 8.41421 12.4242 8.75 12.01 8.75H12C11.5858 8.75 11.25 8.41421 11.25 8ZM12 11.25C12.4142 11.25 12.75 11.5858 12.75 12V16C12.75 16.4142 12.4142 16.75 12 16.75C11.5858 16.75 11.25 16.4142 11.25 16V12C11.25 11.5858 11.5858 11.25 12 11.25Z" fill="currentColor"></path></svg>
                        </i>
                      </button>
                    </div>
                  </div>
                  <div className="relative w-[90%] h-auto left-[8px]">
                    <div className="relative w-full h-auto">
                      <div className="w-full relative h-auto flex items-center justify-start gap-[10px]">
                        <div className="relative w-[60px] h-[40px]">
                          <i className="absolute left-0">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25" class="summary" width="24.000em" height="25.000em" aria-hidden="true" focusable="false" role="img" alt=""><path fill-rule="evenodd" clip-rule="evenodd" d="M5 4.5C4.30964 4.5 3.75 5.05964 3.75 5.75V19.75C3.75 20.4404 4.30964 21 5 21H19C19.6904 21 20.25 20.4404 20.25 19.75V5.75C20.25 5.05964 19.6904 4.5 19 4.5H5ZM2.25 5.75C2.25 4.23122 3.48122 3 5 3H19C20.5188 3 21.75 4.23122 21.75 5.75V19.75C21.75 21.2688 20.5188 22.5 19 22.5H5C3.48122 22.5 2.25 21.2688 2.25 19.75V5.75ZM7 7.75L17 7.75V9.25L7 9.25V7.75ZM7 11.8437L17 11.8438V13.3438L7 13.3437V11.8437ZM12 15.9375L17 15.9375V17.4375L12 17.4375V15.9375Z" fill="currentColor"></path></svg>
                          </i>
                          <p className="absolute left-[25px] top-0 text-[14px]">2/10</p>
                        </div>
                        <div className="relative w-[60px] h-[40px]">
                          <i className="absolute left-0">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="list-check" width="24.000em" height="24.000em" aria-hidden="true" focusable="false" role="img" alt=""><path d="M9.53033 3.53033C9.82322 3.23744 9.82322 2.76256 9.53033 2.46967C9.23744 2.17678 8.76256 2.17678 8.46967 2.46967L5 5.93934L3.53033 4.46967C3.23744 4.17678 2.76256 4.17678 2.46967 4.46967C2.17678 4.76256 2.17678 5.23744 2.46967 5.53033L4.46967 7.53033C4.76256 7.82322 5.23744 7.82322 5.53033 7.53033L9.53033 3.53033Z" fill="currentColor"></path><path d="M12 5.75001L21 5.75C21.4142 5.75 21.75 5.41421 21.75 5C21.75 4.58579 21.4142 4.25 21 4.25L12 4.25001C11.5858 4.25001 11.25 4.58579 11.25 5.00001C11.25 5.41422 11.5858 5.75001 12 5.75001Z" fill="currentColor"></path><path d="M9.53033 10.4697C9.82322 10.7626 9.82322 11.2374 9.53033 11.5303L5.53033 15.5303C5.23744 15.8232 4.76256 15.8232 4.46967 15.5303L2.46967 13.5303C2.17678 13.2374 2.17678 12.7626 2.46967 12.4697C2.76256 12.1768 3.23744 12.1768 3.53033 12.4697L5 13.9393L8.46967 10.4697C8.76256 10.1768 9.23744 10.1768 9.53033 10.4697Z" fill="currentColor"></path><path d="M12 13.75L21 13.75C21.4142 13.75 21.75 13.4142 21.75 13C21.75 12.5858 21.4142 12.25 21 12.25L12 12.25C11.5858 12.25 11.25 12.5858 11.25 13C11.25 13.4142 11.5858 13.75 12 13.75Z" fill="currentColor"></path><path d="M21 21.25L12 21.25C11.5858 21.25 11.25 20.9142 11.25 20.5C11.25 20.0858 11.5858 19.75 12 19.75L21 19.75C21.4142 19.75 21.75 20.0858 21.75 20.5C21.75 20.9142 21.4142 21.25 21 21.25Z" fill="currentColor"></path><path d="M5.5 22C6.32843 22 7 21.3284 7 20.5C7 19.6716 6.32843 19 5.5 19C4.67157 19 4 19.6716 4 20.5C4 21.3284 4.67157 22 5.5 22Z" fill="currentColor"></path></svg>
                          </i>
                          <p className="absolute left-[25px] top-0 text-[14px]">0/6</p>
                        </div>
                        <div className="relative w-[60px] h-[40px]">
                          <i className="absolute left-0">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="rule" width="24.000em" height="24.000em" aria-hidden="true" focusable="false" role="img" alt=""><g clip-path="url(#clip0_4814_170)"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.44444 0.25C2.59723 0.25 1.78471 0.586556 1.18563 1.18563C0.586556 1.78471 0.25 2.59723 0.25 3.44444V20.5556C0.25 21.4028 0.586557 22.2153 1.18563 22.8144C1.78471 23.4134 2.59722 23.75 3.44444 23.75H20.5556C21.4028 23.75 22.2153 23.4134 22.8144 22.8144C23.4134 22.2153 23.75 21.4028 23.75 20.5556V3.44444C23.75 2.59722 23.4134 1.78471 22.8144 1.18563C22.2153 0.586557 21.4028 0.25 20.5556 0.25H3.44444ZM2.24629 2.24629C2.56406 1.92852 2.99505 1.75 3.44444 1.75H20.5556C21.0049 1.75 21.4359 1.92852 21.7537 2.24629C22.0715 2.56406 22.25 2.99505 22.25 3.44444V20.5556C22.25 21.0049 22.0715 21.4359 21.7537 21.7537C21.4359 22.0715 21.0049 22.25 20.5556 22.25H3.44444C2.99505 22.25 2.56406 22.0715 2.24629 21.7537C1.92852 21.4359 1.75 21.0049 1.75 20.5556V3.44444C1.75 2.99505 1.92852 2.56406 2.24629 2.24629ZM14 6.75C13.5858 6.75 13.25 7.08579 13.25 7.5C13.25 7.91421 13.5858 8.25 14 8.25L19 8.25C19.4142 8.25 19.75 7.91421 19.75 7.5C19.75 7.08579 19.4142 6.75 19 6.75L14 6.75ZM11.5303 4.96967C11.8232 5.26256 11.8232 5.73744 11.5303 6.03033L7.53033 10.0303C7.23744 10.3232 6.76256 10.3232 6.46967 10.0303L4.46967 8.03033C4.17678 7.73744 4.17678 7.26256 4.46967 6.96967C4.76256 6.67678 5.23744 6.67678 5.53033 6.96967L7 8.43934L10.4697 4.96967C10.7626 4.67678 11.2374 4.67678 11.5303 4.96967ZM14 15.75C13.5858 15.75 13.25 16.0858 13.25 16.5C13.25 16.9142 13.5858 17.25 14 17.25H19C19.4142 17.25 19.75 16.9142 19.75 16.5C19.75 16.0858 19.4142 15.75 19 15.75L14 15.75ZM10.5303 13.9697C10.8232 14.2626 10.8232 14.7374 10.5303 15.0303L9.06066 16.5L10.5303 17.9697C10.8232 18.2626 10.8232 18.7374 10.5303 19.0303C10.2374 19.3232 9.76256 19.3232 9.46967 19.0303L8 17.5607L6.53033 19.0303C6.23744 19.3232 5.76256 19.3232 5.46967 19.0303C5.17678 18.7374 5.17678 18.2626 5.46967 17.9697L6.93934 16.5L5.46967 15.0303C5.17678 14.7374 5.17678 14.2626 5.46967 13.9697C5.76256 13.6768 6.23744 13.6768 6.53033 13.9697L8 15.4393L9.46967 13.9697C9.76256 13.6768 10.2374 13.6768 10.5303 13.9697Z" fill="currentColor"></path></g><defs><clipPath id="clip0_4814_170"><rect width="24" height="24" fill="currentColor"></rect></clipPath></defs></svg>
                          </i>
                          <p className="absolute left-[25px] top-0 text-[14px]">0/2</p>
                        </div>
                        <div className="absolute right-0 top-0">
                          <button className="absolute right-0 top-0 rounded-[50%] w-[40px] h-[40px] bg-[#144bc8]">
                            <i>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="arrow_right" width="24.000em" height="24.000em" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.4697 4.46967C11.7626 4.17678 12.2374 4.17678 12.5303 4.46967L19.5303 11.4697C19.8232 11.7626 19.8232 12.2374 19.5303 12.5303L12.5303 19.5303C12.2374 19.8232 11.7626 19.8232 11.4697 19.5303C11.1768 19.2374 11.1768 18.7626 11.4697 18.4697L17.1893 12.75H5C4.58579 12.75 4.25 12.4142 4.25 12C4.25 11.5858 4.58579 11.25 5 11.25H17.1893L11.4697 5.53033C11.1768 5.23744 11.1768 4.76256 11.4697 4.46967Z" fill="white"></path></svg>
                            </i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative w-full md:w-[45%] h-[250px] xl:w-[23%] xl:h-[200px] flex items-center justify-center">
                <div className="relative w-full lg:w-[100%] h-[90%] flex flex-col items-center justify-center gap-[50px]">
                  <div className="relative w-[90%] h-auto ">
                    <div className="relative w-full h-[60px] font-gustavin text-[20px]">
                      <p className="relative line-clamp-2 w-[70%]">Matemática e Lógica</p>
                      <button className="absolute right-0 top-0 rounded-[50%] w-[40px] h-[40px]">
                        <i>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="info" width="24.000em" height="24.000em" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM11.25 8C11.25 7.58579 11.5858 7.25 12 7.25H12.01C12.4242 7.25 12.76 7.58579 12.76 8C12.76 8.41421 12.4242 8.75 12.01 8.75H12C11.5858 8.75 11.25 8.41421 11.25 8ZM12 11.25C12.4142 11.25 12.75 11.5858 12.75 12V16C12.75 16.4142 12.4142 16.75 12 16.75C11.5858 16.75 11.25 16.4142 11.25 16V12C11.25 11.5858 11.5858 11.25 12 11.25Z" fill="currentColor"></path></svg>
                        </i>
                      </button>
                    </div>
                  </div>
                  <div className="relative w-[90%] h-auto">
                    <div className="relative w-full h-auto">
                      <div className="w-full relative h-auto flex items-center justify-start gap-[10px]">
                        <div className="relative w-[60px] h-[40px]">
                          <i className="absolute left-0">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25" class="summary" width="24.000em" height="25.000em" aria-hidden="true" focusable="false" role="img" alt=""><path fill-rule="evenodd" clip-rule="evenodd" d="M5 4.5C4.30964 4.5 3.75 5.05964 3.75 5.75V19.75C3.75 20.4404 4.30964 21 5 21H19C19.6904 21 20.25 20.4404 20.25 19.75V5.75C20.25 5.05964 19.6904 4.5 19 4.5H5ZM2.25 5.75C2.25 4.23122 3.48122 3 5 3H19C20.5188 3 21.75 4.23122 21.75 5.75V19.75C21.75 21.2688 20.5188 22.5 19 22.5H5C3.48122 22.5 2.25 21.2688 2.25 19.75V5.75ZM7 7.75L17 7.75V9.25L7 9.25V7.75ZM7 11.8437L17 11.8438V13.3438L7 13.3437V11.8437ZM12 15.9375L17 15.9375V17.4375L12 17.4375V15.9375Z" fill="currentColor"></path></svg>
                          </i>
                          <p className="absolute left-[25px] top-0 text-[14px]">2/10</p>
                        </div>
                        <div className="relative w-[60px] h-[40px]">
                          <i className="absolute left-0">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="list-check" width="24.000em" height="24.000em" aria-hidden="true" focusable="false" role="img" alt=""><path d="M9.53033 3.53033C9.82322 3.23744 9.82322 2.76256 9.53033 2.46967C9.23744 2.17678 8.76256 2.17678 8.46967 2.46967L5 5.93934L3.53033 4.46967C3.23744 4.17678 2.76256 4.17678 2.46967 4.46967C2.17678 4.76256 2.17678 5.23744 2.46967 5.53033L4.46967 7.53033C4.76256 7.82322 5.23744 7.82322 5.53033 7.53033L9.53033 3.53033Z" fill="currentColor"></path><path d="M12 5.75001L21 5.75C21.4142 5.75 21.75 5.41421 21.75 5C21.75 4.58579 21.4142 4.25 21 4.25L12 4.25001C11.5858 4.25001 11.25 4.58579 11.25 5.00001C11.25 5.41422 11.5858 5.75001 12 5.75001Z" fill="currentColor"></path><path d="M9.53033 10.4697C9.82322 10.7626 9.82322 11.2374 9.53033 11.5303L5.53033 15.5303C5.23744 15.8232 4.76256 15.8232 4.46967 15.5303L2.46967 13.5303C2.17678 13.2374 2.17678 12.7626 2.46967 12.4697C2.76256 12.1768 3.23744 12.1768 3.53033 12.4697L5 13.9393L8.46967 10.4697C8.76256 10.1768 9.23744 10.1768 9.53033 10.4697Z" fill="currentColor"></path><path d="M12 13.75L21 13.75C21.4142 13.75 21.75 13.4142 21.75 13C21.75 12.5858 21.4142 12.25 21 12.25L12 12.25C11.5858 12.25 11.25 12.5858 11.25 13C11.25 13.4142 11.5858 13.75 12 13.75Z" fill="currentColor"></path><path d="M21 21.25L12 21.25C11.5858 21.25 11.25 20.9142 11.25 20.5C11.25 20.0858 11.5858 19.75 12 19.75L21 19.75C21.4142 19.75 21.75 20.0858 21.75 20.5C21.75 20.9142 21.4142 21.25 21 21.25Z" fill="currentColor"></path><path d="M5.5 22C6.32843 22 7 21.3284 7 20.5C7 19.6716 6.32843 19 5.5 19C4.67157 19 4 19.6716 4 20.5C4 21.3284 4.67157 22 5.5 22Z" fill="currentColor"></path></svg>
                          </i>
                          <p className="absolute left-[25px] top-0 text-[14px]">0/6</p>
                        </div>
                        <div className="relative w-[60px] h-[40px]">
                          <i className="absolute left-0">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="rule" width="24.000em" height="24.000em" aria-hidden="true" focusable="false" role="img" alt=""><g clip-path="url(#clip0_4814_170)"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.44444 0.25C2.59723 0.25 1.78471 0.586556 1.18563 1.18563C0.586556 1.78471 0.25 2.59723 0.25 3.44444V20.5556C0.25 21.4028 0.586557 22.2153 1.18563 22.8144C1.78471 23.4134 2.59722 23.75 3.44444 23.75H20.5556C21.4028 23.75 22.2153 23.4134 22.8144 22.8144C23.4134 22.2153 23.75 21.4028 23.75 20.5556V3.44444C23.75 2.59722 23.4134 1.78471 22.8144 1.18563C22.2153 0.586557 21.4028 0.25 20.5556 0.25H3.44444ZM2.24629 2.24629C2.56406 1.92852 2.99505 1.75 3.44444 1.75H20.5556C21.0049 1.75 21.4359 1.92852 21.7537 2.24629C22.0715 2.56406 22.25 2.99505 22.25 3.44444V20.5556C22.25 21.0049 22.0715 21.4359 21.7537 21.7537C21.4359 22.0715 21.0049 22.25 20.5556 22.25H3.44444C2.99505 22.25 2.56406 22.0715 2.24629 21.7537C1.92852 21.4359 1.75 21.0049 1.75 20.5556V3.44444C1.75 2.99505 1.92852 2.56406 2.24629 2.24629ZM14 6.75C13.5858 6.75 13.25 7.08579 13.25 7.5C13.25 7.91421 13.5858 8.25 14 8.25L19 8.25C19.4142 8.25 19.75 7.91421 19.75 7.5C19.75 7.08579 19.4142 6.75 19 6.75L14 6.75ZM11.5303 4.96967C11.8232 5.26256 11.8232 5.73744 11.5303 6.03033L7.53033 10.0303C7.23744 10.3232 6.76256 10.3232 6.46967 10.0303L4.46967 8.03033C4.17678 7.73744 4.17678 7.26256 4.46967 6.96967C4.76256 6.67678 5.23744 6.67678 5.53033 6.96967L7 8.43934L10.4697 4.96967C10.7626 4.67678 11.2374 4.67678 11.5303 4.96967ZM14 15.75C13.5858 15.75 13.25 16.0858 13.25 16.5C13.25 16.9142 13.5858 17.25 14 17.25H19C19.4142 17.25 19.75 16.9142 19.75 16.5C19.75 16.0858 19.4142 15.75 19 15.75L14 15.75ZM10.5303 13.9697C10.8232 14.2626 10.8232 14.7374 10.5303 15.0303L9.06066 16.5L10.5303 17.9697C10.8232 18.2626 10.8232 18.7374 10.5303 19.0303C10.2374 19.3232 9.76256 19.3232 9.46967 19.0303L8 17.5607L6.53033 19.0303C6.23744 19.3232 5.76256 19.3232 5.46967 19.0303C5.17678 18.7374 5.17678 18.2626 5.46967 17.9697L6.93934 16.5L5.46967 15.0303C5.17678 14.7374 5.17678 14.2626 5.46967 13.9697C5.76256 13.6768 6.23744 13.6768 6.53033 13.9697L8 15.4393L9.46967 13.9697C9.76256 13.6768 10.2374 13.6768 10.5303 13.9697Z" fill="currentColor"></path></g><defs><clipPath id="clip0_4814_170"><rect width="24" height="24" fill="currentColor"></rect></clipPath></defs></svg>
                          </i>
                          <p className="absolute left-[25px] top-0 text-[14px]">0/2</p>
                        </div>
                        <div className="absolute right-0 top-0">
                          <button className="absolute right-0 top-0 rounded-[50%] w-[40px] h-[40px] bg-[#144bc8]">
                            <i>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="arrow_right" width="24.000em" height="24.000em" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.4697 4.46967C11.7626 4.17678 12.2374 4.17678 12.5303 4.46967L19.5303 11.4697C19.8232 11.7626 19.8232 12.2374 19.5303 12.5303L12.5303 19.5303C12.2374 19.8232 11.7626 19.8232 11.4697 19.5303C11.1768 19.2374 11.1768 18.7626 11.4697 18.4697L17.1893 12.75H5C4.58579 12.75 4.25 12.4142 4.25 12C4.25 11.5858 4.58579 11.25 5 11.25H17.1893L11.4697 5.53033C11.1768 5.23744 11.1768 4.76256 11.4697 4.46967Z" fill="white"></path></svg>
                            </i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative w-full md:w-[45%] h-[250px] xl:w-[23%] xl:h-[200px] flex items-center justify-center">
                <div className="relative w-full lg:w-[100%] h-[90%] flex flex-col items-center justify-center gap-[50px]">
                  <div className="relative w-[90%] h-auto">
                    <div className="relative w-full h-[60px] font-gustavin text-[20px]">
                      <p className="relative line-clamp-2 w-[70%]">Banco de Dados</p>
                      <button className="absolute right-0 top-0 rounded-[50%] w-[40px] h-[40px]">
                        <i>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="info" width="24.000em" height="24.000em" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM11.25 8C11.25 7.58579 11.5858 7.25 12 7.25H12.01C12.4242 7.25 12.76 7.58579 12.76 8C12.76 8.41421 12.4242 8.75 12.01 8.75H12C11.5858 8.75 11.25 8.41421 11.25 8ZM12 11.25C12.4142 11.25 12.75 11.5858 12.75 12V16C12.75 16.4142 12.4142 16.75 12 16.75C11.5858 16.75 11.25 16.4142 11.25 16V12C11.25 11.5858 11.5858 11.25 12 11.25Z" fill="currentColor"></path></svg>
                        </i>
                      </button>
                    </div>
                  </div>
                  <div className="relative w-[90%] h-auto ">
                    <div className="relative w-full h-auto">
                      <div className="w-full relative h-auto flex items-center justify-start gap-[10px]">
                        <div className="relative w-[60px] h-[40px]">
                          <i className="absolute left-0">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25" class="summary" width="24.000em" height="25.000em" aria-hidden="true" focusable="false" role="img" alt=""><path fill-rule="evenodd" clip-rule="evenodd" d="M5 4.5C4.30964 4.5 3.75 5.05964 3.75 5.75V19.75C3.75 20.4404 4.30964 21 5 21H19C19.6904 21 20.25 20.4404 20.25 19.75V5.75C20.25 5.05964 19.6904 4.5 19 4.5H5ZM2.25 5.75C2.25 4.23122 3.48122 3 5 3H19C20.5188 3 21.75 4.23122 21.75 5.75V19.75C21.75 21.2688 20.5188 22.5 19 22.5H5C3.48122 22.5 2.25 21.2688 2.25 19.75V5.75ZM7 7.75L17 7.75V9.25L7 9.25V7.75ZM7 11.8437L17 11.8438V13.3438L7 13.3437V11.8437ZM12 15.9375L17 15.9375V17.4375L12 17.4375V15.9375Z" fill="currentColor"></path></svg>
                          </i>
                          <p className="absolute left-[25px] top-0 text-[14px]">2/8</p>
                        </div>
                        <div className="relative w-[60px] h-[40px]">
                          <i className="absolute left-0">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="list-check" width="24.000em" height="24.000em" aria-hidden="true" focusable="false" role="img" alt=""><path d="M9.53033 3.53033C9.82322 3.23744 9.82322 2.76256 9.53033 2.46967C9.23744 2.17678 8.76256 2.17678 8.46967 2.46967L5 5.93934L3.53033 4.46967C3.23744 4.17678 2.76256 4.17678 2.46967 4.46967C2.17678 4.76256 2.17678 5.23744 2.46967 5.53033L4.46967 7.53033C4.76256 7.82322 5.23744 7.82322 5.53033 7.53033L9.53033 3.53033Z" fill="currentColor"></path><path d="M12 5.75001L21 5.75C21.4142 5.75 21.75 5.41421 21.75 5C21.75 4.58579 21.4142 4.25 21 4.25L12 4.25001C11.5858 4.25001 11.25 4.58579 11.25 5.00001C11.25 5.41422 11.5858 5.75001 12 5.75001Z" fill="currentColor"></path><path d="M9.53033 10.4697C9.82322 10.7626 9.82322 11.2374 9.53033 11.5303L5.53033 15.5303C5.23744 15.8232 4.76256 15.8232 4.46967 15.5303L2.46967 13.5303C2.17678 13.2374 2.17678 12.7626 2.46967 12.4697C2.76256 12.1768 3.23744 12.1768 3.53033 12.4697L5 13.9393L8.46967 10.4697C8.76256 10.1768 9.23744 10.1768 9.53033 10.4697Z" fill="currentColor"></path><path d="M12 13.75L21 13.75C21.4142 13.75 21.75 13.4142 21.75 13C21.75 12.5858 21.4142 12.25 21 12.25L12 12.25C11.5858 12.25 11.25 12.5858 11.25 13C11.25 13.4142 11.5858 13.75 12 13.75Z" fill="currentColor"></path><path d="M21 21.25L12 21.25C11.5858 21.25 11.25 20.9142 11.25 20.5C11.25 20.0858 11.5858 19.75 12 19.75L21 19.75C21.4142 19.75 21.75 20.0858 21.75 20.5C21.75 20.9142 21.4142 21.25 21 21.25Z" fill="currentColor"></path><path d="M5.5 22C6.32843 22 7 21.3284 7 20.5C7 19.6716 6.32843 19 5.5 19C4.67157 19 4 19.6716 4 20.5C4 21.3284 4.67157 22 5.5 22Z" fill="currentColor"></path></svg>
                          </i>
                          <p className="absolute left-[25px] top-0 text-[14px]">3/6</p>
                        </div>
                        <div className="relative w-[60px] h-[40px]">
                          <i className="absolute left-0">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="rule" width="24.000em" height="24.000em" aria-hidden="true" focusable="false" role="img" alt=""><g clip-path="url(#clip0_4814_170)"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.44444 0.25C2.59723 0.25 1.78471 0.586556 1.18563 1.18563C0.586556 1.78471 0.25 2.59723 0.25 3.44444V20.5556C0.25 21.4028 0.586557 22.2153 1.18563 22.8144C1.78471 23.4134 2.59722 23.75 3.44444 23.75H20.5556C21.4028 23.75 22.2153 23.4134 22.8144 22.8144C23.4134 22.2153 23.75 21.4028 23.75 20.5556V3.44444C23.75 2.59722 23.4134 1.78471 22.8144 1.18563C22.2153 0.586557 21.4028 0.25 20.5556 0.25H3.44444ZM2.24629 2.24629C2.56406 1.92852 2.99505 1.75 3.44444 1.75H20.5556C21.0049 1.75 21.4359 1.92852 21.7537 2.24629C22.0715 2.56406 22.25 2.99505 22.25 3.44444V20.5556C22.25 21.0049 22.0715 21.4359 21.7537 21.7537C21.4359 22.0715 21.0049 22.25 20.5556 22.25H3.44444C2.99505 22.25 2.56406 22.0715 2.24629 21.7537C1.92852 21.4359 1.75 21.0049 1.75 20.5556V3.44444C1.75 2.99505 1.92852 2.56406 2.24629 2.24629ZM14 6.75C13.5858 6.75 13.25 7.08579 13.25 7.5C13.25 7.91421 13.5858 8.25 14 8.25L19 8.25C19.4142 8.25 19.75 7.91421 19.75 7.5C19.75 7.08579 19.4142 6.75 19 6.75L14 6.75ZM11.5303 4.96967C11.8232 5.26256 11.8232 5.73744 11.5303 6.03033L7.53033 10.0303C7.23744 10.3232 6.76256 10.3232 6.46967 10.0303L4.46967 8.03033C4.17678 7.73744 4.17678 7.26256 4.46967 6.96967C4.76256 6.67678 5.23744 6.67678 5.53033 6.96967L7 8.43934L10.4697 4.96967C10.7626 4.67678 11.2374 4.67678 11.5303 4.96967ZM14 15.75C13.5858 15.75 13.25 16.0858 13.25 16.5C13.25 16.9142 13.5858 17.25 14 17.25H19C19.4142 17.25 19.75 16.9142 19.75 16.5C19.75 16.0858 19.4142 15.75 19 15.75L14 15.75ZM10.5303 13.9697C10.8232 14.2626 10.8232 14.7374 10.5303 15.0303L9.06066 16.5L10.5303 17.9697C10.8232 18.2626 10.8232 18.7374 10.5303 19.0303C10.2374 19.3232 9.76256 19.3232 9.46967 19.0303L8 17.5607L6.53033 19.0303C6.23744 19.3232 5.76256 19.3232 5.46967 19.0303C5.17678 18.7374 5.17678 18.2626 5.46967 17.9697L6.93934 16.5L5.46967 15.0303C5.17678 14.7374 5.17678 14.2626 5.46967 13.9697C5.76256 13.6768 6.23744 13.6768 6.53033 13.9697L8 15.4393L9.46967 13.9697C9.76256 13.6768 10.2374 13.6768 10.5303 13.9697Z" fill="currentColor"></path></g><defs><clipPath id="clip0_4814_170"><rect width="24" height="24" fill="currentColor"></rect></clipPath></defs></svg>
                          </i>
                          <p className="absolute left-[25px] top-0 text-[14px]">5/2</p>
                        </div>
                        <div className="absolute right-0 top-0">
                          <button className="absolute right-0 top-0 rounded-[50%] w-[40px] h-[40px] bg-[#144bc8]">
                            <i>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="arrow_right" width="24.000em" height="24.000em" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.4697 4.46967C11.7626 4.17678 12.2374 4.17678 12.5303 4.46967L19.5303 11.4697C19.8232 11.7626 19.8232 12.2374 19.5303 12.5303L12.5303 19.5303C12.2374 19.8232 11.7626 19.8232 11.4697 19.5303C11.1768 19.2374 11.1768 18.7626 11.4697 18.4697L17.1893 12.75H5C4.58579 12.75 4.25 12.4142 4.25 12C4.25 11.5858 4.58579 11.25 5 11.25H17.1893L11.4697 5.53033C11.1768 5.23744 11.1768 4.76256 11.4697 4.46967Z" fill="white"></path></svg>
                            </i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative w-full md:w-[45%] h-[250px] xl:w-[25%] xl:h-[200px] flex items-center justify-center">
                <div className="relative w-full lg:w-[100%] h-[90%] flex flex-col items-center justify-center gap-[50px]">
                  <div className="relative w-[90%] h-auto">
                    <div className="relative w-full h-[60px] font-gustavin text-[20px]">
                      <p className="relative line-clamp-2 w-[70%]">Sistemas Operacionais</p>
                      <button className="absolute right-0 top-0 rounded-[50%] w-[40px] h-[40px]">
                        <i>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="info" width="24.000em" height="24.000em" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM11.25 8C11.25 7.58579 11.5858 7.25 12 7.25H12.01C12.4242 7.25 12.76 7.58579 12.76 8C12.76 8.41421 12.4242 8.75 12.01 8.75H12C11.5858 8.75 11.25 8.41421 11.25 8ZM12 11.25C12.4142 11.25 12.75 11.5858 12.75 12V16C12.75 16.4142 12.4142 16.75 12 16.75C11.5858 16.75 11.25 16.4142 11.25 16V12C11.25 11.5858 11.5858 11.25 12 11.25Z" fill="currentColor"></path></svg>
                        </i>
                      </button>
                    </div>
                  </div>
                  <div className="relative w-[90%] h-auto">
                    <div className="relative w-full h-auto">
                      <div className="w-full relative h-auto flex items-center justify-start gap-[10px]">
                        <div className="relative w-[60px] h-[40px]">
                          <i className="absolute left-0">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25" class="summary" width="24.000em" height="25.000em" aria-hidden="true" focusable="false" role="img" alt=""><path fill-rule="evenodd" clip-rule="evenodd" d="M5 4.5C4.30964 4.5 3.75 5.05964 3.75 5.75V19.75C3.75 20.4404 4.30964 21 5 21H19C19.6904 21 20.25 20.4404 20.25 19.75V5.75C20.25 5.05964 19.6904 4.5 19 4.5H5ZM2.25 5.75C2.25 4.23122 3.48122 3 5 3H19C20.5188 3 21.75 4.23122 21.75 5.75V19.75C21.75 21.2688 20.5188 22.5 19 22.5H5C3.48122 22.5 2.25 21.2688 2.25 19.75V5.75ZM7 7.75L17 7.75V9.25L7 9.25V7.75ZM7 11.8437L17 11.8438V13.3438L7 13.3437V11.8437ZM12 15.9375L17 15.9375V17.4375L12 17.4375V15.9375Z" fill="currentColor"></path></svg>
                          </i>
                          <p className="absolute left-[25px] top-0 text-[14px]">2/8</p>
                        </div>
                        <div className="relative w-[60px] h-[40px]">
                          <i className="absolute left-0">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="list-check" width="24.000em" height="24.000em" aria-hidden="true" focusable="false" role="img" alt=""><path d="M9.53033 3.53033C9.82322 3.23744 9.82322 2.76256 9.53033 2.46967C9.23744 2.17678 8.76256 2.17678 8.46967 2.46967L5 5.93934L3.53033 4.46967C3.23744 4.17678 2.76256 4.17678 2.46967 4.46967C2.17678 4.76256 2.17678 5.23744 2.46967 5.53033L4.46967 7.53033C4.76256 7.82322 5.23744 7.82322 5.53033 7.53033L9.53033 3.53033Z" fill="currentColor"></path><path d="M12 5.75001L21 5.75C21.4142 5.75 21.75 5.41421 21.75 5C21.75 4.58579 21.4142 4.25 21 4.25L12 4.25001C11.5858 4.25001 11.25 4.58579 11.25 5.00001C11.25 5.41422 11.5858 5.75001 12 5.75001Z" fill="currentColor"></path><path d="M9.53033 10.4697C9.82322 10.7626 9.82322 11.2374 9.53033 11.5303L5.53033 15.5303C5.23744 15.8232 4.76256 15.8232 4.46967 15.5303L2.46967 13.5303C2.17678 13.2374 2.17678 12.7626 2.46967 12.4697C2.76256 12.1768 3.23744 12.1768 3.53033 12.4697L5 13.9393L8.46967 10.4697C8.76256 10.1768 9.23744 10.1768 9.53033 10.4697Z" fill="currentColor"></path><path d="M12 13.75L21 13.75C21.4142 13.75 21.75 13.4142 21.75 13C21.75 12.5858 21.4142 12.25 21 12.25L12 12.25C11.5858 12.25 11.25 12.5858 11.25 13C11.25 13.4142 11.5858 13.75 12 13.75Z" fill="currentColor"></path><path d="M21 21.25L12 21.25C11.5858 21.25 11.25 20.9142 11.25 20.5C11.25 20.0858 11.5858 19.75 12 19.75L21 19.75C21.4142 19.75 21.75 20.0858 21.75 20.5C21.75 20.9142 21.4142 21.25 21 21.25Z" fill="currentColor"></path><path d="M5.5 22C6.32843 22 7 21.3284 7 20.5C7 19.6716 6.32843 19 5.5 19C4.67157 19 4 19.6716 4 20.5C4 21.3284 4.67157 22 5.5 22Z" fill="currentColor"></path></svg>
                          </i>
                          <p className="absolute left-[25px] top-0 text-[14px]">3/6</p>
                        </div>
                        <div className="relative w-[60px] h-[40px] ">
                          <i className="absolute left-0">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="rule" width="24.000em" height="24.000em" aria-hidden="true" focusable="false" role="img" alt=""><g clip-path="url(#clip0_4814_170)"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.44444 0.25C2.59723 0.25 1.78471 0.586556 1.18563 1.18563C0.586556 1.78471 0.25 2.59723 0.25 3.44444V20.5556C0.25 21.4028 0.586557 22.2153 1.18563 22.8144C1.78471 23.4134 2.59722 23.75 3.44444 23.75H20.5556C21.4028 23.75 22.2153 23.4134 22.8144 22.8144C23.4134 22.2153 23.75 21.4028 23.75 20.5556V3.44444C23.75 2.59722 23.4134 1.78471 22.8144 1.18563C22.2153 0.586557 21.4028 0.25 20.5556 0.25H3.44444ZM2.24629 2.24629C2.56406 1.92852 2.99505 1.75 3.44444 1.75H20.5556C21.0049 1.75 21.4359 1.92852 21.7537 2.24629C22.0715 2.56406 22.25 2.99505 22.25 3.44444V20.5556C22.25 21.0049 22.0715 21.4359 21.7537 21.7537C21.4359 22.0715 21.0049 22.25 20.5556 22.25H3.44444C2.99505 22.25 2.56406 22.0715 2.24629 21.7537C1.92852 21.4359 1.75 21.0049 1.75 20.5556V3.44444C1.75 2.99505 1.92852 2.56406 2.24629 2.24629ZM14 6.75C13.5858 6.75 13.25 7.08579 13.25 7.5C13.25 7.91421 13.5858 8.25 14 8.25L19 8.25C19.4142 8.25 19.75 7.91421 19.75 7.5C19.75 7.08579 19.4142 6.75 19 6.75L14 6.75ZM11.5303 4.96967C11.8232 5.26256 11.8232 5.73744 11.5303 6.03033L7.53033 10.0303C7.23744 10.3232 6.76256 10.3232 6.46967 10.0303L4.46967 8.03033C4.17678 7.73744 4.17678 7.26256 4.46967 6.96967C4.76256 6.67678 5.23744 6.67678 5.53033 6.96967L7 8.43934L10.4697 4.96967C10.7626 4.67678 11.2374 4.67678 11.5303 4.96967ZM14 15.75C13.5858 15.75 13.25 16.0858 13.25 16.5C13.25 16.9142 13.5858 17.25 14 17.25H19C19.4142 17.25 19.75 16.9142 19.75 16.5C19.75 16.0858 19.4142 15.75 19 15.75L14 15.75ZM10.5303 13.9697C10.8232 14.2626 10.8232 14.7374 10.5303 15.0303L9.06066 16.5L10.5303 17.9697C10.8232 18.2626 10.8232 18.7374 10.5303 19.0303C10.2374 19.3232 9.76256 19.3232 9.46967 19.0303L8 17.5607L6.53033 19.0303C6.23744 19.3232 5.76256 19.3232 5.46967 19.0303C5.17678 18.7374 5.17678 18.2626 5.46967 17.9697L6.93934 16.5L5.46967 15.0303C5.17678 14.7374 5.17678 14.2626 5.46967 13.9697C5.76256 13.6768 6.23744 13.6768 6.53033 13.9697L8 15.4393L9.46967 13.9697C9.76256 13.6768 10.2374 13.6768 10.5303 13.9697Z" fill="currentColor"></path></g><defs><clipPath id="clip0_4814_170"><rect width="24" height="24" fill="currentColor"></rect></clipPath></defs></svg>
                          </i>
                          <p className="absolute left-[25px] top-0 text-[14px]">5/2</p>
                        </div>
                        <div className="absolute right-0 top-0">
                          <button className="absolute right-0 top-0 rounded-[50%] w-[40px] h-[40px] bg-[#144bc8]">
                            <i>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="arrow_right" width="24.000em" height="24.000em" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.4697 4.46967C11.7626 4.17678 12.2374 4.17678 12.5303 4.46967L19.5303 11.4697C19.8232 11.7626 19.8232 12.2374 19.5303 12.5303L12.5303 19.5303C12.2374 19.8232 11.7626 19.8232 11.4697 19.5303C11.1768 19.2374 11.1768 18.7626 11.4697 18.4697L17.1893 12.75H5C4.58579 12.75 4.25 12.4142 4.25 12C4.25 11.5858 4.58579 11.25 5 11.25H17.1893L11.4697 5.53033C11.1768 5.23744 11.1768 4.76256 11.4697 4.46967Z" fill="white"></path></svg>
                            </i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative w-full md:w-[45%] h-[250px] xl:w-[23%] xl:h-[200px] flex items-center justify-center">
                <div className="relative w-full lg:w-[100%] h-[90%] flex flex-col items-center justify-center gap-[50px]">
                  <div className="relative w-[90%] h-auto">
                    <div className="relative w-full h-[60px] font-gustavin text-[20px]">
                      <p className="relative line-clamp-2 w-[70%]">Engenharia de Software</p>
                      <button className="absolute right-0 top-0 rounded-[50%] w-[40px] h-[40px]">
                        <i>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="info" width="24.000em" height="24.000em" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM11.25 8C11.25 7.58579 11.5858 7.25 12 7.25H12.01C12.4242 7.25 12.76 7.58579 12.76 8C12.76 8.41421 12.4242 8.75 12.01 8.75H12C11.5858 8.75 11.25 8.41421 11.25 8ZM12 11.25C12.4142 11.25 12.75 11.5858 12.75 12V16C12.75 16.4142 12.4142 16.75 12 16.75C11.5858 16.75 11.25 16.4142 11.25 16V12C11.25 11.5858 11.5858 11.25 12 11.25Z" fill="CurrentColor"></path></svg>
                        </i>
                      </button>
                    </div>
                  </div>
                  <div className="relative w-[90%] h-auto">
                    <div className="relative w-full h-auto">
                      <div className="w-full relative h-auto flex items-center justify-start gap-[10px]">
                        <div className="relative w-[60px] h-[40px]">
                          <i className="absolute left-0">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25" class="summary" width="24.000em" height="25.000em" aria-hidden="true" focusable="false" role="img" alt=""><path fill-rule="evenodd" clip-rule="evenodd" d="M5 4.5C4.30964 4.5 3.75 5.05964 3.75 5.75V19.75C3.75 20.4404 4.30964 21 5 21H19C19.6904 21 20.25 20.4404 20.25 19.75V5.75C20.25 5.05964 19.6904 4.5 19 4.5H5ZM2.25 5.75C2.25 4.23122 3.48122 3 5 3H19C20.5188 3 21.75 4.23122 21.75 5.75V19.75C21.75 21.2688 20.5188 22.5 19 22.5H5C3.48122 22.5 2.25 21.2688 2.25 19.75V5.75ZM7 7.75L17 7.75V9.25L7 9.25V7.75ZM7 11.8437L17 11.8438V13.3438L7 13.3437V11.8437ZM12 15.9375L17 15.9375V17.4375L12 17.4375V15.9375Z" fill="currentColor"></path></svg>
                          </i>
                          <p className="absolute left-[25px] top-0 text-[14px]">5/8</p>
                        </div>
                        <div className="relative w-[60px] h-[40px]">
                          <i className="absolute left-0">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="list-check" width="24.000em" height="24.000em" aria-hidden="true" focusable="false" role="img" alt=""><path d="M9.53033 3.53033C9.82322 3.23744 9.82322 2.76256 9.53033 2.46967C9.23744 2.17678 8.76256 2.17678 8.46967 2.46967L5 5.93934L3.53033 4.46967C3.23744 4.17678 2.76256 4.17678 2.46967 4.46967C2.17678 4.76256 2.17678 5.23744 2.46967 5.53033L4.46967 7.53033C4.76256 7.82322 5.23744 7.82322 5.53033 7.53033L9.53033 3.53033Z" fill="currentColor"></path><path d="M12 5.75001L21 5.75C21.4142 5.75 21.75 5.41421 21.75 5C21.75 4.58579 21.4142 4.25 21 4.25L12 4.25001C11.5858 4.25001 11.25 4.58579 11.25 5.00001C11.25 5.41422 11.5858 5.75001 12 5.75001Z" fill="currentColor"></path><path d="M9.53033 10.4697C9.82322 10.7626 9.82322 11.2374 9.53033 11.5303L5.53033 15.5303C5.23744 15.8232 4.76256 15.8232 4.46967 15.5303L2.46967 13.5303C2.17678 13.2374 2.17678 12.7626 2.46967 12.4697C2.76256 12.1768 3.23744 12.1768 3.53033 12.4697L5 13.9393L8.46967 10.4697C8.76256 10.1768 9.23744 10.1768 9.53033 10.4697Z" fill="currentColor"></path><path d="M12 13.75L21 13.75C21.4142 13.75 21.75 13.4142 21.75 13C21.75 12.5858 21.4142 12.25 21 12.25L12 12.25C11.5858 12.25 11.25 12.5858 11.25 13C11.25 13.4142 11.5858 13.75 12 13.75Z" fill="currentColor"></path><path d="M21 21.25L12 21.25C11.5858 21.25 11.25 20.9142 11.25 20.5C11.25 20.0858 11.5858 19.75 12 19.75L21 19.75C21.4142 19.75 21.75 20.0858 21.75 20.5C21.75 20.9142 21.4142 21.25 21 21.25Z" fill="currentColor"></path><path d="M5.5 22C6.32843 22 7 21.3284 7 20.5C7 19.6716 6.32843 19 5.5 19C4.67157 19 4 19.6716 4 20.5C4 21.3284 4.67157 22 5.5 22Z" fill="currentColor"></path></svg>
                          </i>
                          <p className="absolute left-[25px] top-0 text-[14px]">6/6</p>
                        </div>
                        <div className="relative w-[60px] h-[40px]">
                          <i className="absolute left-0">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="rule" width="24.000em" height="24.000em" aria-hidden="true" focusable="false" role="img" alt=""><g clip-path="url(#clip0_4814_170)"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.44444 0.25C2.59723 0.25 1.78471 0.586556 1.18563 1.18563C0.586556 1.78471 0.25 2.59723 0.25 3.44444V20.5556C0.25 21.4028 0.586557 22.2153 1.18563 22.8144C1.78471 23.4134 2.59722 23.75 3.44444 23.75H20.5556C21.4028 23.75 22.2153 23.4134 22.8144 22.8144C23.4134 22.2153 23.75 21.4028 23.75 20.5556V3.44444C23.75 2.59722 23.4134 1.78471 22.8144 1.18563C22.2153 0.586557 21.4028 0.25 20.5556 0.25H3.44444ZM2.24629 2.24629C2.56406 1.92852 2.99505 1.75 3.44444 1.75H20.5556C21.0049 1.75 21.4359 1.92852 21.7537 2.24629C22.0715 2.56406 22.25 2.99505 22.25 3.44444V20.5556C22.25 21.0049 22.0715 21.4359 21.7537 21.7537C21.4359 22.0715 21.0049 22.25 20.5556 22.25H3.44444C2.99505 22.25 2.56406 22.0715 2.24629 21.7537C1.92852 21.4359 1.75 21.0049 1.75 20.5556V3.44444C1.75 2.99505 1.92852 2.56406 2.24629 2.24629ZM14 6.75C13.5858 6.75 13.25 7.08579 13.25 7.5C13.25 7.91421 13.5858 8.25 14 8.25L19 8.25C19.4142 8.25 19.75 7.91421 19.75 7.5C19.75 7.08579 19.4142 6.75 19 6.75L14 6.75ZM11.5303 4.96967C11.8232 5.26256 11.8232 5.73744 11.5303 6.03033L7.53033 10.0303C7.23744 10.3232 6.76256 10.3232 6.46967 10.0303L4.46967 8.03033C4.17678 7.73744 4.17678 7.26256 4.46967 6.96967C4.76256 6.67678 5.23744 6.67678 5.53033 6.96967L7 8.43934L10.4697 4.96967C10.7626 4.67678 11.2374 4.67678 11.5303 4.96967ZM14 15.75C13.5858 15.75 13.25 16.0858 13.25 16.5C13.25 16.9142 13.5858 17.25 14 17.25H19C19.4142 17.25 19.75 16.9142 19.75 16.5C19.75 16.0858 19.4142 15.75 19 15.75L14 15.75ZM10.5303 13.9697C10.8232 14.2626 10.8232 14.7374 10.5303 15.0303L9.06066 16.5L10.5303 17.9697C10.8232 18.2626 10.8232 18.7374 10.5303 19.0303C10.2374 19.3232 9.76256 19.3232 9.46967 19.0303L8 17.5607L6.53033 19.0303C6.23744 19.3232 5.76256 19.3232 5.46967 19.0303C5.17678 18.7374 5.17678 18.2626 5.46967 17.9697L6.93934 16.5L5.46967 15.0303C5.17678 14.7374 5.17678 14.2626 5.46967 13.9697C5.76256 13.6768 6.23744 13.6768 6.53033 13.9697L8 15.4393L9.46967 13.9697C9.76256 13.6768 10.2374 13.6768 10.5303 13.9697Z" fill="currentColor"></path></g><defs><clipPath id="clip0_4814_170"><rect width="24" height="24" fill="currentColor"></rect></clipPath></defs></svg>
                          </i>
                          <p className="absolute left-[25px] top-0 text-[14px]">2/2</p>
                        </div>
                        <div className="absolute right-0 top-0">
                          <button className="absolute right-0 top-0 rounded-[50%] w-[40px] h-[40px] bg-[#144bc8]">
                            <i>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="arrow_right" width="24.000em" height="24.000em" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.4697 4.46967C11.7626 4.17678 12.2374 4.17678 12.5303 4.46967L19.5303 11.4697C19.8232 11.7626 19.8232 12.2374 19.5303 12.5303L12.5303 19.5303C12.2374 19.8232 11.7626 19.8232 11.4697 19.5303C11.1768 19.2374 11.1768 18.7626 11.4697 18.4697L17.1893 12.75H5C4.58579 12.75 4.25 12.4142 4.25 12C4.25 11.5858 4.58579 11.25 5 11.25H17.1893L11.4697 5.53033C11.1768 5.23744 11.1768 4.76256 11.4697 4.46967Z" fill="white"></path></svg>
                            </i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ marginTop: '30px', marginBottom: '40px' }} className="relative w-full h-auto flex flex-col gap-[30px]">
              <div className="relative w-full h-auto font-gustavin text-[22px]">
                <p>Formação Socioemocional</p>
              </div>
              <div className="relative w-full h-auto flex flex-col lg:flex-row">
                <div className="w-full lg:w-[20%] relative h-[180px] flex justify-center">
                  <img className="w-[250px] lg:w-full h-full object-cover" src="https://estudante.estacio.br/assets/images/socioemocional/banner-socioemocional.png" alt="" />
                </div>
                <div className="w-full lg:w-[60%] relative h-auto flex justify-center">
                  <div className="relative flex flex-col w-full h-auto">
                    <p style={{ margin: '10px' }} className="font-gustavin text-[22px]">Comece a se desenvolver pro mercado e pra vida!</p>
                    <p style={{ margin: '10px' }} className="text-[15px]">
                      Sabia que competências socioemocionais são a chave para brilhar dentro e fora do mercado de trabalho? Nossa formação te ajuda a liberar seu máximo potencial em todas as esferas da vida!
                    </p>
                  </div>
                </div>
                <div className="w-full lg:w-[20%] relative h-[180px] flex items-center justify-center">
                  <div className="w-[170px] h-[50px]">
                    <button className="relative w-full h-full bg-[#144bc8] rounded-[10px]">
                      <i className="absolute right-[35px] h-[20px] top-4">
                        <svg style={{ height: '100%' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="arrow_right" width="24.000em" height="24.000em" aria-hidden="true" focusable="false" role="img" alt=""><path fill-rule="evenodd" clip-rule="evenodd" d="M11.4697 4.46967C11.7626 4.17678 12.2374 4.17678 12.5303 4.46967L19.5303 11.4697C19.8232 11.7626 19.8232 12.2374 19.5303 12.5303L12.5303 19.5303C12.2374 19.8232 11.7626 19.8232 11.4697 19.5303C11.1768 19.2374 11.1768 18.7626 11.4697 18.4697L17.1893 12.75H5C4.58579 12.75 4.25 12.4142 4.25 12C4.25 11.5858 4.58579 11.25 5 11.25H17.1893L11.4697 5.53033C11.1768 5.23744 11.1768 4.76256 11.4697 4.46967Z" fill="white"></path></svg>
                      </i>
                      <p className="font-gustavin text-[14px] absolute left-[40px] text-[white] top-4">Começar</p>
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </article>
        </section>
      </div>
    </div>
  )
}

export default App;