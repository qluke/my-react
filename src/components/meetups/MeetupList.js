import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

// 这段代码定义了一个名为MeetupList的React组件，它接受一个名为props的参数，其中包含了一个名为meetups的数组属性。
// MeetupList组件的作用是渲染一个meetup的列表，其中每个meetup都由一个名为MeetupItem的子组件来渲染。
// MeetupList组件将meetups数组中的每个元素映射成一个MeetupItem组件实例，并将id、image、title、address和description等meetup属性作为props传递给子组件。

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
