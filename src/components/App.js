import React from 'react';
import { StoreProvider, StoreConsumer } from '../store';
import { GameWrapper, FormWrapper } from '../styles/GameWrapper';
import GameGrids from './GameGrids';

class App extends React.Component {
  state = {
    gridsLength: '',
  };

  // ************************ //

  handleChange = event => {
    this.setState({ gridsLength: event.target.value });
  };

  // ************************ //

  render() {
    const { gridsLength } = this.state;

    return (
      <StoreProvider>
        <StoreConsumer>
          {({ isFormActive, getGridsNumber }) => (
            <GameWrapper>
              <h1>React Tic-Tac-Toe</h1>
              <p>
                Please ignore CSS / UX{' '}
                <span role="img" aria-label="img">
                  🙏
                </span>{' '}
                for now
              </p>
              {/* If form is active then I'll show Input Form else will show Game Grids to Play */}
              {isFormActive ? (
                <FormWrapper>
                  <p>Please select a Number ranging from 3 - 6 for Tic-Tac-Toe Grids</p>
                  <form
                    onSubmit={event => {
                      // First I'll save user input (numeric value) into my Global Store
                      getGridsNumber(event, gridsLength);

                      // Second, I'm going to clear my Component State
                      this.setState({ gridsLength: '' });
                    }}
                  >
                    <input
                      value={gridsLength}
                      type="number"
                      placeholder="Please Choose No of Grids"
                      onChange={this.handleChange}
                    />
                    <button type="submit">Save</button>
                  </form>
                </FormWrapper>
              ) : (
                <GameGrids />
              )}
            </GameWrapper>
          )}
        </StoreConsumer>
      </StoreProvider>
    );
  }
}

export default App;
