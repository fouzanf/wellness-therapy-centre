"use client";

import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Sparkles, Music } from "lucide-react";

export default function AmbientSoundPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.25);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const lfoRef = useRef<OscillatorNode | null>(null);

  const startSoundscape = () => {
    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(volume, ctx.currentTime);
      masterGain.connect(ctx.destination);
      masterGainRef.current = masterGain;

      // 432 Hz Solfeggio Healing Resonance + Harmonics
      const frequencies = [432, 216, 648, 864];
      const gains = [0.15, 0.2, 0.05, 0.02];

      const oscs: OscillatorNode[] = [];

      frequencies.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = idx === 0 ? "sine" : "triangle";
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        gain.gain.setValueAtTime(gains[idx], ctx.currentTime);

        osc.connect(gain);
        gain.connect(masterGain);

        osc.start();
        oscs.push(osc);
      });

      // LFO for gentle breath-like wave modulation (0.1 Hz)
      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();
      lfo.frequency.setValueAtTime(0.1, ctx.currentTime);
      lfoGain.gain.setValueAtTime(0.04, ctx.currentTime);

      lfo.connect(lfoGain);
      lfoGain.connect(masterGain.gain);
      lfo.start();
      lfoRef.current = lfo;

      oscillatorsRef.current = oscs;
      setIsPlaying(true);
    } catch {
      // AudioContext could be blocked by browser policy until gesture
    }
  };

  const stopSoundscape = () => {
    if (audioCtxRef.current) {
      oscillatorsRef.current.forEach((osc) => {
        try {
          osc.stop();
          osc.disconnect();
        } catch {
          // ignore
        }
      });
      if (lfoRef.current) {
        try {
          lfoRef.current.stop();
          lfoRef.current.disconnect();
        } catch {
          // ignore
        }
      }
      audioCtxRef.current.close();
      audioCtxRef.current = null;
    }
    setIsPlaying(false);
  };

  const toggleSound = () => {
    if (isPlaying) {
      stopSoundscape();
    } else {
      startSoundscape();
    }
  };

  useEffect(() => {
    return () => {
      stopSoundscape();
    };
  }, []);

  return (
    <div className="fixed bottom-24 sm:bottom-6 left-4 sm:left-6 z-40">
      <div className="glass-panel p-2 rounded-2xl border border-emerald-500/30 shadow-2xl flex items-center gap-2.5">
        <button
          type="button"
          onClick={toggleSound}
          aria-label={isPlaying ? "Mute Healing Soundscape" : "Play 432Hz Healing Soundscape"}
          className={`p-2.5 rounded-xl transition-all flex items-center gap-2 text-xs font-bold ${
            isPlaying
              ? "bg-emerald-600 text-white dark:bg-emerald-500 dark:text-black shadow-lg shadow-emerald-500/30"
              : "bg-neutral-100 hover:bg-neutral-200 text-neutral-700 dark:bg-white/[0.06] dark:hover:bg-white/[0.1] dark:text-gray-300"
          }`}
        >
          {isPlaying ? (
            <>
              <Volume2 className="w-4 h-4 animate-pulse" />
              <span className="hidden sm:inline">432Hz Sanctuary Calm</span>
            </>
          ) : (
            <>
              <VolumeX className="w-4 h-4 text-neutral-500 dark:text-gray-400" />
              <span className="hidden sm:inline">Play Healing Soundscape</span>
            </>
          )}
        </button>

        {isPlaying && (
          <div className="flex items-center gap-0.5 px-2">
            <span className="w-1 h-3 bg-emerald-400 rounded-full animate-[pulse_1s_infinite_100ms]" />
            <span className="w-1 h-5 bg-teal-300 rounded-full animate-[pulse_1s_infinite_250ms]" />
            <span className="w-1 h-2 bg-emerald-400 rounded-full animate-[pulse_1s_infinite_400ms]" />
            <span className="w-1 h-4 bg-amber-300 rounded-full animate-[pulse_1s_infinite_150ms]" />
          </div>
        )}
      </div>
    </div>
  );
}
