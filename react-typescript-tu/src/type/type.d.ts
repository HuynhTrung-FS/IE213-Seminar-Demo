declare interface IPerson {
	name: string;
	age: number;
	gender: string;
}

declare type IPersonSerialize = Omit<IPerson, "gender">;
