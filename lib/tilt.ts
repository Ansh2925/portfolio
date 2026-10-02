"use client";

import type React from "react";

export function cardTilt(
  event: React.PointerEvent<HTMLElement>,
  maxTilt: number = 8
) {
  const node = event.currentTarget;
  const rect = node.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const rotateX = ((y - centerY) / centerY) * -maxTilt;
  const rotateY = ((x - centerX) / centerX) * maxTilt;

  node.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
}

export function resetTilt(event: React.PointerEvent<HTMLElement>) {
  event.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
}
