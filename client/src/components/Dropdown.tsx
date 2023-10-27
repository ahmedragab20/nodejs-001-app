import { useEffect } from "react";

interface DBPosition {
  top: number;
  left: number;
}
interface DropdownProps<T> {
  opened: boolean;
  options: T[];
  target?: string;
  atrs?: any;
  position: DBPosition;
  onChange: (value: T | undefined) => void;
}

export default function Dropdown<T>(props: DropdownProps<T>) {
  const componentKey = Math.random().toString(36).substring(7);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (
        document.getElementById(componentKey) &&
        !document.getElementById(componentKey)?.contains(event.target)
      ) {
        props?.onChange(undefined);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [componentKey, props]);

  if (!props.options.length || !props.opened) return null;
  return (
    <div
      id={componentKey}
      className="p-1 rounded-xl border max-w-[230px] min-w-[130px] select-none fixed z-50 bg-[#f1f1f1c7] backdrop-blur-sm shadow-xl"
      style={{
        top: props.position.top,
        left: props.position.left,
      }}
      onContextMenu={(e) => {
        e.preventDefault();
      }}
    >
      {props.options.map((option: any, i) => (
        <div
          key={i}
          onClick={() => {
            props.onChange(option);
          }}
          {...(props.atrs || {})}
        >
          {typeof option === "string" ? option : option[props.target!]}
        </div>
      ))}
    </div>
  );
}
