import Image from 'next/image';

export default function HomeClients() {
    return (
        <section style={{ padding: '64px 0', background: '#fff', textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', padding: '0 8px' }}>
                <Image
                    src="/images/pics/BusTop TV Clients.webp"
                    alt="Bustop TV Clients"
                    width={1000}
                    height={500}
                    style={{ maxWidth: '100%', height: 'auto', borderRadius: 16 }}
                    priority
                />
            </div>
        </section>
    );
} 