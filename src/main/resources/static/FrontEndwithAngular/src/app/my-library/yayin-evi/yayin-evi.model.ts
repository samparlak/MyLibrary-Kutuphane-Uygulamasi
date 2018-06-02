/* REST servisleriyle dönen nesneleri Front End nesneleriyle eşleştiriz.
Böylece dönen nesnelere ait attribute leri ilişkilendirir ve Front End uygulamasının 
her yerinde kullanırız.*/

export class YayinEvi {
    constructor(
        public isbnNo:number,
        public yayinEviAdi:String,
        public kitapAdi:String,
        public aciklama:String
    ){}
}
