import * as React from 'react'

export default class AutoHeightCard extends React.Component {
  constructor(props) {
    super(props);
    this.wrapper = React.createRef();
    this.container = React.createRef();
    this.adjustHeight = this.adjustHeight.bind(this);
  }

  adjustHeight() {
    const rowSpan = Math.ceil((this.container.current.getBoundingClientRect().height)/30+1);
    this.wrapper.current.style.gridRowEnd = "span "+rowSpan;
  }
  
  componentDidMount() {
    this.adjustHeight()
  }

  render() {
    return (
      <div ref={this.wrapper} className={this.props.klass + ' card'}>
        <div ref={this.container}>
          <div class="title">
            <h3>{this.props.title}</h3>
          </div>
          <div class="desc">
            <p>{this.props.desc}</p>
          </div>
        </div>
      </div>
    );
  }
}