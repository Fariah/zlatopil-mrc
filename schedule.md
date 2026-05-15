---
layout: layouts/base.njk
title: "Освітній процес та Розклад"
---

<!-- Хлібні крихти -->
        

        

        <section class="text-content">

            <!-- Структура навчального року -->
            <h3 style="color: var(--primary-color); font-size: 1.5rem; margin-bottom: 1.5rem; text-align: center; text-transform: uppercase;">Структура 2025/2026 навчального року</h3>

            <p style="text-align: center; font-size: 1.1rem; margin-bottom: 2rem;">Навчальний рік розпочинається <strong>1 вересня 2025 року</strong> і закінчується не пізніше <strong>1 липня 2026 року</strong>.</p>

            <div class="info-grid" style="margin-bottom: 2rem;">
                <!-- Семестри -->
                <div style="background-color: var(--bg-color); border: 1px solid var(--border-color); border-radius: var(--radius); padding: 1.5rem; box-shadow: 0 2px 4px rgba(0,0,0,0.05); border-top: 4px solid #3b82f6;">
                    <h4 style="color: #1d4ed8; margin-bottom: 1rem; font-size: 1.2rem; display: flex; align-items: center; gap: 0.5rem;"><span>📚</span> Навчальні семестри</h4>
                    <ul style="list-style-type: none; padding: 0; font-size: 1.05rem;">
                        <li style="margin-bottom: 0.75rem; border-bottom: 1px dashed var(--border-color); padding-bottom: 0.5rem;">
                            <span style="color: var(--text-light);">І семестр:</span><br>
                            <strong>1 вересня — 26 грудня 2025 року</strong>
                        </li>
                        <li style="padding-top: 0.25rem;">
                            <span style="color: var(--text-light);">ІІ семестр:</span><br>
                            <strong>13 січня — 30 травня 2026 року</strong>
                        </li>
                    </ul>
                </div>

                <!-- Канікули -->
                <div style="background-color: var(--bg-color); border: 1px solid var(--border-color); border-radius: var(--radius); padding: 1.5rem; box-shadow: 0 2px 4px rgba(0,0,0,0.05); border-top: 4px solid #f59e0b;">
                    <h4 style="color: #b45309; margin-bottom: 1rem; font-size: 1.2rem; display: flex; align-items: center; gap: 0.5rem;"><span>🍂</span> Канікули</h4>
                    <ul style="list-style-type: none; padding: 0; font-size: 1.05rem;">
                        <li style="margin-bottom: 0.5rem;"><strong>Осінні:</strong> 27 жовтня — 02 листопада 2025</li>
                        <li style="margin-bottom: 0.5rem;"><strong>Зимові:</strong> 29 грудня 2025 — 11 січня 2026</li>
                        <li><strong>Весняні:</strong> 23 березня — 27 березня 2026</li>
                    </ul>
                </div>
            </div>

            <!-- Режим роботи -->
            <div style="background-color: #f0fdf4; border: 1px solid #86efac; border-radius: var(--radius); padding: 1.5rem; margin-bottom: 3rem;">
                <h4 style="color: #166534; margin-bottom: 1rem; font-size: 1.2rem;">⏱ Режим роботи та атестація</h4>
                <p style="margin-bottom: 0.5rem; font-size: 1.05rem; color: #14532d;">Освітній процес організований за 5-денним тижневим режимом занять <strong>дистанційно</strong>.</p>
                <ul style="padding-left: 1.5rem; margin-bottom: 1rem; color: #14532d; font-size: 1.05rem;">
                    <li>Навчання організовано у другій половині дня: <strong>з 15:00 до 19:30</strong>.</li>
                    <li>Тривалість уроків — <strong>45 хвилин</strong>, перерв — <strong>10 хвилин</strong>.</li>
                    <li>Максимальне тижневе навантаження — не більше 4 годин.</li>
                </ul>
                <p style="margin: 0; color: #166534; font-weight: 500;">
                    Навчальний рік закінчується проведенням ДКА випускників 11 класу (з 20 по 25 травня 2026 р.) та підсумковим оцінюванням 10 класів.
                </p>
            </div>

            <!-- Розклад -->
            <div style="text-align: center; margin-bottom: 2rem;">
                <h3 style="color: var(--primary-color); font-size: 1.8rem; margin-bottom: 0.5rem; text-transform: uppercase;">Розклад навчальних занять</h3>
                <p style="color: var(--text-light); font-size: 1.1rem; margin: 0;">з професії «Водій автотранспортних засобів» на IІ семестр 2025 р.</p>
            </div>

            <style>
                .schedule-table { width: 100%; border-collapse: collapse; min-width: 600px; font-size: 0.95rem; margin-bottom: 2rem; background-color: var(--bg-color); border-radius: var(--radius); overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
                .schedule-table th { background-color: var(--secondary-color); padding: 0.75rem 1rem; border: 1px solid var(--border-color); color: var(--text-color); font-weight: 600; text-align: left; }
                .schedule-table td { padding: 0.75rem 1rem; border: 1px solid var(--border-color); vertical-align: middle; }
                .time-col { font-weight: bold; color: var(--primary-color); width: 80px; text-align: center; }
                .group-col { font-weight: 600; background-color: #f9fafb; width: 100px; text-align: center; }
                .day-header { background-color: var(--primary-color) !important; color: white !important; font-size: 1.2rem; text-transform: uppercase; text-align: center !important; }
            </style>

            <!-- Понеділок -->
            <div style="overflow-x: auto;">
                <table class="schedule-table">
                    <thead>
                    <tr><th colspan="4" class="day-header">Понеділок</th></tr>
                    <tr><th>Час</th><th>Група</th><th>Предмет</th><th>Викладач</th></tr>
                    </thead>
                    <tbody>
                    <tr><td class="time-col">15:00</td><td class="group-col">56-В-25</td><td>Основи безпеки дорожнього руху</td><td>Бігун Є.О.</td></tr>
                    <tr><td class="time-col">15:00</td><td class="group-col">51В-24</td><td>Правила дорожнього руху</td><td>Кальченко Ю.О.</td></tr>
                    <tr><td class="time-col">15:55</td><td class="group-col">56-В-25</td><td>Правила дорожнього руху</td><td>Кальченко Ю.О.</td></tr>
                    <tr><td class="time-col">15:55</td><td class="group-col">51В-24</td><td>Основи безпеки дорожнього руху (мед.)</td><td>Бігун Є.О.</td></tr>
                    <tr><td class="time-col">16:50</td><td class="group-col">56-В-25</td><td>Правила дорожнього руху</td><td>Кальченко Ю.О.</td></tr>
                    <tr><td class="time-col">17:45</td><td class="group-col">56-В-25</td><td>Будова й експлуатація автомобіля</td><td>Кальченко Ю.О.</td></tr>
                    </tbody>
                </table>
            </div>

            <!-- Вівторок -->
            <div style="overflow-x: auto;">
                <table class="schedule-table">
                    <thead>
                    <tr><th colspan="4" class="day-header" style="background-color: #4f46e5 !important;">Вівторок</th></tr>
                    <tr><th>Час</th><th>Група</th><th>Предмет</th><th>Викладач</th></tr>
                    </thead>
                    <tbody>
                    <tr><td class="time-col">15:00</td><td class="group-col">57В-25</td><td>Основи безпеки дорожнього руху</td><td>Бігун Є.О.</td></tr>
                    <tr><td class="time-col">15:00</td><td class="group-col">52В-24</td><td>Правила дорожнього руху</td><td>Кальченко Ю.О.</td></tr>
                    <tr><td class="time-col">15:55</td><td class="group-col">57В-25</td><td>Правила дорожнього руху</td><td>Кальченко Ю.О.</td></tr>
                    <tr><td class="time-col">15:55</td><td class="group-col">52В-24</td><td>Основи безпеки дорожнього руху (мед.)</td><td>Бігун Є.О.</td></tr>
                    <tr><td class="time-col">16:50</td><td class="group-col">57В-25</td><td>Правила дорожнього руху</td><td>Кальченко Ю.О.</td></tr>
                    <tr><td class="time-col">17:45</td><td class="group-col">57В-25</td><td>Будова й експлуатація автомобіля</td><td>Кальченко Ю.О.</td></tr>
                    </tbody>
                </table>
            </div>

            <!-- Середа -->
            <div style="overflow-x: auto;">
                <table class="schedule-table">
                    <thead>
                    <tr><th colspan="4" class="day-header" style="background-color: #0d9488 !important;">Середа</th></tr>
                    <tr><th>Час</th><th>Група</th><th>Предмет</th><th>Викладач</th></tr>
                    </thead>
                    <tbody>
                    <tr><td class="time-col">15:00</td><td class="group-col">ВС-24</td><td>Водійська справа</td><td>Кальченко Ю.О.</td></tr>
                    <tr><td class="time-col">15:55</td><td class="group-col">54С1-25</td><td>Правила дорожнього руху</td><td>Кальченко Ю.О.</td></tr>
                    <tr><td class="time-col">16:50</td><td class="group-col">54С1-25</td><td>Правила дорожнього руху</td><td>Кальченко Ю.О.</td></tr>
                    <tr><td class="time-col">17:45</td><td class="group-col">54С1-25</td><td>Основи безпеки дорожнього руху</td><td>Кальченко Ю.О.</td></tr>
                    <tr><td class="time-col">18:40</td><td class="group-col">54С1-25</td><td>Будова автомобіля</td><td>Кальченко Ю.О.</td></tr>
                    </tbody>
                </table>
            </div>

            <!-- Четвер -->
            <div style="overflow-x: auto;">
                <table class="schedule-table">
                    <thead>
                    <tr><th colspan="4" class="day-header" style="background-color: #ca8a04 !important;">Четвер</th></tr>
                    <tr><th>Час</th><th>Група</th><th>Предмет</th><th>Викладач</th></tr>
                    </thead>
                    <tbody>
                    <tr><td class="time-col">15:00</td><td class="group-col">53С1-24</td><td>Правила дорожнього руху</td><td>Кальченко Ю.О.</td></tr>
                    <tr><td class="time-col">15:55</td><td class="group-col">53С1-24</td><td>Правила дорожнього руху</td><td>Кальченко Ю.О.</td></tr>
                    <tr><td class="time-col">16:50</td><td class="group-col">53С1-24</td><td>Основи безпеки дорожнього руху (мед.)</td><td>Кальченко Ю.О.</td></tr>
                    <tr><td class="time-col">17:45</td><td class="group-col">53С1-24</td><td>Будова автомобіля</td><td>Кальченко Ю.О.</td></tr>
                    </tbody>
                </table>
            </div>

            <!-- П'ятниця -->
            <div style="overflow-x: auto; margin-bottom: 0;">
                <table class="schedule-table" style="margin-bottom: 0;">
                    <thead>
                    <tr><th colspan="4" class="day-header" style="background-color: #db2777 !important;">П'ятниця</th></tr>
                    <tr><th>Час</th><th>Група</th><th>Предмет</th><th>Викладач</th></tr>
                    </thead>
                    <tbody>
                    <tr><td class="time-col">15:00</td><td class="group-col">ВС-25</td><td>Водійська справа</td><td>Кальченко Ю.О.</td></tr>
                    <tr><td class="time-col">15:55</td><td class="group-col">55С1-25</td><td>Правила дорожнього руху</td><td>Кальченко Ю.О.</td></tr>
                    <tr><td class="time-col">16:50</td><td class="group-col">55С1-25</td><td>Правила дорожнього руху</td><td>Кальченко Ю.О.</td></tr>
                    <tr><td class="time-col">17:45</td><td class="group-col">55С1-25</td><td>Основи безпеки дорожнього руху</td><td>Кальченко Ю.О.</td></tr>
                    <tr><td class="time-col">18:40</td><td class="group-col">55С1-25</td><td>Будова автомобіля</td><td>Кальченко Ю.О.</td></tr>
                    </tbody>
                </table>
            </div>

        </section>