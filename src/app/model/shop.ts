export class Shop {

  shopId: number;
  name: string;
  address: string;
  phone: string;
  info: string;

  constructor(shopId: number, name: string, address: string, phone: string, info: string) {
    this.shopId = shopId;
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.info = info;
  }
}
