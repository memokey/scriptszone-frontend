import React from "react";

export interface PrimaryButtonProps {
    caption: string
    icon?: any
    bordered?: boolean
    onClick: any
    styles?: string
    disabled?: boolean
}

const PrimaryButton = (props: PrimaryButtonProps) => {
  return (
    <button
      className={`font-medium py-[16px] px-[32px] rounded-[4px] text-white h-[50px] text-[16px] sm:text-[18px] text-center tracking-wider inline-flex items-center justify-center ${
        props.disabled
          ? 'bg-[#1d1e20] button-disabled'
          : 'bg-primary shadow-[-5px_5px_0px_#E33838] hover:shadow-[0px_0px_0px_#E33838] transition-shadow duration-1000'
      } ${props.styles}`}
      onClick={props.disabled ? null : props.onClick}
    >
      {props.icon ? props.icon : ''} 
      <span>{props.caption}</span>
    </button>
  )
}

export default PrimaryButton
