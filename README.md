# Project M4: Interaction Master ⚡

Tugas praktikum Minggu 4 - State & Events.

## 📸 Preview

![App Greeting](./assets/screenshot%20pertemuan4.jpeg)


## 🛠️ Logic Implemented

- **useState Hook:** Managing `count` (for the counter system), `name` (for the greeting form), and `bgColor` (for the dynamic background color).
- **Event Handlers:** `onPress` for incrementing/decrementing the counter and changing the background color; `onChangeText` for real-time binding of the greeting form input.
- **Reset Logic:** Clearing all states (`count`, `name`, `bgColor`) with one tap.
- **Validation Logic:** Counter prevents negative values (Side Quest).
- **Dynamic Background Color:** Implemented a toggle to switch background colors (Side Quest).

## 🔗 Demo

[https://snack.expo.dev/@jerryhutabarat/pertemuan4]

## 🚀 Cara Menjalankan (How to Run)

1.  **Install Expo CLI:**
    ```bash
    npm install -g expo-cli
    ```
2.  **Clone this repository:**
    ```bash
    git clone [YOUR_GITHUB_REPO_LINK]
    cd [YOUR_REPO_NAME]
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Start the Expo development server:**
    ```bash
    expo start
    ```
5.  **Open on your device:** Scan the QR code with the Expo Go app on your phone or run it on an emulator/simulator.
