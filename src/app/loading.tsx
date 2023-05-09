import { SkeletonCard } from '@/components/skeleton-card';

export default function Loading() {
  return (
    <div>
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  );
}
