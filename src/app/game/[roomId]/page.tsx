import { GameRoom } from '@/components/GameRoom';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ roomId: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  return {
    title: `Sala ${resolvedParams.roomId} - Intervallo`,
  };
}

export default async function GameRoomPage({ params, searchParams }: Props) {
  const [resolvedParams, resolvedSearchParams] = await Promise.all([
    params,
    searchParams
  ]);

  return <GameRoom 
    roomId={resolvedParams.roomId}
    initialCategory={resolvedSearchParams.category as string | undefined} 
  />;
} 