import React, {Component} from 'react';
import {Header, List, Container} from 'semantic-ui-react'

class Putzen extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }


  render() {
    return (
        <Container text>
          <p>
            Anknüpfend an die reservierten, jedoch nicht genutzten Meetingräume stellt auch das Putzen von zwischenzeitlich ungenutzten Räumen eine finanzielle, wie zeitmässige Verschwendung dar.
          </p>
          <p>
            Der Raum 1-102 wird wöchentlich von der Marketingabteilung für den gesamten Mittwoch für Besprechungen reserviert.
          </p>
          <p>
            Fall 1: <br/>
            Aufgrund einer Weiterbildung der Marketingmitarbeiter findet dieser Austausch diese Woche nicht statt. Der Raum wurde auch anderweitig nicht benutzt.
            Dienstag abends wurde der Raum von Frau Z gesaugt und geputzt. Die berechtigte Frage nach der Notwendigkeit diesen Raum, trotz des Nicht-öffnens am Mittwoch durch den Ausfall der Besprechungen, am Mittwochabend zu saugen und zu putzen besteht.
          </p>
          <p>
            Durch die Möglichkeit der Nutzungsidentifikation der Meetingräume, ist es möglich das Putzpersonal vor unnötiger Dienstleistung zu schonen. Das System detektiert die nicht-Belegung während des ganzen Tages und informiert über den letzten Zutritt. Anhand dieser Information weiß das Putzpersonal, dass dieser Raum, seit der letzten Putzdurchführung, nicht mehr betreten worden ist und daher das Putzen überflüssig wäre.
          </p>
          <p>
            Fall 2: <br />
            Das wöchentliche Meeting der Marketingabteilung ist zwar bis 17:30h angesetzt, findet aber bereits um 14h das Ende. Das Putzpersonal findet sich um 17h im Gebäude ein und fängt systematisch an, von der oberen Etage abwärts durch zu putzen. Um 20h ist die Arbeit erledigt, die Lichter werden ausgeschaltet und der Tag findet ein Ende.
            Damit der Putzdienst eher fertig wird, befinden sich ab 15h zwei Personen des Putzteams im Gebäude. Durch die Belegungsübersicht der Meetingräume und der Schreibtische, ist es dem Putzpersonal möglich die Räume, die an diesem Tag nicht mehr belegt werden, bereits etwas früher zu putzen. Das Personal kann ebenso eventuelle Areale, in denen mehrere Schreibtische bereits verlassen wurden, ausfindig machen und bereits säubern. Dies verlagert deren Arbeitszeit nach vorne und der Feierabend kann eher angetreten werden.
            Durch den früheren Feierabend beim Putzpersonal, können die Lichter auch eher ausgeschaltet werden, was wiederrum Strom spart und Ressourcen schont.

          </p>

        </Container>
    )
  }
}

export default Putzen;
