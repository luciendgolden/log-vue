# Digitales Fahrtenbuch - Aufgabenbeschreibung

Ihr Kunde ist ein mittelständisches Unternehmen mit mehreren Standorten. Jeder Standort verfügt über mehrere Fahrzeuge welche von unterschiedlichen Mitarbeitern gefahren werden. Die Dokumentation von Fahrten erfolgt aktuell handschriftlich und soll durch Ihr Projekt von einer digitalisierte Lösung abgelöst werden.

Aus Sicht der Unternehmensleitung soll es möglich sein statistische Auswertungen zur Auslastung der Fahrzeuge zu bekommen. Ausgewertet werden sollen relevante Parameter wie zum Beispiel Auslastung der Fahrzeuge, Prozentuelle Auslastung der Fahrzeuge pro Standort innerhalb selbstdefinierter Arbeitszeiten, welcher Mitarbeiter ist wie viel gefahren (Anzahl Fahrten, KM), Wie viele KM wurden in einem bestimmten Zeitraum für welche Zwecke (Kategorie) gefahren.

Diese Auswertung soll in mindestens zwei unterschiedlichen Formaten (Export als .csv, Report als .pdf) bereitgestellt werden.

## Inhalte

Das Fahrtenbuch enthält für jede Fahrt folgende Informationen:

* Datum
* Uhrzeit Fahrtbeginn und Fahrtende
* Name Fahrzeuglenker
* Kilometerstand Fahrtantritt und Fahrtende
* Gefahrene Kilometer
* Zweck der Fahrt (Auswahl aus mindestens vier von Ihnen definierten Kategorien)
* Bemerkungen/Zusatzinfos

## Teilaufgaben

* Abwicklung der Übung als Projekt (Erstellung eines einfachen Pflichtenheftes für die Anwendung – konkretere Spezifikation, durchgängige Dokumentation von Zuständigkeiten)
* Durchgängige Dokumentation der Codeentwicklung mit State-of-the-Art Tools (Versionsverwaltung)
* Qualitätssicherung des Codes (Dokumentation von Reviews)
* Lieferung einer funktionsfähigen Anwendung die ohne weitere Aufwände in Betrieb (CentOS Linux Server) gebracht werden kann (BASH-Skript für Setup, Dockerfile/Dockerimage,...)

## Erwartete Ablieferprodukte

* Pflichtenheft (Konkretisierung der Aufgabe und Abstimmung was geliefert wird)
* OpenAPI Spezifikation der API
* Funktionsfähige Implementierung der API realisiert mit Node.JS
* Nachweis der Qualitätssicherung (JS Tests im Code, Externer Test per REST API Client (z.B. Skript oder HTTPMaster Projekt)
* Nachvollziehbare und durchgängige Dokumentation des Projektes in geeigneter Form
* Präsentation des Projekts (Zeitrahmen 5 Minuten!)

## Zeitplan

* 27.04.2018 - Vorstellung der Aufgabenstellung
* 04.05.2018 - Ende Einreichfrist für Konzept von eigenem Projektthema per Mail an Ertl und Vietze
* 06.05.2018 - Rückmeldung zu eigenen Projektthemen (Freigabe)
* 20.05.2018 - Abgabe Pflichtenheft (Konkretisierung was geliefert wird) per Mail an Ertl und Vietze
* 23.05.2018 - Rückmeldung zu Pflichtenheft (Freigabe zur Umsetzung)
* 29.06.2018 - Abgabe funktionstüchtiger Software, Dokumentation, Kundenpräsentation per Mail an Ertl und Vietze

## Bewertung

| Abgabe  | Prozent |
| ------------- | ------------- |
| Pflichtenheft  | 10%  |
| OpenAPI Spec  | 10%  |
| Funktionsfähige Implementierung  | 30%  |
| Nachweis der Qualitätssicherung  | 10%  |
| Dokumenation  | 10% |
| Präsentation  | 10% |
| Individuelle Beurteilung  | 20% |
