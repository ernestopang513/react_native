
export const BasicTypes = () => {

  const name = "Ernesto";
  const age: number = 27;
  const isActive: boolean = true;



  return (
    <>

      <h3>Tipo basicos</h3>

      {name} {age} {isActive ? 'true': 'false'}
      
    </>
  )
}

