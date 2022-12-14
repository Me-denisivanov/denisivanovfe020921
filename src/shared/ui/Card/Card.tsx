import { HTMLAttributes, ReactNode } from 'react';
import './Card.css';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode
}

export const Card = ({ className, children, ...otherProps }: CardProps) => (
    <div
        className="Card"
        {...otherProps}
    >
        {children}
    </div>
);
