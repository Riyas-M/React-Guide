import { Route, Switch, Redirect } from 'react-router-dom';

import AllQuotes from './pages/allQuotes';
import QuoteDetail from './pages/quoteDetail';
import NewQuotes from './pages/newQuote';
import Layout from './components/layout/layout';
import NotFound from './pages/notFound';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/quotes'></Redirect>
        </Route>
        <Route path='/quotes' exact>
          <AllQuotes></AllQuotes>
        </Route>
        <Route path='/quotes/:quoteId'>
          <QuoteDetail></QuoteDetail>
        </Route>
        <Route path='/new-quote'>
          <NewQuotes></NewQuotes>
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
