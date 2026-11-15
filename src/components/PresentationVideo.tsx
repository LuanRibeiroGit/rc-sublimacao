"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function PresentationVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const inView = useInView(videoRef, { amount: 0.4 });

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
        muted
        loop
        playsInline
        disablePictureInPicture
        preload="metadata"
        aria-label="Vídeo de apresentação da RC Sublimação"
        className="aspect-video w-full bg-slate-950 object-cover"
      />
    </div>
  );
}
