"use client"

import React, { useEffect, useState } from "react"
import { toast } from "sonner"

import "@/calendar/calendar.css"

export default function Calendar() {
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

  const [year, setYear] = useState(2024)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        setYear((prevYear) => prevYear - 1)
      } else if (event.key === "ArrowRight") {
        setYear((prevYear) => prevYear + 1)
      } else if (event.code === "Space") {
        setYear(new Date().getFullYear())
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  const calendar = createYearCalendar(year)

  return (
    <div className="calendar">
      <section className="year">
        <span>·</span>
        {year
          .toString()
          .split("")
          .map((digit, index) => (
            <span className="year" key={index}>
              {digit}
            </span>
          ))}
        {Array.from({ length: 33 }, (_, index) => (
          <span key={index + 4}>·</span>
        ))}
      </section>
      <section className="weeks">
        <span>·</span>
        {Array.from({ length: 37 }, (_, i) => (
          <span key={i}>{days[i % 7]}</span>
        ))}
      </section>
      {calendar.map((month) => (
        <section data-month={`${month.month}`}>
          <div className="month">{month.month}</div>
          {Array.from({ length: month.firstDay }, (_, i) => (
            <span data-day="·">·</span>
          ))}
          {Array.from({ length: month.numberOfDays }, (_, i) => (
            <div className="day" data-day={days[(month.firstDay + i) % 7]}>
              <span className="day-number">{i + 1}</span>
            </div>
          ))}
          {Array.from(
            { length: 37 - month.firstDay - month.numberOfDays },
            (_, i) => (
              <span data-day="·">·</span>
            )
          )}
        </section>
      ))}
      <small>
        <span>
          <kbd>Left</kbd> Previous year
        </span>
        <span>
          <kbd>Right</kbd> Next year
        </span>
        <span>
          <kbd>Space</kbd> Current year
        </span>
      </small>
    </div>
  )
}
