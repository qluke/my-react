import { useNavigate } from 'react-router-dom';

import NewMeetupForm from '../components/meetups/NewMeetupForm';

// 报错：react-router-dom v6 里 export 'useHistory' (imported as 'useHistory') was not found in 'react-router-dom';
// 原因：useHistory 引入，react-router-dom 插件的版本问题。
// 解决方式：v6开始 useNavigate取代了原先版本中的useHistory 

function NewMeetupPage() {
  const history = useNavigate();

  function addMeetupHandler(meetupData) {
    fetch(
      'http://localhost:8080/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(() => {
      history.replace('/');
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
