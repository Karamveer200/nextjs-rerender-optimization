'use client';

import { useEffect, useRef, useState } from 'react';

export default function DragDropBox() {
  const reRerenderCountRef = useRef(0);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const [position, setPosition] = useState({
    x: 10,
    y: 10,
  });

  const isDraggingRef = useRef(false);

  const dragOffsetRef = useRef({
    x: position.x,
    y: position.y,
  });

  const parentRef = useRef<HTMLDivElement | null>(null);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = true;

    const rect = e.currentTarget.getBoundingClientRect();

    dragOffsetRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };

    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;

    const parentRect = parentRef.current?.getBoundingClientRect() || {
      left: 0,
      top: 0,
    };

    setPosition({
      x: e.clientX - parentRect.left - dragOffsetRef.current.x,
      y: e.clientY - parentRect.top - dragOffsetRef.current.y,
    });
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = false;

    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  if (isMounted) reRerenderCountRef.current++;

  return (
    <div
      className="relative h-screen w-full bg-black overflow-hidden"
      ref={parentRef}
    >
      <span className="text-white">
        {' '}
        ReRerender Count: {reRerenderCountRef.current}{' '}
      </span>

      <div
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        className="absolute h-32 w-32 rounded-xl bg-blue-500 cursor-grab active:cursor-grabbing"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>
    </div>
  );
}
