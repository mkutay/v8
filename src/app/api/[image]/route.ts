import { getImage } from "@/lib/minio";

export async function GET(request: Request, { params }: { params: Promise<{ image: string }> }) {
  const { image } = await params;
  const ext = image.split('.').pop();
  const contentType = 'image/' + ext;
  
  const imageStream = await getImage(image);
  
  // This is dubious
  return new Response(imageStream as unknown as ReadableStream<Uint8Array>, {
    headers: {
      'Content-Type': contentType,
    },
  });
}