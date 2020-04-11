import React from 'react';

import { Cards, CountryPicker} from './components';
import { fetchData } from './api/';
import styles from './App.module.css';

import image from './images/image.png';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" /><br /><br />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Cards data={data} />
        {/*<Chart data={data} country={country} />*/} 
      </div>
    );
  }
}

export default App;