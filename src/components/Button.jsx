import React from "react";
import classNames from "classnames";

function Button({className,outline,children}) {
  
  return (
    <div>
      <button
        className={classNames("button",className, { "button--outline":outline, })}
      >
        {children}
      </button>
    </div>
  );
}
export default Button;
