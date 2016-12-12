import React, { Component } from 'react';
import { StyleRoot } from 'radium';
import Infinite from 'react-infinite';
import Screenshot from '../screenshot/Screenshot';
import Landing from '../landing/Landing';

import sources from '../../data/sources.json';
import styles from './app-styles';

class App extends Component {

  constructor(props) {
    super(props);
    this.getWindowDimensions = this.getWindowDimensions.bind(this);
    this.shuffleSources = this.shuffleSources.bind(this);
  }

  componentWillMount() {
    this.getWindowDimensions();
    this.shuffleSources(sources);
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
    listContainerWidth = width <= 960 ? width : 960,
    screenShotHeight = listContainerWidth * 1.571667;
    this.setState({width, screenShotHeight, height});
  }

  updateYOffset() {
    const showScrollUp = window.pageYOffset > 3000;
    this.setState({ showScrollUp });
  }

  screenshotStyle(source) {
    return {
      height: this.state.screenShotHeight,
      width: this.state.listContainerWidth,
      backgroundImage: `url("images/${source.fileName}")`
    };
  }

  shuffleSources(sources) {
    for (let i = sources.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = sources[i];
        sources[i] = sources[j];
        sources[j] = temp;
    }
    this.setState({
      shuffledSources: sources
    });;
  }

  prefetchImages(index) {
    const prefetchSources = this.state.shuffledSources.slice(index, index + 5);
    let imageCache = prefetchSources.map((source) => { // eslint-disable-line
      const cacheImg = new Image();
      cacheImg.src = `images/${source.fileName}`;
      return cacheImg;
    });
  }

  renderLanding() {
    const { listContainerWidth, height } = this.state;
    const style = {
      width: listContainerWidth,
      actualHeight: height,
      height
    };

    return (
      <Landing key={'landing'} style={style}/>
    )
  }

  renderList() {
    return this.state.shuffledSources.map((source, i) => {
      return (
        <Screenshot
          key={i}
          preloadImages={() => this.prefetchImages(i)}
          style={this.screenshotStyle(source)}
          source={source.source}
          >
        </Screenshot>
      )
    });
  }

  render() {
    const {
      height,
      screenShotHeight,
      shuffledSources,
      showScrollUp
    } = this.state;
    const style = Object.assign(styles.app, { width: '100%', maxWidth: '960px'})

    return (
      <StyleRoot>
        <div style={style}>
          <Infinite
            containerHeight={height}
            elementHeight={[height].concat(shuffledSources.map(() => screenShotHeight))}
            handleScroll={() => this.updateYOffset()}
            useWindowAsScrollContainer
            >
            {[this.renderLanding()].concat(this.renderList())}
          </Infinite>
        </div>
        <div style={styles.scrollUp}>
          { showScrollUp && <div style={styles.scrollButton} onClick={() => window.scrollTo(0,0)}>
              Back to Top
            </div>}
        </div>
      </StyleRoot>
    );
  }
}

export default App;
