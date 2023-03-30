import "./About.css";
import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function About() {
  const { id } = useParams();
  const url = "https://restcountries.com/v3.1/name/" + id;
  const { data, IsPending, error } = useFetch(url);
  console.log(data);
  
  return (
    <div className="container">
      <Link to="/" className="btn">
        ← Back
      </Link>

      {data && <div className="about-context">
        <img src={`${data[0].flags.svg}`} alt="" className="country-img" />
        <div className="intro-content">
          <h2 className="intro-title">{data[0].name.common}</h2>
          <div className="text-wrapper">
            <div className="text-wrapper-left">
              <p>
                <b>Native Name: </b> <span className="native-name">{data[0].name.official}</span>
              </p>
              <p>
                <b>Population: </b> <span className="population">{data[0].population}</span>
              </p>
              <p>
                <b>Region: </b> <span className="region">{data[0].region}</span>
              </p>
              <p>
                <b>Sub Region: </b> <span className="sub-region">{data[0].subregion ? data[0].subregion : 'No subregion'}</span>
              </p>
              <p>
                <b>Capital: </b> <span className="capital">{data[0].capital[0]}</span>
              </p>
            </div>
            <div className="text-wrapper-right">
              <p>
                <b>Top Level Domain: </b> <span className="domain">{data[0].tld}</span>
              </p>
              <p>
                <b>Currencies: </b> <span className="currency">{Object.keys(data[0].currencies)}</span>
              </p>
              <p>
                <b>Languages: </b> <span className="language">{Object.keys(data[0].languages)}</span>
              </p>
            </div>
          </div>
          {data[0].borders && <div className="borders">
            <b>Border Countries: </b>
            {data[0].borders.map((border) => {
              return (
                <Link to={`/about/${border}`} className="border-country">
                {border}
              </Link>
              )
            })}
            
            
          </div>}
          {/* <ul>
            <li>Border Countries: </li>
            <li>
              <a href="" className="border-country">
                France
              </a>
            </li>
            <li>Germany</li>
            <li>France</li>
            <li>Germany</li>
            <li>France</li>
            <li>Germany</li>
            <li>France</li>
            <li>Germany</li>
          </ul> */}
        </div>
      </div>}
    </div>
  );
}

export default About;
