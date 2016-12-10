import React, { Component } from 'react';
import Infinite from 'react-infinite';
import Screenshot from './Screenshot';
// import Landing from './Landing';

import sources from '../data/sources.json';
import '../styles/App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.getWindowDimensions = this.getWindowDimensions.bind(this);
  }

  componentWillMount() {
    this.getWindowDimensions();
    const shuffledSources = this.shuffleSources(sources);
    this.setState({
      shuffledSources
    });
  }

  componentDidMount() {
    window.addEventListener("resize", this.getWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.getWindowDimensions);
  }

  getWindowDimensions() {
    const w = window, d = document,
    documentElement = d.documentElement,
    body = d.getElementsByTagName('body')[0],
    width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
    height = w.innerHeight || documentElement.clientHeight || body.clientHeight,
    screenShotHeight = width * 1.571667;

    this.setState({width, screenShotHeight, height});
  }

  screenshotStyle(source) {
    return {
      height: this.state.screenShotHeight,
      width: this.state.width,
      backgroundImage: `url("/images/${source.fileName}")`
    };
  }

  shuffleSources(sources) {
    for (let i = sources.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = sources[i];
        sources[i] = sources[j];
        sources[j] = temp;
    }
    return sources;
  }

  prefetchImages(index) {
    const prefetchSources = this.state.shuffledSources.slice(index, index + 5);
    // eslint-disable-next-line
    let imageCache = prefetchSources.map((source) => {
      const cacheImg = new Image();
      cacheImg.src = `/images/${source.fileName}`;
      return cacheImg;
    });
  }

  render() {
    return (
      <div className="App">
        <Infinite
          useWindowAsScrollContainer
          elementHeight={this.state.screenShotHeight}
        >
          {this.state.shuffledSources.map((source, i) => {
            return (
              <Screenshot
                key={i}
                preloadImages={() => this.prefetchImages(i)}
                style={this.screenshotStyle(source)}
                >
              </Screenshot>
            )
          })}
        </Infinite>
      </div>
    );
  }
}

export default App;
