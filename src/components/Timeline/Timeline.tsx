import TimelineItem from '../TimelineItem/TimelineItem';

const Timeline: React.FC<any> = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <TimelineItem key={item.id} {...item} />
      ))}
    </>
  );
};

export default Timeline;
