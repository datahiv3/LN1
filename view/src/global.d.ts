import "react";

declare module "react" {
  interface HTMLAttributes<T> {
    onPointerEnterCapture?: (e: React.PointerEvent<T>) => void;
    onPointerLeaveCapture?: (e: React.PointerEvent<T>) => void;
    placeholder?: string | undefined;
  }
  interface RefAttributes<T> {
    onPointerEnterCapture?: (e: React.PointerEvent<T>) => void;
    onPointerLeaveCapture?: (e: React.PointerEvent<T>) => void;
    placeholder?: string | undefined;
  }
}

// https://github.com/creativetimofficial/material-tailwind/issues/651
// https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/69006
