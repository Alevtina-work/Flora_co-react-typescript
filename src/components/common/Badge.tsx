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
        absolute -top-3 -right-3
        min-w-[24px] h-[24px]
        px-2
        flex items-center justify-center
        text-sm font-semibold
        rounded-full
        pointer-events-none
        leading-none

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