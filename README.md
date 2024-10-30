# Task Man

This is task management application
This Android application was created with Duoring as a motif

## 1. Overview

This application aims to help you set and accomplish small IT-related tasks every day, so that you can steadily acquire knowledge and skills and grow as an engineer without overworking yourself!

## 2. Back ground

When I was a first-year student at a vocational school, I enjoyed studying every day and feeling that I was growing, but recently I have been spending less and less time studying, and I feel that I am not growing enough, so I wanted to create my own system to improve this situation.

## 3. Requirement

- You can set tasks that you want to accomplish.
- Fields to be entered when setting tasks.

  - Task name
  - Task detail
  - Task start time
  - Task execution location

- Pressing the Done button marks the task as completed (it can also be reset to Unfinished).
- **Number of days with at least one task completed consecutively displayed on the phone's home screen**
- Sends notifications (sentences designed by AI to encourage task completion) at 9:00, 13:00, 18:00, and 21:00 when a set task is not completed.
- When a task is not set as of 7:00 AM, a notification is sent every 2 hours reporting its principal.
  Clock uses the default time zone of the Android device.

### Permission

[OAuth2.0](https://auth0.com/jp/intro-to-iam/what-is-oauth-2)
[JWT](https://developer.mamezou-tech.com/blogs/2022/12/08/jwt-auth/#jws%E3%81%AE%E6%A4%9C%E8%A8%BC)

**key store の発行**
keytool -genkey -v -keystore debug.keystore -alias androiddebugkey -storepass android -keypass android -keyalg RSA -validity 10000

## 4. execution environment

Android OS only now
