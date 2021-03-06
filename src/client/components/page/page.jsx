import classes from './page.scss';
import React from 'react';

import Header from '../../containers/header';
import Caption from './components/caption';
import Footer from './components/footer';

export default class Page extends React.Component {
  render() {
    const {headline, label} = this.props;
    
    return (
      <section className={classes.pageWrap}>
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

Page.propTypes = {
  headline: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired
};


Page.defaultProps = { headline: '', label: '' };
