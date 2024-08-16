
# GZ Project

## Description

Small project to manage tickets. Users can submit tickets and admins can manage them.

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



## Installation

Add the variables found in .env.example to a .env file in the root directory.

```bash
npm run dev
```
