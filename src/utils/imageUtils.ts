export const getOptimizedImage = (url: string, width: number = 800) => {
  if (!url || !url.includes("imagekit.io")) return url;

  // Split base URL and existing params
  const [baseUrl, query] = url.split("?");

  // Parse existing params
  const params = new URLSearchParams(query);

  // Remove existing transformation-related params to avoid conflicts
  params.delete("tr");
  params.delete("w");
  params.delete("h");
  params.delete("q");
  params.delete("f");
  params.delete("auto"); // Remove 'auto' if it exists from previous attempts
  params.delete("fit");

  // Add new optimization params
  // f-auto: best format (webp/avif)
  // q-auto: automatic quality
  // w-[width]: resize
  params.append("tr", `w-${width},f-auto,q-auto`);

  return `${baseUrl}?${params.toString()}`;
};

export const getImageUrl = (imageName: string) => {
  // Images are served directly from the public/images/aeromitra folder.
  // In Vite, the public/ directory is served at the root (/), so the
  // correct absolute path is /images/aeromitra — no backend needed.
  const baseUrl = '/images/aeromitra';

  // Clean up slashes
  const cleanImageName = imageName.startsWith('/') ? imageName.substring(1) : imageName;

  return `${baseUrl}/${cleanImageName}`;
};
