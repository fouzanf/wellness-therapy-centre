"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useTheme } from "next-themes";

export default function Hero3DCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const isLightMode = () =>
      resolvedTheme === "light" ||
      !document.documentElement.classList.contains("dark");

    // SCENE, CAMERA, RENDERER
    const scene = new THREE.Scene();
    const currentIsLight = isLightMode();
    scene.fog = new THREE.FogExp2(
      currentIsLight ? 0xfbf9f5 : 0x121110,
      0.002
    );

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(52, width / height, 1, 2000);
    camera.position.set(0, 36, 170);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // 1. ORGANIC HEALING QI FLOW (Silken Meridian Breathing Field)
    const waveCountX = 60;
    const waveCountY = 40;
    const numWaveParticles = waveCountX * waveCountY;
    const wavePositions = new Float32Array(numWaveParticles * 3);
    const waveColors = new Float32Array(numWaveParticles * 3);

    // Warm Organic Colors: Deep Sage, Forest Olive & Warm Champagne Gold
    const getThemeColors = (light: boolean) => ({
      deepSage: light ? new THREE.Color(0x1b3b2b) : new THREE.Color(0x34d399),
      forestOlive: light ? new THREE.Color(0x2d5a42) : new THREE.Color(0x10b981),
      champagneGold: light ? new THREE.Color(0xd4af37) : new THREE.Color(0xe2c974),
    });

    const updateParticleColors = (light: boolean) => {
      const { deepSage, forestOlive, champagneGold } = getThemeColors(light);
      let idx = 0;
      for (let ix = 0; ix < waveCountX; ix++) {
        for (let iy = 0; iy < waveCountY; iy++) {
          const ratio = (ix + iy) / (waveCountX + waveCountY);
          const col =
            ratio < 0.65
              ? deepSage.clone().lerp(forestOlive, ratio / 0.65)
              : forestOlive.clone().lerp(champagneGold, (ratio - 0.65) / 0.35);

          waveColors[idx * 3] = col.r;
          waveColors[idx * 3 + 1] = col.g;
          waveColors[idx * 3 + 2] = col.b;
          idx++;
        }
      }
    };

    let idx = 0;
    const separation = 4.4;
    for (let ix = 0; ix < waveCountX; ix++) {
      for (let iy = 0; iy < waveCountY; iy++) {
        const x = (ix - waveCountX / 2) * separation;
        const z = (iy - waveCountY / 2) * separation - 25;
        const y = 0;

        wavePositions[idx * 3] = x;
        wavePositions[idx * 3 + 1] = y;
        wavePositions[idx * 3 + 2] = z;
        idx++;
      }
    }

    updateParticleColors(currentIsLight);

    const waveGeometry = new THREE.BufferGeometry();
    waveGeometry.setAttribute("position", new THREE.BufferAttribute(wavePositions, 3));
    waveGeometry.setAttribute("color", new THREE.BufferAttribute(waveColors, 3));

    // Soft feathered circular mist texture for organic calm
    const createParticleTexture = (light: boolean) => {
      const canvasTexture = document.createElement("canvas");
      canvasTexture.width = 48;
      canvasTexture.height = 48;
      const ctx = canvasTexture.getContext("2d");
      if (ctx) {
        const gradient = ctx.createRadialGradient(24, 24, 0, 24, 24, 24);
        if (light) {
          gradient.addColorStop(0, "rgba(27, 59, 43, 0.7)");
          gradient.addColorStop(0.35, "rgba(45, 90, 66, 0.45)");
          gradient.addColorStop(0.7, "rgba(212, 175, 55, 0.15)");
          gradient.addColorStop(1, "rgba(251, 249, 245, 0)");
        } else {
          gradient.addColorStop(0, "rgba(246, 244, 239, 0.85)");
          gradient.addColorStop(0.3, "rgba(52, 211, 153, 0.5)");
          gradient.addColorStop(0.65, "rgba(212, 175, 55, 0.2)");
          gradient.addColorStop(1, "rgba(18, 17, 16, 0)");
        }
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 48, 48);
      }
      return new THREE.CanvasTexture(canvasTexture);
    };

    let particleTexture = createParticleTexture(currentIsLight);

    const waveMaterial = new THREE.PointsMaterial({
      size: currentIsLight ? 3.4 : 3.2,
      vertexColors: true,
      map: particleTexture,
      transparent: true,
      opacity: currentIsLight ? 0.38 : 0.45,
      blending: currentIsLight ? THREE.NormalBlending : THREE.AdditiveBlending,
      depthWrite: false,
    });

    const waveParticles = new THREE.Points(waveGeometry, waveMaterial);
    scene.add(waveParticles);

    // 2. SUBTLE GOLDEN SANCTUARY AURA (Radiant Qi Lotus Ring)
    const haloGeometry = new THREE.TorusGeometry(32, 0.6, 16, 80);
    const haloMaterial = new THREE.MeshBasicMaterial({
      color: 0xd4af37,
      transparent: true,
      opacity: currentIsLight ? 0.14 : 0.18,
    });
    const sanctuaryHalo = new THREE.Mesh(haloGeometry, haloMaterial);
    sanctuaryHalo.position.set(45, 22, -15);
    sanctuaryHalo.rotation.x = Math.PI / 2.8;
    scene.add(sanctuaryHalo);

    // Inner gentle halo
    const innerHaloGeometry = new THREE.TorusGeometry(18, 0.4, 16, 60);
    const innerHaloMaterial = new THREE.MeshBasicMaterial({
      color: currentIsLight ? 0x2d5a42 : 0x34d399,
      transparent: true,
      opacity: currentIsLight ? 0.12 : 0.16,
    });
    const innerHalo = new THREE.Mesh(innerHaloGeometry, innerHaloMaterial);
    sanctuaryHalo.add(innerHalo);

    // Theme Change Handler (smooth live transition)
    const applyThemeUpdates = (light: boolean) => {
      scene.fog = new THREE.FogExp2(
        light ? 0xfbf9f5 : 0x121110,
        0.002
      );
      updateParticleColors(light);
      waveGeometry.attributes.color.needsUpdate = true;

      particleTexture.dispose();
      particleTexture = createParticleTexture(light);
      waveMaterial.map = particleTexture;
      waveMaterial.size = light ? 3.4 : 3.2;
      waveMaterial.opacity = light ? 0.38 : 0.45;
      waveMaterial.blending = light ? THREE.NormalBlending : THREE.AdditiveBlending;
      waveMaterial.needsUpdate = true;

      haloMaterial.opacity = light ? 0.14 : 0.18;
      haloMaterial.needsUpdate = true;

      innerHaloMaterial.color.setHex(light ? 0x2d5a42 : 0x34d399);
      innerHaloMaterial.opacity = light ? 0.12 : 0.16;
      innerHaloMaterial.needsUpdate = true;
    };

    const observer = new MutationObserver(() => {
      const light = isLightMode();
      applyThemeUpdates(light);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Gentle camera sway on mouse movement
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.02;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.02;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseX = (e.touches[0].clientX - window.innerWidth / 2) * 0.02;
        mouseY = (e.touches[0].clientY - window.innerHeight / 2) * 0.02;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    // GENTLE BREATHING ANIMATION LOOP (Slow, Meditative Qi Pace)
    let animationFrameId: number;
    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Slower time factor for organic, breathing calm
      const elapsedTime = (performance.now() - startTime) * 0.00035;

      // Ultra-smooth subtle camera sway
      targetX += (mouseX - targetX) * 0.02;
      targetY += (mouseY - targetY) * 0.02;
      camera.position.x = targetX * 0.5;
      camera.position.y = 36 - targetY * 0.3;
      camera.lookAt(0, 10, -25);

      // Animate wave positions (Sinusoidal Qi Flow - gentle, slow undulating silk)
      const positions = waveGeometry.attributes.position.array as Float32Array;
      let i = 0;
      for (let ix = 0; ix < waveCountX; ix++) {
        for (let iy = 0; iy < waveCountY; iy++) {
          const u = ix * 0.12;
          const v = iy * 0.12;
          const y =
            Math.sin(u + elapsedTime * 1.5) * 4.0 +
            Math.cos(v + elapsedTime * 1.2) * 3.5 +
            Math.sin((u + v) * 0.4 + elapsedTime * 0.9) * 2.5;

          positions[i * 3 + 1] = y;
          i++;
        }
      }
      waveGeometry.attributes.position.needsUpdate = true;

      // Meditative halo rotation
      sanctuaryHalo.rotation.z = elapsedTime * 0.3;
      innerHalo.rotation.z = -elapsedTime * 0.4;
      sanctuaryHalo.position.y = 22 + Math.sin(elapsedTime * 1.8) * 2.5;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", handleResize);

      waveGeometry.dispose();
      waveMaterial.dispose();
      haloGeometry.dispose();
      haloMaterial.dispose();
      innerHaloGeometry.dispose();
      innerHaloMaterial.dispose();
      particleTexture.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  const opacityVal = !mounted ? 0.6 : (resolvedTheme === "light" ? 0.5 : 0.65);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ opacity: opacityVal }}
      aria-hidden="true"
    />
  );
}
