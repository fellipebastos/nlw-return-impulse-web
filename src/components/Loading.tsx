import { CircleNotch } from "phosphor-react";

export function Loading() {
  return (
    <div className="h-6 w-6 flex items-center justify-center overflow-hidden">
      <CircleNotch className="w-4 h-4 animate-spin" weight="bold" />
    </div>
  );
}
