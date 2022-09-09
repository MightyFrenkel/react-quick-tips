export interface CodeProps {
  src: string;
}

export function Code({ src }: CodeProps) {
  return (
    <iframe
      src={src}
      className="w-full h-96 border-0 overflow-hidden"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
  );
}
