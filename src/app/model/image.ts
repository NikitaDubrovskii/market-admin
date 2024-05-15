export class Image {

  imageId: number;
  name: string;
  description?: string;
  preview: boolean;
  imageBytes: string;
  gameId: number;

  constructor(imageId: number, name: string, description: string, preview: boolean, imageBytes: string, gameId: number) {
    this.imageId = imageId;
    this.name = name;
    this.description = description;
    this.preview = preview;
    this.imageBytes = imageBytes;
    this.gameId = gameId;
  }
}
