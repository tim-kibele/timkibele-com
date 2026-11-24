---
title:
  de: E-Mail-Automation für einen Handwerksbetrieb
  en: Email automation for a trades business
description:
  de: Liest ein Info-Postfach mit, fragt fehlende Angaben nach und fasst Angebote nach.
  en: Reads an info mailbox, asks for missing details and follows up on quotes.
tags: [n8n, LLM, IMAP/SMTP, JavaScript]
year: 2026
animation: workflow
detail:
  de:
    summary: Eine Automation für das zentrale Postfach eines kleinen Handwerksbetriebs. Sie erkennt Kundenanfragen, fragt fehlende Angaben wie Foto und Adresse selbstständig nach und behält verschickte Angebote im Blick, damit rechtzeitig nachgefasst wird.
    motivation: Ein kleiner Betrieb verliert Zeit und Aufträge, wenn Anfragen und Angebote im Postfach liegen bleiben. Die Automation soll dieses Nachfassen übernehmen, damit das Büro sich auf die Fälle konzentrieren kann, die einen Menschen brauchen.
    learnings:
      - title: Prozesse als Zustandsautomat
        text: Jeder Vorgang hat einen Status, Fristen und klar definierte Übergänge.
      - title: KI nur dort, wo Regeln nicht reichen
        text: Das Modell beurteilt, ob eine Mail eine Anfrage ist, und zieht strukturiert Angaben heraus. Alles andere läuft deterministisch, und die Doku sagt offen, dass die KI sich irren kann.
      - title: Mails sind unordentlich
        text: Zuordnung über den Mail-Thread, ersatzweise über die Absender-Adresse, dazu Automails und Signaturbilder ausfiltern und Formulare ohne Mailadresse abfangen.
      - title: Jede Mail genau einmal
        text: Idempotenz und Dublettenschutz, damit keine Mail doppelt verarbeitet und kein Angebot doppelt erfasst wird.
      - title: Kontrolle für den Menschen
        text: Ein Stopp-Link, klar benannte Info-Mails, ein Fehler-Workflow und ausdrückliche Grenzen. Die Automation löscht und verschiebt keine Mails, erstellt keine Angebote und beantwortet keine inhaltlichen Fragen.
    stack:
      - n8n mit vier Workflows (Hauptprozess, Angebote erfassen, Angebot stoppen, Fehlerbehandlung)
      - IMAP zum Lesen und SMTP zum Senden
      - Sprachmodell von OpenAI über den Information-Extractor-Node
      - n8n Data Tables als leichte Datenbank für Vorgänge und Angebote
      - JavaScript in Code-Nodes
      - Webhooks zum Stoppen einer Nachfrage
    note: Kundenprojekt, anonymisiert. Es gibt keinen öffentlichen Link.
  en:
    summary: An automation for the central mailbox of a small trades business. It recognises customer enquiries, asks for missing details such as a photo and an address on its own, and keeps track of sent quotes so they get followed up in time.
    motivation: A small business loses time and jobs when enquiries and quotes sit unanswered in a mailbox. The automation takes over that follow-up so the office can focus on the cases that need a human.
    learnings:
      - title: Processes as a state machine
        text: Every case has a status, deadlines and clearly defined transitions.
      - title: AI only where rules fall short
        text: The model judges whether a mail is an enquiry and pulls out structured details. Everything else runs deterministically, and the documentation states openly that the AI can be wrong.
      - title: Email is messy
        text: Matching by mail thread, falling back to the sender address, filtering out automated mails and signature images, and catching forms without an email address.
      - title: Every mail exactly once
        text: Idempotency and duplicate protection, so no mail is processed twice and no quote is recorded twice.
      - title: Control for the human
        text: A stop link, clearly labelled info mails, an error workflow and explicit limits. The automation does not delete or move mails, create quotes or answer questions about content.
    stack:
      - n8n with four workflows (main process, record quotes, stop quote, error handling)
      - IMAP for reading and SMTP for sending
      - OpenAI language model via the Information Extractor node
      - n8n Data Tables as a lightweight database for cases and quotes
      - JavaScript in Code nodes
      - Webhooks to stop a follow-up
    note: Client project, anonymised. There is no public link.
---
