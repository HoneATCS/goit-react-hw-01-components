import PropTypes from 'prop-types';

function StatisticList({ stats }) {
  console.log(stats);
  return (
    <ul>
      {stats.map(({ id, label, percentage }) => {
        return (
          <li
            // className={css.stats}
            key={id}
            // style={{ backgroundColor: createColor() }}
          >
            <span>{label}</span>
            <span>{percentage}</span>
          </li>
        );
      })}
      {/* {stats.map(item => (
        <li key={item.id}>
          <StatisticItem label={item.label} percentage={item.percentage} />
          console.log(item);
        </li>
      ))} */}
    </ul>
  );
}
StatisticList.propTypes = {
  title: PropTypes.string,

  data: PropTypes.number.isRequired,
  //   Repeta video
};
export default StatisticList;

// {[1, 2, 3, 4].map(el => (
//   <li>{el}</li>
// ))}
// <div></div>