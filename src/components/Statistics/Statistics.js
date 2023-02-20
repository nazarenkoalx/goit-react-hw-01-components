import PropTypes from 'prop-types';
import {
  StatisticTitle,
  StatsList,
  StatsItem,
  Wrapper,
  getRandomHexColor,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Wrapper className="statistics">
      {title && <StatisticTitle>{title}</StatisticTitle>}

      <StatsList className="stat-list">
        {stats.map(stat => {
          return (
            <StatsItem
              style={{ backgroundColor: getRandomHexColor() }}
              key={stat.id}
            >
              <span style={{ fontSize: 12 }}>{stat.label}</span>
              <span className="percentage">{stat.percentage}</span>
            </StatsItem>
          );
        })}
      </StatsList>
    </Wrapper>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
