import { CSSProperties, useMemo } from 'react';

interface AvatarProps {
    src?: string;
    size?: number;
    alt?: string;
    radius?: number;
}

export const Avatar = ({
    src, size, alt, radius,
}: AvatarProps) => {
    const styles = useMemo<CSSProperties>(() => ({
        width: size || 100,
        height: size || 100,
        borderRadius: `${radius}%` || 50,
    }), [radius, size]);

    return (
        <img
            src={src}
            alt={alt}
            style={styles}
            className="Avatar"
        />
    );
};
