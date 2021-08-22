import { Fragment } from 'react';
import Head from 'next/head';

import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails(props) {

  return (
        <Fragment>
            <Head>
                <title>{props.meetupData.title}</title>
                <meta name="description" content={props.meetupData.desc}></meta>
            </Head>
            <MeetupDetail
              img={props.meetupData.img}
              title={props.meetupData.title}
              address={props.meetupData.address}
              desc={props.meetupData.desc} />
        </Fragment>
  );
}


export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1'
        }
      },
      {
        params: {
          meetupId: 'm2'
        }
      }
    ]
  };
}

export async function getStaticProps(context) {

  const meetupId = context.params.meetupId;
  return {
    props: {
      meetupData: {
        id: meetupId,
        img: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/27/73/34.jpg',
        title: 'First Meetup',
        address: 'Some Address',
        desc: 'This is First Meetup'
      }
    }
  }
}
export default MeetupDetails;
