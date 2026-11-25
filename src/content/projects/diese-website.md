---
title:
  de: Diese Website
  en: This website
description:
  de: Meine persönliche Seite mit Lebenslauf, Projekten und Interessen, zweisprachig, statisch und mit ein paar versteckten Spielen.
  en: My personal site with CV, projects and interests, bilingual, static and with a few hidden games.
repo: https://github.com/tim-kibele/timkibele-com
tags: [Astro, TypeScript, CSS, GitHub Pages]
year: 2026
animation: pebbles
detail:
  de:
    summary: Die Seite, die du gerade liest. Sie zeigt meinen Lebenslauf, meine Projekte und meine Interessen auf Deutsch und Englisch. Sie ist vollständig statisch und braucht kein Frontend-Framework. Dazu kommen ein paar Spielereien, nämlich eine Schachpartie gegen Stockfish, ein Tippduell, ein Kachelspiel mit Für Elise und eine Seite, auf der die gefundenen Geheimnisse gesammelt werden.
    motivation: Ich wollte einen eigenen Ort für meinen Lebenslauf, meine Projekte und meine Interessen, der nach mir aussieht und nicht nach einer Vorlage. Dabei darf er verspielt sein, deshalb stecken kleine Spiele und Easter Eggs darin.
    learnings:
      - title: Messen statt schätzen
        text: Die Schach-Engine läuft als Worker im Browser. Wie stark sie spielt, habe ich in Testpartien gegen eine Referenz gemessen und die Stufe danach benannt, statt eine Zahl zu raten.
      - title: Lizenzen vorher klären
        text: Das Kachelspiel spielt Für Elise von Beethoven. Das Stück ist gemeinfrei, und die Töne erzeugt der Browser selbst. So braucht die Seite weder Aufnahmen noch Lizenzen für Songs.
      - title: Ohne Cookies auskommen
        text: Der Fortschritt bei den Geheimnissen liegt im lokalen Speicher des Browsers, die Besucherzahlen kommen von Cloudflare Web Analytics ohne Cookies. Die Datenschutzerklärung nennt beides.
      - title: Eine Adresse, ein Zertifikat
        text: Die Adresse ohne www lieferte zuerst einen Handshake-Fehler, weil Cloudflare davorlag. Seit die DNS-Einträge nur noch DNS sind und auf GitHub zeigen, leitet GitHub Pages sauber auf www weiter.
      - title: Ruhe, wenn man sie braucht
        text: Jede Animation hat einen ruhigen Zustand für „Bewegung reduzieren“ und für Besucher ohne JavaScript. Der Inhalt bleibt dann vollständig lesbar.
    stack:
      - Astro 7, vollständig statisch, mit Content Collections für Projekte und Interessen
      - TypeScript für die Skripte der Spiele und Animationen
      - Handgeschriebenes CSS mit Design-Tokens, Hell- und Dunkelmodus
      - chess.js und Stockfish.js als Worker für die Schachpartie
      - Web Audio API für die Töne im Kachelspiel
      - GitHub Pages mit GitHub Actions, Domain und Web Analytics über Cloudflare
      - Entwickelt mit Claude Code, getestet lokal in einem Headless-Browser
    note: Der Quellcode ist öffentlich auf GitHub, der Link steht auf der Projektkarte.
  en:
    summary: The site you are reading right now. It shows my CV, my projects and my interests in German and English. It is fully static and needs no frontend framework. On top of that there are a few playful extras, a chess game against Stockfish, a typing race, a tile game with Für Elise and a page that collects the secrets you have found.
    motivation: I wanted a place of my own for my CV, my projects and my interests that looks like me and not like a template. It is allowed to be playful, which is why it hides small games and Easter eggs.
    learnings:
      - title: Measure, don't guess
        text: The chess engine runs as a worker in the browser. I measured how strong it plays in test games against a reference and named the level after that, instead of guessing a number.
      - title: Clear the licences first
        text: The tile game plays Für Elise by Beethoven. The piece is in the public domain and the browser generates the tones itself. So the site needs neither recordings nor licences for songs.
      - title: Get by without cookies
        text: Progress on the secrets lives in the browser's local storage, and visitor counts come from Cloudflare Web Analytics without cookies. The privacy policy names both.
      - title: One address, one certificate
        text: The address without www first gave a handshake error because Cloudflare sat in front of it. Since the DNS records are DNS only and point to GitHub, GitHub Pages redirects to www cleanly.
      - title: Calm when you need it
        text: Every animation has a still state for "reduce motion" and for visitors without JavaScript. The content stays fully readable.
    stack:
      - Astro 7, fully static, with content collections for projects and interests
      - TypeScript for the scripts of the games and animations
      - Hand-written CSS with design tokens, light and dark mode
      - chess.js and Stockfish.js as a worker for the chess game
      - Web Audio API for the tones in the tile game
      - GitHub Pages with GitHub Actions, domain and web analytics through Cloudflare
      - Built with Claude Code, tested locally in a headless browser
    note: The source code is public on GitHub, the link is on the project card.
---
