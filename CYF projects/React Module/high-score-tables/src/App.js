import logo from './logo.svg';
import './App.css';


function App(props) {
  let allCountryScores = props.countryScore;
  return (
    <div className="App">
      <h1>High Scores per Country</h1>
     { allCountryScores.map(country => {
      return (
        <div className="CountryCard">
          <h3>HIGH SCORES: {country.name}</h3>
          <div className="CardBorder">
            {country.scores.map(person => {
              return (
                <div className="ScoreLine">
                  <p className="Name">{person.n}</p>
                  <p className="Score">{person.s}</p>
                </div>
              );
            })}
            
          </div>
        </div>
      );
     }
      )}
      
    </div>
  );
}

// function App(props) {
//   let allCountryScores = props.countryScore;
//   console.log(allCountryScores);
//   return (
//     <div className="App">
//       <h1>High Scores per Country</h1>
//       <div className="CountryCard">
//             <h3>HIGH SCORES: country</h3>
//             <div className="CardBorder">
//               <div className="ScoreLine">
//                     <p className="Name">Name</p>
//                     <p className="Score">score</p>
//               </div>
//             </div>
//           </div>
//     </div>
//   );
// }

export default App;
