/* REST servisleriyle dönen nesneleri Front End nesneleriyle eşleştiriz.
Böylece dönen nesnelere ait attribute leri ilişkilendirir ve Front End uygulamasının 
her yerinde kullanırız.*/

export class Kitap {
    constructor(
        public isbnNo:number,
        public kitapAdi:String,
        public seriAdi:String,
        public yazarAdi:String,
        public yayinEviAdi:String,
        public aciklama:String,
        public resim:String
    ){
    }
}
