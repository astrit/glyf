"use client"

import "@/calendar/calendar.css"

export default function CalendarV1() {
  const days = ["M", "T", "W", "T", "F", "S", "S"]

  function detDaysAndFirstDay(year: number, month: number) {
    const monthDate = new Date(year, month - 1, 1)

    return {
      numberOfDays: new Date(year, month, 0).getDate(),
      firstDay: (monthDate.getDay() + 6) % 7,
    }
  }

  function createYearCalendar(year: number) {
    const months = Array.from({ length: 12 }, (_, i) => i + 1)
    const calendar = months.map((month) => {
      const { numberOfDays, firstDay } = detDaysAndFirstDay(year, month)

      return {
        month,
        numberOfDays,
        firstDay,
      }
    })

    return calendar
  }

  const year = 2024
  const calendar = createYearCalendar(year)

  return (
    <div className="calendar">
      <section className="weeks">
        <span>·</span>
        {days.map((day, index) => (
          <span key={index}>{day}</span>
        ))}
        {days.map((day, index) => (
          <span key={index}>{day}</span>
        ))}
        {days.map((day, index) => (
          <span key={index}>{day}</span>
        ))}
        {days.map((day, index) => (
          <span key={index}>{day}</span>
        ))}
        {days.map((day, index) => (
          <span key={index}>{day}</span>
        ))}
        {days.map((day, index) => (
          <span key={index}>{day}</span>
        ))}
      </section>
      {calendar.map((month) => (
        <section data-month={`${month.month}`}>
          <div className="month">{month.month}</div>
          {Array.from({ length: month.firstDay }, (_, i) => (
            <span data-day="·">·</span>
          ))}
          {Array.from({ length: month.numberOfDays }, (_, i) => (
            <span data-day={i + 1}>{i + 1}</span>
          ))}
          {Array.from(
            { length: 37 - month.firstDay - month.numberOfDays },
            (_, i) => (
              <span data-day="·">·</span>
            )
          )}
        </section>
      ))}
      {/* <section className="weeks">
        <div>·</div>
        <span>M</span>
        <span>T</span>
        <span>W</span>
        <span>T</span>
        <span>F</span>
        <span>S</span>
        <span>S</span>
        <span>M</span>
        <span>T</span>
        <span>W</span>
        <span>T</span>
        <span>F</span>
        <span>S</span>
        <span>S</span>
        <span>M</span>
        <span>T</span>
        <span>W</span>
        <span>T</span>
        <span>F</span>
        <span>S</span>
        <span>S</span>
        <span>M</span>
        <span>T</span>
        <span>W</span>
        <span>T</span>
        <span>F</span>
        <span>S</span>
        <span>S</span>
        <span>M</span>
        <span>T</span>
        <span>W</span>
        <span>T</span>
        <span>F</span>
        <span>S</span>
        <span>S</span>
      </section>
      <section data-month="January 01 2024">
        <div className="month">01</div>
        <span data-day="M">01</span>
        <span data-day="T">02</span>
        <span data-day="W">03</span>
        <span data-day="T">04</span>
        <span data-day="F">05</span>
        <span data-day="S">06</span>
        <span data-day="S">07</span>
        <span data-day="M">08</span>
        <span data-day="T">09</span>
        <span data-day="W">10</span>
        <span data-day="T">11</span>
        <span data-day="F">12</span>
        <span data-day="S">13</span>
        <span data-day="S">14</span>
        <span data-day="M">15</span>
        <span data-day="T">16</span>
        <span data-day="W">17</span>
        <span data-day="T">18</span>
        <span data-day="F">19</span>
        <span data-day="S">20</span>
        <span data-day="S">21</span>
        <span data-day="M">22</span>
        <span data-day="T">23</span>
        <span data-day="W">24</span>
        <span data-day="T">25</span>
        <span data-day="F">26</span>
        <span data-day="S">27</span>
        <span data-day="S">28</span>
        <span data-day="M">29</span>
        <span data-day="T">30</span>
        <span data-day="W">31</span>
        <span data-day="·">·</span>
        <span data-day="·">·</span>
        <span data-day="·">·</span>
        <span data-day="·">·</span>
      </section>
      <section data-month="February 02 2024">
        <div className="month">02</div>
        <span data-day="·">·</span>
        <span data-day="·">·</span>
        <span data-day="·">·</span>
        <span data-day="T">01</span>
        <span data-day="F">02</span>
        <span data-day="S">03</span>
        <span data-day="S">04</span>
        <span data-day="M">05</span>
        <span data-day="T">06</span>
        <span data-day="W">07</span>
        <span data-day="T">08</span>
        <span data-day="F">09</span>
        <span data-day="S">10</span>
        <span data-day="S">11</span>
        <span data-day="M">12</span>
        <span data-day="T">13</span>
        <span data-day="W">14</span>
        <span data-day="T">15</span>
        <span data-day="F">16</span>
        <span data-day="S">17</span>
        <span data-day="S">18</span>
        <span data-day="M">19</span>
        <span data-day="T">20</span>
        <span data-day="W">21</span>
        <span data-day="T">22</span>
        <span data-day="F">23</span>
        <span data-day="S">24</span>
        <span data-day="S">25</span>
        <span data-day="M">26</span>
        <span data-day="T">27</span>
        <span data-day="W">28</span>
        <span data-day="T">29</span>
        <span data-day="·">·</span>
        <span data-day="·">·</span>
        <span data-day="·">·</span>
      </section>
      <section data-month="March 03 2024">
        <div className="month">03</div>
        <span data-day="·">·</span>
        <span data-day="·">·</span>
        <span data-day="·">·</span>
        <span data-day="·">·</span>
        <span data-day="F">01</span>
        <span data-day="S">02</span>
        <span data-day="S">03</span>
        <span data-day="M">04</span>
        <span data-day="T">05</span>
        <span data-day="W">06</span>
        <span data-day="T">07</span>
        <span data-day="F">08</span>
        <span data-day="S">09</span>
        <span data-day="S">10</span>
        <span data-day="M">11</span>
        <span data-day="T">12</span>
        <span data-day="W">13</span>
        <span data-day="T">14</span>
        <span data-day="F">15</span>
        <span data-day="S">16</span>
        <span data-day="S">17</span>
        <span data-day="M">18</span>
        <span data-day="T">19</span>
        <span data-day="W">20</span>
        <span data-day="T">21</span>
        <span data-day="F">22</span>
        <span data-day="S">23</span>
        <span data-day="S">24</span>
        <span data-day="M">25</span>
        <span data-day="T">26</span>
        <span data-day="W">27</span>
        <span data-day="T">28</span>
        <span data-day="F">29</span>
        <span data-day="S">30</span>
        <span data-day="S">31</span>
      </section>
      <section data-month="April 04 2024">
        <div className="month">04</div>
        <span data-day="M">01</span>
        <span data-day="T">02</span>
        <span data-day="W">03</span>
        <span data-day="T">04</span>
        <span data-day="F">05</span>
        <span data-day="S">06</span>
        <span data-day="S">07</span>
        <span data-day="M">08</span>
        <span data-day="T">09</span>
        <span data-day="W">10</span>
        <span data-day="T">11</span>
        <span data-day="F">12</span>
        <span data-day="S">13</span>
        <span data-day="S">14</span>
        <span data-day="M">15</span>
        <span data-day="T">16</span>
        <span data-day="W">17</span>
        <span data-day="T">18</span>
        <span data-day="F">19</span>
        <span data-day="S">20</span>
        <span data-day="S">21</span>
        <span data-day="M">22</span>
        <span data-day="T">23</span>
        <span data-day="W">24</span>
        <span data-day="T">25</span>
        <span data-day="F">26</span>
        <span data-day="S">27</span>
        <span data-day="S">28</span>
        <span data-day="M">29</span>
        <span data-day="T">30</span>
        <span data-day="·">·</span>
        <span data-day="·">·</span>
        <span data-day="·">·</span>
        <span data-day="·">·</span>
        <span data-day="·">·</span>
      </section>
      <section data-month="May 05 2024">
        <div className="month">05</div>
        <span data-day="·">·</span>
        <span data-day="·">·</span>
        <span data-day="W">01</span>
        <span data-day="T">02</span>
        <span data-day="F">03</span>
        <span data-day="S">04</span>
        <span data-day="S">05</span>
        <span data-day="M">06</span>
        <span data-day="T">07</span>
        <span data-day="W">08</span>
        <span data-day="T">09</span>
        <span data-day="F">10</span>
        <span data-day="S">11</span>
        <span data-day="S">12</span>
        <span data-day="M">13</span>
        <span data-day="T">14</span>
        <span data-day="W">15</span>
        <span data-day="T">16</span>
        <span data-day="F">17</span>
        <span data-day="S">18</span>
        <span data-day="S">19</span>
        <span data-day="M">20</span>
        <span data-day="T">21</span>
        <span data-day="W">22</span>
        <span data-day="T">23</span>
        <span data-day="F">24</span>
        <span data-day="S">25</span>
        <span data-day="S">26</span>
        <span data-day="M">27</span>
        <span data-day="T">28</span>
        <span data-day="W">29</span>
        <span data-day="T">30</span>
        <span data-day="·">·</span>
        <span data-day="·">·</span>
        <span data-day="·">·</span>
      </section> */}
    </div>
  )
}
