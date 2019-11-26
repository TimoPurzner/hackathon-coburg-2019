import React, {Component} from 'react';
import {Container, Header, List} from 'semantic-ui-react'

class Reservation extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }


  render() {
    return (
        <Container text>
          <p>
            In den neuen Büros der HUK-Mitarbeiter findet man zunehmend Open-Work-Spaces. Diese Räumlichkeiten ermöglichen eine freie Arbeitsplatzwahl. Die Zuweisung ist nicht mehr starr vorgeschrieben, sondern bietet den Mitarbeitern die Freiheit seinen Arbeitsplatz und die damit verknüpften „Arbeitsnachbarn“ auf seine Bedürfnisse und seine Anforderungen auszurichten.
          </p>
          <p>
            MA_1 (Firmeninterner Analyst) erhält am Montag den Auftrag, eine Broschüre, mithilfe des MA_2 (Gestaltungsabteilung) bis Donnerstag zu gestalten, die dann am Freitag Firmenintern verteilt werden soll. Diese Broschüre soll die Veränderungen, Innovationen und Erfolge der letzten 4 Quartale aufzeigen.
          </p>
          <p>
            Um diese Broschüre fertigzustellen benötigt er abteilungsübergreifende Daten.
            Zur Absprache mit der Gestaltungsabteilung muss er mehrmals täglich hin und her laufen. Dazu kommen die Flut an Emails anderer Abteilungen an MA_1 mit relevanten Daten zur Datenerhebung.
          </p>
          <Header as='h3' dividing>
            Situation mit unserem Dockingsystem:
          </Header>
          <p>
            Das Dockingsystem ermöglicht eine Übersicht, über belegte Schreibtische mit Namensidentifikation und Gruppenzugehörigkeit.
            MA_1 kann sich somit überlegen, welche MA oder welche Gruppen für seine Recherche notwendige Daten liefern können. Des Weiteren beachtet er die Kooperation mit MA_2, der ihm beim Layout helfen soll. Um diese benötigten Ressourcen optimal zu nutzen, reserviert MA_1 und MA_2 sich für Mittwoch aneinandergrenzende Schreibtische, damit die Zusammenarbeit sich einfacher gestaltet. Er stellt sich einen Plan mit den benötigten Zahlen der vergangenen 4 Quartale auf, die er zur Datenanalyse benötigt.
          </p>
          <List bulleted>
            <List.Item>Finanzabteilung</List.Item>
            <List.Item>Personalabteilung</List.Item>
            <List.Item>Verkauf</List.Item>
            <List.Item>...</List.Item>
          </List>
          <p>
            Er organisiert sich so, dass er mit den unterschiedlichen Abteilungen an unterschiedlichen Tagen zusammenarbeiten kann. Somit schaut er Tagesabhängig in welchen Bereichen die Personaler, in welchen Bereichen die Verkaufsmitarbeiter und in welchem Work-Space der großteil der Finanzabteilung Schreibtische belegt. Anhand dieser Arbeitsplatzwahloptimierung ist es MA_1 möglich, je nach Bedarf seinen Schreibtisch zu wechseln und somit näher an dem, für ihn relevanten, Mitarbeiter zu arbeiten.
          </p>
        </Container>
    )
  }
}

export default Reservation;
