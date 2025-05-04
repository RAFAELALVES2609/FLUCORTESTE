import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center mb-6">
        <Skeleton className="h-8 w-8 mr-2" />
        <Skeleton className="h-10 w-64" />
      </div>

      <Skeleton className="h-12 w-full mb-6" />

      <div className="space-y-6">
        <div className="rounded-lg border">
          <Skeleton className="h-16 w-full rounded-t-lg" />
          <div className="p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
            </div>
            <Skeleton className="h-24 w-full" />
            <div className="flex justify-end">
              <Skeleton className="h-10 w-32" />
            </div>
          </div>
        </div>

        <div className="rounded-lg border">
          <Skeleton className="h-16 w-full rounded-t-lg" />
          <div className="p-6 space-y-4">
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-24 w-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
