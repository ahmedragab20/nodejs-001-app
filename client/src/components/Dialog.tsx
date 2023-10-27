import { IGeneric } from "../ts.types";

export default function Dialog(props: IGeneric) {
  const classes = props.attrs?.className || "";
  const restAttrs = () => {
    const { className, ...rest } = props.attrs || {};
    return rest;
  };

  if (!props.toggler) {
    console.error("Dialog component requires a toggler prop");
    

    return <></>
  };

  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.target !== e.currentTarget) return;

        props.toggler(false)
      }}
      className={`fixed inset-0 top-0 left-0 bg-[#f1f1f185] backdrop-blur-sm ${classes}`}
      {...restAttrs()}
    >
      {props?.children || <></>}
    </div>
  );
}
