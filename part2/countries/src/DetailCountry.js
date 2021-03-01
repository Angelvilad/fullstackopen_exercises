const DetailCountry = ({country}) => {

  return (
    <div>
      <h2>{country.name}</h2>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <h3>languages</h3>
      <ul>
      {
        country.languages.map(language => <li key={language.name}>{language.name}</li>)
      }
      </ul>
      <img alt={`${country.name} flag`} src={country.flag} style={{width: '10%'}} />
    </div>
  )
}

export default DetailCountry;