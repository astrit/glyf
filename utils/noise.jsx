import { useEffect } from "react";

export default function Noise() {
  // console.log("Noise", Noise);
  useEffect(() => {
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = canvas.height = 128;

    resize();
    window.onresize = resize;

    function resize() {
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
    }

    function noise(ctx) {
      const w = ctx.canvas.width,
        h = ctx.canvas.height,
        iData = ctx.createImageData(w, h),
        buffer32 = new Uint32Array(iData.data.buffer),
        len = buffer32.length;
      let i = 0;

      for (; i < len; i++) if (Math.random() < 0.5) buffer32[i] = 0xffffffff;

      ctx.putImageData(iData, 0, 0);
    }

    (function loop() {
      noise(ctx);
      requestAnimationFrame(loop);
    })();
  });
  return <canvas className="noise"></canvas>;
}
