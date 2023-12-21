import React from 'react'
import './InHours.scss'
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const InHours = (data) => {
  function identifyTheWeekDay(time) {
    switch (time) {
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday"
      default:
        return "Sunday"
    }
  }
  return (
    <div>
      <div className="temp-in-hours-wrapper">
        <div className="chart-wrapper">
          <ResponsiveContainer width={'100%'} height={'100%'}>
            <AreaChart
              width={300}
              height={270}
              data={data.forecast?.forecastday[0].hour}
              margin={{
                top: 10,
                right: 10,
                left: 10,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              {/* <XAxis className='XAxis' />
              <YAxis className='XAxis' /> */}
              <Tooltip />
              <Area type="monotone" dataKey="temp_c" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="daily">
          {
            data.forecast?.forecastday.map((day, i) =>
              <div key={i} className="day-info">
                <div className="day">
                  <p className="day_name">{`${identifyTheWeekDay(+new Date(day.date).getDay()).slice(0, 3)} ${day.date.slice(8, 10)}`}</p>
                  <div className="day_temp">
                    <p className="max-temp">{Math.floor(day.day.maxtemp_c)}°</p>
                    <p className="min-temp">{Math.floor(day.day.mintemp_c)}°</p>
                  </div>
                </div>
                <img src={day.day.condition.icon} className="day-icon" />
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default InHours