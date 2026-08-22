import KineticGrid from "@/components/ui/kinetic-grid";

export default function KineticGridDemo() {
  return (
    <KineticGrid globalColor="shakti">
      <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <span className="mb-5 rounded-full border border-rose-500/20 bg-rose-50 px-3.5 py-1 text-xs font-semibold tracking-wide text-rose-600">
          Interactive Background
        </span>
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
          Move your cursor. Click anywhere.
        </h1>
        <p className="mt-4 max-w-md text-base text-gray-600">
          A kinetic grid that warps toward the pointer and ripples on every click.
        </p>
      </div>
    </KineticGrid>
  );
}
