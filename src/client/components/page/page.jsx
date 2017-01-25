import classes from './page.scss';
import React from 'react';

import Header from '../../containers/header';
import Caption from './components/caption';
import Footer from './components/footer';

export default class Page extends React.Component {
  render() {
    const {headline, label} = this.props;
    
    return (
      <section>
        <Header />
        
        <div className={classes.page}>

          <Caption
            mainText={headline}
            subText={label}
          />

          {this.props.children}

        </div>

        <Footer />
      </section>
    );
  }
}

Page.defaultProps = { headline: '', label: '' };
