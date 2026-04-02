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
  // Use environment variable for base URL, otherwise default to local 'aeromitra' folder
  const baseUrl = import.meta.env.VITE_IMAGE_BASE_URL || '/images/aeromitra';
  
  // Clean up slashes
  const cleanImageName = imageName.startsWith('/') ? imageName.substring(1) : imageName;
  const cleanBaseUrl = baseUrl.endsWith('/') ? baseUrl.substring(0, baseUrl.length - 1) : baseUrl;
  
  return `${cleanBaseUrl}/${cleanImageName}`;
};
