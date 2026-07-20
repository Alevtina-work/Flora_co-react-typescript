import React from 'react';

interface BadgeProps {
    count: number;
    active?: boolean;
}

const Badge = ({
    count,
    active = false,
}: BadgeProps) => {
    return (
        <span
            className={`
        absolute -top-2 -right-2
        min-w-[18px] h-[18px]
        px-1
        flex items-center justify-center
        text-[10px] font-bold
        rounded-full
        pointer-events-none

        ${active
                    ? 'bg-white text-green-600'
                    : 'bg-green-600 text-white'
                }
      `}
        >
            {count}
        </span>
    );
};

export default Badge;