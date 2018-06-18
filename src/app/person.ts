export class Person {
  constructor(
    public email: string,
    public name: string,
    public primaryInstrument: string
  ) {
  }
}

export const INSTRUMENTS: string[] = ['drums', 'keyboard', 'guitar', 'vocals', 'bass'];
