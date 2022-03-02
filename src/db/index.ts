import Dexie, { Table } from 'dexie';

type ImgFile = {
  id: string;
  src: string | null;
  cropped: string | null;
  dimensions: {
    x: number;
    y: number;
    zoom: number;
  };
  small?: boolean;
};

export interface File {
  id: string;
  content: ImgFile;
}

export interface Order {
  id: string;
  order: number;
}

export interface Transaction {
  id: string;
  transaction: string;
}

export class MySubClassedDexie extends Dexie {
  // 'friends' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  files!: Table<File>;
  orders!: Table<Order>;
  transactions!: Table<Transaction>;

  constructor() {
    super('myDatabase');
    this.version(1).stores({
      files: 'id, content', // Primary key and indexed props
      orders: 'id, order',
      transactions: 'id, transaction',
    });
  }
}

export const db = new MySubClassedDexie();
