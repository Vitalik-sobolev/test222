import './App.css';
import React, { Component,Suspense } from "react";
import { useTranslation } from "react-i18next";
import { withTranslation } from 'react-i18next';
class LegacyComponentClass extends Component {
  render() {
    const { t } = this.props;

    return (
      <h1>{t('Welcome to React')}</h1>
    )
  }
}
const Welcome = withTranslation()(LegacyComponentClass)
// page uses the hook
function Page() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <div className="App-header">

        <Welcome />
        <button type="button" onClick={() => changeLanguage('de')}>
          de
        </button>
        <button type="button" onClick={() => changeLanguage('en')}>
          en
        </button>
      </div>
      {/* <div className="App-intro">
        <MyComponent />
      </div> */}
      <div>{t('description.part2')}</div>
    </div>
  );
}


function App() {
  return (
    <Suspense  fallback="loading">

      <Page />
    </Suspense>
  );
}

export default App;
