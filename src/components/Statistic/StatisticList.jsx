import PropTypes from 'prop-types';

function StatisticList({ stats }) {
  console.log(stats);
  return (
    <ul>
      {stats.map(({ id, label, percentage }) => {
        return (
          <li
        
            key={id}
            
          >
            <span>{label}</span>
            <span>{percentage}</span>
          </li>
        );
      })}
     
    </ul>
  );
}
StatisticList.propTypes = {
  title: PropTypes.string,

  data: PropTypes.number.isRequired,
 
};
export default StatisticList;

