# Martian Bank Lab

![Linux](https://img.shields.io/badge/-Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)
![Docker](https://img.shields.io/badge/-Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Nginx](https://img.shields.io/badge/-Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white)
![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/-GitHub%20Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)

Инфраструктурный banking lab-проект с микросервисной архитектурой и production-like deployment.

---

## 📌 Основано на

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

## 🛠️ Tech Stack

### ⚙️ DevOps & Infrastructure

![Linux](https://img.shields.io/badge/-Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)
![Docker](https://img.shields.io/badge/-Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Nginx](https://img.shields.io/badge/-Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white)
![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Git](https://img.shields.io/badge/-Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![Bash](https://img.shields.io/badge/-Bash-4EAA25?style=for-the-badge&logo=gnu-bash&logoColor=white)

---

### 💻 Backend

![Python](https://img.shields.io/badge/-Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Flask](https://img.shields.io/badge/-Flask-000000?style=for-the-badge&logo=flask&logoColor=white)
![Node.js](https://img.shields.io/badge/-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![gRPC](https://img.shields.io/badge/-gRPC-244c5a?style=for-the-badge&logo=googlecloud&logoColor=white)

---

### 🎨 Frontend

![React](https://img.shields.io/badge/-React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

---

### 📊 Monitoring & Testing

![Locust](https://img.shields.io/badge/-Locust-00C7B7?style=for-the-badge&logo=speedtest&logoColor=white)
![Grafana](https://img.shields.io/badge/-Grafana-F46800?style=for-the-badge&logo=grafana&logoColor=white)
![Prometheus](https://img.shields.io/badge/-Prometheus-E6522C?style=for-the-badge&logo=prometheus&logoColor=white)

---

## 🧩 Архитектура

- React / Vite frontend
- Flask & Node.js backend services
- MongoDB database
- Nginx reverse proxy
- gRPC communication
- Docker Compose infrastructure

---

## 📦 Сервисы

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

## 🚀 Запуск

```bash
docker compose up -d --build
