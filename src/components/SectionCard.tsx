type SectionCardProps = {
    title: string;
    description: string;
};

export default function SectionCard({ title, description }: SectionCardProps) {
    return (
        <div style={{ border: '1px solid #ccc', padding: 16, borderRadius: 8 }}>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
} 