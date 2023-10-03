import React from "react";
import { RiAddCircleFill } from "react-icons/ri";
import { MdAddCircle } from "react-icons/md";
import { TodoContext } from "../TodoContext";
import "./AddItemButton.css";
function AddItemButton() {
  const { setOpenModal } = React.useContext(TodoContext);
  return (
    <svg 
    onClick={() => setOpenModal(state => !state)}
    className="button-add"xmlns="http://www.w3.org/2000/svg" viewBox="25 20 64 64" fill="none">
    <g filter="url(#filter0_d_1_239)">
      <rect x="25" y="20" width="64" height="64" rx="32" fill="#61DAFA"/>
    </g>
    <path d="M68.2941 47.9302H61.0894V40.7088C61.0894 38.4616 59.2546 36.64 57.0083 36.64C54.7627 36.64 52.9285 38.4616 52.9285 40.7088V47.9309H45.7079C43.4622 47.9302 41.64 49.7518 41.64 51.999C41.64 54.2469 43.4622 56.0685 45.7079 56.0685H52.9285V63.2912C52.9285 65.5384 54.7627 67.36 57.0083 67.36C59.2546 67.36 61.0894 65.5384 61.0894 63.2912V56.0678L68.2941 56.0691C70.5398 56.0691 72.3607 54.2462 72.3607 51.9984C72.36 49.7518 70.5391 47.9302 68.2941 47.9302Z" fill="#FAFAFA"/>
    <defs>
      <filter id="filter0_d_1_239" x="0" y="0" width="114" height="114" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="5"/>
        <feGaussianBlur stdDeviation="12.5"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.380392 0 0 0 0 0.854902 0 0 0 0 0.980392 0 0 0 0.5 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_239"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_239" result="shape"/>
      </filter>
    </defs>
  </svg>
  );
}

export { AddItemButton }