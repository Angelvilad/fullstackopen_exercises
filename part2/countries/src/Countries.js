import DetailCountry from './DetailCountry.js';

const Countries = ({countries, filter}) =>{
  
  const countriesFiltered = filter
    ? countries.filter(countrie => countrie.name.toLowerCase().includes(filter.toLowerCase()))
    : [];

  if (countriesFiltered.length === 1) {
    
    return <DetailCountry country={countriesFiltered[0]} />
  }

  return (
    <div>
    {
      countriesFiltered.length > 10
        ? <p>Too many matches, specify another filter</p>
        : countriesFiltered.map(countrie => <p key={countrie.name}>{countrie.name}</p>)
    }
    </div>
  )

}

export default Countries;