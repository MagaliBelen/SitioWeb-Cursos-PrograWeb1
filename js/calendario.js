document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendario');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'dayGrid'], 
      locale: 'es',
      events: [
            {
                title: 'Curso de HTML y CSS',
                start: '2023-06-28',
            },
            {
                title: 'Curso de JavaScript',
                start: '2023-07-01'
            },
            {
                title: 'Curso de Java',
                start: '2023-07-11'
            },
            {
                title: 'Curso de Phyton',
                start: '2023-07-15'
            },
        ]
    }); 

    calendar.render();
  });