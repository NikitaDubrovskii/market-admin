export class News {
  newsId: number;
  title: string;
  description: string;
  text?: string;
  dateOfPublication: Date;


  constructor(newsId: number, title: string, description: string, text: string, dateOfPublication: Date) {
    this.newsId = newsId;
    this.title = title;
    this.description = description;
    this.text = text;
    this.dateOfPublication = dateOfPublication;
  }
}
