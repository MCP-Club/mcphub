interface TagListProps {
  title: string;
  items: string[];
  variant: 'blue' | 'green';
}

export const TagList = ({ title, items, variant }: TagListProps) => {
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    green: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  };

  if (!items?.length) return null;

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{title}</h2>
      <div className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <span 
            key={index}
            className={`px-3 py-1 rounded-full text-sm ${colorClasses[variant]}`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};
