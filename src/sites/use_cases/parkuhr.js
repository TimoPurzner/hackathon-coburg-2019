import React, {Component} from 'react';
import {Container, Header, List} from 'semantic-ui-react'

class Parkuhr extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }


  render() {
    return (
        <Container text>
          <p>
            Das Konzept der flexiblen Arbeitszeiten oder Gleitzeiten wird von mehreren Unternehmen unterstützt. So auch von der HUK-Coburg.
          </p>
          <p>
            MA_1 hat eine 20h Woche, in der er, in den 5 Tagen, halbtags arbeitet. Meistens gestaltet er sich seine Arbeit so, dass er vormittags arbeitet und nachmittags bei seiner Familie sein kann. Um 12:45h entfernt MA_1 sein Ausweis von der Dockingstation und macht sich auf den Heimweg. Fred trifft gegen 14h von seinem externen Meeting ein und öffnet das Portal, um sich einen Überblick über zur Verfügung stehende Schreibtische zu verschaffen.
          </p>
          <p>
            Es herrscht eine hohe Auslastung. Erschreckend stell er fest, dass nur noch einige Schreibtische in unvorteilhaften Arealen unbelegt sind. Beim hinweg bemerkt er viele leerstehende Schreibtische, die er eigentlich nutzen könnte, die ihm aber als belegt angezeigt werden.
          </p>
          <p>
            Um dieses zu verhindern, ist eine Art Parkuhr in der Dockingstation eingebaut. MA_1 belegt den Tisch 8, beim entfernen des Ausweises für eine Kaffeepause, Toilettenpause oder Kickerpartie, schaltet das System den Platz auf ein Timer. Ab dem Zeitpunkt der Entfernung wartet das System 60min ab. Wenn in der Zeit der Ausweis wieder aufgelegt wird, wird der Tisch weiterhin als belegt angezeigt.
            Bleibt das Signal jedoch mehr als 60min ungenutzt, schaltet das System den Schreibtisch wieder frei. Dieser wird dann wieder zur Verfügung gestellt und der Tisch kann von Fred ein zweites mal am heutigen Tag verwendet werden.
          </p>
        </Container>
    )
  }
}

export default Parkuhr;
