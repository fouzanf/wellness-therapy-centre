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
    scene.fog = currentIsLight
      ? null
      : new THREE.FogExp2(0x0a0a0c, 0.0018);

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(55, width / height, 1, 2000);
    camera.position.set(0, 40, 160);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // 1. ORGANIC HEALING PARTICLE WAVE (Vital Qi Meridian Wave)
    const waveCountX = 65;
    const waveCountY = 45;
    const numWaveParticles = waveCountX * waveCountY;
    const wavePositions = new Float32Array(numWaveParticles * 3);
    const waveColors = new Float32Array(numWaveParticles * 3);

    // Dynamic colors based on theme
    const getThemeColors = (light: boolean) => ({
      emerald: light ? new THREE.Color(0x059669) : new THREE.Color(0x10b981),
      gold: light ? new THREE.Color(0xd97706) : new THREE.Color(0xfbbf24),
      teal: light ? new THREE.Color(0x0d9488) : new THREE.Color(0x06b6d4),
    });

    const updateParticleColors = (light: boolean) => {
      const { emerald, gold, teal } = getThemeColors(light);
      let idx = 0;
      for (let ix = 0; ix < waveCountX; ix++) {
        for (let iy = 0; iy < waveCountY; iy++) {
          const ratio = (ix + iy) / (waveCountX + waveCountY);
          const col =
            ratio < 0.6
              ? emerald.clone().lerp(teal, ratio / 0.6)
              : teal.clone().lerp(gold, (ratio - 0.6) / 0.4);

          waveColors[idx * 3] = col.r;
          waveColors[idx * 3 + 1] = col.g;
          waveColors[idx * 3 + 2] = col.b;
          idx++;
        }
      }
    };

    let idx = 0;
    const separation = 4.2;
    for (let ix = 0; ix < waveCountX; ix++) {
      for (let iy = 0; iy < waveCountY; iy++) {
        const x = (ix - waveCountX / 2) * separation;
        const z = (iy - waveCountY / 2) * separation - 20;
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

    // Particle texture generator
    const createParticleTexture = (light: boolean) => {
      const canvasTexture = document.createElement("canvas");
      canvasTexture.width = 32;
      canvasTexture.height = 32;
      const ctx = canvasTexture.getContext("2d");
      if (ctx) {
        const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
        if (light) {
          gradient.addColorStop(0, "rgba(5, 150, 105, 0.95)");
          gradient.addColorStop(0.35, "rgba(16, 185, 129, 0.7)");
          gradient.addColorStop(0.7, "rgba(5, 150, 105, 0.2)");
          gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
        } else {
          gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
          gradient.addColorStop(0.3, "rgba(16, 185, 129, 0.8)");
          gradient.addColorStop(0.7, "rgba(16, 185, 129, 0.2)");
          gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        }
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 32, 32);
      }
      return new THREE.CanvasTexture(canvasTexture);
    };

    let particleTexture = createParticleTexture(currentIsLight);

    const waveMaterial = new THREE.PointsMaterial({
      size: currentIsLight ? 3.0 : 2.8,
      vertexColors: true,
      map: particleTexture,
      transparent: true,
      opacity: currentIsLight ? 0.65 : 0.85,
      blending: currentIsLight ? THREE.NormalBlending : THREE.AdditiveBlending,
      depthWrite: false,
    });

    const waveParticles = new THREE.Points(waveGeometry, waveMaterial);
    scene.add(waveParticles);

    // 2. FLOATING VITAL MERIDIAN SPHERE (Acupuncture Core Energy Hub)
    const sphereGeometry = new THREE.IcosahedronGeometry(28, 3);
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: currentIsLight ? 0x059669 : 0x10b981,
      wireframe: true,
      transparent: true,
      opacity: currentIsLight ? 0.18 : 0.14,
    });
    const meridianSphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    meridianSphere.position.set(45, 20, -10);
    scene.add(meridianSphere);

    // Inner glowing core
    const coreGeometry = new THREE.IcosahedronGeometry(14, 2);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: currentIsLight ? 0xd97706 : 0xfbbf24,
      wireframe: true,
      transparent: true,
      opacity: currentIsLight ? 0.25 : 0.22,
    });
    const coreSphere = new THREE.Mesh(coreGeometry, coreMaterial);
    meridianSphere.add(coreSphere);

    // Theme Change Handler (live update without canvas re-creation)
    const applyThemeUpdates = (light: boolean) => {
      scene.fog = light ? null : new THREE.FogExp2(0x0a0a0c, 0.0018);
      updateParticleColors(light);
      waveGeometry.attributes.color.needsUpdate = true;

      particleTexture.dispose();
      particleTexture = createParticleTexture(light);
      waveMaterial.map = particleTexture;
      waveMaterial.size = light ? 3.0 : 2.8;
      waveMaterial.opacity = light ? 0.65 : 0.85;
      waveMaterial.blending = light ? THREE.NormalBlending : THREE.AdditiveBlending;
      waveMaterial.needsUpdate = true;

      sphereMaterial.color.setHex(light ? 0x059669 : 0x10b981);
      sphereMaterial.opacity = light ? 0.18 : 0.14;
      sphereMaterial.needsUpdate = true;

      coreMaterial.color.setHex(light ? 0xd97706 : 0xfbbf24);
      coreMaterial.opacity = light ? 0.25 : 0.22;
      coreMaterial.needsUpdate = true;
    };

    // Watch for class attribute changes on documentElement (.dark vs .light)
    const observer = new MutationObserver(() => {
      const light = isLightMode();
      applyThemeUpdates(light);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // MOUSE INTERACTION & SMOOTH LERP
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.05;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.05;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseX = (e.touches[0].clientX - window.innerWidth / 2) * 0.05;
        mouseY = (e.touches[0].clientY - window.innerHeight / 2) * 0.05;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    // RESIZE LISTENER
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    // ANIMATION LOOP
    let animationFrameId: number;
    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = (performance.now() - startTime) * 0.001;

      // Smooth camera sway with mouse
      targetX += (mouseX - targetX) * 0.04;
      targetY += (mouseY - targetY) * 0.04;
      camera.position.x = targetX * 0.8;
      camera.position.y = 35 - targetY * 0.5;
      camera.lookAt(0, 10, -20);

      // Animate wave positions (Sinusoidal Qi Flow)
      const positions = waveGeometry.attributes.position.array as Float32Array;
      let i = 0;
      for (let ix = 0; ix < waveCountX; ix++) {
        for (let iy = 0; iy < waveCountY; iy++) {
          const u = ix * 0.15;
          const v = iy * 0.15;
          const y =
            Math.sin(u + elapsedTime * 1.2) * 6 +
            Math.cos(v + elapsedTime * 1.5) * 5 +
            Math.sin((u + v) * 0.5 + elapsedTime * 0.8) * 4;

          positions[i * 3 + 1] = y;
          i++;
        }
      }
      waveGeometry.attributes.position.needsUpdate = true;

      // Animate Meridian sphere
      meridianSphere.rotation.y = elapsedTime * 0.18;
      meridianSphere.rotation.x = Math.sin(elapsedTime * 0.12) * 0.3;
      coreSphere.rotation.y = -elapsedTime * 0.35;
      coreSphere.rotation.z = Math.cos(elapsedTime * 0.25) * 0.4;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", handleResize);

      // Dispose resources
      waveGeometry.dispose();
      waveMaterial.dispose();
      sphereGeometry.dispose();
      sphereMaterial.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      particleTexture.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  const opacityVal = !mounted ? 0.88 : (resolvedTheme === "light" ? 0.75 : 0.88);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ opacity: opacityVal }}
      aria-hidden="true"
    />
  );
}
