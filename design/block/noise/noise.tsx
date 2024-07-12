"use client"

import { useEffect, useRef } from "react"

import "@/noise/noise.css"

export default function Noise() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameId = useRef<number>()

  let noiseData: ImageData[] = []
  let frame = 0

  const createNoise = (
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement
  ) => {
    const idata = ctx.createImageData(canvas.width, canvas.height)
    const buffer32 = new Uint32Array(idata.data.buffer)

    for (let i = 0; i < buffer32.length; i++) {
      if (Math.random() < 0.5) {
        buffer32[i] = 0xff000000
      }
    }

    noiseData.push(idata)
  }

  const paintNoise = (ctx: CanvasRenderingContext2D) => {
    frame = frame === 9 ? 0 : frame + 1
    ctx.putImageData(noiseData[frame], 0, 0)
  }

  const loop = (ctx: CanvasRenderingContext2D) => {
    paintNoise(ctx)
    animationFrameId.current = requestAnimationFrame(() => loop(ctx))
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")

    if (!canvas || !ctx) return

    canvas.width = 2400
    canvas.height = 2400

    for (let i = 0; i < 10; i++) {
      createNoise(ctx, canvas)
    }

    loop(ctx)

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [])

  return (
    <div className="noise">
      <canvas id="noise" ref={canvasRef} />
    </div>
  )
}
