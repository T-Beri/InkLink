/*"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { useParams } from "next/navigation";

export function Room({ children }: { children: ReactNode }) {
    const params = useParams();
  return (
    <LiveblocksProvider publicApiKey={"pk_dev_41eMlO7gu0OmVV67rVDb49YP1dDVDi5ZxUNuX-84eJss2xqF9ycMAbJDPIOaGA4A"}>
      <RoomProvider id={params.documentId as string}>
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}*/