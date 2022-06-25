import * as React from 'react'
import AutoHeightCard from './auto-height-card'

export default class StackGird extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {};
  }
  
  render() {
    const cards = this.props.cards;
    return (
      <div className="stack-grid">
        {cards.map((card) =>
          <AutoHeightCard klass={card.class} title={card.title} desc={card.desc} />
        )}
      </div>
    );
  }
}