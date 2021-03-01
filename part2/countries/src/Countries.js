import DetailCountry from './DetailCountry.js';
import Country from './Country.js';

const Countries = ({countries, filter}) =>{
  
  const countriesFiltered = filter
    ? countries.filter(country => country.name.toLowerCase().includes(filter.toLowerCase()))
    : [];

  if (countriesFiltered.length === 1) {
    
    return <DetailCountry country={countriesFiltered[0]} />
  }

  return (
    <div>
    {
      countriesFiltered.length > 10
        ? <p>Too many matches, specify another filter</p>
        : countriesFiltered.map(country => <Country key={country.name} country={country}/>)
    }
    </div>
  )

}

export default Countries;