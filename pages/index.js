
import { Fragment } from 'react';
import Head from 'next/head';
import MeetupList from '../components/meetups/MeetupList';

const demoMeetUps = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/27/73/34.jpg',
        address: 'M.G. Road, Mumbai, India',
        desc: 'this is first meetup'
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://www.planetware.com/wpimages/2020/08/japan-best-cities-tokyo.jpg',
        address: 'Lions Street, Ginza, Japan',
        desc: 'this is second meetup'
    },
];

function Homepage(props) {
    //const [LoadedMeetup, setloadedMeetup] = useState([]);
    // useEffect(() => {
    //     setloadedMeetup(demoMeetUps);
    // }, []);
    return (
        <Fragment>
            <Head>
                <title>React Meetups</title>
                <meta name="description" content="Browse All React Meetups"></meta>
            </Head>
            <MeetupList  meetups={props.meetups} />
        </Fragment>
    )
}

export async function getStaticProps() {
    return {
        props: {
            meetups: demoMeetUps
        },
        revalidate: 1
    };
};


// export async function getServerSideProps(context) {

//     const req = context.req;
//     const res = context.res;

//     return {
//         props: {
//             meetups: demoMeetUps
//         }
//     };
// };

export default Homepage;