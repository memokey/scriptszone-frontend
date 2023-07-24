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
          : 'bg-primary hover:shadow-[0_0_20px_-5px_#29b080]'
      } ${props.styles}`}
      onClick={props.disabled ? null : props.onClick}
      style={{boxShadow: '-5px 5px 0px #E33838'}}
    >
      {props.icon ? props.icon : ''} 
      <span>{props.caption}</span>
    </button>
  )
}

export default PrimaryButton
