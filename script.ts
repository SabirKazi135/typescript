type HasLenghth<T> = T extends { length: number } ? T : never;


