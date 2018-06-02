/* REST servisleriyle dönen nesneleri Front End nesneleriyle eşleştiriz.
Böylece dönen nesnelere ait attribute leri ilişkilendirir ve Front End uygulamasının 
her yerinde kullanırız.*/

export class Yazar {
    constructor(
        public isbnNo:number,
        public yazarAdi:String,
        public kitapAdi:String,
        public aciklama:String,
        public resim:String
    ){}
}
