export default function Pagination({ page, setPage }: any) {
  return (
    <div className="flex justify-center gap-4 mt-8">
      <button
        onClick={() => setPage((p: number) => Math.max(p - 1, 1))}
        className="glass px-4 py-2"
      >
        Prev
      </button>

      <span>{page}</span>

      <button
        onClick={() => setPage((p: number) => p + 1)}
        className="glass px-4 py-2"
      >
        Next
      </button>
    </div>
  );
}
