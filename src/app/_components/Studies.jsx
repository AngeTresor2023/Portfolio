import styles from './Studies.module.css';
import { Section } from './Section';
import { div } from 'framer-motion/client';

const Studies = () => {
  const years = ["2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"];
  const months = ["J", "F", "M", "A", "M", "J", "Jl", "A", "S", "O", "N", "D"];

  const events = [
    { text: "Consultant Informatique (Mars 2021 - Mai 2024)", start: "2021", end: "2024", color: "orange" },
    { text: "IT Technician | (Sept 2020 - Oct 2022)", start: "2020", end: "2022", color: "orange" },
    { text: "IT Technician | Justice Canada (Jan 2024 - Avr 2024)", start: "2024", end: "2024", color: "orange" },
    { text: "DEC en Programmation Informatique | Collège La Cité (Jan 2022 - Dec 2024)", start: "2022", end: "2024", color: "green" },
    { text: "Enseignant| Cetic de Mbol II (Nov 2020 - Présent)", start: "2021", end: "2024", color: "orange" },
    { text: "Baccalauréat en Maintenance Informatique | ENSET  (Sept 2017 - Nov 2020)", start: "2017", end: "2020", color: "green" }
  ];

  const calculateEventStyle = (start, end, index) => {
    const startIndex = years.indexOf(start);
    const endIndex = years.indexOf(end);

    if (startIndex === -1 || endIndex === -1) return { left: '0%', width: '0%' };

    const totalYears = years.length;
    const eventDuration = endIndex - startIndex + 1;
    const eventStartPosition = (startIndex / totalYears) * 100;
    const eventWidth = (eventDuration / totalYears) * 100;

    return {
      left: `${eventStartPosition}%`,
      width: `${eventWidth}%`,
      backgroundColor: 'transparent',
      borderBottom: `3px solid ${events[index].color}`,
      top: `${index * 40}px` // Décalage en escalier
    };
  };

  return (
   <Section className="relative overflow-hidden py-12 sm:py-16 lg:py-20 m-auto ">
      <hr className="border-t-2 border-white w-full my-8" />
      <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl text-center my-10">My studies and experiences</h2>
      {/* Conteneur pour la légende et la timeline */}
      <div className={styles.container}>
        {/* Légende */}
        <div className={styles.legend}>
          <h3>Légende:</h3>
          <div className={styles.legendItem}>
            <span className={styles.legendColor} style={{ backgroundColor: 'green' }}></span> Étude
          </div>
          <div className={styles.legendItem}>
            <span className={styles.legendColor} style={{ backgroundColor: 'orange' }}></span> Expérience professionnelle
          </div>
        </div>

        {/* Timeline Wrapper */}
        <div className={styles.timelineWrapper}>
          <div className={styles.eventsContainer}>
            {events.map((event, index) => (
              <div
                key={index}
                className={styles.event}
                style={calculateEventStyle(event.start, event.end, index)}
              >
                <p className={styles.eventText}>{event.text}</p>
              </div>
            ))}
          </div>
          {/* Timeline avec les années et les mois sous les événements */}
          <div className={styles.timelineContainer}>
            <div className={styles.yearsRow}>
              {years.map((year, index) => (
                <div key={index} className={styles.yearBox}>
                  <div className={styles.monthsRow}>
                    {months.map((month, idx) => (
                      <span key={idx} className={styles.monthText}>
                        {month} {' | '}
                      </span>
                    ))}
                  </div>
                  <div className={styles.year}>{year}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Studies;
