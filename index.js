import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'

// Increment Action
const increment = { type: 'INCREMENT_COUNT' }

// Reducer
function counter(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREMENT_COUNT':
      return { count: state.count + 1 }
    default:
      return state
  }
}

// Counter Component
class Counter extends Component {
  constructor(props) {
    super(props)

    this.incrementCount = this.incrementCount.bind(this)
  }

  incrementCount() {
    const { dispatch } = this.props
    dispatch(increment)
  }

  render () {
    const { count } = this.props
    return (
      <div>
        <div>{ count }</div>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  }
}


// Concise way to do it

// const mapStateToProps = state => ({
//   count: state.count
// })

// This is passed to connect as the second argument
// Can be used instead of using dispatch directly in the component
// function mapDispatchToProps(dispatch) {
//   return {
//     incrementCount: () => dispatch(increment)
//   }
// }



// Create the store
// Takes in a reducer as an argument
const store = createStore(counter)

// Connected Component
const App = connect(mapStateToProps, null)(Counter)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('.container')
)