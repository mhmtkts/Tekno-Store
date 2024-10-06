import { Route, Switch } from 'react-router-dom';
import Home from '../pages/HomePage';


const PageContent = () => {
  return (
    <main className="page-content">
      <Switch>
        <Route exact path="/" component={Home} />
        
      </Switch>
    </main>
  );
};

export default PageContent;