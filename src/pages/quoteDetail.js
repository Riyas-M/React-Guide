import { Fragment, useEffect } from 'react';
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';
import  Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';

const QuoteDetail = () => {
    const params = useParams();
    const routeMatch = useRouteMatch();

    const { quoteId } = params;

    const {sendRequest, status, data: loadedQuotes, error} = useHttp(getSingleQuote, true);

    useEffect(() => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId]);

    if(!loadedQuotes) {
        return <p>no quote found!</p>
    }

    if(status === 'pending') {
        return <div className='centered'>
            <LoadingSpinner />
        </div>
    }

    if(error) {
        return <p className='centered focused'>{error}</p>;
    }

    if(status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
        return <NoQuotesFound />;
    }

    const pathToRoute = `${routeMatch.path}/comments`;
    return (
        <Fragment>
            <HighlightedQuote text={loadedQuotes.text} author={loadedQuotes.author}></HighlightedQuote>
            <Route path={`${routeMatch.path}`} exact>
                <div className='centered'>
                    <Link className='btn--flat' to={`${routeMatch.url}/comments`}>Load Comments</Link>
                </div>
            </Route>
            <Route path={pathToRoute}>
                <Comments />
            </Route>
        </Fragment>
    );
};


export default QuoteDetail;