import {Category} from "./category";
import {Image} from "./image";

export class Game {
  gameId: number;
  name: string;
  description?: string;
  price: number;
  currency?: string;
  quantity?: number;
  categories?: Category[];
  images?: Image[];
  imagePreview: Image;
  rating?: number;
  dateAdded?: Date;
  brand?: string;
  discount?: number;
  priceWithDiscount?: number;

  constructor(gameId: number, name: string, description: string, price: number, currency: string,
              quantity: number, categories: Category[], images: Image[], imagePreview: Image,
              rating: number, dateAdded: Date, brand: string, discount: number, priceWithDiscount: number) {
    this.gameId = gameId;
    this.name = name;
    this.description = description;
    this.price = price;
    this.currency = currency;
    this.quantity = quantity;
    this.categories = categories;
    this.images = images;
    this.imagePreview = imagePreview;
    this.rating = rating;
    this.dateAdded = dateAdded;
    this.brand = brand;
    this.discount = discount;
    this.priceWithDiscount = priceWithDiscount;
  }
}
