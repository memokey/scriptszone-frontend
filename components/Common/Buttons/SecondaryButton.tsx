import React from "react";

export interface SecondaryButtonProps {
    caption: string
    icon?: any
    bordered?: boolean
    onClick: any
    styles?: string
    disabled?: boolean
}

const SecondaryButton = (props: SecondaryButtonProps) => {

  return (
    <button
      className={`font-medium py-[16px] px-[32px] rounded-[8px] text-white h-[50px] text-[16px] hover:shadow-[0px_0px_10px_#E33838] sm:text-[18px] text-center tracking-wider inline-flex items-center justify-center ${
        props.bordered
            ? '!text-primary border-primary border bg-white'
            : ''
    } ${
        props.disabled
          ? 'bg-[#1d1e20] button-disabled'
          : 'bg-primary'
      } ${props.styles}`}
      onClick={props.disabled ? null : props.onClick}
    >
      <div className="text-black">
        {props.icon ? props.icon : ''} 
      </div> 
      <span>{props.caption}</span>
    </button>
  )
}

export default SecondaryButton
