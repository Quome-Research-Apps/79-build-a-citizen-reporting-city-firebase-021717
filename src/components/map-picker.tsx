import Image from 'next/image';
import { MapPin } from 'lucide-react';

export function MapPicker() {
  return (
    <div className="space-y-2">
      <div className="relative w-full h-48 bg-muted rounded-lg overflow-hidden border">
        <Image
          src="https://picsum.photos/600/400"
          alt="Map for location picking"
          layout="fill"
          objectFit="cover"
          className="opacity-40"
          data-ai-hint="map satellite"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <MapPin className="h-10 w-10 text-primary drop-shadow-lg" fill="currentColor" />
        </div>
      </div>
      <p className="text-sm text-center text-muted-foreground">
        The location will be pinned automatically.
      </p>
    </div>
  );
}
