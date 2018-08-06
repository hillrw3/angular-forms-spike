export class Person {
  constructor(
    public email: string,
    public name: string,
    public favoriteInstrument: string
  ) {
  }
}

export const INSTRUMENTS: string[] = ['drums', 'keyboard', 'guitar', 'vocals', 'bass'];
