import { useState, useEffect } from 'react';

import MeetupList from '../components/meetups/MeetupList';

const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 6, 123456 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

// 这段代码定义了一个名为DUMMY_DATA的常量数组，它包含了两个对象，每个对象代表一个meetup，包含了id、title、image、address和description等属性。
// 接着，定义了一个名为AllMeetupsPage的React组件，它渲染了一个页面，包含一个标题和一个MeetupList组件。

// AllMeetupsPage 组件 使用常量数组 DUMMY_DATA 作为静态数据源，将其作为meetups属性传递给 MeetupList 组件。
// 最终 AllMeetupsPage 组件的作用是展示所有的meetup列表。

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch(
      // 'https://react-getting-started-48dec-default-rtdb.firebaseio.com/meetups.json'
      'http://localhost:8080/meetups.json',
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key]
          };

          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <section>
      <h1>All Meetups</h1>
      {/* <MeetupList meetups={DUMMY_DATA} /> */}
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
