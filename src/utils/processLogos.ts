import { loadImage, removeBackground, removeBackgroundAndChangeColor } from './imageProcessor';
import fullMoonIcon from "@/assets/venmathi-full-moon-icon.png";
import potIcon from "@/assets/indicraft-pot-icon.png";

export const processVenmathiLogo = async (): Promise<Blob> => {
  try {
    const image = await loadImage(fullMoonIcon);
    return await removeBackground(image);
  } catch (error) {
    console.error('Error processing Venmathi logo:', error);
    throw error;
  }
};

export const processIndicraftLogo = async (): Promise<Blob> => {
  try {
    const image = await loadImage(potIcon);
    // Use dark red color matching the website theme
    return await removeBackgroundAndChangeColor(image, '#8B0000');
  } catch (error) {
    console.error('Error processing Indicraft logo:', error);
    throw error;
  }
};

export const createProcessedLogoUrl = (blob: Blob): string => {
  return URL.createObjectURL(blob);
};

export const downloadProcessedLogo = (blob: Blob, filename: string) => {
  const url = createProcessedLogoUrl(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};