export default function HeroVideo() {
    return (
        <section>
            <video autoPlay loop muted style={{ width: '100%' }}>
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </section>
    );
} 