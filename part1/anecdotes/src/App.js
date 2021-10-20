import React, {useState} from 'react';
import './index.css';

const Button = ({text, onClick}) => <button onClick = {onClick}>{text}</button>

const App = () => {

    const anecdotesData = {
      //key is anecdote id & value is anecdote data
      1: {
        anecdote: 'If it hurts, do it more often',
        vote: 0
      },
      2: {
        anecdote: 'Adding manpower to a late software project makes it later!',
        vote: 0
      },
      3: {
        anecdote: 'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        vote: 0
      },
      4: {
        anecdote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        vote: 0
      },
      5: {
        anecdote: 'Premature optimization is the root of all evil.',
        vote: 0
      },
      6: {
        anecdote: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        vote: 0
      },
      7: {
        anecdote: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients',
        vote: 0
      }
    }

    const [anecdotes, setAnecdotes] = useState(anecdotesData);

    const noOfAcecdotes = Object.keys(anecdotesData).length;
    const randomGenerator = () => Math.floor((Math.random() * noOfAcecdotes) + 1);

    const [selectedIndex, setSelectedIndex] = useState(randomGenerator);

    const getRandomIndex = () =>{
      let random = randomGenerator();
      do{
        random = randomGenerator();
      }while(selectedIndex === random);
      return random;
    }

    const handleNextAnecdote = () => {
      setSelectedIndex(getRandomIndex());
    }

    const handleVote = () => {
      const newAnecdotes = {
        ...anecdotes,
        [selectedIndex] : {
          ...anecdotes[selectedIndex],
          vote: anecdotes[selectedIndex].vote + 1
        }
      }
      setAnecdotes(newAnecdotes);
    }

    const getMostVotedAnecdote = () => {
      const mostVoted = Object.entries(anecdotes)
            .map(e => {
              return {'id': e[0], 'vote': e[1].vote}})
            .reduce((accumulator, currentValue) => {
              if(accumulator && (accumulator.vote > currentValue.vote)){
                return accumulator;
              } else if(accumulator && (accumulator.vote === currentValue.vote)){
                return {...accumulator, 'ids': [...accumulator.ids, currentValue.id]};
              } else {
                return {'vote': currentValue.vote, 'ids': [currentValue.id]};
              }
            }, 0);

      return mostVoted;
    }

    const getMostVotedAnecdoteIndex = () => {
      const mostVoted = getMostVotedAnecdote();
      return mostVoted.ids[Math.floor(Math.random() * mostVoted.ids.length)];
    }

    return (
      <div>
        <h1>anecdote of the day !</h1>
        <p>{`${anecdotes[selectedIndex]['anecdote']}`}</p>
        <p>has {`${anecdotes[selectedIndex]['vote']}`} votes</p>
        <Button text="Vote" onClick = {handleVote} />
        <Button text="Next Anecdote" onClick = {handleNextAnecdote} />
        <h1>anecdotes with most votes</h1>
        <p>{`${anecdotes[getMostVotedAnecdoteIndex()]['anecdote']}`}</p><p> has {getMostVotedAnecdote().vote} votes</p>
      </div>
    );
}
export default App;
