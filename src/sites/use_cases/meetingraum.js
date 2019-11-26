import React, {Component} from 'react';
import {Container, Header, List} from 'semantic-ui-react'

class Meetingraum extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }


  render() {
    return (
        <Container text>

          <p>
            Das Meeting des neuen HUK-Coburg Projektes in Zusammenarbeit mit der SÜC steht an. MA_1 kümmert sich um die
            Raumreservierung. Der Meetingraum2 wird am Donnerstag von 08:30h-16h reserviert. Dies erscheint in dem
            Online-Raumplaner, zudem bekommen die eingebundenen MA eine persönliche Nachricht in ihren Terminplaner.
          </p>
          <p>
            Fall 1: <br/>
            <b>(Vermeidung von Nicht-Nutzung bei nicht wahrgenommenen Reservierungen von Meetingräumen)</b>
          </p>
          <p>
            Am Donnerstagmorgen beabsichtigt MA_2 ein spontanes Gruppenmeeting ein zurufen, um sich über die Entwicklung
            in einem größeren Schadensfall zu informieren. Leider muss er feststellen, dass dieses spontane Meeting
            aufgrund von Raumknappheit heute nicht mehr stattfinden kann.
          </p>
          <p>
            Das treffen mit der SÜC muss wegen einem Krankheitsfall, um eine Woche verschoben werden. Der MA_1 vergisst
            jedoch seine Belegung des Meetingraum2 zurückzuziehen. Durch diese Verschiebung des Projektmeetings bleibt
            der Raum, trotz Belegungsnot, leer stehen.
          </p>
          <p>
            Um diese Nicht-Nutzung zu vermeiden, wirkt das NFC-System als Belegungsidentifizierung. Wenn 15min nach der reservierten Zeit noch niemand sich in dem betreffenden Raum eingeloggt hat, wird der Raum als „steht zur Verfügung“ freigegeben. MA_2 kann sich den Raum für 10:30h reservieren.
          </p>
          <p>
            Fall 2:<br/>
            <b>(Beibehaltung von Belegung trotz temporärer Abwesenheit und Freigabe bei frühzeitiger Beendigung von Meetings)</b>
          </p>
          <p>
            Nach der Begrüßung und Einführung wird eine Kaffeepause angeboten. MA_1 entfernt sein Ausweis von der Dockingstation, um sich damit einen Kaffee in der firmeneigenen Cafeteria zu bezahlen. Das Meeting geht nach der kurzen Pause wie geplant weiter. Der Raum wurde wegen eines Toleranz-Timers, trotz Entfernung des Signales, nicht wieder freigegeben. In der Mittagspause hat MA_1 die Möglichkeit eine manuelle Verlängerung seiner Abwesenheit im System einzuschalten, damit der Raum auch nach der ausgedehnten Mittagspause den Teilnehmern noch bereitsteht.
          </p>
          <p>
            Am frühen Nachmittag entscheidet MA_1, das Meeting bereits frühzeitig zu beenden. Somit verlassen die Mitarbeiter vor Reservierungsende den Raum. Damit dieser zeitnah wieder als Nutzungsfähig markiert wird, wird dieser nach Ablauf eines bestimmten Toleranz-Timers als „Unbelegt“ bezeichnet.
          </p>
        </Container>
    )
  }
}

export default Meetingraum;
