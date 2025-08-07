"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '@/components/theme-provider';

const Globe = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const outerSphereRef = useRef<THREE.Points | null>(null);
  const innerSphereRef = useRef<THREE.Points | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef<number>();

  useEffect(() => {
    if (!mountRef.current || rendererRef.current) return;

    const currentMount = mountRef.current;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    camera.position.z = 2.5;
    cameraRef.current = camera;
    
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const createSphere = (radius: number, color: number, size: number) => {
      const geometry = new THREE.SphereGeometry(radius, 40, 40);
      const material = new THREE.PointsMaterial({
        size,
        color,
        sizeAttenuation: true,
      });
      const points = new THREE.Points(geometry, material);
      return points;
    };
    
    const darkColor = 0xffffff;
    const lightColor = 0x000000;

    outerSphereRef.current = createSphere(1.5, theme === 'dark' ? darkColor : lightColor, 0.015);
    scene.add(outerSphereRef.current);
    
    innerSphereRef.current = createSphere(1, theme === 'dark' ? darkColor : lightColor, 0.01);
    scene.add(innerSphereRef.current);
    
    const handleMouseMove = (event: MouseEvent) => {
        mouseRef.current.x = (event.clientX / window.innerWidth) - 0.5;
        mouseRef.current.y = (event.clientY / window.innerHeight) - 0.5;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const clock = new THREE.Clock();

    const animate = () => {
      if (!rendererRef.current || !sceneRef.current || !cameraRef.current) return;
      animationFrameId.current = requestAnimationFrame(animate);
      
      const elapsedTime = clock.getElapsedTime();
      
      if (outerSphereRef.current) {
        outerSphereRef.current.rotation.y = elapsedTime * 0.1;
      }
      if (innerSphereRef.current) {
        innerSphereRef.current.rotation.y = elapsedTime * 0.1;
      }

      cameraRef.current.position.x += (mouseRef.current.x * 0.5 - cameraRef.current.position.x) * 0.05;
      cameraRef.current.position.y += (-mouseRef.current.y * 0.5 - cameraRef.current.position.y) * 0.05;
      cameraRef.current.lookAt(scene.position);

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (mountRef.current && cameraRef.current && rendererRef.current) {
        cameraRef.current.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if(animationFrameId.current) {
          cancelAnimationFrame(animationFrameId.current);
      }
      if (currentMount && rendererRef.current?.domElement) {
        currentMount.removeChild(rendererRef.current.domElement);
      }
      rendererRef.current?.dispose();
      if(outerSphereRef.current) {
        outerSphereRef.current.geometry.dispose();
        (outerSphereRef.current.material as THREE.Material).dispose();
      }
      if(innerSphereRef.current) {
        innerSphereRef.current.geometry.dispose();
        (innerSphereRef.current.material as THREE.Material).dispose();
      }
      rendererRef.current = null;
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const darkColor = 0xffffff;
    const lightColor = 0x000000;
    const newColor = new THREE.Color(theme === 'dark' ? darkColor : lightColor);
    
    if (outerSphereRef.current) {
      (outerSphereRef.current.material as THREE.PointsMaterial).color = newColor;
    }
    if (innerSphereRef.current) {
      (innerSphereRef.current.material as THREE.PointsMaterial).color = newColor;
    }
  }, [theme]);

  return <div ref={mountRef} className="absolute inset-0 z-0 opacity-50 dark:opacity-40" />;
};

export default Globe;
