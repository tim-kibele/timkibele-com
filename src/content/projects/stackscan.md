---
title:
  de: Stackscan
  en: Stackscan
description:
  de: Findet heraus, welche Technik hinter einer Liste von Websites steckt.
  en: Finds out which technology runs behind a list of websites.
tags: [Python, asyncio, httpx, Tkinter]
year: 2026
detail:
  de:
    summary: Stackscan erkennt für jede Website in einer Liste das CMS, das serverseitige Framework, CRM- und Marketing-Tools und die Mail-Infrastruktur. Es braucht keine Browser-Automatisierung und schafft etwa 500 URLs in 3 bis 5 Minuten. Das Ergebnis ist eine CSV- oder Excel-Datei.
    motivation: Ich wollte eine Liste von Websites schnell und ohne Handarbeit in eine Tabelle mit der dahinterliegenden Technik verwandeln, ohne Browser-Automatisierung und in wenigen Minuten.
    learnings:
      - title: Messen statt raten
        text: Die Standardwerte sind belegt. Über 25 parallelen Requests bricht der Durchsatz ein, Wiederholungen nach Timeouts brachten nichts (0 von 80), und der Tiefenmodus fand auf 200 Domains keinen zusätzlichen CRM-Treffer bei 187 Sekunden Mehrlaufzeit.
      - title: Regex-Performance
        text: Ein führendes \b oder eine Zeichenklasse macht ein Muster bis zu 30-mal langsamer, weil Python die schnelle Vorsuche nicht nutzen kann. Ein Vorfilter halbierte die Zeit pro Seite von 114 auf 55 ms.
      - title: Async-Fallstrick
        text: Synchroner CPU-Code im Event-Loop blockiert alle parallelen Abrufe.
      - title: Technische Merkmale statt Produktnamen
        text: Der Pfad /js/wcf erkannte alle 9 WoltLab-Foren, der Name nur 7. Ein Pfad belegt ein System außerdem nur, wenn er auf der eigenen Domain liegt.
      - title: Grenzen von HTTP-Scanning
        text: Bot-Schutz prüft TLS-Fingerprint und JavaScript, nachgeladene Inhalte fehlen im HTML. Eine leere Spalte heißt oft wirklich „kein CMS“.
    stack:
      - Python (ab 3.9, entwickelt mit 3.13)
      - asyncio und httpx für nebenläufige Requests
      - dnspython für SPF- und DNS-Abfragen
      - openpyxl für die Excel-Ausgabe
      - Tkinter für die Oberfläche, mit Threads und Queue
      - Reguläre Ausdrücke als Erkennungskern
    note: Interne Anwendung, deshalb gibt es keinen öffentlichen Link.
  en:
    summary: For every website in a list, Stackscan detects the CMS, the server-side framework, CRM and marketing tools and the mail infrastructure. It needs no browser automation and handles about 500 URLs in 3 to 5 minutes. The result is a CSV or Excel file.
    motivation: I wanted to turn a list of websites into a table of the technology behind them quickly and without manual work, with no browser automation and in a few minutes.
    learnings:
      - title: Measure, don't guess
        text: The defaults are backed by data. Above 25 parallel requests the throughput collapses, retries after timeouts did not help (0 of 80), and deep mode found no extra CRM hits on 200 domains for 187 seconds of extra runtime.
      - title: Regex performance
        text: A leading \b or a character class makes a pattern up to 30 times slower because Python cannot use its fast pre-search. A pre-filter halved the time per page from 114 to 55 ms.
      - title: Async pitfall
        text: Synchronous CPU code in the event loop blocks all parallel fetches.
      - title: Technical traits over product names
        text: The path /js/wcf detected all 9 WoltLab forums, the name only 7. A path also only proves a system if it sits on the site's own domain.
      - title: Limits of HTTP scanning
        text: Bot protection checks the TLS fingerprint and JavaScript, and content loaded later is missing from the HTML. An empty column often really means "no CMS".
    stack:
      - Python (3.9+, developed with 3.13)
      - asyncio and httpx for concurrent requests
      - dnspython for SPF and DNS lookups
      - openpyxl for the Excel output
      - Tkinter for the GUI, with threads and a queue
      - Regular expressions as the detection core
    note: Internal tool, so there is no public link.
---
