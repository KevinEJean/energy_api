export class Building {
    id: string;
    name: string;
    code: string;
    address?: string;
    yearBuilt: number;
    createdAt: Date;
    updatedAt: Date;

    constructor(code: string, name: string, yearBuilt: number, address?: string) {
      this.code = code;
      this.name = name;
      this.yearBuilt = yearBuilt;
      address?? this.address
      this.createdAt = new Date();
      this.updatedAt = new Date();
    }
  }