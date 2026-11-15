"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function PresentationVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isNear = useInView(videoRef, { margin: "800px 0px", once: true });
  const inView = useInView(videoRef, { amount: 0.4 });

  // O vídeo só começa a baixar quando o visitante se aproxima da seção.
  useEffect(() => {
    if (isNear && videoRef.current) videoRef.current.preload = "auto";
  }, [isNear]);

  // Reproduz apenas enquanto o vídeo está visível na tela.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (inView) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [inView]);

  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 shadow-xl shadow-slate-900/10 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-fuchsia-500/25">
      <video
        ref={videoRef}
        src="/video/apresentacao-v2.mp4"
        poster="/video/apresentacao-capa.jpg"
        muted
        loop
        playsInline
        disablePictureInPicture
        preload="none"
        aria-label="Vídeo de apresentação da RC Sublimação"
        className="aspect-video w-full bg-slate-950 object-cover"
      />
    </div>
  );
}
