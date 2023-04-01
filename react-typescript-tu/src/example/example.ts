export function serializePerson(person: IPerson): IPersonSerialize {
	return {
		age: person.age,
		name: person.name,
	};
}
