---
title:
  de: Homelab und Self-Hosting
  en: Homelab and self-hosting
description:
  de: Ein VPS mit n8n hinter Caddy und ein Laptop mit Ubuntu Server für Prototypen, mit nächtlichem Backup.
  en: A VPS running n8n behind Caddy and a laptop running Ubuntu Server for prototypes, with a nightly backup.
tags: [Docker, Caddy, Linux, n8n, Tailscale]
year: 2026
animation: homelab
detail:
  de:
    summary: Ich betreibe zwei eigene Server. Auf einem Oracle-VPS läuft n8n in Docker, erreichbar über eine eigene Subdomain hinter Caddy als Reverse Proxy. Auf einem Laptop mit Ubuntu Server, den ich per SSH und Tailscale benutze, liegen Prototypen für Webdienste, die in Docker laufen, und meine privaten Projekte, die noch kommen.
    motivation: Ich wollte verstehen, wie ein Dienst vom Container bis zur Adresse im Browser betrieben wird, statt ihn nur zu benutzen. n8n auf einem eigenen Server zu hosten, hat mir dafür einen echten Anlass gegeben.
    learnings:
      - title: Backups und Updates musste ich erst verstehen
        text: Beides habe ich lernen müssen, bevor ich mich getraut habe, einen Dienst dauerhaft laufen zu lassen. Ein Server, der läuft, aber nicht gesichert und aktualisiert wird, ist nur eine Frage der Zeit.
      - title: Ein Backup gehört auf ein anderes Gerät
        text: Der Laptop erstellt jede Nacht um 4 Uhr ein Archiv seiner Projekte und Einstellungen, und mittags holt mein PC es ab. So liegt eine Kopie nicht auf demselben Rechner wie das Original.
      - title: Fehler müssen bei mir ankommen
        text: Das Backup-Skript meldet einen Fehler oder einen fehlenden Pfad mit einem Fehlercode und schreibt ins Log. Auf meinem PC erscheint dann eine Windows-Mitteilung, und ich schaue im Log nach. Ein Backup, das still scheitert, ist schlimmer als keins.
      - title: Zugangsdaten gehören nicht ins Backup
        text: Das Skript schließt .env-Dateien aus und legt das Archiv nur für den Besitzer lesbar an. Ein Backup soll mich retten und kein neues Risiko sein.
      - title: Der Server soll sich selbst helfen
        text: Auf dem Laptop prüft ein Timer, ob das Netzwerk erreichbar ist, und lädt es bei einem Ausfall neu. SSH akzeptiert nur Schlüssel, kein Passwort.
      - title: Was noch fehlt
        text: Die Daten von n8n auf dem VPS landen noch nicht in dieser Sicherung. Das steht als Nächstes an.
    stack:
      - Ubuntu Server auf einem Laptop, Zugang per SSH nur mit Schlüssel und über Tailscale
      - Oracle-VPS mit n8n in Docker
      - Caddy als Reverse Proxy mit eigener Subdomain
      - Docker und Docker Compose für Webdienste mit PostgreSQL
      - Bash und Cron für das Backup, systemd-Timer für den Netzwerk-Watchdog
    note: Interne Infrastruktur, deshalb gibt es keinen öffentlichen Link.
  en:
    summary: I run two servers of my own. On an Oracle VPS, n8n runs in Docker and is reachable through a subdomain of its own behind Caddy as a reverse proxy. On a laptop running Ubuntu Server, which I use over SSH and Tailscale, sit prototypes for web services that run in Docker, and my private projects that are still to come.
    motivation: I wanted to understand how a service is run from the container to the address in the browser, instead of just using it. Hosting n8n on a server of my own gave me a real reason to do that.
    learnings:
      - title: I had to learn backups and updates first
        text: I had to learn both before I dared to leave a service running for good. A server that runs but is neither backed up nor updated is only a matter of time.
      - title: A backup belongs on another device
        text: Every night at 4 am the laptop creates an archive of its projects and settings, and at noon my PC fetches it. That way one copy does not sit on the same machine as the original.
      - title: Failures have to reach me
        text: The backup script reports a failure or a missing path with an error code and writes to the log. A Windows notification then appears on my PC, and I look at the log. A backup that fails silently is worse than none.
      - title: Credentials do not belong in the backup
        text: The script excludes .env files and creates the archive readable only by its owner. A backup should rescue me, not become a new risk.
      - title: The server should help itself
        text: On the laptop a timer checks whether the network is reachable and reloads it after an outage. SSH accepts keys only, no password.
      - title: What is still missing
        text: The data of n8n on the VPS is not part of this backup yet. That is next.
    stack:
      - Ubuntu Server on a laptop, access over SSH with keys only and through Tailscale
      - Oracle VPS running n8n in Docker
      - Caddy as a reverse proxy with a subdomain of its own
      - Docker and Docker Compose for web services with PostgreSQL
      - Bash and cron for the backup, a systemd timer for the network watchdog
    note: Internal infrastructure, so there is no public link.
---
