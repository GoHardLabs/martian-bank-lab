# Martian Bank Lab

![Docker](https://img.shields.io/badge/Docker-Containerized-blue)
![Nginx](https://img.shields.io/badge/Nginx-Reverse%20Proxy-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen)
![React](https://img.shields.io/badge/Frontend-React%20%2F%20Vite-61dafb)
![Flask](https://img.shields.io/badge/Backend-Flask-black)
![Status](https://img.shields.io/badge/Status-Development-orange)

Инфраструктурный banking lab-проект с микросервисной архитектурой и production-like deployment.

---

## Основано на

Оригинальный проект Cisco:

https://github.com/cisco-open/martian-bank-demo

Проект используется как практический стенд для изучения:

- Docker Infrastructure
- Reverse Proxy
- DevOps
- Monitoring
- CI/CD
- Load Testing
- Microservices Architecture

---

## Архитектура

- React / Vite frontend
- Flask & Node.js backend services
- MongoDB database
- Nginx reverse proxy
- gRPC communication
- Docker Compose infrastructure

---

## Сервисы

| Сервис | Назначение |
|---|---|
| customer-auth | Аутентификация |
| accounts | Управление аккаунтами |
| transactions | Транзакции |
| loan | Loan service |
| dashboard | Dashboard API |
| atm-locator | ATM service |
| nginx | Reverse proxy |
| mongo | База данных |

---

## Инфраструктура

Проект развёрнут на Linux VPS с использованием Docker Compose.

Nginx маршрутизирует frontend/backend трафик между сервисами.

MongoDB используется как основная база данных.

---

## Monitoring / DevOps

Планируемые улучшения:

- GitHub Actions CI/CD
- Automated deployment
- Prometheus monitoring
- Grafana dashboards
- Uptime Kuma
- HTTPS / SSL
- Centralized logging

---

## Нагрузочное тестирование

В проект интегрирован Locust для проведения нагрузочных тестов.

---

## Запуск

```bash
docker compose up -d --build
