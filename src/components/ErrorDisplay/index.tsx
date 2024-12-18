interface ErrorDisplayProps {
  message: string;
}

export function ErrorDisplay({ message }: ErrorDisplayProps) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-red-500 text-center">
        <h2 className="text-2xl font-bold mb-2">Error</h2>
        <p>{message}</p>
      </div>
    </div>
  );
}
