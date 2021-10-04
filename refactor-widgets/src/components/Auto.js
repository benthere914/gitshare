import React from 'react';
import { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// class AutoComplete extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       inputVal: '',
//     };
//   }
const AutoComplete = ({names}) => {
    const [inputVal, setInputVal] = useState('');
    const handleInput = (e) => {setInputVal(e.target.value)}

    // const name = e.target.innerText;
    // this.setState({ inputVal: name });
    const selectName = (e) => {setInputVal(e.target.innerText);}

  const matches = () => {
    // const { inputVal } = this.state;
    // const { names } = this.props;
    const inputLength = inputVal.length;
    const matches = [];

    if (inputLength === 0) return names;

    names.forEach(name => {
      const nameSegment = name.slice(0, inputLength);
      if (nameSegment.toLowerCase() === inputVal.toLowerCase()) {
        matches.push(name);
      }
    });

    if (matches.length === 0) matches.push('No matches');

    return matches;
  }

//   render() {
    const results = matches().map((result) => (
      <CSSTransition
        key={result}
        classNames="result"
        timeout={{ enter: 500, exit: 300 }}
      >
        <li>{result}</li>
      </CSSTransition>
    ));

    return (
      <section>
        <h1>Autocomplete</h1>
        <div className="auto">
          <input
            onChange={handleInput}
            value={inputVal}
            placeholder="Search..."
          />
          <ul className="auto-dropdown" onClick={selectName}>
            <TransitionGroup>
              {results}
            </TransitionGroup>
          </ul>
        </div>
      </section>
    );
  }
// };

export default AutoComplete;
