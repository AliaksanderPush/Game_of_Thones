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




}



