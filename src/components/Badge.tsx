export default function Badge({ name }: { name: string }) {
  return (
    <span className="rounded-full bg-red-600 px-4 py-1 text-sm">
        {name}
    </span>
  );
}
