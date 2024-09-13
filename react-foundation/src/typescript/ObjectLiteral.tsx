
export const ObjectLiteral = () => {

  interface Person {
    // fullName: string;
    firsName: string;
    lastName: string;
    age: number;
    address: Address;
  }

  interface Address {
    country: string;
    houseNo: number;
  }

  const person: Person = {
    // fullName: 'Ernesto Pang',
    age: 27,
    address: {
      country: 'Canada',
      houseNo: 587
    },
    firsName: "Ernesto",
    lastName: "Pang"
  }


  return (
    <>
      <h3>Objetos literales</h3>
      <pre>
        
        {JSON.stringify(person, null,1)}
      </pre>

    </>
  )
}