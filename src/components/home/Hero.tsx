'use client';

import React, { useRef, useEffect } from 'react';

const Hero: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const directionRef = useRef<'forward' | 'backward'>('forward');

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        let animationFrame: number;

        const playForward = () => {
            video.playbackRate = 1;
            video.play();
            directionRef.current = 'forward';
        };

        // Remove playBackward using playbackRate = -1
        // Instead, use frame-stepping for reverse
        const stepBackward = () => {
            if (!video) return;
            if (video.currentTime <= 0) {
                playForward();
                return;
            }
            video.currentTime = Math.max(0, video.currentTime - 0.033);
            animationFrame = requestAnimationFrame(stepBackward);
        };

        const onEnded = () => {
            if (directionRef.current === 'forward') {
                video.currentTime = video.duration;
                directionRef.current = 'backward';
                animationFrame = requestAnimationFrame(stepBackward);
            } else {
                video.currentTime = 0;
                playForward();
            }
        };

        const onTimeUpdate = () => {
            if (directionRef.current === 'backward' && video.currentTime <= 0) {
                playForward();
            }
            if (directionRef.current === 'forward' && video.currentTime >= video.duration) {
                directionRef.current = 'backward';
                animationFrame = requestAnimationFrame(stepBackward);
            }
        };

        // Always use frame-stepping for reverse, never set playbackRate = -1
        video.onended = onEnded;
        video.ontimeupdate = onTimeUpdate;
        playForward();

        return () => {
            video.onended = null;
            video.ontimeupdate = null;
            cancelAnimationFrame(animationFrame);
        };
    }, []);

    return (
        <section style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
            <video
                ref={videoRef}
                autoPlay
                loop={false}
                muted
                playsInline
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: 0,
                }}
            >
                <source src="/videos/bustoptv-video.webm" type="video/webm" />
                Your browser does not support the video tag.
            </video>
            <div
                style={{
                    position: 'relative',
                    zIndex: 1,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    background: 'rgba(0,0,0,0.3)',
                    textAlign: 'center',
                    padding: '0 16px',
                }}
            >
                <h1 style={{ fontSize: 'clamp(2.2rem, 6vw, 3.5rem)', fontFamily: 'Josefin Sans', fontWeight: 700, marginBottom: 16, lineHeight: 1.1 }}>
                    Welcome to Bustop TV
                </h1>
                <p style={{ fontSize: 'clamp(1.1rem, 3vw, 2rem)', fontFamily: 'Josefin Sans', marginBottom: 32, lineHeight: 1.3 }}>
                    Zimbabwe&apos;s #1 Satirical & Social Commentary Platform
                </p>
                <a
                    href="#about"
                    style={{
                        display: 'inline-block',
                        background: '#E30613',
                        color: '#fff',
                        padding: '12px 32px',
                        borderRadius: 32,
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        textDecoration: 'none',
                        fontFamily: 'Josefin Sans',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                        transition: 'background 0.2s',
                    }}
                >
                    Learn More
                </a>
            </div>
        </section>
    );
};

export default Hero; 