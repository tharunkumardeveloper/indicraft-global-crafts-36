const PIXABAY_API_KEY = "51493049-4ced515bb69b49e943844a02a";
const PIXABAY_BASE_URL = "https://pixabay.com/api/";

export interface PixabayImage {
  id: number;
  webformatURL: string;
  tags: string;
  previewURL: string;
  largeImageURL: string;
}

export interface PixabayResponse {
  hits: PixabayImage[];
  total: number;
}

export const searchPixabayImages = async (
  query: string,
  category: string = "all",
  perPage: number = 20
): Promise<PixabayResponse> => {
  try {
    const params = new URLSearchParams({
      key: PIXABAY_API_KEY,
      q: query,
      image_type: "photo",
      category,
      min_width: "1920",
      min_height: "1080",
      per_page: perPage.toString(),
      safesearch: "true",
      order: "popular"
    });

    const response = await fetch(`${PIXABAY_BASE_URL}?${params}`);
    
    if (!response.ok) {
      throw new Error(`Pixabay API error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching images from Pixabay:", error);
    throw error;
  }
};

export const getArtisanImages = async () => {
  const queries = [
    "indian artisan craftsman",
    "handloom weaving india",
    "pottery ceramic art",
    "wood carving traditional",
    "metal craft brass",
    "textile embroidery",
    "stone carving sculpture",
    "jewelry making traditional",
    "carpet weaving kashmir",
    "indian handicrafts"
  ];

  const imagePromises = queries.map(query => 
    searchPixabayImages(query, "all", 3)
  );

  try {
    const results = await Promise.all(imagePromises);
    return results.flatMap(result => result.hits);
  } catch (error) {
    console.error("Error fetching artisan images:", error);
    return [];
  }
};