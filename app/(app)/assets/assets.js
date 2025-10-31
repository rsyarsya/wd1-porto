import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import gemini_hd_bg_light from './gemini-hd-bg-light.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import ppgue from './ppgue.png';
import kmtetot from './kmtetot.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    gemini_hd_bg_light,
    ppgue,
    kmtetot,
};

export const workData = [
    {
        title: 'Frontend for BRIN project',
        description: 'Frontend Developer',
        bgImage: '/BRIN.png',
        link: 'https://brin-cradle-0.vercel.app/',
    },
    {
        title: 'HydroConnect Mobile app',
        description: 'Frontend Developer',
        bgImage: '/APP.png',
        link: 'coming soon',
    },
    {
        title: 'Bridge Finding Algorithm Visualizer',
        description: 'Developer & Designer',
        bgImage: '/BRIDGE.png',
        link: 'https://arnold-awardee-toronto.vercel.app/',
    },
    {
        title: 'UI/UX Concept designing',
        description: 'UI/UX Design and Concept Development',
        bgImage: '/AIRKU.png',
        link: 'https://www.canva.com/design/DAG0mZT4wDA/OtjFEgO2YW8GXwNBbpxSMg/edit',
    },
];

export const serviceData = [
    { icon: assets.web_icon, title: 'Dashboard web', description: 'HydroConnect Project Analysis: Visualizing power generation and energy efficiency improvements in Dukuh Pengos through solar integration and smart instrumentation....', link: 'https://hydroconnect-electricity-analysis.vercel.app/' },
    { icon: assets.mobile_icon, title: 'Hydroconnect Mobile app', description: 'HydroConnect Mobile App: Monitor clean water quality remotely — a collaboration with Telkom and IEEE SIGHT, soon to be launched on Play Store and App Store... (link coming soon)', link: '' },
    { icon: assets.ui_icon, title: 'HydroConnect Project', description: 'A smart energy and water management system integrating solar power, IoT monitoring, and data analytics to enhance sustainability in rural communities. Collaborative Project of KMTETI x KMTK x PT TELKOM Indonesia... (link coming soon)', link: '' },
    { icon: assets.graphics_icon, title: 'GEO UGM x SUTD Project', description: 'UGM–SUTD Collaboration in GEO Program: Designing Energy Systems & Empowering Local Industries...', link: 'https://dtmi.ft.ugm.ac.id/kolaborasi-ugm-sutd-dalam-program-geo-merancang-sistem-energi-dan-mendukung-ikm-lokal/' },
];

export const infoList = [
  { 
    icon: assets.code_icon, 
    iconDark: assets.code_icon_dark, 
    title: 'Languages', 
    description: (
      <>
        HTML, CSS, JavaScript, React.js, Next.js, Node.js
        <br /><br />
        Also familiar with TypeScript, Python, Git, REST API, and Vercel Deployment.
      </>
    )
  },
  { 
    icon: assets.edu_icon, 
    iconDark: assets.edu_icon_dark, 
    title: 'Education', 
    description: 'Undergraduate in Information Technology, Universitas Gadjah Mada' 
  },
  { 
    icon: assets.project_icon, 
    iconDark: assets.project_icon_dark, 
    title: 'Projects', 
    description: (
      <>
        Built 5+ projects ranging from web applications, mobile apps, and sustainable projects.
      </>
    )
  }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];