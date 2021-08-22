import { Fragment } from 'react';
import Head from 'next/head';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage() {

    const  addMeetupHandler = (enteredMeetupData) => {
        console.log(enteredMeetupData, '---enteredMeetupData--');

    };

    return (
        <Fragment>
            <Head>
                <title>Add New Meetups</title>
                <meta name="description" content="Add your New Meetups, Explore Opportunities"></meta>
            </Head>
            <NewMeetupForm  onAddMeetup={addMeetupHandler} />
        </Fragment>
    )
}


export default NewMeetupPage;