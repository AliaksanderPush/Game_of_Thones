export default class GotService {

   constructor() {
      this._apiBase = 'https://www.anapioficeandfire.com/api';
      
   }

      async getResourse(url) {
        const response = await fetch(`${this._apiBase}${url}`);
        if (!response.ok) {
          throw new Error(`Could't fetch: ${url}, status: ${response.status}`);
         } 

           return  await response.json();
      } 

         getAllCharacters = async () => {
           const result = await  this.getResourse(`/characters?page=6&pageSize=10`);
           return result.map(this._transformCharacter)
         }

         getCharacters = async id => {
            const character = await this.getResourse(`/characters/${id}`);
            return this._transformCharacter(character);
         }

         getAllHouses = async () => {
           const result = await  this.getResourse(`/houses/`);
           return result.map(this._transformHouses)  

         }

         getHouses = async id => {
            const house = await this.getResourse(`/houses/${id}`);
            return this._transformHouses(house); 
         }

         getAllBooks = async () => {
           const result = await  this.getResourse(`/books/`);
           return result.map(this._transformBooks)  
         }

         getBooks = async id => {
            const book = await this.getResourse(`/books/${id}`);
            return this._transformBooks(book); 
         }



         _transformCharacter(char) {
            return {    
               name:char.name,
               gender:char.gender,
               born: char.born,
               died :char.died,
               culture: char.culture, 
               id: char.url.split('/').pop()
            }
            
         }

         _transformHouses(house) {
            return {    
               name:house.name,
               region: house.gender,
               words: house.born,
               titles: house.died,
               overlord: house.culture, 
               id: house.url.split('/').pop()
            }
         }
         _transformBooks(book) {
            return {    
               name:book.name,
               numberOfPages: book.number-jfPages,
               publiser: book.born,
               released: book.died,
               id: book.url.split('/').pop()
            } 
         }


}
