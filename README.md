
# GZ Project

## Description

Small project to manage tickets. Users can submit tickets and admins can manage them. Made in a few hours.

## Technologies

- **Framework**: Next.js
- **Programming Language**: TypeScript
- **Styling**: Tailwind CSS, Shadcn/ui
- **Backend Communication**: tRPC
- **Database**: PostgreSQL/Supabase
- **Authentication**: ClerkJs

## Features

- /dashboard - Where admins can view all tickets and manage them.
- /tickets - users can see the tickets they have submitted.
- /ticket/:id - users can view a specific ticket and its details. Admins can also manage the ticket.

(Demo live)[https://gz-eight.vercel.app/sign-in]

For the admin view use:
Email: admin@test.com
Password: 123123

![image](https://github.com/user-attachments/assets/594bf87b-3f22-416a-ad73-b4d707e502d6)

![image](https://github.com/user-attachments/assets/ab9a31b5-9406-4e18-9810-bcef59194310)


## Installation

Add the variables found in .env.example to a .env file in the root directory.

```bash
npm run dev
```
