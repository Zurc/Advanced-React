import App, { Container } from 'next/app';
import Page from '../components/Page';

// extends App!!! not Component
class MyApp extends App {
  render() {
    const { Component } = this.props;

    return (
      <Container>
        <Page>
          {/* the Component will be any page like sell or index */}
          <Component />
        </Page>
      </Container>
    )
  }
}

export default MyApp;
